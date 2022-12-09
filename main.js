let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let hourW = document.querySelector(".hour-w");
let minuteW = document.querySelector(".minute-w");
let secondW = document.querySelector(".second-w");

function setDate() {
  let dateNow = new Date();
  const time = dateNow.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });
  let secondDgree = (dateNow.getSeconds() / 60) * 360 + 90;
  second.style.transform = `rotate(${secondDgree}deg)`;
  let minuteDgree = (dateNow.getMinutes() / 60) * 360 + 90;
  minute.style.transform = `rotate(${minuteDgree}deg)`;
  let hourDgree =
    (dateNow.getHours() / 12) * 360 + 90 + (dateNow.getMinutes() / 60) * 30;
  console.log(dateNow.getHours(), hourDgree);
  hour.style.transform = `rotate(${hourDgree}deg)`;
  hourW.innerHTML = time;
  minuteW.innerHTML = dateNow.getMinutes();
  secondW.innerHTML = dateNow.getSeconds();
}
setInterval(setDate, 1000);
