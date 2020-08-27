// let items = [
//     {
//         name:"Item1",
//         price: 100
//     },{
//         name: "Item2",
//         price: 200
//     },{
//         name: "Item3",
//         price: 300
//     },{
//         name: "Item4",
//         price: 400
//     }
// ]

// const source = $('#items-template').html()
// const template = Handlebars.compile(source)

// for (item of items){
//     let newHTML = template(item)
//     $('.container').append(newHTML)
// }


// //SPOT CHECK:
// var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer",socialNetwork:true},
//         {name: "The weird dude", description: "Quick with a smile", socialNetwork:true},
//         {name: "Taylor", description: "Just Taylor",socialNetwork:false}
//     ]
// }

// const source = $('#items-template').html()
// const template = Handlebars.compile(source)
// const newHTML = template(classData)


// $('.container').append(newHTML)



// NOTHER SPOT CHECK:
const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]


const animalSource = $('#animals-template').html()
const animalTemplate = Handlebars.compile(animalSource)
const animalHTML = animalTemplate({animals})

$('#animals-container').append(animalHTML)

const languagesSource = $('#languages-template').html()
const languagesTemplate = Handlebars.compile(languagesSource)
const LanguagesHTML = languagesTemplate({languages})

$('#languages-container').append(LanguagesHTML)