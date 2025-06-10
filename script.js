//"use strict";
const generateBtn = document.querySelector(".btn-1");
const generateBtn2 = document.querySelector(".btn-2");
const generateBtn3 = document.querySelector(".btn-3");
const generateMsgspace = document.querySelector(".inner_con");
const generateMsgspace2 = document.querySelector(".inner_con_2");
const generateMsgspace3 = document.querySelector(".inner_con_3");
const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = toggleBtn.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

//the messages array
const positiveMsg = [
  "You have such a warm and kind presence",
  "You always know how to make others smile, even on tough days 😂",
  "The world is a better place with you in it.",
  "You inspire others just by being yourself",
  "You have handled so much with grace—your strength is amazing.",
  "Your ideas are so creative and thoughtful.",
  "You make a difference more than you realize.",
  "our kindness has a ripple effect that spreads further than you know.",
  "You're doing better than you think—dont be too hard on yourself.",
  "You make people feel seen and valued, and that is a rare gift.",
];

const positiveMsg2 = [
  "You make people feel seen and valued, and that’s a rare gift.",

  "I really admire how you stay true to who you are.",

  "You have such a calming and positive presence.",

  "You light up the room without even trying.",

  "I’m grateful to know someone as genuine and thoughtful as you.",

  "You have a way of turning ordinary moments into something special.",

  "You’re not just smart—you’re wise beyond your years.",

  "You make tough situations feel easier just by being there.",

  "You’re exactly the kind of person the world needs more of.",

  "Thank you for being you—you truly make a difference.",
];

const positiveMsgRand = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomMsg = arr[randomIndex];
  console.log(randomMsg);
  return randomMsg;
};
//console.log(positiveMsgRand(positiveMsg));

generateBtn.addEventListener("click", function () {
  generateMsgspace.innerHTML = "";
  const myFuns = positiveMsgRand(positiveMsg);
  const mainHTML = `
        <h3 class="msg-header">Your Positive Messsage:</h3>
        <p class="msg-space-1">${myFuns}</p>`;
  generateMsgspace.insertAdjacentHTML("afterbegin", mainHTML);
});

generateBtn2.addEventListener("click", function () {
  generateMsgspace2.innerHTML = "";
  const myFuns = positiveMsgRand(positiveMsg2);
  const HTML = `
          <h3 class="msg-header">Your Motivation Messsage:</h3>
          <p class="msg-space-1">${myFuns}</p>`;
  generateMsgspace2.insertAdjacentHTML("afterbegin", HTML);
});

generateBtn3.addEventListener("click", function () {
  generateMsgspace3.innerHTML = "";
  const myFuns = positiveMsgRand(positiveMsg);
  const html = `
          <h3 class="msg-header">Your Positive Messsage:</h3>
          <p class="msg-space-1">${myFuns}</p>`;
  generateMsgspace3.insertAdjacentHTML("afterbegin", html);
});
