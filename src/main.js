import moduleData from './data.js';

import data from './data/ghibli/ghibli.js';


window.addEventListener("load", function (e) {

    //Imprimir data en html
    const showData = document.getElementById("recover");
    const showOptions = document.getElementById("byFilter");
    let showFilter = document.getElementsByClassName("filtered");
    let printData = "";
    let printFilter ="";
    showCards(data.films);

    document.querySelector('#orderBy').addEventListener('change',(event) => {
       event.target.value;
       let printOrder = moduleData.orderCards(event.target.value, data);
       showCards(printOrder);
    });

    //Función de filtrado
    document.querySelector("#director").addEventListener('change', (event) => {
        console.log(event.target.value);
        let printFilter = moduleData.selectFilter(event.target.value, data, "director");
        showCards(printFilter);
    }); 
    document.querySelector("#producer").addEventListener('change', (event) => {
        console.log(event.target.value);
        let printFilter = moduleData.selectFilter(event.target.value, data, "producer");
        showCards(printFilter);
    }); 
    
    //funcion de Ordenamiento
    function showCards(infoCards) {
        showData.innerHTML = "";
        infoCards.forEach(viewData => {
            let card = document.createElement("card");
            card.innerHTML = recoverData(viewData, "cards");
            showData.appendChild(card);
        });
    }
    let elemCards = document.querySelector(".cards");
    if (elemCards !== null);
     
    function recoverData(cardDetails, templateType) {
        if (templateType === "cards") {
            printData = `
            <div class="row"> 
                 <div class="cards" id="${cardDetails.id}"> 
                    <img src="${cardDetails.poster}" height= "220px"; width= "160px;"/>
                    <h7>${cardDetails.title}</h7>  
                    <!-- <p>Release Date: ${cardDetails.release_date}</p>
                    <p>Score: ${cardDetails.rt_score}</p> -->         
                </div>
            </div>`;

        } else {
            printData = `
            <div class="details">
                <img src="${cardDetails.poster}"/>
                <p>${cardDetails.title}</p>
                <p>Año de Lanzamiento: ${cardDetails.release_date}</p>
                <p>Calificación: ${cardDetails.rt_score}</p>
                <p>${cardDetails.description}</p>
            </div>`;  
        }
        return printData;
    }

    let selectFilm = document.querySelectorAll(".cards");

    for (let i=0; i < selectFilm.length; i++){
        selectFilm[i].addEventListener("click", function (){
            let idData = selectFilm[i].getAttribute("id");
            let findMovie = data.films.find((movie) => {
                //console.log(movie); 
                return movie.id === idData;              
            }); 
            console.log(findMovie);
        });       
    }; 
});    