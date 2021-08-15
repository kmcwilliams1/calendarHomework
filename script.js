//time and date at the top

const currentDayEl = document.getElementById('currentDay')
var currentHour = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDayEl.textContent = currentHour;



$('.saveBtn').click(function (){
   var textArea = $(this).siblings().eq(1).val() //wants the value of description  !!this = .saveBtn clicked, not all saveBtn
   var id = $(this).parent().attr('id') //targets the parent id (the hour number)
   localStorage.setItem(id, textArea); //assigns the text and id hour number to the save button clicked, and not to all save buttons
})


$('.time-block').each (function(){
    var sameId = $(this).attr('id') //looks at the id hour attribute associated with time-block
    var task = localStorage.getItem(sameId) //make a var called task equal to the info stored
    $(this).children('.description').val(task)  //give description the value of task
 
    //how to turn past hours grey (gray?)
    let currentTime = moment().hours() 
    if(currentTime > sameId ){
        $(this).addClass('past')
    } else if (currentTime === sameId){
        $(this).addClass('present')
        } else {
        $(this).addClass('future')
    };    
})



//things to research more in depth

//.val for javacript
//.eq grabing
// forEach in javascript === .each in jQuery
//attr
//.find jqeury



//trying to be able to remove tasks 
    
//local storage & description


function handleRemoveItem(event) {
    $(this).siblings().eq(1).val('')
    localStorage.clear();

  }
  $('.removeBtn').on('click', handleRemoveItem);