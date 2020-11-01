var one = prompt("Player One: Enter Your Name , you will be Blue")
var two = prompt("Player Two: Enter Your Name , you will be Red")

$('h3').text(one+": it is your turn, please pick a column to drop your blue chip.")

var k=0;

var last = [35,36,37,38,39,40,41]

$('td').css('cursor','pointer')

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
  for(y=0;y<=3;y++){
    checkstate(1,y)
  }
  for(y=0;y<=6;y++){
    checkstate(7,y)
  }
  for(y=3;y<=6;y++){
    checkstate(6,y)
  }
  for(y=0;y<=3;y++){
    checkstate(8,y)
  }
})

 
