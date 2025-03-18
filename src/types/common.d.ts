// 扩展 ImportMetaGlob 类型以支持泛型
declare interface ImportMetaGlob {
    <T>(pattern: string, options: { import: 'default'; eager: true }): Record<string, T>
}

namespace Screen {
    // 定义所有可能的断点名称
    type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    // 定义像素值的格式
    type PixelValue = `${number}px`

    // 定义屏幕断点配置
    type ScreenBreakpoint = Record<Breakpoint, PixelValue>
}
