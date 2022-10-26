const registeredUsers = [
  ["admin", "KoI18"],
  ["manager", "SuperMe108"],
  ["editor", "12345"],
];

const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

form.addEventListener("submit", btnPressSubmit);

function btnPressSubmit(event) {
  event.preventDefault();
  validate();
}

function validate() {
  let falseNumb = 0;
  if (inputs[0].value.length == 0 || inputs[1].value.length == 0) {
    alert("Не набрана строка");
  }
  for (let numb of registeredUsers) {
    if (numb[0] == inputs[0].value && numb[1] == inputs[1].value) {
      alert("сообщение пароли и логин подходят");
      form.reset();
    } else {
      falseNumb = falseNumb + 1;
    }
  }
  if (falseNumb == 3) {
    alert("сообщение пароли и логин НЕ подходят");
  }
}
