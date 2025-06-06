'use client'

import { MarkdownPlugin, remarkMdx, remarkMention } from '@udecode/plate-markdown'
import { SuggestionPlugin } from '@udecode/plate-suggestion/react'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkEmoji from 'remark-emoji'

export const markdownPlugin = MarkdownPlugin.configure({
    options: {
        disallowedNodes: [SuggestionPlugin.key],
        // @ts-ignore
        remarkPlugins: [remarkMath, remarkGfm, remarkMdx, remarkMention, remarkEmoji],
    },
})
