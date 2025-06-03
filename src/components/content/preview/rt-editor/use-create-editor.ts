'use client'

import type { Value } from '@udecode/plate'

import { withProps } from '@udecode/cn'
import { AIChatPlugin, AIPlugin } from '@udecode/plate-ai/react'
import {
    BoldPlugin,
    CodePlugin,
    ItalicPlugin,
    StrikethroughPlugin,
    SubscriptPlugin,
    SuperscriptPlugin,
    UnderlinePlugin,
} from '@udecode/plate-basic-marks/react'
import { BlockquotePlugin } from '@udecode/plate-block-quote/react'
import { CalloutPlugin } from '@udecode/plate-callout/react'
import { CodeBlockPlugin, CodeLinePlugin, CodeSyntaxPlugin } from '@udecode/plate-code-block/react'
import { CommentsPlugin } from '@udecode/plate-comments/react'
import { DatePlugin } from '@udecode/plate-date/react'
import { EmojiInputPlugin } from '@udecode/plate-emoji/react'
import { HEADING_KEYS } from '@udecode/plate-heading'
import { TocPlugin } from '@udecode/plate-heading/react'
import { HighlightPlugin } from '@udecode/plate-highlight/react'
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react'
import { KbdPlugin } from '@udecode/plate-kbd/react'
import { ColumnItemPlugin, ColumnPlugin } from '@udecode/plate-layout/react'
import { LinkPlugin } from '@udecode/plate-link/react'
import { EquationPlugin, InlineEquationPlugin } from '@udecode/plate-math/react'
import {
    AudioPlugin,
    FilePlugin,
    ImagePlugin,
    MediaEmbedPlugin,
    PlaceholderPlugin,
    VideoPlugin,
} from '@udecode/plate-media/react'
import { MentionInputPlugin, MentionPlugin } from '@udecode/plate-mention/react'
import { SlashInputPlugin } from '@udecode/plate-slash-command/react'
import { SuggestionPlugin } from '@udecode/plate-suggestion/react'
import { TableCellHeaderPlugin, TableCellPlugin, TablePlugin, TableRowPlugin } from '@udecode/plate-table/react'
import { TogglePlugin } from '@udecode/plate-toggle/react'
import { type CreatePlateEditorOptions, ParagraphPlugin, PlateLeaf, usePlateEditor } from '@udecode/plate/react'

import { AIAnchorElement } from '@/components/content/preview/rt-editor/ui/ai-anchor-element'
import { AILeaf } from '@/components/content/preview/rt-editor/ui/ai-leaf'
import { BlockquoteElement } from '@/components/content/preview/rt-editor/ui/blockquote-element'
import { CalloutElement } from '@/components/content/preview/rt-editor/ui/callout-element'
import { CodeBlockElement } from '@/components/content/preview/rt-editor/ui/code-block-element'
import { CodeLeaf } from '@/components/content/preview/rt-editor/ui/code-leaf'
import { CodeLineElement } from '@/components/content/preview/rt-editor/ui/code-line-element'
import { CodeSyntaxLeaf } from '@/components/content/preview/rt-editor/ui/code-syntax-leaf'
import { ColumnElement } from '@/components/content/preview/rt-editor/ui/column-element'
import { ColumnGroupElement } from '@/components/content/preview/rt-editor/ui/column-group-element'
import { CommentLeaf } from '@/components/content/preview/rt-editor/ui/comment-leaf'
import { DateElement } from '@/components/content/preview/rt-editor/ui/date-element'
import { EmojiInputElement } from '@/components/content/preview/rt-editor/ui/emoji-input-element'
import { EquationElement } from '@/components/content/preview/rt-editor/ui/equation-element'
import { HeadingElement } from '@/components/content/preview/rt-editor/ui/heading-element'
import { HighlightLeaf } from '@/components/content/preview/rt-editor/ui/highlight-leaf'
import { HrElement } from '@/components/content/preview/rt-editor/ui/hr-element'
import { ImageElement } from '@/components/content/preview/rt-editor/ui/image-element'
import { InlineEquationElement } from '@/components/content/preview/rt-editor/ui/inline-equation-element'
import { KbdLeaf } from '@/components/content/preview/rt-editor/ui/kbd-leaf'
import { LinkElement } from '@/components/content/preview/rt-editor/ui/link-element'
import { MediaAudioElement } from '@/components/content/preview/rt-editor/ui/media-audio-element'
import { MediaEmbedElement } from '@/components/content/preview/rt-editor/ui/media-embed-element'
import { MediaFileElement } from '@/components/content/preview/rt-editor/ui/media-file-element'
import { MediaPlaceholderElement } from '@/components/content/preview/rt-editor/ui/media-placeholder-element'
import { MediaVideoElement } from '@/components/content/preview/rt-editor/ui/media-video-element'
import { MentionElement } from '@/components/content/preview/rt-editor/ui/mention-element'
import { MentionInputElement } from '@/components/content/preview/rt-editor/ui/mention-input-element'
import { ParagraphElement } from '@/components/content/preview/rt-editor/ui/paragraph-element'
import { withPlaceholders } from '@/components/content/preview/rt-editor/placeholder'
import { SlashInputElement } from '@/components/content/preview/rt-editor/ui/slash-input-element'
import { SuggestionLeaf } from '@/components/content/preview/rt-editor/ui/suggestion-leaf'
import { TableCellElement, TableCellHeaderElement } from '@/components/content/preview/rt-editor/ui/table-cell-element'
import { TableElement } from '@/components/content/preview/rt-editor/ui/table-element'
import { TableRowElement } from '@/components/content/preview/rt-editor/ui/table-row-element'
import { TocElement } from '@/components/content/preview/rt-editor/ui/toc-element'
import { ToggleElement } from '@/components/content/preview/rt-editor/ui/toggle-element'

import { editorPlugins, viewPlugins } from './plugins/editor-plugins'

export const viewComponents = {
    [AIChatPlugin.key]: AIAnchorElement,
    [AudioPlugin.key]: MediaAudioElement,
    [BlockquotePlugin.key]: BlockquoteElement,
    [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
    [CalloutPlugin.key]: CalloutElement,
    [CodeBlockPlugin.key]: CodeBlockElement,
    [CodeLinePlugin.key]: CodeLineElement,
    [CodePlugin.key]: CodeLeaf,
    [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
    [ColumnItemPlugin.key]: ColumnElement,
    [ColumnPlugin.key]: ColumnGroupElement,
    [CommentsPlugin.key]: CommentLeaf,
    [DatePlugin.key]: DateElement,
    [EquationPlugin.key]: EquationElement,
    [FilePlugin.key]: MediaFileElement,
    [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: 'h1' }),
    [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: 'h2' }),
    [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: 'h3' }),
    [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: 'h4' }),
    [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: 'h5' }),
    [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: 'h6' }),
    [HighlightPlugin.key]: HighlightLeaf,
    [HorizontalRulePlugin.key]: HrElement,
    [ImagePlugin.key]: ImageElement,
    [InlineEquationPlugin.key]: InlineEquationElement,
    [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
    [KbdPlugin.key]: KbdLeaf,
    [LinkPlugin.key]: LinkElement,
    [MediaEmbedPlugin.key]: MediaEmbedElement,
    [MentionPlugin.key]: MentionElement,
    [ParagraphPlugin.key]: ParagraphElement,
    [PlaceholderPlugin.key]: MediaPlaceholderElement,
    [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
    [SubscriptPlugin.key]: withProps(PlateLeaf, { as: 'sub' }),
    [SuggestionPlugin.key]: SuggestionLeaf,
    [SuperscriptPlugin.key]: withProps(PlateLeaf, { as: 'sup' }),
    [TableCellHeaderPlugin.key]: TableCellHeaderElement,
    [TableCellPlugin.key]: TableCellElement,
    [TablePlugin.key]: TableElement,
    [TableRowPlugin.key]: TableRowElement,
    [TocPlugin.key]: TocElement,
    [TogglePlugin.key]: ToggleElement,
    [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),
    [VideoPlugin.key]: MediaVideoElement,
}

export const editorComponents = {
    ...viewComponents,
    [AIPlugin.key]: AILeaf,
    [EmojiInputPlugin.key]: EmojiInputElement,
    [MentionInputPlugin.key]: MentionInputElement,
    [SlashInputPlugin.key]: SlashInputElement,
}

export const useCreateEditor = (
    {
        components,
        placeholders = true,
        readOnly,
        ...options
    }: {
        placeholders?: boolean
        plugins?: any[]
        readOnly?: boolean
    } & Omit<CreatePlateEditorOptions, 'plugins'> = {},
    deps: any[] = []
) => {
    return usePlateEditor<Value, (typeof editorPlugins)[number]>(
        {
            components: {
                ...(readOnly ? viewComponents : placeholders ? withPlaceholders(editorComponents) : editorComponents),
                ...components,
            },
            plugins: (readOnly ? viewPlugins : editorPlugins) as any,
            ...options,
        },
        deps
    )
}
