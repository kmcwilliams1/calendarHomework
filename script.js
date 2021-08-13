


// //time and date at the top

const currentDayEl = document.getElementById('currentDay')
var currentHour = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDayEl.textContent = currentHour;



// //i dont understand local storage at all

// var task = "";

// if (localStorage.length === 0 || localStorage === undefined)){
//     task = localStorage.setItem("task", JSON.stringify([]))
//     task = JSON.parse(localStorage.getItem("task"))
// } else {
//     task = JSON.parse(localStorage.getItem("task");
// }
// task.push("task")





// //how to add a submit button?? where do i add .saveBtn in the html

// var submit = document.querySelector('.saveBtn')
// submit.textContent = task;
// submit.setAttribute('textarea' , task)
// hour.append(button)


$('.saveBtn').click(function (){
   var textArea = $(this).siblings().eq(1).val()
   var id = $(this).parent().attr('id')
    localStorage.setItem(id, textArea);
})

//.val for javacript
//.eq grabs the second sibling
// forEach in javascript = .each in jQuery
//attr
//.find jqeury

let currentTime = moment().hours()



$('.time-block').each (function(){
    var sameId = $(this).attr('id')
    var task = localStorage.getItem(sameId)

    console.log($(this).children('.description').appendTo(task))
    console.log(task)


    if(currentTime > sameId ){
        $(this).addClass('past')
    } else if (currentTime === sameId){
        $(this).addClass('present')
        } else {
        $(this).addClass('future')
    };    
})




// //submission element

// function handleTaskSubmit(event) {
//     event.preventDefault();
  

// if (!task) {
//     console.log('No shopping item filled out in form!');
//     return;
//   }
// task.addEventListener('submit', handleTaskSubmit);
// container.append('<li>' + task + '</li>');

// }



// //trying to be able to remove tasks 
    
// task.append(
//     '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
//   );

// function handleRemoveItem(event) {
//     var btnClicked = $(event.target);  //how to change this from jQuery to Javascript
  
//     btnClicked.parent('li').remove();
//   }
  
//   tasK.on('click', '.delete-item-btn', handleRemoveItem);
//   shoppingFormEl.on('submit', handleFormSubmit);