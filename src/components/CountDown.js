//https://javascript.plainenglish.io/building-a-countdown-timer-with-vanilla-javascript-d78d2ca7f180

export default async function countDown(data) {
  // "november 19, 2022 00:00:00",
  const date = `${data.fecha.mes} ${data.fecha.dia}, ${data.fecha.anio} ${data.fecha.hora} `;
  console.log(date);

  const finaleDate = new Date(date).getTime();

  const elementCountDown = document.querySelector("#countDown");

  const timer = () => {
    const now = new Date().getTime();
    let diff = finaleDate - now;
    if (diff < 0) {
      document.querySelector(".alert").style.display = "block";
      elementCountDown.style.display = "none";
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    days <= 99 ? (days = `${days}`) : days;
    days <= 9 ? (days = `${days}`) : days;
    hours <= 9 ? (hours = `0${hours}`) : hours;
    minutes <= 9 ? (minutes = `0${minutes}`) : minutes;
    seconds <= 9 ? (seconds = `0${seconds}`) : seconds;

    if (elementCountDown) {
      document.querySelector("#days").textContent = days;
      document.querySelector("#hours").textContent = hours;
      document.querySelector("#minutes").textContent = minutes;
      document.querySelector("#seconds").textContent = seconds;
    }
  };
  timer();
  setInterval(timer, 1000);
}
