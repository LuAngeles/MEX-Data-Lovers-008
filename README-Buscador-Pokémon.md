# Buscador Pokémon.
![alt text](https://media.redadn.es/imagenes/pokemaster_282979.jpg)
## Resumen del proyecto 📄

Buscador Pokémon es un proyecto en el cual se construyó   **una  _aplicación web_  para visualizar, filtrar y ordenar un  _conjunto de datos_** que, para este caso corresponden a una base de datos (data) de los 151 Pokémones de la región Kanto, incluyendo estadísticas usadas en el juego  Pokémon GO.

## Alcances del proyecto

A partir de una base de datos de pokémones, desarrollar un buscador web de pokémones, donde los usuarios puedan visualizar las características principales de los 151 pokémones (Id, nombre y tipo); así como, tener la opción de filtrar por tipo y/o ordenarlos alfabéticamente de manera ascendente o descendente.

## Descripción del proyecto 📚

Para comenzar a realizar este buscador Pokémon nos vimos en la tarea de realizar encuestas a amigos, compañeros de trabajo y personas en club de fans en Facebook con el fin de conocer las necesidades de los usuarios que se encuentran familiarizados o con interés en descubrir el mundo Pokémon al buscar información. [Encuesta - Buscador Pokémon](https://www.google.com).

Los resultados obtenidos por cada una de las preguntas realizadas en la encuesta, pueden observarse a continuación: 

![](https://media.giphy.com/media/Vg69boLBx7H7XZYVDA/giphy.gif)

![](https://media.giphy.com/media/LNr6Roza3Uev4yOPfy/giphy.gif)

![](https://media.giphy.com/media/L3dMXaur3Tly7U5Z7t/giphy.gif)

 
La mayoría de los resultados de la encuesta nos lleva a considerar que los usuarios son  del género masculino, de entre 26 y 30 años que juega un día a la semana, solo, como entrenador, donde su tipo de Pokémon favoritos : fuego, dragón, agua, ya que los consideran poderosos y de mejor estabilidad. Así mismo, ellos prefieren que la información más importante en una interfaz sea: nombre, imagen, tipo de Pokémon, fortalezas y debilidades.

De los últimos resultados de la encuesta, donde los usuarios nos comentaron que pasan menos de una hora buscando información y que pueden vivir sin dichos buscadores, fue justo  donde inició nuestro proceso de diseño,debido a que requieren una aplicación que sea fácil de entender y donde se visualice la información que consideran más importante.

### Historias de Usuario 👧 👦

Después de evaluar los resultados de las encuestas, se llevaron a cabo cuatro entrevistas hacia nuestros posibles usuarios, de las cuales pudimos obtener la siguiente información. 

Andy tiene 26 años y acaba de instalar la aplicación de Pokémon Go, por lo cual no tiene tanta familiaridad con los pokémones, así que ella necesita una página en la cual pueda ver a los primeros 151 de la región Kanto.

Miguel de 27 años de edad, fan del mundo Pokémon, ya conoce a los pokémones de la primera temporada (región Kanto); sin embargo, él nos solicita una página Web en la cual pueda recordarlos de acuerdo al tipo de pokémon, principalmente: fuego, agua y hierba, por Charmander, Squirtle y Bulbasur, respectivamente. 

Sergio de 29 años, fan del mundo Pokémon y actual jugador de Pokémon Go, no le gustan los buscadores de información de Pokémon porque considera que vienen datos innecesarios; cuando él solo requiere entra a una página Web en la cual, se puedan ordenar los pokémones de acuerdo a su nombre y solo conocer el tipo al que corresponde cada uno; así como, sus respectivas deebilidades.

Antonio de 30 años, fan del ánime y de Pokémon Go, conocedor de los pokémones de todas las temporadas, por lo cual le gusta investigar todo sobre ellos y en ésta ocasión nos comentó que se le haría muy interesante saber el peso promedio de los pokémones de la primera generación. 


# Prototipado 📏📐

De acuerdo a la información obtenida de nuestras encuestas y entrevistas acerca del diseño y la información que al usuario le gustaria visualizar una página Web con detalles del mundo Pokémon y, a su vez, una página clara, fácil de leer y/o accesible tanto para usuarios principiantes, como para conocedores del tema. Es por ello que, se realizaron dos prototipos, primero de baja fidelidad y el segundo de alta fidelidad. 

#### Prototipo de baja fidelidad.
El prototipo de baja fidelidad se realizo en lápiz y papel, en el cual se manejaban cuatro secciones: 
    1. Página de Inicio, con la opción de visualizar los pokémones por tipo.
    2. Al seleccionar por tipo de Pokémon, el usuario al darle click elegía qué tipo deseaba visualizar.
    3. -una vez seleccionado por tipo, el usuario podría ver cada uno de los pokémones, presentando solo el Id, nombre y sus evoluciones.
    4. Si deseaban más información a detalle, podrían hacerlo; siempre y cuando le dieran click al pokémon en específico.

![](https://media.giphy.com/media/Q5ACS6lPE73htQQTiF/giphy.gif)


#### Prototipo de alta fidelidad.
El prototipo de alta fidelidad se desarrolló tomando en cuenta las consideraciones del prototipo de baja fidelidad, llevándolo a cabo  en [gomockingbird](https://www.gomockingbird.com/home), herramienta para maquetado de páginas Web.


![](https://media.giphy.com/media/L3Pw9UnaYHQ2IVvEYW/giphy.gif)

### Problemas detectados en los test de usabilidad.

En un primer sprint, nuestro grupo de trabajo, dio como feedback del proyecto que, es necesario presentar un botón de instrucciones y mostrar todos los Pokémones para no confundir al usuario cuando no ve nada en la página principal. Una vez presentando a todos los pokémones, ahora si, ellos puedan tener la opción de filtrar la data, de acuerdo a sus preferencias. 

Otra cosa que nos hicieron notar fueron los colores y tipo de letra, ya que algunos Pokémones se confunden con el color de fondo de las tarjetas.

Tambien el menú donde se contienen los filtros para escoger se rediseño para no estorbar en la pagina, y que no obstruya la visualizacion de las tarjetas. 

## Producto Final.

Tuvimos dificultad para desarrollar lo planteado en los prototipos, ya que fue corto el tiempo del proyecto y aún no se tuvo el 100% de todos los conocimientos para insertar todas las imágenes y botones que se habían presentado en dichos prototitpos. Quedando como página Web final la que a conitnuación se presenta. 

![BuscadorPokemon](https://media.giphy.com/media/jQcCxZcfKfKweLRq7s/giphy.gif)

# Desarrollo. :computer:

Herramientas utilizadas para el desarrollo de este proyecto:

-   HTML.
    
-   JavaScript.
    
-   CSS.
    

Construido con:

-   Visual Studio Code, editor de código fuente.

### ¿Cómo puedo descargar, instalar y modificar este proyecto?

-   Necesitas forkear este repositorio y clonarlo en tu computadora.
    
-   Tener un editor de texto.
    
-   Instalar Node.js y la librería de Mocha.
    
-   Para ejecutar los test, debes correr en tu terminal npm run test.
    

### ¿Cómo ejecutar este proyecto?:globe_with_meridians:

Solo necesitas un navegador y dar click en el siguiente link:



## Autores ✒️

Este proyecto fue desarrollado e implementado por:

- **Guadalupe Isidro**   [LuAngeles](https://github.com/LuAngeles).
-  **Mercedes Dávila Vázquez**  [MercedesDavila](https://github.com/MercedesDavila).

#### Extra.
#####  Checklist.:ballot_box_with_check:

 - [x] Usa VanillaJS.
 - [x] No hace uso de  `this`.
- [x]   Pasa linter (`npm pretest`)
- [x] Pasa tests (`npm test`)
- [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y lines y branches.
- [x] Incluye  _Definición del producto_  clara e informativa en  `README.md`.
- [x] Incluye historias de usuario en  `README.md`.
- [x]  Incluye  _sketch_  de la solución (prototipo de baja fidelidad) en  `README.md`.
- [x] Incluye  _Diseño de la Interfaz de Usuario_  (prototipo de alta fidelidad) en  `README.md`.
- [x]   Incluye el listado de problemas que detectaste a través de tests de usabilidad en el  `README.md`.
- [x]  UI: Muestra lista y/o tabla con datos y/o indicadores.
- [x] UI: Permite ordenar data por uno o más campos (asc y desc).
- [x] UI: Permite filtrar data en base a una condición.

## Checklist (Hacker Edition)

- [ ]   Consume data de forma dinámica (`fetch()`).
- [ ]   Utiliza Librerías de graficas (`chart.js`  ó  `google chart`).
- [ ]  Cobertura de coverage al 100%.
