# HTML02: HTML Básico

## Estructura de la Pagina

El inicio de la pagina es marcado por la etiqueta  `<html>` y su respectivo cierre `</html>` . Esta etiqueta nos indica que lo que sea que este dentro, corresponde a código HTML.

Dentro de la pagina, hay dos secciones claves: la cabecera y el cuerpo, las cuales contienen las etiquetas respectivas `<head>` y `<body>`. En la cabecera se incluyen algunos elementos importantes que nos ayudan a definir nuestra pagina: etiqueta de *metada* (`<meta>`), hojas de estilos e incluso *scripts*. 

Algunas de estas etiquetas de metada, contiene el atributo `charset="utf-8"` , este atributo es una declaración de codificación de caracteres ([character encoding declaration](https://www.w3.org/TR/2014/REC-html5-20141028/document-metadata.html#character-encoding-declaration)), le indica a nuestro documento que tipo de codificación va a utilizar, debe ser el primer atributo de metadata que se debe especificar, ya que nos permite tener disponible los caracteres que luego serán necesarios en otros elementos como `<title>` . El cual es, por cierto, el único elemento visible por el usuario que reposa dentro de `<head>`

Mientras que el cuerpo, se ubica el contenido visible de la pagina.

## Declaración `<!DOCTYPE html>`

Esta declaración, nos permite indicarle al explorador, que versión de HTML esta usando esta pagina en concreto. Esto se debe a que hay varias versiones de HTML, por lo cual cada pagina debería empezar con esta declaración, para ayudar al navegador a mostrar la pagina de forma correcta. 

Al usar la sintaxis `<!DOCTYPE html>` le estamos especificando al explorador, que nuestro documento usa la versión 5 de HTML. Así mismo, esta etiqueta es la única etiqueta sin cierre y la única etiqueta la cual escribiremos en mayúscula. 

## Encabezados

Los encabezados se definen con etiquetas que van desde el `<h1>` hasta el `<h6>`, sin embargo por razones de SEO, se recomienda usar estas etiquetas con la jerarquía que merecen, siendo esta la recomendada: 

[Untitled](HTML02%20HTML%20Ba%CC%81sico%20ea5f53e1c410406f92886d158aef06d3/Untitled%20Database%20fb3faedfa7b6444b96d871a9dde52068.csv)

## Párrafos

Se usa las etiquetas `<p>` y `</p>`, no hace falta usar la etiqueta `<br />` para el quiebre de linea entre párrafos, ya que el explorador de forma predeterminada deja un espacio entre párrafos. Es sumamente importante la tabulacion correcta, el identado en HTML para que no haya descuentos en las puntuaciones. 

## Saltos de Linea

Es importante tener en cuenta que HTML ignora cualquier espacio adicional a una sola unidad, sin importar cuando espacio haya, siempre este espacio colisionara en uno solo, esto se conoce como *white space collapsing.* 

En caso de que se desee visualmente hacer un salto y quiebre de linea, se logra usando la etiqueta `<br />` , es importante no abusar de su uso. 

## Enlaces

La navegación en las paginas webs se logra gracias a enlaces, conocidos como hiper texto. De esta manera, el usuario puede navegar dentro y fuera de la pagina web en la cual se encuentra. 

Para crear estos enlaces usamos la etiqueta `<a>` , esta etiqueta tiene un atributo `href`  el cual proviene de *hyperlink reference.* El valor de ese atributo es la dirección relativa o absoluta de la pagina web o recurso al cual deseamos acceder. 

### Rutas absolutas y rutas relativas

Hay dos tipos de rutas o URL, las absolutas son aquellas en las cuales es necesario incluir la totalidad de la misma, esto incluye el protocolo, el servidor y la ruta. Mientras que las URL relativas, prescinden del protocolo y el servidor, haciendo que la URL sea mas corta. 

## Imágenes

Para insertar imágenes, usamos la etiqueta `<img>` . La ruta u URL podrá ser especificada como valor del atributo `src` . Los elementos `<img>` siempre deben contener tres atributos claves: `src` , `alt` y `title`.

## Elementos Anidados

Anidar o *nesting*, es el colocar un elemento dentro de otro. De la misma manera que colocamos los elementos <head> y <body> dentro del elemento <html>, también podemos colocar una imagen dentro de un enlace, haciendo que la imagen sea clickable, con lo cual nos abriría una nueva pagina. 

## Etiquetas sin Contenido

Hemos visto que hay etiquetas las cuales no es necesario finalizar con una etiqueta de cierre, estos elementos se conocen como [elementos vacíos](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element) (*empty elements*)**.** Estos elementos tienen la particularidad también la cual no les permite tener elementos anidados dentro de ellos, o sea *child nodes.*

## Mayúsculas y minúsculas

Las etiquetas HTML se pueden escribir en mayúscula, sin embargo se ha estandarizado en el consorcio de la W3C, que la forma de escribir las etiquetas y atributos y es siempre en minúsculas. Esta por cierto, es una regla estricta de HTML o XHTML.