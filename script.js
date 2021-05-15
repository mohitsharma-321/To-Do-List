let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')

function additem(){

    let item = $('<li>',{
        'class': 'list-group-item',
        text:inpNewTask.val()
    })

    ulTasks.append(item)
    inpNewTask.val('')

    item.click(()=>{
        item.toggleClass('done')
    })
    toggleInputButtons()
}

function sorttasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}

function cleantasks(){
    $('#ulTasks .done').remove()
    toggleInputButtons()
}

inpNewTask.keypress((event)=>{
    if(event.which == 13)
    additem()

})

function toggleInputButtons() {
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
  }

  inpNewTask.on('input', toggleInputButtons)


btnAdd.click(additem)
btnReset.click(() =>{
    inpNewTask.val('')
    toggleInputButtons()
})

btnSort.click(sorttasks)
btnCleanup.click(cleantasks)
