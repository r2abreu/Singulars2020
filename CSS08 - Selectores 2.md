# Selectores Parte 2

Ya hemos visto los selectores basicos que podemos usar en CSS, sin embargo existen mas selectores: 

## Pseudoclases segun posicion

| Selector | Ejemplo | Descripcion del Ejemplo |
|---|---|---|
| `:first-of-type` | `p:first-of-type` | Representa el primero parrafo dentro de un grupo de elementos hermanos. |
| `:last-of-type` | `p:last-of-type` | Representa el ultimo parrafo dentro de un grupo de elementos hermanos. |
| `:only-of-type` | `p:only-of-type` | Representa un parrafo el cual no tiene hermanos del mismo tipo. |
| `:nth-of-type(n)` | `p:nth-of-type(2)` | Representa aquel parrafo basado en su posicion dentro de un grupo de hermanos.  |
| `:nth-last-of-type(n)` | `p:nth-last-of-type(2)` | Representa aquel parrafo tambien basado en su posicion sin embargo el orden es contando desde el final. |
| `:nth-of-type(even)/(odd)` | `p:nth-last-of-type(even)/(odd)`  | Tambien la representa un elemento basado en su posicion, sin embargo es importante acotar que es posible seleccionar rangos de numeros, esto nos pueden dar la capacidad de crear intervalos pares o impartes. |
| `:first-child` | `p:first-child` | Representa aquellos parrafos los cuales sean el primer elemento dentro de un contenedor. |
| `:only-child` | `p:only-child` | Selecciona los elementos `<p>` los cuales sean los unicos hijos dentro de ese contenedor. |
| `nth-child(n)` | `p:nth-child(2)` | Selecciona aquellos parrrafos los cuales sean el segundo elemento en un contenedor. |
| `:nth-last-child(n)` | `p:nth-last-child(2)` | Selecciona aquellos parrafos los cuales sean el penultimo elemento en el contenedor. |
| `:last-child` | `p:last-child` | Selecciona aquellos parrafos los cuales sean el ultimo elemento en un contendor. |
| `:not` | `:not(p)` | Selecciona todos los elementos quenosean `<p>`. |
| `:lang(language)` | `p:lang(it)` | Selecciona aquellos parrafos los cuales han sido especificados en italiano usando el atributo `lang="it"`.|
| `:root` | `:root` | Selecciona el elemento raiz del aribol el cual representa el actual documento. En HTML, este selector reresenta el elemento `<html>` y es identico al selector `html`, solo que su especifidad es mayor.  |
| `:emtpy` | `p:empty` | Representa aquellos elementos (en este caso parrafos) los cuales no tengan `children`. Estos `children` pueden ser tanto nodos como texto (incluyendo `whitespace`). Los comentarios, y CSS `content` no afectan esta distincion. |


## Selectores pseudo-elementos

| Selector | Ejemplo | Descripcion del Ejemplo |
|----|----|------|
| `::first-letter` | `p::first-letter` | Aplica estipos a la primera letra del primer parrafo de un **elemento tipo bloque**, pero solo cuando no estan precedidas de algun contenido como imagenes o tablas.  |
| `::first-line` | `p::first-line` |  Aplica estilos a la primera linea de un **elemento tipo bloque**. Es importante notar que el largo de la primera linea depende de muchos factores, incluyendo el ancho del elemento, el ancho del documento y el tamano del texto. |
| `::selection` | `p::selection` | Aplica estilos a aquella parte del documento de nuestro elemento el cual haya sido resaltada por el usuario (por ejemplo, usando el raton para arrastrarlo a lo largo del texto). |
| `::before` | `p::before` | Crea un pseudo-elemento el cual es el **first-child** de el elemento sleccionado. Se usa a menudo para agregar contenido cosmetico a un elemento con la propiedad `content`. Este elemento sera *inline* de forma predeterminada. |