export const getImageUrl = (filename) =>
  new URL(filename, "https://www.artandalice.co").toString() +
  `?t=${Date.now()}`;
