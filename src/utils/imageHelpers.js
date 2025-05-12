export const getImageUrl = (filename) =>
  // new URL(filename, "http://localhost:8888").toString() +
  new URL(filename, "https://www.artandalice.co").toString() +
  `?t=${Date.now()}`;
