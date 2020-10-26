# Propiedades Para Textos

## Formateando Texto 

En CSS tenemos muchas opciones y propiedades para poder darle estilos al texto de nuestras paginas web. Se listan a continuacion la mayoria de ellas, incluyendo los valores que cada una de estas propiedadades pueden recibir. 

| Propiedad | Descripcion | Valores |
|-----------|-------------|---------|
| `text-align` | Especifica la alineacion del texto. | `left, right, center, justify, initial, inherit` |
| `text-decoration` | Establece la decoracion del texto. | `none, underline, overline, line-through, initial, inherit` |
| `text-indent` | Especifica la identacion de la primera linea del texto. | `<lenght>, %, initial, inherit` |
| `text-transform` | Controla la conversion entre mayusculas y minusculas. | `None, capitalize, uppercase, lowercase, initial, inherit` |
| `color` | Establece el color del texto. | `<color>, initial, inherit` |
| `direction` | Especifica la direccion de escritura (se usa conjuntamente con unicode-bidi) | `ltr, rtl, initial o inherit` |
| `letter-spacing` | Aumenta o reduce el espacio entre caracteres. | `norma, <lenght>, initial o inherit` |
| `line-height` | Establece el altor de linea. | `normal, <number>, <lenght>, %, initial o inherit` |
| `word-spacing` | Aumenta o disminuye el espacio entra palabras. | `normal, lenght, initial o inherit` |


## `vertical-align`

Esta es una propiead que genera confusiones, la primera de ellas es que no se utiliza para centrar un elemento dentro de un elemento tipo `block`, solo se utiliza para centrar elementos `inline`, `inline-block` o `table-cell`.

Los valores que puede adquirir son los siguientes: 

| Valor | Descripcion |
|-----------|-------------|
| `baseline` | Initial value, alinea la *baseline* del elemento con la de su elemento parent. |
| `sub` | Alinea la *baseline* de un elemento con la *baseline* subescrita de su padre. |
| `super` | Alinea la *baseline* de un elemento con la *baseline* superescrita de su padre. |
| `text-top` | Alinea el tope de un elmeento con el tope de la fuente del elemento padre. |
| `text-bottom` | Alinea la parte baja de el elemento con la parte baja de la fuente del elemento padre. |
| `middle` | Alinea el medio del elemente con la *baseline* mas la mitad de la *x-height* del elemento padre. |
| `<lenght>` | Alinea la *baseline* del elemento a la distancia proporcionada a partir de la *baseline* de su padre, puede usar un valor negativo. |
| `<percentage>` | Alinea la *baseline* del elemento a un porcentaje proporcionado a partir de la *baseline* de su padre, puede usar un valor negativo. |
| `top` | Alinea el tope de un elemento y sus descendientes con el tope de la linea entera. |
| `bottom` | Alinea el tope de un elemento y sus descendientes con la parte inferior de la linea entera. |

## `text-shadow`

Esta propiedad permite darle una sombra el texto a partir de una bien descrita sintaxis. 

Sintaxis: 

*offset-x* | *offset-y* | *blur-radius* | *color*

| Valor | Descripcion |
|-----------|-------------|
| `offset-x` | Posicion horizontal de la sombra (positiva o negativa). |
| `offset-y` | Posicion vertical de la sombra (positiva o negativa). |
| `blur-radius` | Distancia o radio del difuminado de la sombra. |
| `color` | Color de la sombra. |
| `none` |  Initial value. |
| `initial` | Establece el valor de la propiedad a su valor inicial. |
| `inherit` | Hereda el valor de la propiedad del elemento padre. |