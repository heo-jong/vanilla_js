const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  delGreeting = document.querySelector(".del-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function resetTodo() {
  const li = document.querySelectorAll("li");
  li.forEach(function (liDel) {
    liDel.remove();
  });
}

function resetAll(event) {
  const currentUser = localStorage.getItem(USER_LS);
  localStorage.removeItem(USER_LS, currentUser);
  localStorage.removeItem(TODOS_LS);
  greeting.classList.remove(SHOWING_CN);
  delGreeting.classList.remove(SHOWING_CN);
  input.value = null;
  resetTodo();
  loadName();
  history.go(0);
}

const resetAllBtn = document.querySelector(".del-greetings");
resetAllBtn.addEventListener("click", resetAll);

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  delGreeting.classList.add(SHOWING_CN);
  greeting.innerText = `Do Your Best, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
