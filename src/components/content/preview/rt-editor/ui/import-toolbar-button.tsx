'use client'

import * as React from 'react'

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'

import { getEditorDOMFromHtmlString } from '@udecode/plate'
import { MarkdownPlugin } from '@udecode/plate-markdown'
import { useTranslation } from 'react-i18next'
import { useEditorRef } from '@udecode/plate/react'
import { ArrowUpToLineIcon } from 'lucide-react'
import { useFilePicker } from 'use-file-picker'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './dropdown-menu'

import { ToolbarButton } from './toolbar'

type ImportType = 'html' | 'markdown'

export function ImportToolbarButton(props: DropdownMenuProps) {
    const { t } = useTranslation()
    const editor = useEditorRef()
    const [open, setOpen] = React.useState(false)

    const getFileNodes = (text: string, type: ImportType) => {
        if (type === 'html') {
            const editorNode = getEditorDOMFromHtmlString(text)
            const nodes = editor.api.html.deserialize({
                element: editorNode,
            })

            return nodes
        }

        if (type === 'markdown') {
            return editor.getApi(MarkdownPlugin).markdown.deserialize(text)
        }

        return []
    }

    const { openFilePicker: openMdFilePicker } = useFilePicker({
        accept: ['.md', '.mdx'],
        multiple: false,
        // @ts-ignore
        onFilesSelected: async ({ plainFiles }) => {
            const text = await plainFiles[0].text()

            const nodes = getFileNodes(text, 'markdown')

            editor.tf.insertNodes(nodes)
        },
    })

    const { openFilePicker: openHtmlFilePicker } = useFilePicker({
        accept: ['text/html'],
        multiple: false,
        // @ts-ignore
        onFilesSelected: async ({ plainFiles }) => {
            const text = await plainFiles[0].text()

            const nodes = getFileNodes(text, 'html')

            editor.tf.insertNodes(nodes)
        },
    })

    return (
        <DropdownMenu open={open} onOpenChange={setOpen} modal={false} {...props}>
            <DropdownMenuTrigger asChild>
                <ToolbarButton pressed={open} tooltip={t('home.editor.import.label')} isDropdown>
                    <ArrowUpToLineIcon className="size-4" />
                </ToolbarButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        onSelect={() => {
                            openHtmlFilePicker()
                        }}
                    >
                        {t('home.editor.import.html')}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onSelect={() => {
                            openMdFilePicker()
                        }}
                    >
                        {t('home.editor.import.md')}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
