export const ƒGetLastStringFromCharacter = (
  text: string, characterSelected: string): string | void => {
  return text.match(new RegExp(`[^%${ characterSelected }]*$`, 'g'))?.[0];
};
