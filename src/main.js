import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

let elementSelect = document.createElement("select");
elementSelect.setAttribute("id","byFilter");
elementSelect.setAttribute("onchange", "changeSelect(this.value)");

window.addEventListener("load", function(e) {
    let some = document.getElementById("byFilter").addEventListener("click", (e)=>{
        console.log("example.changeSelect");
    });

    //Imprimir data en html
    const showData = document.getElementById("recover");
    const showOptions = document.getElementById("byFilter");
    //const showSelect = document.getElementById("filter2");
    showCards(data.films);
    //filterCards(data.films);

    //funcion de Ordenamiento
    //let titles = "";
    function showCards(infoCards) {
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

    //Función de filtrado desde select filtrar por:

    /*function filterCards(showFilter) {
        showOptions.innerHTML = "";
        showFilter.forEach(viewOptions => {
            let select = document.createElement("select");
            select.innerHTML = optionFilter(viewOptions);
            showOptions.appendChild(select);
        });
    } */

    function optionFilter(cardsFilter) {
        let printFilter = `<img src="${cardsFilter.poster}" height= "200px"; width= "150px;"/>
    <h7>${cardsFilter.title}</h7>`
        console.log(optionFilter);
    }

    document.querySelector('#typeFilter').addEventListener('change', (e) => {

        document.getElementById("select2").removeChild(document.getElementById("byFilter"));
        let selection = `<select id="byFilter" onchange="changeSelect(this.value)" ></select>;`; 
        let selectionFilter = document.createElement("option");
        
        switch (e.target.value) {
            case "director": 

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Hayao Miyazaki";
                selectionFilter.value ="Hayao Miyazaki";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Isao Takahata";
                selectionFilter.value = "Isao Takahata";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Yoshifumi Kondo";
                selectionFilter.value = "Yoshifumi Kondo";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Hiroyuki Morita";
                selectionFilter.value = "Hiroyuki Morita";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Goro Miyazaki";
                selectionFilter.value = "Goro Miyazaki";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = " Hiromasa Yonebagashi";
                selectionFilter.value = " Hiromasa Yonebagashi";
                elementSelect.add(selectionFilter);

                document.getElementById("select2").appendChild(elementSelect);
                break;

            case "producer":

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Isao Takahata";
                selectionFilter.value ="Isao Takahata";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Hayao Miyazaki";
                selectionFilter.value ="Hayao Miyazaki";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Toru Hara";
                selectionFilter.value ="Toru Hara";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Toshio Suziki ";
                selectionFilter.value ="Toshio Suziki ";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "Yoshiaki Nishimura ";
                selectionFilter.value ="Yoshiaki Nishimura ";
                elementSelect.add(selectionFilter);

                document.getElementById("select2").appendChild(elementSelect);
                break;

            case "year":
                selectionFilter = document.createElement("option");
                selectionFilter.text = "1986-1990";
                selectionFilter.value ="1986-1990";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "1991-1995";
                selectionFilter.value ="1991-1995";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "1996-2000";
                selectionFilter.value ="1996-2000";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "2001-2005";
                selectionFilter.value ="2001-2005";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "2006-2010";
                selectionFilter.value ="2006-2010";
                elementSelect.add(selectionFilter);

                selectionFilter = document.createElement("option");
                selectionFilter.text = "2011-2014";
                selectionFilter.value ="2011-2014";
                elementSelect.add(selectionFilter);

                document.getElementById("select2").appendChild(elementSelect);
                break;
        }
    
    },true);
});
document.querySelector('#typeFilter').addEventListener('change', (e) => {
    const select = document.getElementById("select3");
    const anios = data.films.release_date;
    console.log(anios);
});


