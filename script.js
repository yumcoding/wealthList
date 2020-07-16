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
}
