/*
Define a function with a single parameter. When the function
is invoked, an argument is required.
*/
const queens = []
const tributeChest = []

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}


const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }
    
    queens.push(queenObject)
}



createQueen(1, "Trinity Terry")
createQueen(2, "Felicity Thoreau")
createQueen(3, "Damaris Arcadian")
createQueen(4, "Gloria Fizzlebun")

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)
}


const payTribute = (tributeId, tributeDesc, whosTribute) => {
    const tribute = {
        id: tributeId,
        description: tributeDesc,
        whichQueen: whosTribute
    }
    tributeChest.push(tribute)
}


payTribute(3, 'Sack of 10gp', 1)
payTribute(1, "Boar's head of gunpowder", 4)
payTribute(2, "An entire flock of sheep", 2)
payTribute(4, "The house under the hill", 3)





// iterate through queens to show tribute for each
for (const queenObject of queens) {  
    for (const tribute of tributeChest) {
        
        if (tribute.whichQueen === queenObject.id){
            console.log(`${queenObject.name} has a tribute of ${tribute.description}`)
        }
        }   
        }
// OH MY GOD IT TOOK ME AN HOUR TO FIGURE OUT I WAS CONFUSING TRIBUTE WITH TRIBUTEOBJECT AHHHH

