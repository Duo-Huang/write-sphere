import { Plugin } from 'vite'
import fs from 'node:fs/promises'  // 使用 promises API
import path from 'node:path'
import glob from 'fast-glob'

export default function iconTypesPlugin(): Plugin {
    const SVG_DIR = 'src/assets/svg'
    const TYPE_FILE = 'src/types/icon.d.ts'

    // 将生成类型的逻辑抽取为独立函数
    async function generateTypes() {
        // 获取所有 SVG 文件
        const svgFiles = await glob('*.svg', {
            cwd: SVG_DIR,
            absolute: false
        })

        // 提取文件名（不带扩展名）
        const iconNames = svgFiles.map(file =>
            path.basename(file, '.svg')
        )

        // 生成类型声明文件内容
        const content =
            `// 此文件由 vite-plugin-icon-types 自动生成
declare type IconName = ${iconNames.map(name => `'${name}'`).join(' | ')}
`

        // 确保目录存在并写入文件
        await fs.mkdir(path.dirname(TYPE_FILE), { recursive: true })
        await fs.writeFile(TYPE_FILE, content, 'utf-8')
    }

    return {
        name: 'vite-plugin-icon-types',

        async buildStart() {
            await generateTypes()
        },

        configureServer(server) {
            server.watcher.add(SVG_DIR)
            server.watcher.on('add', async (file) => {
                if (file.includes(SVG_DIR) && file.endsWith('.svg')) {
                    await generateTypes()
                }
            })
            server.watcher.on('unlink', async (file) => {
                if (file.includes(SVG_DIR) && file.endsWith('.svg')) {
                    await generateTypes()
                }
            })
        }
    }
}