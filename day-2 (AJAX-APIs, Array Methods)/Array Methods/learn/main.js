// // filter -> returns a new, filtered array

// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]



// let orangeVeg = vegetables.filter(r => r.color === "orange")
// console.log(orangeVeg)



// //forEach -> does'e return anything

// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ] 

// const func = function(person){
//     if(person.goodPerformance){
//         person.salary += 300
//     }
//     console.log(person.salary)
// }
// people.forEach(func)



// // map -> returns a new, modified array
// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

// let low = messagesFromDad.map(m => m.toLocaleLowerCase())
// console.log(low)




// // find -> returns the first element that matches the condition
// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]

// //  const result = (postID, commentID) =>findCommentByID.find(p => p.id == postID).find(c => c.id == commentID)
// const findCommentByID  = function(postID, commentID){
//    let post =  posts.find(p => p.id === postID)
//    let comment =post.comments.find(c => c.id == commentID)
//    console.log(comment.text)
// }
// findCommentByID(1,0)




// some -> returns returns true if some of the elements are truthy
// every -> returns true only if all of the elements are truthy

let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

const some = function(){
    let marvel = movies.some(m => m.studio=== "Marvel")
    let futuristic = movies.every(m=>m.year >2020)

    if(marvel){

        console.log("Let's go watch some movies")
    }else{
        console.log("Let's stay home")
    }

    if(futuristic){
        console.log("Futuristic stuff" )

    }else{
        console.log("Yawn")
    }
}

some()

