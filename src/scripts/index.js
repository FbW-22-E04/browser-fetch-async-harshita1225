import "../styles/main.scss";
import "babel-polyfill";
import { Button } from "bootstrap";
//import { resolve } from "path/posix.js";
//import { rejects } from "assert.js";

const modal = document.getElementById("myModal");
const button = document.querySelector("button");

let promiseOfModal = new Promise(function (resolve) {
  window.setTimeout(function () {
    resolve(modal);
  }, 1000 * 3);
});

let promiseButton = new Promise(function (resolve) {
  button.addEventListener("animationend", function () {
    alert(`Continue to subscribe!!`);
    button.style.backgroundColor = "cyan";
  });
});

const asyncFunc = async () => {
  try {
    const promiseResolve = await promiseOfModal;
    console.log("User has been on the page for 60 seconds");
    modal.style.display = "block";
  } catch (error) {
    console.error(error.message);
  }

  try {
    const secondPromise = await promiseButton;
    console.log("animation complte");
  } catch (error) {
    console.log(error);
  }
};

asyncFunc();

/*promiseOfModal.then(function (val) {
  console.log("User has been on the page for 60 seconds");
  val.style.display = "block";
});
*/
modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});
