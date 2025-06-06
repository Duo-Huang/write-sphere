import { keymap, type KeyBinding } from '@uiw/react-codemirror'
import { defaultKeymap } from '@codemirror/commands'
import { MARKDOWN_BLOCK_FORMATS, MARKDOWN_INLINE_FORMATS } from '@/constants/cm-editor'
import { createMarkdownFormatCommand } from './utils'

// Ref to: https://github.com/codemirror/commands/blob/main/src/commands.ts#L897
const updatedDefaultKeymap: Map<`${'key' | 'mac' | 'win' | 'linux'}:${string}`, string> = new Map([
    ['key:Alt-A', 'Mod-Alt-/'],
    ['key:Mod-i', ''],
    ['mac:Mod-Backspace', ''],
])

const enabledDefaultKeymap = defaultKeymap
    .filter(
        (keybinding) =>
            updatedDefaultKeymap.get(`key:${keybinding.key}`) !== '' &&
            updatedDefaultKeymap.get(`mac:${keybinding.mac}`) !== '' &&
            updatedDefaultKeymap.get(`win:${keybinding.win}`) !== '' &&
            updatedDefaultKeymap.get(`linux:${keybinding.linux}`) !== ''
    )
    .map((keybinding) => {
        return {
            ...keybinding,
            key: updatedDefaultKeymap.has(`key:${keybinding.key}`)
                ? updatedDefaultKeymap.get(`key:${keybinding.key}`)
                : keybinding.key,
            mac: updatedDefaultKeymap.has(`mac:${keybinding.mac}`)
                ? updatedDefaultKeymap.get(`mac:${keybinding.mac}`)
                : keybinding.mac,
            win: updatedDefaultKeymap.has(`win:${keybinding.win}`)
                ? updatedDefaultKeymap.get(`win:${keybinding.win}`)
                : keybinding.win,
            linux: updatedDefaultKeymap.has(`linux:${keybinding.linux}`)
                ? updatedDefaultKeymap.get(`linux:${keybinding.linux}`)
                : keybinding.linux,
        }
    })

export const overrideKeymap = keymap.of(enabledDefaultKeymap)

export const markdownKeymap = keymap.of(
    [...MARKDOWN_INLINE_FORMATS, ...MARKDOWN_BLOCK_FORMATS].map((format) => {
        const binding: KeyBinding = {
            key: format.modifiers ? `${format.modifiers}-${format.key}` : format.key,
            run: createMarkdownFormatCommand(format),
            preventDefault: true,
        }
        return binding
    })
)
