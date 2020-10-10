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