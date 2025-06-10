'use client'

import * as React from 'react'

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'

import { BlockquotePlugin } from '@udecode/plate-block-quote/react'
import { CodeBlockPlugin } from '@udecode/plate-code-block/react'
import { DatePlugin } from '@udecode/plate-date/react'
import { ExcalidrawPlugin } from '@udecode/plate-excalidraw/react'
import { HEADING_KEYS } from '@udecode/plate-heading'
import { TocPlugin } from '@udecode/plate-heading/react'
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react'
import { INDENT_LIST_KEYS, ListStyleType } from '@udecode/plate-indent-list'
import { LinkPlugin } from '@udecode/plate-link/react'
import { EquationPlugin, InlineEquationPlugin } from '@udecode/plate-math/react'
import { ImagePlugin, MediaEmbedPlugin } from '@udecode/plate-media/react'
import { TablePlugin } from '@udecode/plate-table/react'
import { TogglePlugin } from '@udecode/plate-toggle/react'
import { type PlateEditor, ParagraphPlugin, useEditorRef } from '@udecode/plate/react'
import {
    CalendarIcon,
    ChevronRightIcon,
    Columns3Icon,
    FileCodeIcon,
    FilmIcon,
    Heading1Icon,
    Heading2Icon,
    Heading3Icon,
    ImageIcon,
    Link2Icon,
    ListIcon,
    ListOrderedIcon,
    MinusIcon,
    PenToolIcon,
    PilcrowIcon,
    PlusIcon,
    QuoteIcon,
    RadicalIcon,
    SquareIcon,
    TableIcon,
    TableOfContentsIcon,
} from 'lucide-react'

import { useTranslation } from 'react-i18next'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'
import { insertBlock, insertInlineElement } from '../transforms'

import { ToolbarButton, ToolbarMenuGroup } from './toolbar'

type Group = {
    group: string
    items: Item[]
}

interface Item {
    icon: React.ReactNode
    value: string
    onSelect: (editor: PlateEditor, value: string) => void
    focusEditor?: boolean
    label?: string
}

const groups: Group[] = [
    {
        group: 'home.editor.insert.basicBlocks',
        items: [
            {
                icon: <PilcrowIcon />,
                label: 'home.editor.insert.p',
                value: ParagraphPlugin.key,
            },
            {
                icon: <Heading1Icon />,
                label: 'home.editor.insert.h1',
                value: HEADING_KEYS.h1,
            },
            {
                icon: <Heading2Icon />,
                label: 'home.editor.insert.h2',
                value: HEADING_KEYS.h2,
            },
            {
                icon: <Heading3Icon />,
                label: 'home.editor.insert.h3',
                value: HEADING_KEYS.h3,
            },
            // {
            //     icon: <Heading4Icon />,
            //     label: 'home.editor.insert.h4',
            //     value: HEADING_KEYS.h4,
            // },
            // {
            //     icon: <Heading5Icon />,
            //     label: 'home.editor.insert.h5',
            //     value: HEADING_KEYS.h5,
            // },
            // {
            //     icon: <Heading6Icon />,
            //     label: 'home.editor.insert.h6',
            //     value: HEADING_KEYS.h6,
            // },
            {
                icon: <TableIcon />,
                label: 'home.editor.insert.table',
                value: TablePlugin.key,
            },
            {
                icon: <FileCodeIcon />,
                label: 'home.editor.insert.code',
                value: CodeBlockPlugin.key,
            },
            {
                icon: <QuoteIcon />,
                label: 'home.editor.insert.quote',
                value: BlockquotePlugin.key,
            },
            {
                icon: <MinusIcon />,
                label: 'home.editor.insert.divider',
                value: HorizontalRulePlugin.key,
            },
        ].map((item) => ({
            ...item,
            onSelect: (editor, value) => {
                insertBlock(editor, value)
            },
        })),
    },
    {
        group: 'home.editor.insert.list',
        items: [
            {
                icon: <ListIcon />,
                label: 'home.editor.insert.ulist',
                value: ListStyleType.Disc,
            },
            {
                icon: <ListOrderedIcon />,
                label: 'home.editor.insert.olist',
                value: ListStyleType.Decimal,
            },
            {
                icon: <SquareIcon />,
                label: 'home.editor.insert.tlist',
                value: INDENT_LIST_KEYS.todo,
            },
            {
                icon: <ChevronRightIcon />,
                label: 'home.editor.insert.clist',
                value: TogglePlugin.key,
            },
        ].map((item) => ({
            ...item,
            onSelect: (editor, value) => {
                insertBlock(editor, value)
            },
        })),
    },
    {
        group: 'home.editor.insert.media',
        items: [
            {
                icon: <ImageIcon />,
                label: 'home.editor.insert.image',
                value: ImagePlugin.key,
            },
            {
                icon: <FilmIcon />,
                label: 'home.editor.insert.embed',
                value: MediaEmbedPlugin.key,
            },
            {
                icon: <PenToolIcon />,
                label: 'Excalidraw',
                value: ExcalidrawPlugin.key,
            },
        ].map((item) => ({
            ...item,
            onSelect: (editor, value) => {
                insertBlock(editor, value)
            },
        })),
    },
    {
        group: 'home.editor.insert.advancedBlock',
        items: [
            {
                icon: <TableOfContentsIcon />,
                label: 'home.editor.insert.toc',
                value: TocPlugin.key,
            },
            {
                icon: <Columns3Icon />,
                label: 'home.editor.insert.col3',
                value: 'action_three_columns',
            },
            {
                focusEditor: false,
                icon: <RadicalIcon />,
                label: 'home.editor.insert.equation',
                value: EquationPlugin.key,
            },
        ].map((item) => ({
            ...item,
            onSelect: (editor, value) => {
                insertBlock(editor, value)
            },
        })),
    },
    {
        group: 'home.editor.insert.inline',
        items: [
            {
                icon: <Link2Icon />,
                label: 'home.editor.insert.link',
                value: LinkPlugin.key,
            },
            {
                focusEditor: true,
                icon: <CalendarIcon />,
                label: 'home.editor.insert.date',
                value: DatePlugin.key,
            },
            {
                focusEditor: false,
                icon: <RadicalIcon />,
                label: 'home.editor.insert.inlineEquation',
                value: InlineEquationPlugin.key,
            },
        ].map((item) => ({
            ...item,
            onSelect: (editor, value) => {
                insertInlineElement(editor, value)
            },
        })),
    },
]

export function InsertDropdownMenu(props: DropdownMenuProps) {
    const { t } = useTranslation()
    const editor = useEditorRef()
    const [open, setOpen] = React.useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen} modal={false} {...props}>
            <DropdownMenuTrigger asChild>
                <ToolbarButton pressed={open} tooltip={t('home.editor.insert.label')} isDropdown>
                    <PlusIcon />
                </ToolbarButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="flex max-h-[500px] min-w-0 flex-col overflow-y-auto" align="start">
                {groups.map(({ group, items: nestedItems }) => (
                    <ToolbarMenuGroup key={group} label={t(group)}>
                        {nestedItems.map(({ icon, label, value, onSelect }) => (
                            <DropdownMenuItem
                                key={value}
                                className="min-w-[180px]"
                                onSelect={() => {
                                    onSelect(editor, value)
                                    editor.tf.focus()
                                }}
                            >
                                {icon}
                                {t(label!)}
                            </DropdownMenuItem>
                        ))}
                    </ToolbarMenuGroup>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
