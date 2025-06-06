'use client'

import { cn } from '../lib/utils'

import { Toolbar } from './toolbar'

export function FixedToolbar(props: React.ComponentProps<typeof Toolbar>) {
    return (
        <Toolbar
            {...props}
            className={cn(
                'scrollbar-hide border-b-border bg-background/95 sticky top-0 left-0 z-50 mx-auto mb-4 w-full justify-between overflow-x-auto rounded-t-lg p-1 shadow-lg transition-colors duration-500 ease-out dark:shadow-black/60',
                props.className
            )}
        />
    )
}
