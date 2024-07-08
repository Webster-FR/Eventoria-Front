export function useImagePath (path: string) {
  if (path.startsWith('http')) return path;
  const {apiBaseUrl, imageBasePath} = useRuntimeConfig();
  return `${apiBaseUrl}${imageBasePath}/${path}`;
}
