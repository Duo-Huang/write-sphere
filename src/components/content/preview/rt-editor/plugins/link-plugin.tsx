'use client'

import { LinkPlugin } from '@udecode/plate-link/react'

import { LinkFloatingToolbar } from '@/components/content/preview/rt-editor/ui/link-floating-toolbar'

export const linkPlugin = LinkPlugin.extend({
    render: { afterEditable: () => <LinkFloatingToolbar /> },
})
