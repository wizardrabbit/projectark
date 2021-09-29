export const getURL = (to) => {
  const defaultURL = process.env.REACT_APP_SUB_URL;

  return `/${defaultURL.replaceAll('/', '')}/${to.replaceAll('/', '')}`;
};
