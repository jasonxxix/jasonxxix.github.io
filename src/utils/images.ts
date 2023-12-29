
export function generateAlt(basis: string, append: string) {
    let alt = basis.split(" ")[0].toLowerCase();
    return `${alt}_${append}`
}
