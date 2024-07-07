export function useImagePath (path: string) {
  const {apiBaseUrl, imageBasePath} = useRuntimeConfig();
  return `${apiBaseUrl}${imageBasePath}/${path}`;
}
