const secHand = document.querySelector(".second");
const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const time = document.querySelector(".time");
const day = document.querySelector(".day");
const date = document.querySelector(".date");

function clock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  time.innerText = `${hour} : ${minutes} : ${seconds}`;
  console.log(`h>${hour} : m>${minutes} : s>${seconds}`)

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

const vibe = document.querySelector(".vibeNotes");
const vibeSetter = [
  "An early-morning walk is a blessing for the whole day.",
  "Today’s goals: Coffee and kindness. Maybe two coffees, and then kindness.",
  "Write it on your heart that every day is the best day in the year.",
  "Every morning, I wake up saying, ‘I’m still alive, a miracle.’ And so I keep on pushing",
  "If you’re changing the world, you’re working on important things. You’re excited to get up in the morning",
];

let i = 0;
function arrPlus() {
  if (vibeSetter.length > i) {
    vibe.innerText = vibeSetter[i];
    i++;
  } else {
    i = 0;
  }
}

setInterval(clock, 1000);
setInterval(arrPlus, 8000);
