'use client'

import { type PlateElementProps } from '@udecode/plate/react'
import { NodeApi } from '@udecode/plate'
import { useTocElementState } from '@udecode/plate-heading/react'
import { type Heading } from '@udecode/plate-heading'
import { PlateElement } from '@udecode/plate/react'
import { cva } from 'class-variance-authority'

import { Button } from './button'

import { heightToTop } from '../lib/utils'

const headingItemVariants = cva(
    'block h-auto w-full cursor-pointer truncate rounded-none px-0.5 py-1.5 text-left font-medium text-muted-foreground underline decoration-[0.5px] underline-offset-4 hover:bg-accent hover:text-muted-foreground',
    {
        variants: {
            depth: {
                1: 'pl-0.5',
                2: 'pl-[26px]',
                3: 'pl-[50px]',
            },
        },
    }
)

export function TocElement(props: PlateElementProps) {
    const state = useTocElementState()

    const { headingList, editor } = state

    const handleClick = (
        e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>,
        item: Heading,
        behavior: ScrollBehavior = 'smooth'
    ) => {
        console.log('start click')

        e.preventDefault()
        const { id, path } = item
        const node = NodeApi.get(editor, path)

        console.log('node', node)

        if (!node) return

        const el = editor.api.toDOMNode(node)
        console.log('el', el)

        if (!el) return

        const containerEle = document.getElementById('rt-editor-container') as HTMLDivElement
        console.log('containerEle', containerEle)
        if (!containerEle) return

        const topOffset = 80
        console.log('heightToTop')

        containerEle.scrollTo({
            behavior,
            top: heightToTop(el, containerEle) - topOffset,
        })

        setTimeout(() => {
            editor.getApi({ key: 'blockSelection' }).blockSelection?.addSelectedRow?.(id)
        }, 0)
    }

    return (
        <PlateElement {...props} className="mb-1 p-0">
            <div contentEditable={false}>
                {headingList.length > 0 ? (
                    headingList.map((item) => (
                        <Button
                            key={item.id}
                            variant="ghost"
                            className={headingItemVariants({
                                depth: item.depth as 1 | 2 | 3,
                            })}
                            onClick={(e) => handleClick(e, item)}
                            aria-current
                        >
                            {item.title}
                        </Button>
                    ))
                ) : (
                    <div className="text-sm text-gray-500">Create a heading to display the table of contents.</div>
                )}
            </div>
            {props.children}
        </PlateElement>
    )
}
