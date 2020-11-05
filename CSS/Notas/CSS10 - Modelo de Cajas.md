# Modelo de Cajas

Todos los elementos HTML pueden ser considerados como cajas, los cuales a su vez estan compuestos por una serie de elementos que trataremos en esta nota. 

## Elementos 

### Margin

Es el area que aparece fuera del limite del borde, puede ser usado este margen para crear una brecha entre los bordes de dos cajas adyacientes. 

Es posible especificar el margen en cada lado del elemento, sin embargo tambien se puede usar un atajo para declarar todos los lados en una sola linea, siguiendo el orden de las agujas del reloj. 

### Border 

Cada caja tiene un border (incluso si no es visible o si se especifica que su ancho sea de 0). El borde separa el limite de una caja con la otra: 

| Propiedad | Descripcion |
|----|----|
| `border` | Establece todos los bordes en una sola declaracion. |
| `border-color` | Establece el color de los cuatro bordes. |
| `border-style` | Establece el estilo de los cuatro bordes. |
| `border-width` | Establece el ancho de los cuatro bordes. |

#### Outline 

El outline es una linea que se dibuja alrededor de los elementos, sin embargo esta fuera de los bordes, su tamano no es computado en el tamano total de la caja. Los bordes y los *outlines* son muy similares, sin embargo estas son algunas de las diferencias. 

* Los *outlines* nunca toman espacio, son dibujados fuera del contenido de un elemento. 
* De acuerdo a la especificaciones, los *outlines* no tienen que se rectangulares, aunque casi siempre lo son. 

Algo importante a tener en cuenta con los *outline* es que al darle un vlaor de `none` o `0`, esto removera los valores predeterminados de `focus`. Si se puede interactuar con un elemento, este deberia tener un indicador visual. Por lo cual, en caso de que se desee anular el *outline*, es necesario entonces dar un estilo obvio de *focus* al elemento en cuestion.

## Padding 

El padding o relleno, es el espacio entre el borde de una caja y cualquier contenido contenido dentro de el. Al agregar un relleno o *padding* podemos incrementar lo facil que sea leer su contenido. 

## Z-index 

Cuando se usan posiciones `relative`, `fixed` o `absolute`, las cajas pueden solaparse. Si las cajas se solapan, los elememtnos que aparezcan luego en el codigo HTML apareceran sobre aquellos que aparezcan antes. Si quieres controlar cual elemento estara sobre el otro, podemos usar la propiedad `z-index`. Su valor es u nnumero y mientras mas alto sea este numero, lo mas cerca que ese elemento estara del frente. Por ejemplo, un elemento con un `z-index` de 10, aparecera sobre otro con un `z-index` de 5. 

El `z-index` a mnudo se conoce como el *stacking context*, es similar a aquellas funciones en otros programas que nos permiten mover elementos hacia delante o detras (*bring to front* o *send to back*).

## Ancho y alto 

En HTML5 podemos especificar el ancho y el alto de algunos elementos usando atributos, sin embargo usando las propiedades CSS podemos lograrlo de una forma mas correcta:

| Propiedad | Descripcion | Valores |
|----|----|-----|
| `height` | Establece la altura | `auto, lenght, %, inherit` |
| `width` | Establece el ancho | `auto, lenght, %, inherit` |
| `max-height` | Establece la altura maxima | `none, lenght, %, inherit` |
| `max-width` | Establece el ancho maximo | `none, lenght, %, inherit` |
| `min-height` | Establece la altura minima | `lenght, %, inherit` |
| `min-width` | Establece el ancho minimo | `lenght, %, inherit` |

## Box-Sizing 

Cuando especificamos el ancho de una caja, cualquier *padding* o borde debe ser añadido al ancho de este elemento, a esto se le conoce como el modelo de caja estandar. Sin embargo, en Internet Explorer 6, el especificar los margenes o borde seran sustraidos del contenido de la cada, por lo cual el ancho que especifiquemos, sera el ancho que realmente tomara la caja, a este otro modelo se le conoce como el modelo de cajas alternativos y sin duda es una manera mas conveniente de dar tamanos y realizar un *layout*.

```
box-sizing: content-box // Modelo de cajas estandar
box-sizing: border-box // Modelo de cajas alternativo 
```

## Atajos para Margenes, Padding, Border entre otros (Reloj)

Los atajos que siguen el patron de las agujas del reloj o *clockwise* son versatiles y pueden funcionar de forma distinta dependiendo de cuantos valores tome la propiedad. 

* 1 valor: En este caso, con un valor nos referimos a los cuatro lados del elemento. 
* 2 valores: Nos referiremos entonces a un valor vertical y otro horizontal. 
* 3 valores: De esta manera, podemos especificar un valor para el tope, un valor para ambos lados horizontales y otro valor para el inferior.
* 4 valores: Asi especicaremos cada valor de forma separada. 