var deadline = '07/03/2021';

// Again just a quick and dirty implementation of the timer I can extrapolate this and clean it up 
// tremendously through the use of libraries and better data structures etc. 
// though this is just a simple enough function
function getTimeRemaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 ) + 17;
  var days = Math.floor( t/(1000*60*60*24) );
  return {
  'total': t,
  'days': days,
  'hours': hours,
  'minutes': minutes,
  'seconds': seconds
  }
}

// I would clean this up if integrated into whatever framework the team is using. 
// This is just a quick and dirty vanilla js implementation
function initTime(identifier, endtime){
	var timer = document.getElementById('timer');
  var daySpan = timer.querySelector('.days');
  var hourSpan = timer.querySelector('.hours');
  var minuteSpan = timer.querySelector('.minutes');
  var secondSpan = timer.querySelector('.seconds');
  var timeInterval = setInterval(function(){
  	var t = getTimeRemaining(endtime);
    daySpan.innerHTML = t.days;
    hourSpan.innerHTML = t.hours;
    minuteSpan.innerHTML = t.minutes;
    secondSpan.innerHTML = ('0' + t.seconds).slice(-2);
 		if(t.total<=0){
    	clearInterval(timeInterval);
    }
  }, 1000);
}

initTime('timer', deadline);