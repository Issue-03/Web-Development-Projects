function enterForest(){
  console.log("Entered Forest");
  $("#landing").css("transform","translate(-200vw)");
  $("#dimmed-bg").css("visibility","visible");
  $("#dimmed-bg").css("transform","translate(0)");
  $("#above-fold").css("opacity","1");
  $("#full-site").css("visibility","visible");
  $("#full-site").css("overflow","visible");
  $("#full-site").css("max-height","auto");
  $("#register-side-bar").css("transform","translate(0)");
}

$("#visible-section").mouseenter(function() { openForm(); });
$("#empty-section").mouseenter(function() { closeForm(); });
$("#form-section").mouseleave(function() { closeForm(); });

function openForm() {
  $("#register-side-bar").css("transform","translate(-20%)");
  $("#register-side-bar").css("transition-delay","0s");
  $("#register-side-bar").css("z-index","100");

  $("#call-num").css("opacity","0");
  $("#reg").css("opacity","0");
}

function closeForm() {
  $("#register-side-bar").css("transform","translate(0)");
  $("#register-side-bar").css("z-index","0");

  $("#call-num").css("opacity","1");
  $("#reg").css("opacity","1");
}

(function totalUsersCount(){

  let totalUsers = String(getRandom(100000,200000));
  totalUsers = addComma(totalUsers);
  addToCurrent(totalUsers);

  function addToCurrent(currValue){
    let num = Number(currValue.replace(',',""));
    num++;
    num = String(num);
    num = addComma(num);
    $("#total-users").html(num);
    setTimeout(function(){
      addToCurrent(num);
    },getRandom(100,2000));
  }

  function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min );
  }

  function addComma(num){
    return num.slice(0,3) + ',' + num.slice(3,6);
  }

})();
