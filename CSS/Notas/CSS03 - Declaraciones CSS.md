# Declaraciones CSS 

Es importante recordar la sintaxis de las reglas de CSS: 

Primero tenemos el selector, sobre el cual se aplicaran las declaraciones. 

Luego tenemos las declaraciones, las cuales estan compuestas por nombres pares, sepaprando ambos con dos puntos: propiedad y valor. Se pueden usar varias declaraciones por cada regla. 

## Propiedades CSS

Los nombres de las propiedades estan definidas en las especificaciones del lenguaje, esto quiere decir que estan preestablecidas y que no pueden ser modificadas por nosotros. 

Estas propiedades afectan diferentes caracteristicas (de alli el nombre propiedad) de los elementos, estas pueden ser el fondo, el texto, tipografia, posicionamiento, transformacion, rotacion, etc..

## Valores 

Los valores de las propiedades suelen ser: 

* Valores preestablecidos: `center`, `auto`, `solid`.
* Unidades de medida: `10px`, `50%`, `2em`.
* Colores: `rgb`, `hex`, `red`, `hsl`.
* Textos: Valores personalizados por cada programador. 

Sin embargo la [lista](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types) es mas completa: 

## Unidades de Medida 

### Absoluta

Util para tamanos fijos.

| Unidad | Descripcion | Equivalencia |
| `cm` | Centimeters | 1cm = 96px/2.54 |
| `mm` | Milimetros | 1mm = 1/10th of 1cm |
| `Q` | Cuartos de milimetros | 1Q = 1/40th of 1cm |
| `in` | Pulgadas | 1in = 2.54cm = 96px |
| `pc` | Picas | 1pc = 1/6th of 1in |
| `pt` | Puntos | 1pt = 1/72th of 1in |
| `pt` | Puntos | 1pt = 1/72th of 1in |
| `px` | Pixeles (CSS Pixels) | 1px = 1/96th of 1in | 

### Relativas

Utiles para diseños *responsive*.

| Unidad | Descripcion |
| `em` | Esta unidad es relativa al tamaño de la fuenta del contenedor a especificar. Si este contenedor no tiene un `font-size` especificado, entonces el `em` sera equivalente por herencia al `font-size` del elemento padre. |
| `ex` | *x-height* de la fuente del elemento.|
| `rem` | Esta unidad es relativa al tamaño de la fuente del elemento `root`, el cual es el elemento HTML. |
| `ch` | Ancho del simbolo `0`, basada en la fuente del elemento.  |
| `1h` | |
| `vw` | *Viewport Width*, tambien util para diseños adaptables.|
| `vh` | *Viewport Height*, util para diseños adaptables (responsive). |
| `vmin` | El menor entre `vh` y `vw`. |
| `vmax` | El mayor entre `vh` y `vw`. |
| `%` | Porcentaje. |

## Unidades de tiempo 

Algunas propiedades de CSS, relacionadas con animaciones y transiciones, requieren que especifiquemos una duracion, para eso usaremos unidades de tiempo.

| Unidad | Descripcion |
| `s` | Representa segundos |
| `ms` | Representa milisegundos |


## Compatibilidad

Al igualmente como ocurre en HTML5, podemos tener muchos problemas de compatibilidad con CSS3 ya que se encuentra en constante evolucion. 

Hay navegadores que pueden no ser en lo absoluto compatibles con algunas propiedades, mientras que hay otras propiedades experimentales o en desarrollo que pueden requerir deun prefijo, el cual es propio de cada navegador (vendor).

### Prefijos 

| Prefijo | Navegador |
| -khtml- | Konkeror, versiones antiguas de Safari. |
| -moz- | Mozilla Firefox. |
| -o- | Opera. |
| -ms- | Internet Explorer. |
| -webkit- | Safari, Chrome. |


Si bien tenenemos estos prefijos que nos ayudan a tener un abanico mas amplio en el aspecto de compatibilidad, lo cierto es que esto genera algunos inconvenientes. 

Principalmente, genera codigo el cual sera redundante y que al final cuando los exploradores sean compatibles, ese codigo terminara por no cumplir ninguna funcion. Esto hace que al pasar el tiempo, tengamos que modificar estas propiedades en caso de que cambien o de que tengamos que eliminarlas, con lo cual nos genera mas problemas de mantenimiento. 

