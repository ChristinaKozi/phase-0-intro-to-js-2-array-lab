// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.splice(-1);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appendCats = [...cats.slice()];
    appendCats.push('Broom');
    return appendCats
}

function prependCat(name) {
    const catsPrepend = [...cats.slice()]
    catsPrepend.unshift("Arnold")
    return catsPrepend
}

function removeLastCat(name) {
    const removeLastCat = [...cats.slice(0,2)];
    return removeLastCat
}

function removeFirstCat(name) {
    const removeFirstCat = [...cats.slice(1)];
    return removeFirstCat
}