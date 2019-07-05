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
    hideSection('tipos')
    showSection('PaginaInicio');
}

goBack.addEventListener("click", goback);



//Seccion Pokemones
const AllPokemon = document.getElementById('show-button');

const openPokedex = () => {
    hideSection('PaginaInicio');
    hideSection('tipos');
    showSection('dataPokemon');
    showSection('tipos-Pokemon');
}

AllPokemon.addEventListener("click", openPokedex);    



// Función para mostrar la data en html //
//Data

const baseData = POKEMON.pokemon;
const card = document.getElementById("dataPokemon");

const cardData = () => {
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
cardData()


///Para que me aparezcan los tipos de pokemon existentes en la data ///
//let tipoPok=[]
//for(let i=0;i<baseData.length;i++){ 
//  tipoPok = console.log(baseData[i].type);
  //tipoPok.push(baseData[i].type);
//}

// sección para primer filtro ordene de la A-Z//
///Para que me aparezcan los nombres de pokemon existentes en la data ///
let namePok=[];
for(let i=0;i<baseData.length;i++){ 
   // namePok = console.log(baseData[i].name);
    namePok.push(baseData[i].name);
}
const orderName=namePok.sort();




// sección para segundo filtro por tipo de pokémon //


    /////////////////////////////////
    const pokemonType = document.getElementById('tipos-Pokemon');
    const openType = () => {
        hideSection('tipos-Pokemon');
        hideSection('dataPokemon')
        showSection('tipos');
    }
    
  pokemonType.addEventListener("click", openType);   



const button = document.getElementsByClassName('buttonType')
//console.log(button)

const targetPok=(event)=>{
console.log(event.target.id);
//event.target.id
}

for(let i = 0; i < button.length ; i++){
    button[i].addEventListener('click' , targetPok);
 

  }
  const typePokemon=baseData.filter(function(el){
    return el.type.find(targetPok);
  });
cardData(targetPok)

 




    //Filtro para que aparezcan por tipo hierba//
//const grassPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
  //      return el.type.find(tipo=>tipo==='Grass');
        
//});
  //      console.log(grassPok);
//const grassType=document.getElementById('Grass-pokemon');
//const cardGrass=()=>{
  //  let grassStr=''
    //     grassPok.forEach(element =>{
      //      grassStr += `<div class=card>
        //    <p>${element.num}</p>
          //  <img src="${element.img}"></img>
           // <p>${element.name}</p>
            //<p>${element.type}</p>
            //</div>`
//});
//grassType.innerHTML=grassStr
//};
//cardGrass()

    //Filtro para que aparezca por tipo veneno//
const poisPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
    return (el.type[0]=='Poison');
});
const poisType=document.getElementById('poison-pokemon');
const cardPoison=()=>{
    let poisStr=''
        poisPok.forEach(element =>{
            poisStr += `<div class=card>
            <p>${element.num}</p> 
            <img src="${element.img}"></img>
            <p>${element.name}</p>
            <p>${element.type}</p>
            </div>`
});
poisType.innerHTML=poisStr
};
cardPoison()

  //Fitlro para que aparezca por tipo suelo//
const groundPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
   return (el.type[0]=='Ground');
});
const groundType=document.getElementById('ground-pokemon');
const cardGround=()=>{
    let groundStr=''
        groundPok.forEach(element =>{
            groundStr += `<div class=card>
            <p>${element.num}</p>
            <img src="${element.img}"></img>
            <p>${element.name}</p>
            <p>${element.type}</p>
            </div>`
});
groundType.innerHTML=groundStr;
};
cardGround()  

  //Fitlro para que aparezca por tipo eléctrico//
const elecPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
    return (el.type[0]=='Electric');
});
const elecType=document.getElementById('electric-pokemon');
const cardElectric=()=>{
    let elecStr=''
        elecPok.forEach(element =>{
        elecStr += `<div class=card>
        <p>${element.num}</p>
        <img src="${element.img}"></img>
        <p>${element.name}</p>
        <p>${element.type}</p>
        </div>`
});
elecType.innerHTML=elecStr;
};
cardElectric()  

  //Fitlro para que aparezca por tipo fuego//
const firePok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
  return (el.type[0]=='Fire');
});
const fireType=document.getElementById('fire-pokemon');
const cardFire=()=>{
    let fireStr=''
        firePok.forEach(element =>{
        fireStr += `<div class=card>
        <p>${element.num}</p>
        <img src="${element.img}"></img>
        <p>${element.name}</p>
        <p>${element.type}</p>
        </div>`
});
fireType.innerHTML=fireStr;
};
cardFire() 

  //Filtro para que aparezca por tipo hielo//
const icePok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
    return (el.type[0]=='Ice');
});
const iceType=document.getElementById('ice-pokemon');
const cardIce=()=>{
    let iceStr=''
        icePok.forEach(element =>{
        iceStr += `<div class=card>
        <p>${element.num}</p>
        <img src="${element.img}"></img>
        <p>${element.name}</p>
        <p>${element.type}</p>
        </div>`
});
iceType.innerHTML=iceStr;
};
cardIce() 

  //Filtro para que aparezca por tipo roca//
const rockPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
    return (el.type[0]=='Rock');
});
const rockType=document.getElementById('rock-pokemon');
const cardRock=()=>{
    let rockStr=''
        rockPok.forEach(element =>{
        rockStr += `<div class=card>
        <p>${element.num}</p>
        <img src="${element.img}"></img>
        <p>${element.name}</p>
        <p>${element.type}</p>
        </div>`
});
rockType.innerHTML=rockStr;
};
cardRock() 

  //Filtro para que aparezca por tipo normal//
const normalPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
    return (el.type[0]=='Normal');
});
const normalType=document.getElementById('normal-pokemon');
const cardNormal=()=>{
    let normalStr=''
        normalPok.forEach(element =>{
        normalStr += `<div class=card>
        <p>${element.num}</p>
        <img src="${element.img}"></img>
        <p>${element.name}</p>
        <p>${element.type}</p>
        </div>`
});
normalType.innerHTML=normalStr;
};
cardNormal() 

  //Filtro para que aparezca por tipo volador//
const flyPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
    return (el.type[1]=='Flying');
});
const flyType=document.getElementById('flying-pokemon');
const cardFly=()=>{
    let flyStr=''
        flyPok.forEach(element =>{
        flyStr += `<div class=card>
        <p>${element.num}</p>
        <img src="${element.img}"></img>
        <p>${element.name}</p>
        <p>${element.type}</p>
        </div>`
});
flyType.innerHTML=flyStr;
};
cardFly() 

  //Filtro para que aparezca por tipo psíquico//
  const psycPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
    return (el.type[0,1]=='Psychic');
});
const psycType=document.getElementById('psychic-pokemon');
const cardPsyc=()=>{
    let psycStr=''
        psycPok.forEach(element =>{
        psycStr += `<div class=card>
        <p>${element.num}</p>
        <img src="${element.img}"></img>
        <p>${element.name}</p>
        <p>${element.type}</p>
        </div>`
});
psycType.innerHTML=psycStr;
};
cardPsyc() 

  //Filtro para que aparezca por tipo agua//

const waterPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
    return (el.type[0]=='Water');
});
const waterType=document.getElementById('water-pokemon');
const cardWater=()=>{
    let waterStr=''
        waterPok.forEach(element =>{
        waterStr += `<div class=card>
        <p>${element.num}</p>
        <img src="${element.img}"></img>
        <p>${element.name}</p>
        <p>${element.type}</p>
        </div>`
});
waterType.innerHTML=waterStr;
};
cardWater() 

  //Filtro para que aparezca por tipo peleador//

  const fightPok=baseData.filter(function(el){ //el es el equivalente del objeto dentro del arreglo, este es el que irá recorriendo//
    return (el.type[0]=='Fighting');
});
const fightType=document.getElementById('fight-pokemon');
const cardFight=()=>{
    let fightStr=''
        fightPok.forEach(element =>{
        fightStr += `<div class=card>
        <p>${element.num}</p>
        <img src="${element.img}"></img>
        <p>${element.name}</p>
        <p>${element.type}</p>
        </div>`
});
fightType.innerHTML=fightStr;
};
cardFight() 
