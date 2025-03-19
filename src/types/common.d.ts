declare type PixelValue = `${number}px`

namespace Screen {

    type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'


    type BreakpointConfig = Record<Breakpoint, PixelValue>
}
