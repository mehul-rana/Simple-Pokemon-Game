document.querySelector("#getPokemon").addEventListener("click", getPokemon);
document.querySelector("#randomPokemon").addEventListener("click", getRandom);

let player1Power;
let player2Power;
let player1Type;
let player2Type;

// there are a total of 1025 pokemon registered within this API.

function getPokemon() {
  let i = Math.ceil(Math.random() * 5);
  let randomOpponent = Math.ceil(Math.random() * 1025);
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("#player1-name").innerText =
        data.name.toUpperCase();
      document.querySelector("#player1-img").src = data.sprites.front_default;
      document.querySelector("#player1-power").innerText =
        data.stats[i].base_stat;
      document.querySelector("#player1-type").innerText =
        data.types[0].type.name;

      let player1Power = data.stats[i].base_stat;
      console.log(player1Power);

      let player1Type = data.types[0].type.name;
      console.log(player1Type);

      fetch(`https://pokeapi.co/api/v2/pokemon/${randomOpponent}`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          document.querySelector("#player2-name").innerText =
            data.name.toUpperCase();
          document.querySelector("#player2-img").src =
            data.sprites.front_default;
          document.querySelector("#player2-power").innerText =
            data.stats[i].base_stat;
          document.querySelector("#player2-type").innerText =
            data.types[0].type.name;

          let player2Power = data.stats[i].base_stat;
          console.log(player2Power);

          let player2Type = data.types[0].type.name;
          console.log(player2Type);

          if (player1Power > player2Power) {
            document.querySelector("#result").innerText = "Player 1 Wins";
          } else if (player1Power < player2Power) {
            document.querySelector("#result").innerText = "Player 2 Wins";
          } else {
            document.querySelector("#result").innerText = "Draw";
          }

          if (player1Type === "fire" && player2Type === "grass") {
            player1Power += 20;
          } else if (player1Type === "fire" && player2Type === "water") {
            player1Power -= 20;
          }
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  if (player1Type === "fire" && player2Type === "grass") {
    player1Power += 20;
  } else if (player1Type === "fire" && player2Type === "water") {
    player1Power -= 20;
  }

  // Why won't the conditional below work?

  // if(player1Power > player2Power){
  //   document.querySelector('#result').innerText = 'Player 1 Wins'
  // }else if(player1Power < player2Power){
  //   document.querySelector('#result').innerText = 'Player 2 Wins'
  // }else{
  //   document.querySelector('#result').innerText = 'Draw'
  // }

  // I want to incorporate a type advantage system that adds/subtracts power levels based on your type and your opponents type. Below is an example of what I'm trying to do

  // if(player1Type === 'fire' && player2Type === 'grass'){
  //   player1Power += 20
  // }else if(player1Type === 'fire' && player2Type === 'water'){
  //   player1Power -= 20
  // }
}

function getRandom() {
  let randomSelf = Math.ceil(Math.random() * 1025);
  let randomOpponent = Math.ceil(Math.random() * 1025);
  let i = Math.ceil(Math.random() * 5);

  const player1 = `https://pokeapi.co/api/v2/pokemon/${randomSelf}`;
  const player2 = `https://pokeapi.co/api/v2/pokemon/${randomOpponent}`;

  fetch(player1)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("#player1-name").innerText =
        data.name.toUpperCase();
      document.querySelector("#player1-img").src = data.sprites.front_default;
      document.querySelector("#player1-power").innerText =
        data.stats[i].base_stat;
      document.querySelector("#player1-type").innerText =
        data.types[0].type.name;

      let player1Power = data.stats[i].base_stat;
      console.log(player1Power);

      fetch(player2)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          document.querySelector("#player2-name").innerText =
            data.name.toUpperCase();
          document.querySelector("#player2-img").src =
            data.sprites.front_default;
          document.querySelector("#player2-power").innerText =
            data.stats[i].base_stat;
          document.querySelector("#player2-type").innerText =
            data.types[0].type.name;

          let player2Power = data.stats[i].base_stat;
          console.log(player2Power);

          if (player1Power > player2Power) {
            document.querySelector("#result").innerText = "Player 1 Wins";
          } else if (player1Power < player2Power) {
            document.querySelector("#result").innerText = "Player 2 Wins";
          } else {
            document.querySelector("#result").innerText = "Draw";
          }

          if (player1Type === "fire" && player2Type === "grass") {
            player1Power += 20;
          } else if (player1Type === "fire" && player2Type === "water") {
            player1Power -= 20;
          }
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  // if(player1Power > player2Power){
  //   document.querySelector('#result').innerText = 'Player 1 Wins'
  // }else if(player1Power < player2Power){
  //   document.querySelector('#result').innerText = 'Player 2 Wins'
  // }else{
  //   document.querySelector('#result').innerText = 'Draw'
  // }
}

// Why won't the conditional below work?

// if(player1Power > player2Power){
//   document.querySelector('#result').innerText = 'Player 1 Wins'
// }else if(player1Power < player2Power){
//   document.querySelector('#result').innerText = 'Player 2 Wins'
// }else{
//   document.querySelector('#result').innerText = 'Draw'
// }

// I want to incorporate a type advantage system that adds/subtracts power levels based on your type and your opponents type. Below is an example of what I'm trying to do

// if(player1Type === 'fire' && player2Type === 'grass'){
//   player1Power += 20
// }else if(player1Type === 'fire' && player2Type === 'water'){
//   player1Power -= 20
// }
