import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'throttle-debounce';
import { SCREEN } from '@/config'

export const useBreakpoint = () => {
    // 使用 useMemo 缓存断点配置，避免不必要的重计算
    const breakpoints = useMemo(() => {
        return (Object.entries(SCREEN.breakpoint) as [Screen.Breakpoint, Screen.PixelValue][])
            .map(([name, value]) => ({
                name,
                value: parseInt(value.replace('px', ''), 10)
            }))
            .sort((a, b) => a.value - b.value);
    }, []);

    // 获取最小和最大断点
    const minBreakpoint = useMemo(() => breakpoints[0], [breakpoints]);
    const maxBreakpoint = useMemo(() => breakpoints[breakpoints.length - 1], [breakpoints]);

    // 优化后的计算断点逻辑
    const calculateBreakpoint = (width: number) => {
        // 如果小于最小断点，返回最小断点名称
        if (width < minBreakpoint.value) {
            return minBreakpoint.name;
        }

        // 如果大于最大断点，返回最大断点名称
        if (width >= maxBreakpoint.value) {
            return maxBreakpoint.name;
        }

        // 其他情况，查找匹配的断点
        for (let i = breakpoints.length - 1; i >= 0; i--) {
            if (width >= breakpoints[i].value) {
                return breakpoints[i].name;
            }
        }

        // 理论上永远不会到达这里，因为我们已经处理了所有情况
        return minBreakpoint.name;
    };

    // 带 SSR 支持的初始化状态
    const [currentBreakpoint, setCurrentBreakpoint] = useState(() => {
        if (typeof window === 'undefined') return minBreakpoint.name; // SSR 默认返回最小断点
        return calculateBreakpoint(window.innerWidth);
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = throttle(100, () => {
            setCurrentBreakpoint(calculateBreakpoint(window.innerWidth));
        });

        // 立即执行一次以确保初始状态正确
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoints]);

    return currentBreakpoint;
};