/* let array = ["alma" , 12 , false , null]
console.log (array) */

/* let stringArray = ["alma" , "körte" , "banán"]
console.log(stringArray[0]) */

/*let myObj = {
    key1: "value1",
    key2: "value2",
    key3: 15,
    key4: 600,
}

console.log (myObj.key1)

let myFacebook = {
    name: "Bernadett Hamza",
    age: 23,
    location: "Debrecen",
    friends: ["a","b","c"],
    favouriteMovie: [
        {
            title: "Harry Potter",
            year: 2001,
            casts: [
                "Harry Potter",
                "Ronald Weasley",
                "Hedvig"
            ]
        }
    ]

}

console.log (myFacebook.favouriteMovie) */

/* function positiveOrNegative (number) {
    if (number < 0) {
        return "negative"
    } else if (number > 0) { 
        return "positive"
    } else {
        return "zero"
    }
}*/
function logger(text) {
    console.log(text)
}
  
/*logger (positiveOrNegative(0)) */

function decideIfBeerIsGood(beer) {
    if (beer.price < 340) {
        return true
    } else {
        return false
    }
}

let dreher = { name: "dreher", price: 349}
let soproni = { name: "soproni", price: 329}
let borsodi = { name: "borsodi", price: 339}

logger(decideIfBeerIsGood(dreher))