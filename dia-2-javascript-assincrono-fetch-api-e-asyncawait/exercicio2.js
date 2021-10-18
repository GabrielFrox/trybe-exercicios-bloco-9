// api.js

const orderedList = document.getElementById('cryptoList')

const fetchCoins = () => {
  const url = 'https://api.coincap.io/v2/assets';

  fetch(url)
    .then((response) => response.json())
    .then((data) => listOccupation(data.data))
    .catch((error) => error.toString());
}

const listOccupation = (array) => {
  for (let i = 0; i < 10; i += 1) {
    newLi = document.createElement('li');
    newLi.innerText = `${array[i].name} (${array[i].symbol}): $${parseFloat(array[i].priceUsd).toFixed(2)}`;
    orderedList.appendChild(newLi)
  }
}

console.log('a' * 2);

window.onload = fetchCoins;