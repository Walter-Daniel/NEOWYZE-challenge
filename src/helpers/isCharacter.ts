export const isCharacter = (url:string) => {
   const fragmentURL = url.split('/');
   const contain = fragmentURL.includes('people')
   const id = fragmentURL[fragmentURL.length -2]
   if(contain){
    return id
   }
}