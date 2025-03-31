export enum SIZE {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl',
    '2XL' = '2xl',
}

export const BREAKPOINT: Record<SIZE, PixelValue> = {
    [SIZE.XS]: '480px',
    [SIZE.SM]: '640px',
    [SIZE.MD]: '768px',
    [SIZE.LG]: '1024px',
    [SIZE.XL]: '1280px',
    [SIZE['2XL']]: '1536px',
}
