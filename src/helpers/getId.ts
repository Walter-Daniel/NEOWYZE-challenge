export const getId = (url:string) => {
   const fragmentURL = url.split('/');
   const id = fragmentURL[fragmentURL.length -2]
   return id
}