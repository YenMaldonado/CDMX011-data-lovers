// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};


export const anotherExample = () => {
  return 'OMG';
};*/

export const example = function changeSelect(e) {
 
   let arrFilter;
 
   switch (e) {
 
       case "Hayao Miyazaki":
           arrFilter = data.films.filter(dir => selection === "Hayao Miyazaki");
           break;
 
       case "Isao Takahata":
           arrFilter = data.films.filter(dir => director === "Isao Takahata");
           break;
 
       case "Yoshifumi Kondo":
           arrFilter = data.films.filter(dir => director === "Yoshifumi Kondo");
           break;
 
       case "Hiroyuki Morita":
           arrFilte = data.films.filter(dir => director === "Hiroyuki Morita");
           break;
 
       case "Goro Miyazaki":
           arrFilter = data.films.filter(dir => director === "Goro Miyazaki");
           break;
 
       case "Hiromasa Yonebagashi":
           arrFilter = data.films.filter(dir => director === "Hiromasa Yonebagashi");
           break;

        case "Isao Takahata":
          arrFilter = data.films.filter(prod => producer === "Hiromasa Yonebagashi");
          break;
   } return 'example';
   
 }