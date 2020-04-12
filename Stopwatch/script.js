let timerObj  = {
  mins: 0,
  secs: 0,
  timerId: 0
}

function soundAlarm(){
  let amount = 3;
  let audio = new Audio("Sound.mp3")

  function playSound(){
    audio.pause()
    audio.cuurentTime=0;
    audio.play()
  }
  for(let i=0;i<amount;i++)
  {
    setTimeout(playSound,1000*i)
  }
}

function updateValue(key,value){
    if(value < 0){
      value = 0;
      console.log("Positive Numbers Only")
    }
    if(key=="secs"){
      if(value < 10){
        value = "0" + value;
      }
    }
    if(value>59){
      value = 59
    }

    $("#" + key).html(value || 0)
    timerObj[key] = value

    // console.log("Min: ",timerObj.mins)
    // console.log("Sec: ",timerObj.secs)
}

(function detectChanges(key){

  let input = "#" + key + "p"

  $(input).change(function(){
    updateValue(key,$(input).val())
  })

  $(input).keyup(function(){
    updateValue(key,$(input).val())
  })
  return arguments.callee
})("mins")("secs")


function startTimer(){
  buttonManager(["start",false],["stop",true],["pause",true])
  freezeInput()
  timerObj.timerId = setInterval(function(){

    timerObj.secs--
    if(timerObj.secs<0){
      if(timerObj.mins==0){
        soundAlarm()
        return stopTimer()
      }
      timerObj.secs = 59
      timerObj.mins--

    }
    updateValue("mins",timerObj.mins)
    updateValue("secs",timerObj.secs)

  },1000)
}
function stopTimer(){
  clearInterval(timerObj.timerId)
  buttonManager(["start",true],["stop",false],["pause",false])
  unfreezeInput()
  updateValue("mins",$("#minsp").val())
  updateValue("secs",$("#secsp").val())
}
function pauseTimer(){
  buttonManager(["start",true],["stop",true],["pause",false])
  clearInterval(timerObj.timerId)
}

function buttonManager(...buttonArray){
  for(let i=0;i<buttonArray.length;i++)
  {
    let button = "#" + buttonArray[i][0] + "-button"
    if(buttonArray[i][1]){
      $(button).removeAttr("disabled")
    }
      else{
      $(button).attr("disabled","disabled")
    }
  }

}

function freezeInput(){
  $("#minsp").attr("disabled","disabled")
  $("#secsp").attr("disabled","disabled")
}
function unfreezeInput(){
  $("#minsp").removeAttr("disabled")
  $("#secsp").removeAttr("disabled")
}
