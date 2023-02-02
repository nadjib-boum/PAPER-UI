export function breakText (text: string, numLines: number=3, maxChars: number[] = [20, 17, 14]) : string[] {
  const words = text.split(' ');
  const len = text.length;
  const lines = Array(numLines).fill('');
  let word;
  let currentLine = 0;
  let trackLetters = 0;

  for (const w in words) {
    word = words[w];
    if (trackLetters < len) {
      if (lines[currentLine].length + word.length >= maxChars[currentLine]) currentLine++;
      lines[currentLine] += word + ' ';
    }
    trackLetters += word.length;
  }

  return lines.filter($=>$);

}