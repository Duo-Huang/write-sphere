import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const heightToTop = (ele: HTMLElement, editorContentEle?: HTMLDivElement) => {
    const root = editorContentEle ? editorContentEle : document.body

    if (!root || !ele) return 0

    const containerRect = root.getBoundingClientRect()
    const elementRect = ele.getBoundingClientRect()

    const scrollY = root.scrollTop
    const absoluteElementTop = elementRect.top + scrollY - containerRect.top

    return absoluteElementTop
}
