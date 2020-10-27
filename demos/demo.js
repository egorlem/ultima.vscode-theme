/* Guezwhoz vscode color theme demo */
let validColors = [31, 32, 33, 34, 35, 36, 37];

function makeItColorful(srt) {
  if (typeof srt !== "string" || !srt.length) {
    throw new Error("Something wrong");
  }
  return (ANSIcolorCode) => {
    if (validColors.includes(+ANSIcolorCode)) {
      return `\x1b[${ANSIcolorCode}m${srt}\x1b[0m`;
    } else {
      throw new Error("Color value is not valid");
    }
  };
}

const text = makeItColorful("make it colorful")(32);
console.log(text);
