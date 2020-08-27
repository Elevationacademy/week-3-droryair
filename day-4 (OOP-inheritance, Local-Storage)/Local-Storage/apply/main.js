
let wisdom = JSON.parse(localStorage.wisdom || "[]")
let id = wisdom.length

//showing data from localStorage.wisdom
const render = function(){
    $('#container').empty()
    for (let wis of wisdom){
        id ++
        $('#container').append(`<div data-id=${wis.id}> <button class = "delete" > X </button> ${wis.text} </div>`)
    }
}

render()

$('#add').on("click",function(){
    let input = $('#input').val()
    id++
    $('#container').append(`<div data-id=${id} ><button class = "delete"> X </button> ${input} </div>`)
    wisdom.push({text:input,id})

    if(wisdom.length %2 ==0){
        localStorage.wisdom = JSON.stringify(wisdom)
    }
})



$('#clear').on('click',function(){
    localStorage.removeItem('wisdom')
    wisdom = []
    render()
})

$('#container').on('click','.delete',function(){
    let thisID = $(this).parent().data().id
    // console.log($(this).parent().data().id)
    for (i in wisdom){
        if(wisdom[i].id==thisID){
            wisdom.splice(i,1)
        }
    }
    // console.log(wisdom)
    localStorage.wisdom = JSON.stringify(wisdom)
    render()
})