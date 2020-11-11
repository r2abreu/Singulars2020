# Flexbox

Es un metodo de distribucion de espacions usado en CSS3. Es realmente util para conseguir qu elos elementos se comporten de manera predecible cuando diseno debe acomodarse a diferentes tamanos de pantalla.

Este nuevo metodo solo afectara a aquellos elementos que se encuentren dentro de contenedores especificados como Flex. Para poder especificar a un contendor como elemento Flex, debemos usar la siguiente propiedad `display:flex`, asimismo tambien puede ser usado el valor `inline-flex`, de caracteristicas casi identicas, la unica diferencia es que lograra que el contenedor sea tambien un contenedor con caracteristicas *inline*.

Asi mismo, los elementos flex o *flex items* dentro de un contenedor flex, tambien pueden ser a su vez contenedores flex, de manera que se pueden anidar estos contenedores.

## Direccion de los elementos 

Dentro de un contenedor, existen dos ejes: principal y transversal. El eje principal es aquel en el cual los elementos se situaran luego del otro y este eje puede ser tanto horizontal como vertical. Esto puede ser especificado con la propiedad `flex-direction`. El eje transversal por su parte, siempre sera perpendicular al eje horizontal.

## Propiedades de Contenedores Flex

| Propiedad | Posibles Valores |
|-----------|------------------|
| `display` | <display-outside>: `block`, `inline`, `run-in` (experimental). <display-inside>: `flow(experimental), flow-root, table, flex, grid, ruby`(experimental) |
| `flex-direction` | `row` (default), `row-reverse`, `column`, `column-reverse` |
| `flex-wrap` | `nowrap` (default), `wrap`, `wrap-reverse` |
| `justify-content` | `flex-start` (default), `flex-end`, `center`, `space-around`, `space-between`, `space-evenly`, `start`, `end`, `left`, `right`, `safe`, `unsafe` |
| `align-items` | `stretch` (default), `flex-start` /`start` / `self-start`, `flex-end` / `self-end` / `end`, `center`, `space-between`, `space-around`, `space-evenly` |
| `align-content` | `stretch` (default), `flex-start` /`start`, `flex-end` / `end`, `center`, `space-between`, `space-around`, `space-evenly`  |

### *Flex Wrap*

Flexbox es un metodo de distribucion de elementos unidimensional, esto quiere decir que podremos controlar la distribucion de los elementos en una sola fila o columna, pero no ambos al mismo tiempo. Sin embargo existen la posibilidad de envolver o *wrap* los elementos en nuevas lineas cuando el espacio no sea suficiente. 

De forma predeterminada, cuando los elementos son muy anchos o altos para caber en su contenedor, estos tenderan a desbordarse, por lo cual se sabe que el valor *default* de la propiedad `flex-wrap` es `nowrap`. Cuando al contrario esta propiedad recibe el valor de `wrap`, cambiaremos el comportamiento, haciendo que los elementos se envuelvan (salten a la proxima linea) cuando sean muy anchos o altos. 

Es importante tener en cuenta que cada linea es tratada como su propio contenedor, por lo cual en caso de que un elemento salte a la siguiente linea y a su vez tenga permitido crecer `flex-grow`, este se estirara para cubrir la totalidad de la linea. 

### *Flex Direction*

El eje principal del contenedor es definido por esta propiedad y sus valores:

* `row`
* `row-reverse`
* `column`
* `column-reverse`

El valor `row` es el predeterminado, por lo cual los elementos se distribuiran uno al lado del otro formando una fila de izquierda a derecha, en caso de usar `column`, la distribucion sera vertical de arriba hacia abajo. Tanto la direccion de `column` y `row` puede ser invertida agregando a ambas el sufijo `-reverse`.

### *Flex Flow*

Esta propiedad es un atajo en el cual encontraremos una manera rapida de especicar tanto `flex-direction` como `flex-wrap`, ambos valores deben ser especificados separados por un solo espacio. El valor predeterminado es `row nowrap`.

Tambien es posible usar esta propiedad para especificar solo el `flex-direction` o solo el `flex-wrap`.

### `justify-content`

Esta propiedad esta usada para alinear los elementos en el eje principal, la direccion en la cual se alinearan los elementos dependera de cual direccion haya sido definida como eje principal. El valor predeterminado es `flex-start`, lo cual alineara los elementos hacia el principio del contenedor en el eje principal, sin embargo, tambien puede ser usado `flex-end` el cual alineara hacia el final y podras centrar los elementos en su contenedor usando `center`.

### `align-items`

Esta propiedad es usada para alinear los elementos en su eje transversal, el valor principal es `stretch` con los cual los elelentos se estiraran en el eje transversal hasta alcanzar las dimensiones de aquel elemento mas alto o ancho dependiendo de la direccion del eje transversal, el item mas alto o ancho estara definiendo las dimensiones de ese contenedor en esa direccion transversal. 

### 'align-content'

Esta propiedad establece la distribucion de espacio entre y alrededor de los items a lo largo del eje transversal de flexbox. Es importante tener en cuenta de que solo funcionara cuando nuestro contenido esta compuesta por dos o mas lineas. 

## Propiedades de Elementos Flex

| Propiedad | Valor | *Initial* |
|-----------|-------|-----------|
| `flex-grow` | Integral positivo, los integrales negativos son invalidos. | 0 |
| `flex-shrink` | Integral positivo, los integrales negativos son invalidos. | 1 |
| `flex-basis` | Valor especifico de ancho o *keywords* intrinsicos como `fill` o `max-content`. | `auto` |
| `order` | Integral positivo o negativo, partiendo de 0 como posicion inicial del elemento. | Orden del *source code* html. |
| `flex` | Es un atajo, puede tomar tres valores aunque solo uno es requerido. `initial`, `auto`, `none`, <integral-positivo>. | `0 1 auto` |
| `align-self` | `auto`, `flex-start`,`flex-end`, `center`, `baseline`, `stretch` | `auto` |


## Propiedad `flex`

Esta propiedad es un atajo que reune las propiedades `flex-grow`, `flex-shrink` y `flex-basis`, es raro que se usen estas propiedades de forma separada, mas comun es verlas agrupadas en la propiedad `flex`. 

Es posible darle valores separados a cada propiedad, como tambien es posible darle valores prefeterminados, como los siguientes: 

* `flex:initial` = `0 1 auto`
* `flex:auto` = `1 1 auto`
* `flex: none` = `0 0 auto`
* `flex: <integral-positivo>`

### `initial`: 

El tamano del item sera dado con respecto a sus propiedades `height` y `width`, se encojera a su tamano minimo para poder llenar el contenedor, pero no crecera para absorber ningun espacio adicional al `flex-basis` dentro del contenedor. Es el equivalente a `flex: 0 1 auto`.

### `auto`:

EL tamano del item sera dado con especto a sus propiedades `height` y `width`, sin embargo crece para asorber cualquier espacio extra en el contenedor flex y tambien se encojera para poder encajar en el contenedor de hacer falta. Es el equivalente a `flex: 1 1 auto`.

### `none`

EL tamano del item sera dado con especto a sus propiedades `height` y `width`. Es completamente inflexible: no se encojera ni crecera a su contenedor flex. Es el equivalente a `flex: 0 0 auto`.

La propiedad `flex` puede ser especificada usando uno, dos o tres valores, estas son las sintaxis: 

* 1 valor: 
    * En este caso, si el valor es un integral, se asumira que pertenece a la propiedad `flex-grow`, se asumira tambien un valor `flex-shrink` de 1 y un `flex-basis` de 0.
    * Tambien es posible usar de un solo valor, los valores predeterminados mencionados antes: `auto`, `none`, `initial`.
* 2 valores: 
    * En este caso el primer valor, debe ser un integral positivo el cual representara el `flex-grow`. 
    * El segundo valor debe ser un valor valido de ancho, el cual sera interpretado como `flex-basis`.
* 3 valores: 
    * En este caso, los valores deben ser especificados en el siguiente orden:
        1. Un integral positivo para `flex-grow`.
        2. Un integral positivo para `flex-shrink`.
        3. Un valor valido de ancho para `flex-basis`.

## Ordenando Elementos Flexibles 

Usando la propiedad `order` podemos establecer el orden de los elementos en el contenedor, es importante tener en cuenta que esto no cambiara el orden de los elementos en el DOM, tan solo es la respresentacion grafica de los elementos en el contenedor. 