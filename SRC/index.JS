var data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]

 function daily(){

  document.getElementById("work").innerHTML = data[0].timeframes.daily.current + "hrs";
   document.getElementById('Previous').innerHTML =  "Last week - " + data[0].timeframes.daily.previous + "hrs";
   document.getElementById('play').innerHTML = data[1].timeframes.daily.current + "hrs";
   document.getElementById('last__week').innerHTML = "Last week - " + data[1].timeframes.daily.previous + "hrs";
   document.getElementById('study').innerHTML = data[2].timeframes.daily.current + "hrs";
   document.getElementById('last__study').innerHTML =  "Last week - " + data[2].timeframes.daily.previous + "hrs";
   document.getElementById('exercise').innerHTML = data[3].timeframes.daily.current + "hrs";
   document.getElementById('last__exercise').innerHTML =  "Last week - " + data[3].timeframes.daily.previous + "hrs";
   document.getElementById('social').innerHTML = data[4].timeframes.daily.current + "hrs";
   document.getElementById('last__social').innerHTML =  "Last week - " + data[4].timeframes.daily.previous + "hrs";
   document.getElementById('self__care').innerHTML = data[5].timeframes.daily.current + "hrs";
   document.getElementById('last_self_care').innerHTML =  "Last week - " + data[5].timeframes.daily.previous + "hrs";
   document.getElementById("p1").style.color = "rgb(252, 254, 255)"
   document.getElementById("p2").style.color = "rgb(108, 110, 171)"
   document.getElementById("p3").style.color = "rgb(108, 110, 171)"
 }

function weekly(){
   document.getElementById('work').innerHTML = data[0].timeframes.weekly.current + "hrs";
   document.getElementById('Previous').innerHTML =  "Last week - " + data[0].timeframes.weekly.previous + "hrs";
   document.getElementById('play').innerHTML = data[1].timeframes.weekly.current + "hrs";
   document.getElementById('last__week').innerHTML =  "Last week - " + data[1].timeframes.weekly.previous + "hrs";
   document.getElementById('study').innerHTML = data[2].timeframes.weekly.current + "hrs";
   document.getElementById('last__study').innerHTML =  "Last week - " + data[2].timeframes.weekly.previous + "hrs";
   document.getElementById('exercise').innerHTML = data[3].timeframes.weekly.current + "hrs";
   document.getElementById('last__exercise').innerHTML =  "Last week - " + data[3].timeframes.weekly.previous + "hrs";
   document.getElementById('social').innerHTML = data[4].timeframes.weekly.current + "hrs";
   document.getElementById('last__social').innerHTML =  "Last week - " + data[4].timeframes.weekly.previous + "hrs";
   document.getElementById('self__care').innerHTML = data[5].timeframes.weekly.current + "hrs";
   document.getElementById('last_self_care').innerHTML =  "Last week - " + data[5].timeframes.weekly.previous + "hrs";
   document.getElementById("p1").style.color = "rgb(108, 110, 171)"
   document.getElementById("p2").style.color = "rgb(252, 254, 255)"
   document.getElementById("p3").style.color = "rgb(108, 110, 171)"
}

function monthly(){
   document.getElementById('work').innerHTML = data[0].timeframes.monthly.current + "hrs";
   document.getElementById('Previous').innerHTML =  "Last week - " + data[0].timeframes.monthly.previous + "hrs";
   document.getElementById('play').innerHTML = data[1].timeframes.monthly.current + "hrs";
   document.getElementById('last__week').innerHTML =  "Last week - " + data[1].timeframes.monthly.previous + "hrs";
   document.getElementById('study').innerHTML = data[2].timeframes.monthly.current + "hrs";
   document.getElementById('last__study').innerHTML =  "Last week - " + data[2].timeframes.monthly.previous + "hrs";
   document.getElementById('exercise').innerHTML = data[3].timeframes.monthly.current + "hrs";
   document.getElementById('last__exercise').innerHTML =  "Last week - " + data[3].timeframes.monthly.previous + "hrs";
   document.getElementById('social').innerHTML = data[4].timeframes.monthly.current + "hrs";
   document.getElementById('last__social').innerHTML =  "Last week - " + data[4].timeframes.monthly.previous + "hrs";
   document.getElementById('self__care').innerHTML = data[5].timeframes.monthly.current + "hrs";
   document.getElementById('last_self_care').innerHTML =  "Last week - " + data[5].timeframes.monthly.previous + "hrs";
   document.getElementById("p1").style.color = "rgb(108, 110, 171)"
   document.getElementById("p2").style.color = "rgb(108, 110, 171)"
   document.getElementById("p3").style.color = "rgb(252, 254, 255)"
}
