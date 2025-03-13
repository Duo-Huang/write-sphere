import React from 'react'

// 使用 glob 导入所有 SVG

const svgModules = import.meta.glob<React.FC<React.SVGProps<SVGSVGElement>>>('@/assets/svg/*.svg', {
    query: '?react',
    import: 'default',
    eager: true,
})

const icons = Object.entries(svgModules).reduce(
    (acc, [path, component]) => {
        // 从路径中提取文件名作为 key
        const key = path.match(/\/([^/]+)\.svg$/)?.[1] ?? ''
        return { ...acc, [key]: component }
    },
    {} as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>
)

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
    name: IconName
    size?: number | string
    color?: string
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ name, size = 16, color, className = '', style = {}, ...props }, ref) => {
        const SvgComponent = icons[name]

        if (!SvgComponent) {
            console.warn(`Icon ${name} not found`)
            return null
        }

        const sizeStyle = typeof size === 'number' ? `${size}px` : size
        const mergedStyle: React.CSSProperties = {
            width: sizeStyle,
            height: sizeStyle,
            fill: color,
            display: 'inline-block',
            ...style,
        }

        return (
            <SvgComponent
                ref={ref}
                className={`icon fill-current ${className}`.trim()}
                style={mergedStyle}
                {...props}
            />
        )
    }
)

Icon.displayName = 'Icon'

export default Icon
