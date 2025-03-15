import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'throttle-debounce';
import { SCREEN } from '@/config'

export const useScreenBreakpoint = () => {
    const breakpoints = useMemo(() => {
        return (Object.entries(SCREEN.breakpoint) as [Screen.Breakpoint, Screen.PixelValue][])
            .map(([name, value]) => ({
                name,
                value: parseInt(value.replace('px', ''), 10)
            }))
            .sort((a, b) => a.value - b.value);
    }, []);

    const minBreakpoint = breakpoints[0]
    const maxBreakpoint = breakpoints[breakpoints.length - 1]


    const calculateBreakpoint = (width: number) => {
        if (width < minBreakpoint.value) {
            return minBreakpoint.name;
        }

        if (width >= maxBreakpoint.value) {
            return maxBreakpoint.name;
        }

        for (let i = breakpoints.length - 1; i >= 0; i--) {
            if (width >= breakpoints[i].value) {
                return breakpoints[i].name;
            }
        }

        return minBreakpoint.name;
    };


    const [currentBreakpoint, setCurrentBreakpoint] = useState(() => {
        if (typeof window === 'undefined') return null;
        return calculateBreakpoint(window.innerWidth);
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = throttle(100, () => {
            setCurrentBreakpoint(calculateBreakpoint(window.innerWidth));
        });

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoints]);

    return currentBreakpoint;
};