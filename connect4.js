var one = prompt("Player One: Enter Your Name , you will be Blue")
var two = prompt("Player Two: Enter Your Name , you will be Red")

$('h3').text(one+": it is your turn, please pick a column to drop your blue chip.")

//Change the cursor to pointer as it hovers over the columns
$('td').css('cursor','pointer')

//Check if 4 chips are connected in a horizontal, vertical or diagonal row and if so announce the winner
function checkstate(add,w){
  for(q=w;q<=35;q+=7){
    a=$('td').eq(q).css('background-color');
    b=$('td').eq(q+add).css('background-color')
    c=$('td').eq(q+2*add).css('background-color')
    d=$('td').eq(q+3*add).css('background-color')
    if(a===b&&b===c&&c===d&&d==="rgb(255, 0, 0)"){
      $('.change').remove()
      $('h1').text(two+' has won. Refresh the page to restart')
      break
    }else if (a===b&&b===c&&c===d&&d==="rgb(0, 0, 255)"){
      $('.change').remove()
      $('h1').text(one+' has won. Refresh the page to restart')
      break
    }
  }
}

var k=0;                          //counter to define whose turn it is: player1 or player2
var last = [35,36,37,38,39,40,41] //index numbers for the lowest(6th) row

//Drop chips on clicked column and make the necessary color changes
$('td').click(function(){
  k+=1
  var i = this.cellIndex
  for(j of last){
    if(j%7===i%7){
      for(x=j;x>=j-35;x-=7){
        if ($('td').eq(x).css('background-color')==="rgb(128, 128, 128)"){
          if(k%2===1){
            $('td').eq(x).css('background-color','blue')
            $('h3').text(two+": it is your turn, please pick a column to drop your red chip.")
            break
          }else{
            $('td').eq(x).css('background-color','red')
            $('h3').text(one+": it is your turn, please pick a column to drop your blue chip.")
            break
          }
        }
      }
    }
  }
  //Check if the connection succeeds horizontally
  for(y=0;y<=3;y++){
    checkstate(1,y)
  }
  //Check if the connection succeeds vertically
  for(y=0;y<=6;y++){
    checkstate(7,y)
  }
  //Check if the connection succeeds diagonally with positive inclination
  for(y=3;y<=6;y++){
    checkstate(6,y)
  }
  //Check if the connection succeeds diagonally with negative inclination
  for(y=0;y<=3;y++){
    checkstate(8,y)
  }
})
