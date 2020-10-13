# Bloques de Diseno 

## Elementos Block y Inline 

Los elementos HTML pueden ser divididos en estas dos clases, elementos en bloque (*block*) y elementos en linea (*inline*). Cada elemento esta rodeado de una caja imaginaria. Los elementos en bloque, comienzan y acaban en una nueva linea, mientras que los elementos en linea continuan uno al lado del otro mientras tengan espacio en el eje de escritura. Una vez este espacio se acabe, haran *wrap* lo que significa que se iran a ocupar la proxima linea. 

Aqui hay algunos de cada uno:

### Elementos *Block*

```
<address>,<blockquote>,<fieldset>,<article>,<canvas>,<figcaption>,<figure>,<footer>,<form>,<h1>...<h6>,<header>,<hgroup>,<hr >,<pre>,<noscript>,<ol>,<output>,<section>, <table>, <tfoot>,<ul>,<p>,<video>  
```

### Elementos *Inline*

```
<b>,<i>,<acronym>,<cite>,<tt>,<abbr>,<em>,<kb d>,<strong>,<dfn>,<time>,<var>,<a>,<bdo>,<br>,<object>,<q>,<script>,<span>,<img>,<sub>,<code>,<samp>,<map>,<sup>,<button>,<input>,<label>,<select>,<textarea>.
```

## Elemento DIV

Este elemento es de tipo bloque y puede ser utilizado para agrupar otros elementos, sirviendo de contenedor. No tiene un significado semantico especial. Podemos usarlo sobre todo para aplicar estilos CSS a su contenido. 

Usar tablas para realizar el diseno de la pagina no es la forma correcta de trabajar, las tablas solamente se deben utilizar para mostrar datos tabulados. 

## Elemento SPAN 

Es un elemento en linea el cual puede ser usado como contenedor para texto, es un elemento que cumple funciones similares al elemento DIV, solo que este funciona a nivel *inline*. Igual que el elemento DIV, el elemento SPAN no tiene ningun significado especial, sin embargo nos permite aplicar estilos CSS a una porcion de texto el cual queramos estilizar por separado. 

## Consideraciones 

Los elementos de bloque pueden contener elementos en linea u otros elementos en bloque, sin embarglo los elementos en linea solo pueden contener elementos en linea y texto llano. 

Es un error colocar elementos en bloque dentro de elementos en linea, aunque se renderize el contenido, es un error que no se debe cometer. 

## Cambiando la Disposicion 

Se puede cambiar la disposicion de los elementos de bloque a en linea y viceversa, modificando la propiedad `display` en CSS. 

Hay que tener en cuenta que los elementos en bloque se ubican en lineas distintas y que de forma predeterminada ellos intentaran abarcar todo el ancho de la pagina web que este disponible. Mientas que los elementos en linea se ubican uno tras otro. 

## Elementos Semanticos 

Se conoce como elementos semanticos aquellos que describen su significado al navegador, proporcionan informacion adicional mas alla de que tipo de elemento estructural forman parte en la pagina. 

Los ejemplos de estos elementos semanticos son `<article>`, `<header>`, `<footer>`, en contraste a elementos no semanticos como `<div>` y `<span>`.

| Etiqueta | Descripcion |
| `<header>` | Especifica una cabecera para el documento o seccion. Puede haber mas de uno  por pagina. |
| `nav` | Define la zona de navegacion de una pagina. Es un conjunto de enlaces de navegacion. |
| `<main>` | Especifica el contenido principal del documento. Define el area del contenido principal, se encuentra dentro del body. Contiene el contenido principal, aquel directamente relacionado sobre el tema central del documento. |
| `<footer>` | Especifica el pie de pagina para el documento o seccion. Se puede tener mas de un pie de documento. |
| `<article>` | Define un articulo. Especifica un contenido independiente, que tiene sentido por si solo y es posible distribuir por cualquier parte del sitio web. Por ejemplo, un post de un foto o un blog, una noticia o comentario. |
| `<section>` | Define una seccion en el documento |
| `<aside>` | Define un contenido lateral respecto al contenido principal. Puede haber mas de uno. |
| `<figure>` | Especifica un diagrama, foto, ilustracion, etc.  |
| `<figcaption>` | Define una leyenda para el elemento `<figure>` |
| `<picture>` | Inserta una imagen que permite diversas fuentes (*sources*) para distintos tipos de dispositivo. De este modo es posible cargar imagenes diferentes en ordenadores, tables o telefonos por ejemplo. Se usan media queries en el elemento `<source>`, sobre todo para disenos responsives. |
| `<details>` | Define detalles adicionales que el usuario puede mostrar u ocultar. |
| `<summary>` | Define una cabecera visible para el elemento `<details>`. Esta etiqueta va dentro de `<details>` |
| `<mark>` | Define un texto el cual esta resaltado |
| `<time>` | Define una fecha/hora |

## Compatibilidad

Tener en cuenta la compatibilidad es algo bastante importante al programar nuestras paginas webs, sobre todo tener en cuenta los navegadores antiguos ya que estos no soportan la mayoria de las nuevas funcionalidades y caracteristicas de HTML5. 


