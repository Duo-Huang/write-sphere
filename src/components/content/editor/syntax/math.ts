import { Tag, styleTags, tags } from '@lezer/highlight'
import { MarkdownConfig, BlockContext, InlineContext, Line, DelimiterType } from '@lezer/markdown'
import { StreamLanguage } from '@codemirror/language'
import { parseMixed, SyntaxNodeRef, Input } from '@lezer/common'
import * as tex from '@codemirror/legacy-modes/mode/stex'


// 定义数学相关标签
const mathTags = {
    inlineMath: Tag.define(),
    blockMath: Tag.define(),
}

const blockMath = "BlockMath"
const inlineMath = "InlineMath"
const blockMathMark = "BlockMathMark"
const inlineMathMark = "InlineMathMark"

export const mathNodes = {
    inlineMath,
    inlineMathMark,
    blockMath,
    blockMathMark,
}

const inlineMathDelim: DelimiterType = { resolve: inlineMath, mark: inlineMathMark }

// 为数学公式定义语法高亮
const sTexLanguage = StreamLanguage.define(tex.stexMath)
const parser = sTexLanguage.parser

// 检查是否以$$开头（表示数学块开始）
const startsMathBlock = (line: Line): boolean => line.text.startsWith('$$')

// 寻找数学块结束位置
const findBlockMathEnd = (cx: BlockContext, line: Line): number => {
    // 检查是否在同一行结束
    const markLength = 2
    const sameLineIndex = line.text.indexOf('$$', markLength)

    if (sameLineIndex !== -1) {
        return cx.lineStart + line.pos + sameLineIndex + markLength
    }

    // 搜索后续行
    let hasNextLine = false
    let index = -1
    do {
        hasNextLine = cx.nextLine()
        if (hasNextLine) {
            index = line.text.indexOf('$$')
        }
    } while (hasNextLine && index === -1)

    if (!hasNextLine) {
        return -1
    }

    return cx.lineStart + line.pos + index + markLength
}

// 导出Markdown数学扩展配置
export const markdownMath: MarkdownConfig = {
    // 定义需要的节点类型
    defineNodes: [inlineMath, inlineMathMark, blockMath, blockMathMark],

    // 解析数学块
    parseBlock: [{
        name: blockMath,
        parse(cx: BlockContext, line: Line) {

            if (!startsMathBlock(line)) {
                return false
            }

            const from = cx.lineStart + line.pos

            const markLength = 2
            cx.addElement(cx.elt(blockMathMark, from, from + markLength))

            const to = findBlockMathEnd(cx, line)
            if (to === -1) {
                return false
            }
            cx.addElement(cx.elt(blockMath, from, to))
            cx.addElement(cx.elt(blockMathMark, to - markLength, to))
            cx.nextLine()

            return true
        },
        endLeaf(_, line: Line) {
            // 如果下一行开始新的数学块，结束前面的段落
            return startsMathBlock(line)
        },
    }],

    // 解析行内数学公式
    parseInline: [{
        name: inlineMath,
        parse(cx: InlineContext, next: number, pos: number) {
            const dollar = '$'.charCodeAt(0)
            if (next !== dollar || cx.char(pos + 1) === dollar) {
                return -1
            }
            return cx.addDelimiter(inlineMathDelim, pos, pos + 1, true, true)
        }
    }],

    // 样式标记
    props: [
        styleTags({
            [blockMathMark]: tags.processingInstruction,
            [`${blockMath}/...`]: mathTags.blockMath,
            [inlineMathMark]: tags.processingInstruction,
            [`${inlineMath}/...`]: mathTags.inlineMath,
        })
    ],

    // 处理数学公式内部的TeX语法高亮
    wrap: parseMixed((node: SyntaxNodeRef, input: Input) => {
        if (node.type.name === inlineMath) {
            return {
                parser,
                overlay: [{ from: node.from + 1, to: node.to - 1 }]
            }
        }
        if (node.type.name === blockMath) {
            const mathStart = node.from + 2
            const mathEnd = node.to - 2
            if (mathStart >= mathEnd) {
                return null
            }

            return {
                parser,
                overlay: [{ from: mathStart, to: mathEnd }]
            }
        }

        return null
    })
}
