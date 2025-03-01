Test de front-end una landing page hecha en html y css puro, JavaScript solo para facilitar ciertas cosas.
## Estructura del proyecto

- `index.html`: Archivo principal HTML que contiene la estructura de la página.
- `styles/`: Carpeta que contiene los archivos CSS (aunque es uno solo haha).
- `js/`: Carpeta que contiene el archivo JavaScript principal.
  - `script.js`: Archivo JavaScript se inicializa Swiper y se maneja un pequeño evento en el form.
- `assets/`: Carpeta que contiene los recursos estáticos del proyecto.
  - `portada/`: Carpeta para las imágenes del slider.
  - `logos/`: Carpeta para los logos de la empresa y tarjetas visa.
  - `iconos/`: Carpeta para los iconos svg de los servicios del proyecto.
  - `customers/`: Carpeta para los iconos svg de los clientes.

## Decisiones de diseño

- **Mobile first:** me enfoque en hacer el diseño bajo la filosofia mobile first, las media query son para cambiar a las pantallas mas grandes
y no al revez, como el telefono es el mayor medio de consumo es el mejor enfoque a tomar aun asi hay muchas personas que aun usan
las medias querys para ajustar el diseño al telefono

- **Vanilla CSS:** La verdad no soy partidario de usar prepocesadores como SCSS o SASS si bien si es el requerimiento lo usaria
ademas que conozco de sus ventajas, creo que para esta tipo de proyecto un enfoque con vanilla css es mas que suficiente, CSS
hoy dia tiene muchas caracteristicas que nos evitan el uso de los preprocesadores.

- **Sin animaciones:** A pesar de que en el paper de este proyecto se buscaba usar AOS para hacer animaciones, por cuestiones
de tiempo y gusto decidi no usarlo, al igual que con los de SASS me parece innecesario usar una libreria JS para implementar
animaciones en la pagina, si bien en esta no hice ninguna ni si quiera con el mismo vanilla CSS no quiere decir que no se pueda
lograr resultados impresionantes de esta manera

## Puntos a destacar

por temas de tiempo no pude implementar caracteristicas que bien me gustaria mencionar son importante

1. Optimizacion de las imagenes: los assets provisto para el slider entre otros, estaban en excelente calidad, pero esto es un punto 
que puede jugar en contra a la hora de buscar mejor SEO, asi como tambien puede perjurdicar la UX, desde que calidades tan alta de imagen 
son inutiles en dispositivos mobiles, pueden afectar fuertemente a usuarios que utilicen datos moviles, ademas de por supuesto
rentalizar la carga y rendimiento, esto se puede solucionar por medio de del atributo sizes y srcset, pero requiere de algo de
tiempo para adaptar cada image a los tamaños de pantalla apropiados.

2. Uso de svg dentro de img: la mayoria de los svg fueron directamente cargados por medio del src de la etiqueda img, dado
que el codigo de estos podia ocupar una buena cantida de tamaño del html, haciendo mas dificil de leer y depurar este codigo
lastimosamente este acercamiento hace que perdamos la capacidad de animar y manipular los svg por medio de sus propiedades o CSS
esto bien podria solucionarse con el siguiente punto que expondre.

3. Uso de frameworks: soy partidario de ser minimalista y usar solo HTML, CSS y javascript en tus proyectos personales, ya que
el tiempo  no sera un limitante, pero para trabajo real a este tipo de proyecto le vendria bien el uso de un herramienta como
Astro, que nos permitiria separar mejor el codigo en componentes pero al final si no fue usado nada de javascript los componentes
seran renderizados como HTML puro evadiendo el problema que puede traer el uso de herramientas como react que esta mas pensadas
para apps web o similares, para una landing page astro viene realmente bien, es como yo abordaria un proyecto de este tipo.