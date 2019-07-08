//Working with help button-instructions
const helpButton = document.getElementById('help-button');
const closeButton = document.getElementById('close');
const returnButton = document.getElementById('return-button');


//Function that hide section with id
const hideSection = (id) => {
        document.getElementById(id).classList.add('hide');
    }
    //Function that show section with id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
}


//Functionability for help button and close button
const showInstructions = () => showSection('instructions');
const closeInstructions = () => hideSection('instructions');

helpButton.addEventListener("click", showInstructions);
closeButton.addEventListener("click", closeInstructions)

//BotonInicio

const goBack = document.getElementById('return-button');

const goback = () => { 
    hideSection('dataPokemon');
    hideSection('tipos-Pokemon')    
    showSection('PaginaInicio');
}

goBack.addEventListener("click", goback);



//Seccion Pokemones
const AllPokemon = document.getElementById('show-button');

const openPokedex = () => {
    hideSection('PaginaInicio');
    hideSection('type-pokemon');
    showSection('dataPokemon');
    showSection('tipos-Pokemon');
}

AllPokemon.addEventListener("click", openPokedex);    



// Función para mostrar la data en html //
//Data

const baseData = POKEMON.pokemon;
const card = document.getElementById("dataPokemon");

const cardData = (baseData) => {
    let str = ''
    baseData.forEach(element => {
        str +=
            `<div class="Pokedex">
        <div class= "card">
        
        <p>Num. ${element.num}</p>
       
        <div class="img">
        <img src="${element.img}"></img>
        </div>
        
        <div class="info">
        <p>${element.name}</p>
        
         <p>${element.type}</p>
        </div>
        </div>
        </div>`

    });

    card.innerHTML = str
};
cardData(baseData)


///Para que me aparezcan los tipos de pokemon existentes en la data ///
//let tipoPok=[]
//for(let i=0;i<baseData.length;i++){ 
//  tipoPok = console.log(baseData[i].type);
  //tipoPok.push(baseData[i].type);
//}




// sección para segundo filtro por tipo de pokémon //


    /////////////////////////////////
    //Menú para clasificar los pokémones por tipo//
const pokTypeMenu=document.getElementById('main-type')    //Mandará llamar el menú donde aparecen los tipos de pokémones
const closePokTypeMenu=document.getElementById('close-2') //Botón para cerrar el menú donde aparecen los tipos de pokémones

const openTypeMenu = () =>{showSection('type-pokemon')}   //función para mostrar el menú o las opciones por tipo
const closeTypeMenu = () =>{ //función para ocultar el menú o las opciones por tipo
  hideSection('type-pokemon');
  }  
  
   
pokTypeMenu.addEventListener("click",openTypeMenu);       //Al dar click se abrirá el menú por tipos
closePokTypeMenu.addEventListener('click',closeTypeMenu); //Al dar click se cerrará el menú por tipos
  

/////////////////// PRUEBA CON TARGET ///////////////////////////
const button = document.getElementsByClassName('buttonType') //Esta variable se manda llamar por la clase que tiene cada uno de los botones//
console.log(button)

const targetPok=(event)=>{
const pokeId  = event.target.id //Como todos los botones tienen la misma clase, lo que hace ésta función es buscar el id del tipo de pokémon que el usuario quiere buscar//
const grassPok=baseData.filter((el)=> el.type.find(tipo=>tipo===pokeId)); //el=elemento que irá recorriendo y/o buscando dentro del arreglo 'type' el valor de 'Grass'//
  if(pokeId=='return'){
  cardData(baseData);
}else{
//console.log(grassPok)
cardData(grassPok)
//event.target.id
}
};
for(let i = 0; i < button.length ; i++){
  button[i].addEventListener('click' , targetPok); //Lo que hace el for es que de todos los botones que tengan esta clase, buscará el id//
     
     }
     
     
/////////// Para obtener estadísticas de la data ///////////
let spawnChancePok=[]
for(let i=0;i<baseData.length;i++){ 
  //spawnChancePok = console.log(baseData[i].spawn_chance);
  spawnChancePok.push(baseData[i].spawn_chance);
}
let average=spawnChancePok.length;

let sum=spawnChancePok.reduce((accumulator,currentValue)=>accumulator+currentValue);
 average=sum/average;


 




