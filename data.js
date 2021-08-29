//estas funciones son de ejemplo

const moduleData = {

  orderCards (valueOption, data) {

    let arrOrder;
    switch(valueOption) {
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
    return arrOrder;
  },

  selectFilter(selectOption, data, typeFilter) {
    let arrFilter;
    if(typeFilter === "producer"){ 
      arrFilter = data.films.filter(function(film){
        return selectOption == film.producer;
      });    
    } else if (typeFilter === "director"){
      arrFilter = data.films.filter(function(film){
        return selectOption == film.director;
      });      
    }
    return arrFilter; 
  }
}; 
export default moduleData;