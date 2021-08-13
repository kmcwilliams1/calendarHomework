


//time and date at the top

const currentDayEl = document.getElementById('currentDay')
var currentHour = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDayEl.textContent = currentHour;



$('.saveBtn').click(function (){
   var textArea = $(this).siblings().eq(1).val() //gives sibling 'description' a value  !!this = .saveBtn clicked, not all saveBtn
   var id = $(this).parent().attr('id') //targets the parent id (the hour number)
    localStorage.setItem(id, textArea); //assigns the text and id hour number to the save button clicked, and not to all save buttons
})

//.val for javacript
//.eq grabs the second sibling
// forEach in javascript = .each in jQuery
//attr
//.find jqeury


//is it broken because im targeting the time block instead of the savebtn?

let currentTime = moment().hours()   //why does this have to be in the global scope?

$('.time-block').each (function(){
    var sameId = $(this).attr('id') //looks at the id attribut associated with time-block
    var task = localStorage.getItem(sameId) //make a var to get the info stored
    $(this).children('.description').appendTo().task  //trying to show it but idk
 
  


    //how to turn past hours grey (gray?)

    if(currentTime > sameId ){
        $(this).addClass('past')
    } else if (currentTime === sameId){
        $(this).addClass('present')
        } else {
        $(this).addClass('future')
    };    
})




// //trying to be able to remove tasks 
    

// function handleRemoveItem(event) {
//     var btnClicked = $(event.target);  
//     btnClicked.sibling('textarea').remove();
//   }
//   tasK.on('click', handleRemoveItem);