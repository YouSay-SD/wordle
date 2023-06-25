export const getRandomWord = (words: string[]) => {
  const randomIndex = Math.floor(Math.random() * words.length)
  const newRandomWord = words[randomIndex]
  return newRandomWord
}
