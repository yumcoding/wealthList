const main = document.getElementById("main");
const userBtn = document.getElementById("user");
const doubleBtn = document.getElementById("double");
const showBtn = document.getElementById("show-mio");
const sortBtn = document.getElementById("sort");
const calBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//get random users and their money

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  //   console.log(newUser);

  addData(newUser);
}

// add User to data array
function addData(obj) {
  data.push(obj);
  //   console.log(data);
  updateDOM();
}

// update DOM
function updateDOM(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("person");
    div.innerHTML = `<strong>${element.name}</strong> ${formatMoney(
      element.money
    )}`;
    main.appendChild(div);
  });
}

// format number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//double money
function doubleMoney() {
  data = data.map((elem) => {
    return { name: elem.name, money: 2 * elem.money };
  });
  console.log(data);
  updateDOM(data);
}

//sort by richest
function sortByRichest() {
  data = data.sort((a, b) => {
    return b.money - a.money;
  });
  updateDOM();
}

//show only Millionaire
function showOnlyMios() {
  data = data.filter((elem) => elem.money > 1000000);
  updateDOM();
}

// calculate entire wealth
function calEntireWealth() {
  const total = data.reduce((acc, user) => (acc += user.money), 0);

  const div = document.createElement("div");
  div.innerHTML = `<h3>Total: <strong>${formatMoney(total)}</strong></h3>`;
  main.appendChild(div);
}
// EventListeners
userBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showBtn.addEventListener("click", showOnlyMios);
calBtn.addEventListener("click", calEntireWealth);
