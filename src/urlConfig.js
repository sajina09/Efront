const baseUrl = "http://localhost:9000";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  /* alert(fileName); */
  return `${baseUrl}/public/${fileName}`;
};
