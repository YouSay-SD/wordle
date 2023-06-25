export const formatTimer = (timer: number) => {
  const minutes = Math.floor(timer / 60)
  const seconds = timer % 60
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  return formattedTime
}
