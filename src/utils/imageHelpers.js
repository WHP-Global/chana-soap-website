export const getImageUrl = (filename, mtime) =>
  // new URL(`${filename}?v=${mtime}`, "http://localhost:8888").toString();
  new URL(`${filename}?v=${mtime}`, "https://www.artandalice.co").toString();

// utils/imageHelper.js
export const buildImageSrc = (imageObj) => {
  if (!imageObj || !imageObj.path) return "";
  return getImageUrl(imageObj.path, imageObj.mtime);
};
