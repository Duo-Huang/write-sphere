import { type DelimiterType, type MarkdownConfig } from '@lezer/markdown'
import { styleTags, tags } from '@lezer/highlight'


const highlight = "Highlight";
const highlightMark = "HighlightMark";

const HighlightDelim: DelimiterType = { resolve: highlight, mark: highlightMark }

export const Highlight: MarkdownConfig = {
    defineNodes: [highlight, highlightMark],
    parseInline: [{
        name: highlight,
        parse(cx, next, pos) {
            if (next != 61 /* '=' */ || cx.char(pos + 1) != 61) return -1
            return cx.addDelimiter(HighlightDelim, pos, pos + 2, true, true)
        },
        after: "Emphasis"
    }],
    props: [
        styleTags({
            [highlightMark]: tags.processingInstruction,
            [highlight]: tags.special(tags.strong)
        })
    ]
}