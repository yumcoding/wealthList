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
