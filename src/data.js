// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


//const example = () => {
  //return 'example';
//};

//window.example = example;

//FUNCIÓN PARA ORDENAR DE LA A-Z Y Z-A//
const sorData = (dataPokemon, sortBy, sortOrder) => {
  let pokemonOrder = [];
  switch (sortOrder) {
      case 'ASC': //  Ordenar de manera ascedente
          if (sortBy === 'name') {
              pokemonOrder = dataPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));
          }
          break;

      case 'DESC': // Ordenar de manera descendente
          if (sortBy === 'name') {
              pokemonOrder = dataPokemon.sort((a, b) => (a.name < b.name ? 1 : -1));
          }
          break;
    
  }
  return pokemonOrder;
};

window.sorData = sorData;

//FUNCIÓN PARA FILTRAR POR TIPOS DE POKÉMON //
// const typesPok=(pokeId)=>{
//   let type=baseData.filter((el)=> el.type.find(tipo=>tipo===(pokeId))) //el=elemento que irá recorriendo y/o buscando dentro del arreglo 'type' el valor de 'Grass'//
//   return type;
// }
// window.typesPok=typesPok;

const filterBy = (data, condition) => { /* Función para filtrar los pokemones por tipos */
  const filterbytype = data.filter(element => {
      for (let i = 0; i < element.type.length; i++) {
          if (element.type[i] === condition) {
              return 1;
          }
      }
  });
  return filterbytype;
};

window.filterBy = filterBy;


// //FUNCIÓN PARA SUMAR TODOS LOS ELEMENTOS DE UN ARREGLO (En mi caso fue para obtener el peso total de los pokémones)//
// const sumWeight=(onlyNumWeight)=>{
//   let weight=(onlyNumWeight).reduce((accumulator,currentValue)=>accumulator+currentValue);
//   return weight;
// }
// window.sumWeight=sumWeight;
