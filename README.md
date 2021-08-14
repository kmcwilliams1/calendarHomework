I thought too hard on this one. I tried to do many different functions and variables and took it farther than it needed to be. On my second attempt, I scaled it back considerably to just a few functions and did it in jQuery, which I like its straightforwardness. onclick makes more sense then telling a computer to listen.

the logic is easy to follow due to how few lines of code there is. make a class for the text box, the save button, and the delete button. the text content is saved on the click of the save button via local storage. the textArea and id variables indicate the hour and the wording and they are what is saved locally.

the .time-block function is what pulls it from local storage and displays it on the screen. first by targeting the hour id, then getting it on to the associated hour.

the if statement is self explanitory. the currentHour is a number, the sameId are those hourly ids. then they check which one is bigger.

these concepts are finally starting to click, but not fully. 