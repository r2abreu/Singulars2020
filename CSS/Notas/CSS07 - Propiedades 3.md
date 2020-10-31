# Propiedades Font 

En nuestros odenadores tendremos instaladas diferentes fuentes para la ejecuccion de docuentos, tambien podemos usar diferentes fuentes para mejorar el aspecto y legibilidad de nuestras paginas web. 

## Serif y Sans Serif 

Las fuentes *serif* tienen decoraciones en los extremos de algunas de sus letras, estas decoraciones son conocidas como *serif*. *Sans* por su lado significa "sin" es por eso que las fuentes *sans-serif* carecen de esta decoracion. 

Existen algunas familias de fuentes genericas, como lo son *Serif* y monospace y dentro de ellas hay diferentes familias tambien que corresponden a cada categoria generica. Estas son algunas de ellas: 

| Familia Generica | Ejemplos |
|-----|------|
| *Serif* | Georgia, Times, Times New Roman. |
| *Sans-serif* | Arial, Verdana, Helvetica. |
| *Monospace* | Courier, Courier New. |
| *Cursive* | Comic Sans MS, Monotype Corsiva. |
| *Fantasy* | Impact, Haettenschweiler. |

## Propiedaes para fuentes

| Propiedad | Descripcion |
|--|--|
| `font` | Especifica todas las propeidades en una declaracion o puede tambien especificar un sistema de fuentes. |
| `font-family` | Especifica una lista prioritizada de una o mas *font families* y/o familias genericas para el elemento selecionado. |
| `font-size` | Esta propiedad selecciona el tamano del a fuente. Al cambiar el tamano del a fuente tambien se actualiza el tamano de aquellas fuentes relativas como `em`. |
| `font-style` | Selecciona si la fuente debe ser estilizada de forma normal, italica u oblica. |
| `font-variant` | Es una propeidad atajo el cual te permite especificar todas las varaintes para una fuente. Puede recibir tambien los valores del CSS Level 2: `normal` y `small-caps`. |
| `font-weight` | Especifa el peso (o el grosor) de la fuente. Los pesos disponibles dependeran de la `font-family` que este especificada en ese momento. |

El abanico de fuentes que podramos mostarr se encuentran instaladas en nuestro propio dispoitivo, el navegador del cliente que visualiza la web solamente podra mostrar aquellas fuentes que se encuentren instaladas o aquellas que sean integradas por nosotros. 

El navegador por ende no mostrara aquellas fuentes que no puede localizar, por eso es importante siempre especificar un *fallback* dentro de la propiedad `font-family`.

Es por eso que debemos intentar usar fuentes que sean lo mas comunes posible dentro de lo que podamos permitirnos para que nuestra fuente tambien luzca personalizada. De lo contrario los usuario podrian no tener la fuente correcta y no veran la pagina de la forma en la que fue concebida originalmente.

## Diferencias entre estilos italicos u oblicos

Con lo que respecta a la propiedad `font-style`, aunque los valores `italics` y `oblique` puedan lucir similares, tienen una diferencia con respecto a su funcionamiento. 

Es necesario para que una fuente se muestre en italicas, que la version real de italicas de la fuente este disponible, esto quiere decir que realmente tengamos una variacion italica de la fuente en cuestion. 

Mientras que en el caso de la oblicua, el navegador buscara una version de la fuente en oblicua, en caso de que no consiga una version oblicua, tomara la version italica y en caso de que ninguna de las dos este dispoible, el navegador forzar artificialmente una rotacion (que tambien podemos especificar) sobre la fuente normal de manera que luzca inclinada. 

## Atajo Font 

![Atajo Font](https://www.impressivewebs.com/images/css-font-cheat-sheet.jpg)

La propiedad Font es una atajo en el cual podremos especificar varias propidades que ya hemos revisado, es importante revisar la sintaxis como se describe en la anterior imagen para evitar que no funcione nuestra declaracion. 

Tambien es importante tener en cuenta que como con cualquier otro atajo, aquellas propiedades que no especifiquemos, recibiran igualmente el valor de `initial` (posiblemente sobrescribiendo algun valor especificado anteriormente). Esto puede causar comportamientos inesperados. Inluso hay dos propiedades que inicialmente no pueden ser especificadas por `font` que seran reiniciadas a sus valores iniciales, estas son `font-size-adjust` y `font-kerning`.

Adicionalmente, con la propiedad `font` tambien podemos especificar en valor para el sistema de fuente: 

| Valor | Descripcion |
|---|----|
| `caption` | Seleccionara el sistema usado por controles que usen caption. (botones, menus *drop-down*, etc). |
| `icon` | Sistema usado para iconos de etiquetas. |
| `menu` | Sistema usado en menus. |
| `message-box` | Sistema usado en cajas de dialogo. |
| `small-caption` | Sistema usado para etiquetar controles pequenos. |
| `status-bar` | Sistema usado para la barra de estatus en las ventanas. |

## Fuentes Integradas 

Podemos integrar fuentes poco comunes para ser usadas en nuestra pagina, estas se conocen como `embedded`, se pueden crear haciendo uso de la reglas de CSS `@font-face` e incorporando el archivo con la definicion de la fuente a nuestro sitio. 

El problema principal es que existen diferentes formatos de fuentes y generan problemas de compatibilidad entre exploradores. 

## Propiedades de la regla `@font-face`

| Propiedad | Valor | Descripcion |
|-----------|-------|-------------|
| `font-family` | `name` | Es requerido y especifica un nombre que sea usado como el nombre de la familia para luego ser especificado por cada elemento en el cual se desee usar. |
| `src` | `URL` | Especifica el origen del recurso, en este caso, la fuente en cuestion. El recurso puede ser local o remoto y adicionalmente, se puede especificar el formato de la fuente: `format("woff")` |
| `font-display` | `auto, block, swap, fallback, optional` | Determina como se debe mostrar un *font-face* basado en si la fuente ha sido descargada y esta lista para ser usada. |
| `font-stretch` | `normal, condensed, ultra-condensed, extra-condensed, semi-condensed, expanded, semi-expanded, extra-expanded, ultra-expanded`. | Define el ancho de la fuente, por defecto es `normal`. |
| `font-style` | `normal, italic, oblique, <deg>` | Especifica el estilo de la fuente. |
| `font-weight` | `normal, bold, 100-900` | Define el peso de la fuente. |

