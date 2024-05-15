export const charactersToFilter = (object:Object) => {
    const filterObject = Object.fromEntries(
        Object.entries(object).filter(([clave, valor]) => valor !== "unknown" && valor !== "n/a")
    );
    return filterObject;
}