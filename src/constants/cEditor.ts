export const MARKDOWN_INLINE_FORMATS: CEditor.MarkdownFormat[] = [
    {
        name: 'bold',
        left: '**',
        right: '**',
        key: 'b',
        modifiers: 'Mod',
    },
    {
        name: 'italic',
        left: '*',
        right: '*',
        key: 'i',
        modifiers: 'Mod',
    },
    {
        name: 'strike',
        left: '~~',
        right: '~~',
        key: 's',
        modifiers: 'Mod-Shift',
    },
    {
        name: 'code',
        left: '`',
        right: '`',
        key: 'k',
        modifiers: 'Mod',
    },
    {
        name: 'underline',
        left: '<u>',
        right: '</u>',
        key: '-',
        modifiers: 'Mod-Shift',
    },
    {
        name: 'hyperlink',
        left: '[',
        right: ']()',
        key: 'l',
        modifiers: 'Mod-Shift',
    },
    {
        name: 'image',
        left: '![',
        right: ']()',
        key: 'i',
        modifiers: 'Mod-Shift',
    },
    {
        name: 'math', // need to test rendering
        left: '$',
        right: '$',
        key: 'm',
        modifiers: 'Mod-Shift',
    },
    {
        name: 'highlight', // need to test
        left: '==',
        right: '==',
        key: 'h',
        modifiers: 'Mod-Shift', // need to test
    },
    {
        name: 'superscript', // need to test
        left: '^',
        right: '^',
        key: 'p',
        modifiers: 'Mod-Shift',
    },
    {
        name: 'subscript', // need to test
        left: '~',
        right: '~',
        key: 'b',
        modifiers: 'Mod-Shift',
    },

]

export const MARKDOWN_BLOCK_FORMATS: CEditor.MarkdownFormat[] = [
    {
        name: 'heading1',
        left: '# ',
        right: '',
        key: '1',
        modifiers: 'Mod-Alt',
    },
    {
        name: 'heading2',
        left: '## ',
        right: '',
        key: '2',
        modifiers: 'Mod-Alt',
    },
    {
        name: 'heading3',
        left: '### ',
        right: '',
        key: '3',
        modifiers: 'Mod-Alt',
    },
    {
        name: 'heading4',
        left: '#### ',
        right: '',
        key: '4',
        modifiers: 'Mod-Alt',
    },
    {
        name: 'heading5',
        left: '##### ',
        right: '',
        key: '5',
        modifiers: 'Mod-Alt',
    },
    {
        name: 'heading6',
        left: '###### ',
        right: '',
        key: '6',
        modifiers: 'Mod-Alt',
    },
    {
        name: 'codeBlock',
        left: '```',
        right: '\n\n```',
        key: 'c',
        modifiers: 'Mod-Shift',
    },
    {
        name: 'mathBlock',
        left: '$$\n',
        right: '\n$$',
        key: 'm',
        modifiers: 'Mod-Alt',
    }

]