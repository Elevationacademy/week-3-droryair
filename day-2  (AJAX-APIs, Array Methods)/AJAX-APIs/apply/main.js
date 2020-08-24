// // const searchBook = function(ISBN){
// //     $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,function(response){
// //         let title = response.items[0].volumeInfo.title
// //         console.log(title)
// //     })
// // }
// const searchBook2 = function(queryType, queryValue){
// $.ajax({
//     method:"GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//     success:function(response){
//         response.items.forEach(item => console.log(`
//             Title: ${item.volumeInfo.title} 
//             Author: ${item.volumeInfo.authors[0]}
//             ISBN: ${item.volumeInfo.industryIdentifiers[0].identifier}`))

//     },
//     error: function(xhr, text, error){
//         alert("Whoops! Error.")
//     }
    
// })
// }

// // searchBook(9782806269171)
// searchBook2("title", "How to Win Friends and Influence People")

// // 9782806269171 - The Little Prince: Book Analysis
// // 1440633908 - Of Mice and Men by John Steinbeck
// // 9781945048470 - The Alchemist by Paulo Coelho
// // 9780307417138 - Hitchhiker's Guide to the Galaxy

const Giphy = function(search){
    $('.gifs-holder').empty()
    $.ajax({
        method:"GET",
        url:`http://api.giphy.com/v1/gifs/search?api_key=pAantY2hnM92ihEhzx3JIjz0lX3ISBZK&q=${search}`,
        success: function(response){
            for(let i=0;i<25;i++){
                let gif = response.data[i]
                let url = gif.embed_url
                $('.gifs-holder').append(`<iframe src = ${url}></iframe><a><-${i+1}</a>`)
            }
        },
        error: function(xhr,text,error){
            alert("Whhops!Error!")
        }
    })
}

$('.header').append(`<input  placeholder = "search your GIF" ></input><button>Search</button>`)
$('button').on('click',function(){
    let searchValue = $('input').val()
    console.log(searchValue)
    Giphy(searchValue)
})



