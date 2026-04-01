function capitalize(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("abcd"))
console.log(capitalize("ABCD"))
console.log(capitalize("aBcD"))


function lastLetter(string) {
    if (!string) return "";
    return string.slice(-1);
}

console.log(lastLetter("abcd"))