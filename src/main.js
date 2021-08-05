import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

//console.log(example, data);

//Imprimir data en html
const showData = document.getElementById("recover");
showCards(data.films);


//funcion de Ordenamiento

let titles = "";
function showCards (infoCards){
    console.log(infoCards);
    showData.innerHTML = "";
    infoCards.forEach(viewData => {
        let card = document.createElement("card");
        card.innerHTML = recoverData(viewData);
        showData.appendChild(card);
    });
}

function recoverData(cardsHome) {
    let printData = `<img src="${cardsHome.poster}" height= "200px"; width= "150px;"/>
    <h7>${cardsHome.title}</h7>`

    return printData;

}

document.querySelector('#orderBy').addEventListener('change', (select) => {
    console.log(select.target.value);
    let arrOrder;
    switch (select.target.value) {
        case "alphabet": 
            arrOrder = data.films.sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                }
                if (a.title > b.title) {
                    return 1
                }
                return 0
            });
        break;
        case "year": 
            arrOrder = data.films.sort((a, b) => {
                return (a.release_date - b.release_date);
            });
        break;
        case "preference": 
            arrOrder = data.films.sort((a, b) => {
                return (b.rt_score - a.rt_score);
            });
        break;
    }
    showCards(arrOrder);
});











