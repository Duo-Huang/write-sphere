import { SCREEN } from '@/constants'

const breakpoints = (Object.entries(SCREEN.BREAKPOINT) as [SCREEN.SIZE, PixelValue][])
    .map(([name, value]) => ({
        name,
        value: parseInt(value.replace('px', ''), 10),
    }))
    .sort((a, b) => a.value - b.value)

const minBreakpoint = breakpoints[0]
const maxBreakpoint = breakpoints[breakpoints.length - 1]

export const calculateBreakpoint = (width: number = window.innerWidth) => {
    if (width < minBreakpoint.value) {
        return minBreakpoint.name
    }

    if (width >= maxBreakpoint.value) {
        return maxBreakpoint.name
    }

    for (let i = breakpoints.length - 1; i >= 0; i--) {
        if (width >= breakpoints[i].value) {
            return breakpoints[i].name
        }
    }

    return minBreakpoint.name
}
