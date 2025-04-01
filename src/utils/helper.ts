export const calcWords = (text: string) => {
    if (text.trim() === '') return 0

    const normalized = text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()

    const chineseChars = (normalized.match(/[\u4e00-\u9fa5]/g) || []).length

    const englishText = normalized.replace(/[\u4e00-\u9fa5]/g, '').trim()
    const englishWords = englishText === '' ? 0 : englishText.split(' ').filter(Boolean).length

    return chineseChars + englishWords
}

export const calcLines = (text: string) => {
    return text.split('\n').length
}
