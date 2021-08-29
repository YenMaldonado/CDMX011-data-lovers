/* eslint-disable no-unused-vars */
import moduleData from './data.js';

import data from './data/ghibli/ghibli.js';


window.addEventListener("load", function () {

    //Imprimir data en html
    const showData = document.getElementById("recover");
    showCards(data.films);

    document.querySelector('#orderBy').addEventListener('change', (event) => {
        event.target.value;
        let printOrder = moduleData.orderCards(event.target.value, data);
        showCards(printOrder);
    });

    //Evento de filtrado
    document.querySelector("#director").addEventListener('change', (event) => {
        // console.log(event.target.value);
        let printFilter = moduleData.selectFilter(event.target.value, data, "director");
        showCards(printFilter);
    });
    //Evento de ordenado
    document.querySelector("#producer").addEventListener('change', (event) => {
        //console.log(event.target.value);
        let printFilter = moduleData.selectFilter(event.target.value, data, "producer");
        showCards(printFilter);
    });

    //Función de filtrado
    let selectFilm = document.querySelectorAll(".cards");
    for (let i = 0; i < selectFilm.length; i++) {
        selectFilm[i].addEventListener("click", function () {
            let idData = selectFilm[i].getAttribute("id");
            let findMovie = data.films.find((movie) => {
                return movie.id === idData;
            });
           //console.log(findMovie);
        });
    }

    //funcion de Ordenado
    function showCards(infoCards) {
        showData.innerHTML = "";
        infoCards.forEach(viewData => {
            let card = document.createElement("card");
            card.innerHTML = recoverData(viewData, "cards");
            showData.appendChild(card);
        });
    }

    function recoverData(cardDetails, templateType) {
        let printData = "";
        switch (templateType) {
            case "cards":
                printData = `
            <div class="row"> 
                 <div class="cards" id="${cardDetails.id}"> 
                    <img src="${cardDetails.poster}" height= "220px"; width= "160px;"/>
                    <h7>${cardDetails.title}</h7>  
                    <!-- <p>Release Date: ${cardDetails.release_date}</p>
                    <p>Score: ${cardDetails.rt_score}</p> -->         
                </div>
            </div>`;
                return printData;

            case "details":
                printData = `
            <div class="details">
                <img src="${cardDetails.poster}"/>
                <p>${cardDetails.title}</p>
                <p>Año de Lanzamiento: ${cardDetails.release_date}</p>
                <p>Calificación: ${cardDetails.rt_score}</p>
                <p>${cardDetails.description}</p>
                <h5>DATOS ADICIONALES</h5>
                <h7>People</h7>
                <h7>Vehicles</h7>
                <h7>Locations</h7>
            </div>`;
                return printData;
        }
    }

    //Función para mostrar dato estadístico
    function showStatistics(dataHumans) {
        let humans = 0;
        let another = 0;
        let chart;
        document.createElement("tableChart");
        dataHumans.films.forEach(movies => {
            movies.people.forEach(species => {
                if (species.specie === "Human") {
                    humans++;
                } else {
                    another++;
                }
            });
        });
        let totalSpecies = humans + another;
        //console.log(totalSpecies);
        let percentHuman = parseInt(humans / totalSpecies * 100);
        //console.log(percentHuman);
        let percentAnother = parseInt(another / totalSpecies * 100);
        //console.log(percentAnother);
        chart = `<div id = "indicators">
            <table>
                <tr>
                    <th>HUMAN SPECIES</th>
                    <th>ANOTHER SPECIES</th>
                </tr>

                <tr>
                    <td>${percentHuman}%</td>
                    <td>${percentAnother}%</td>
                </tr>
            </table>
        </div>`;
        document.getElementById("tableChart").innerHTML = chart;
    }
    //console.log(showStatistics(data));

});
