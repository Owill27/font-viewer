import { FontData } from '../types/types';

export async function fetchFontCss(font: FontData) {
  let urlParts = [];
  urlParts.push('https://fonts.googleapis.com/css?family=');
  urlParts.push(font.family.replace(/ /g, '+'));

  const fullUrl = urlParts.join('');

  const res = await fetch(fullUrl);
  const css = await res.text();
  return css;
}
