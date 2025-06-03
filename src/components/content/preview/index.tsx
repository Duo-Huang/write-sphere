import { memo } from 'react'
// import {
//   MarkdownPlugin,
//   remarkMdx,
//   remarkMention,
// } from '@udecode/plate-markdown';
// import { Plate, usePlateEditor } from '@udecode/plate/react';
// import remarkEmoji from 'remark-emoji';
// import remarkGfm from 'remark-gfm';
// import remarkMath from 'remark-math';

// import { useDebounce } from "@/hooks/useDebounce";
// import { useState } from "react";
// import useStore from "@/store";

// export default function MarkdownDemo() {

//     const content = useStore(state => state.editor.content)
//     const setContent = useStore(state => state.editor.setContent)

//   const debouncedMarkdownValue = useDebounce(content, 300);
//   const markdownEditor = usePlateEditor({
//     plugins: [],
//     value: [{ children: [{ text: content }], type: 'p' }],
//   });
//   const editor = usePlateEditor(
//     {
//       components: editorComponents,
//       plugins: editorPlugins,
//       value: (editor) =>
//         editor.getApi(MarkdownPlugin).markdown.deserialize(initialMarkdown, {
//           remarkPlugins: [
//             remarkMath,
//             remarkGfm,
//             remarkMdx,
//             remarkMention,
//             remarkEmoji as any,
//           ],
//         }),
//     },
//     []
//   );
//   React.useEffect(() => {
//     if (debouncedMarkdownValue !== initialMarkdown) {
//       editor.tf.reset();
//       editor.tf.setValue(
//         editor.api.markdown.deserialize(debouncedMarkdownValue, {
//           remarkPlugins: [
//             remarkMath,
//             remarkGfm,
//             remarkMdx,
//             remarkMention,
//             remarkEmoji as any,
//           ],
//         })
//       );
//     }
//   }, [debouncedMarkdownValue, editor]);
//   return (
//     <div className="grid h-full grid-cols-2 overflow-y-auto">
//       <Plate
//         onValueChange={() => {
//           const value = markdownEditor.children
//             .map((node: any) => markdownEditor.api.string(node))
//             .join('\n');
//           setMarkdownValue(value);
//         }}
//         editor={markdownEditor}
//       >
//         <EditorContainer>
//           <Editor
//             variant="none"
//             className="bg-muted/50 p-2 font-mono text-sm"
//           />
//         </EditorContainer>
//       </Plate>
//       <Plate editor={editor}>
//         <EditorContainer>
//           <Editor variant="none" className="px-4 py-2" />
//         </EditorContainer>
//       </Plate>
//     </div>
//   );
// }

const Preview = memo(({ className }: { className?: string }) => <h1>Preview</h1>)

export default Preview
