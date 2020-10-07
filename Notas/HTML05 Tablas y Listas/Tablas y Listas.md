# HTML05: Tablas y Listas

## Tablas 

Podemos usar las tablas como estructuras para mostrar la informacion. Las tablas comprenden una serie de elementos con los cuales podemos describir filas, columnas, encabezados, celdas y celdas combinadas. Es importante tener en cuenta que las tablas no deben ser usadas para que creemos la distribucion total de nuestras paginas. 

| Etiqueta | Descripcion | 
| -------- | ----------- | 
| `<table>`| Nos ayuda a declarar una tabla, el inicio de ella, dentro de ella reposara el contenido total de la tabla            | 
| `<caption>` | Definimos una leyenda para la tabla |
| `<tr>`   | Nos ayuda a definir una fila en la tabla (*table row*)        | 
| `<th>`   | Definimos una celda la cual servira de cabecera (*table head*) cabecera         | 
| `<td>`   | Define una celda en la tabla la cual contiene informacion o data (*table data*)    | 
| `<thead>` | Definimos una estructura semantica, con esta etiqueta declaramos la cabezera general de la tabla |
| `<tbody` | Declaramos el cuerpo de la tabla |
| `<tfooter>` | Declaramos el pie de la tabla |
| `<colgroup>` | Define un grupo de columnas en la tabla, es importante ya que nos permite editar de forma conjunta todos los `<td>` de una columna al aplicarle una clase.
| `<colspan>` | Permite especificar cuantas columnas va a abarcar un `<td>` |
| `<col>` | Se anidan dentro del elemento `<colspan>` para especificar cada grupo de columnas |
| `<rowspan>` | Permite especificar cuantas filas va a abarcar un `<td>` |

Al aplicar las etiquetas `<theader>`, `<tbody>`, `<tfooter>` no se vera ninguna diferencia aparente, sin embargo con ellas estamos agrupando las celdas de la tabla en grupos semanticos que le daran mas informacion al explorador y ayudaran a la visibilidad en paginas las cuales las tablas son extensas. Ademas podemos especificar estos grupos para aplicar estilos o comportamiento particular de cada grupo. 

## Listas

En HTML se pueden crear listas para organizar nuestro contenido, tres tipos de ellos son: ordenadas, sin orden y listas de definiciones: 

| Etiqueta | Descripcion |
| `<ol>` | Define una lista ordenada la cual esta enumerada |
| `<ul>` | Define una lista la cual no contiene un orden |
| `<li>` | Define uno de los elementos (*items*) que forma parte de las listas |
| `<dl>` | Define una lista de descripciones |
| `<dt>` | Define un termino dentro de la lista |
| `<dd>` | Define la descripcion del termino que la precede |