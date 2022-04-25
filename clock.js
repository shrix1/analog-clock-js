//selectors
const secondHand = document.querySelector(".second");
const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const time = document.querySelector(".time");
const day = document.querySelector(".day");
const date = document.querySelector(".date");

//analog pointers func
const clock =()=> {
  const now = new Date();
 
  //second
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;  

  //min
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //hrs
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  time.innerText = `${hour % 12} : ${minutes} : ${seconds}`;
  console.log(`h-${hour} : m-${minutes} : s-${seconds}`)

  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day.innerText = weekDay[now.getDay()];

  const dates = now.getDate();
  const monthName = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthName[now.getMonth()];
  const year = now.getFullYear();
  date.innerText = `${dates} : ${month} : ${year}`;
}

//vibenote every 8s
const vibe = document.querySelector(".vibeNotes");

// const vibeSetter = [
//   "An early-morning walk is a blessing for the whole day.",
//   "Today’s goals: Coffee and kindness. Maybe two coffees, and then kindness.",
//   "Write it on your heart that every day is the best day in the year.",
//   "Every morning, I wake up saying, ‘I’m still alive, a miracle.’ And so I keep on pushing",
//   "If you’re changing the world, you’re working on important things. You’re excited to get up in the morning",
// ];

// //arr++
// let i = 0;
// function arrPlus() {
//   if (vibeSetter.length > i) {
//     vibe.innerText = vibeSetter[i];
//     i++;
//   } else {
//     i = 0;
//   }
// }

//api for random quotes generation
const api=()=>{
  const data = fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")

  data
    .then(r=>r.json())
    .then(q=>{ 
      vibe.innerText = q.quotes[0].text
    })
}

setInterval(clock, 1000);//clock seconds pointer delay
setInterval(api, 8000);//vibenotes changer

