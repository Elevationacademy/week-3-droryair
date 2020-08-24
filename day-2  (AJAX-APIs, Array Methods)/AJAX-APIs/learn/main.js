// $.get("https://www.googleapis.com/books/v1/volumes?q=NameoftheWind+intitle", function(result){
// let book = result.items[0]
// let description = book['searchInfo'].textSnippet
// // console.log(book)
// console.log(description)
// })



$.get("https://jsonplaceholder.typicode.com/users",function(response){
    let user = response[response.length-1]
    let companyCatchPhrase = user.company['catchPhrase']
    console.log(companyCatchPhrase)
})