# Propiedades CSS (Background)

La propiedad `background` en CSS se utiliza para definir los fondos de los elementos HTML. Esta propiedad sirve como atajo o *shorthand* para reunir todas aquellas otras propiedades las cuales estan relacionadas con el fondo de los elementos, son las siguientes: 

| Propiedad | Descripcion | Initial Value |
|-----------|-------------|---------------|
| `background` | Es el atajo el cual permite especificar todas las demas propiedades.| (Mirar cada propiedad de forma individual) | 
| `background-color` | Establece el color de fondo del elemento. | `transparent` | 
| `background-attatchment` | Especifica si el fondo deberia estar en una sola posicion o deberia moverse a medida que el usuario hace *scroll* en la pagina. | `scroll` | 
| `background-image` | Nos permite colocar una imagen detras de cualquier elemento HTML. De forma predeterminada se repetira hasta llenar toda la caja. | `none` | 
| `background-position` | Cuando una imagen no esta siendo repetida, puedes usar esta propiedad para especificar la posicion relativa al elemento desde la esquina superior izquierda. | `0% 0%` | 
| `background-repeat` | Podemos especifiar si la imagen debe o no repetirse y en ese caso y en caso positivo, como deberia ser esta repeticion. | `no-repeat` | 
| `background-clip` | Especifica si el fondo debe extenderse debajo de que caja. Esta puede ser *padding-box*, *content-box* o *border-box*. | `border-box` | 
| `background-origin` | Especifica el origen de del fondo, este puede ser desde el border, el padding o el contenido. | `padding-box` | 
| `background-size` | Permite especificar el tamano del fondo, obtiene varias propiedades. | `auto auto` | 


## `background-color`

Nos permite especificar el color de fondo de un elemento. Puede ser especificado en los formatos de colores que hemos explicado anteriormente. 

## `background-image`

El problema principal es la accesibilidad, ya que las personas que utilicen lectores de pantalla no podran ver estas imagenes, adicionalmente, el colorcar diferentes imagenes de fondo va en detrimiento de la velocidad y performance de nuestra pagina. Es posible colocar diferentes y multiples imagenes de fondo.

## `background-repeat`

| Valor | Descripcion |
|-------|-------------|
| `repeat` | El fondo se repite horizontal y verticalmente. |
| `repeat-x` | El fondo solo se repetira horizontalmente. |
| `repeat-y` | El fondo solo se repetira verticalmente. |
| `no-repeat` | El fondo no se repetira. |
| `initial` | Usa el valor por defecto de esta propiedad. |
| `inherit` | Hereda el valor de la propiedad proveniente del elemento padre. |

## `background-position`

| Valor | Descripcion |
|-------|-------------|
| `x% y%` | Valores porcentuales empezando desde la esquina superior izquierda. |
| `px px` | Valores de medida de CSS, empezando desde la esquina superior izquierda. |
| `initial` | Usa el valor por defecto de esta propiedad. |
| `inherit` | Hereda el valor de la propiedad proveniente del elemento padre. |

## `background-size`

Tener en cuenta que si se decide usar solo un valor, se usara para especificar tanto el ancho como el alto. Pueden especificarse estos valores tambien de forma separada (x y). Pueden usarse tambien valores como `contain` y `cover`, los cuales pueden ser revisados en MDN. 

## `background-clip`


| Valor | Descripcion |
|-------|-------------|
| `border-box` | El fondo se extiende hasta el limite mas externo del borde. (Sin embargo esta por debajo del borde con respecto al `z-index`) |
| `padding-box` | El fondo se extiende hasta el limite mas externo del *padding*. No hay ningun fondo debajo del borde. |
| `content-box` | El fondo permanecera debajo de la caja de contenido, haciendo un efecto de fondo sobre el contenido denuestro elemento (viene bien para darle fondos sin a textos sin tener que crear nuevos contenedores). | 

## `background-origin` 

Usa los mismos valores que `background-clip`.

## Degradados (Gradients)

Se pueden realizar degradados que hacen de `background-image`, recordando que el valor de `background-img` puede ser cualquier elemento que cumpla la sintaxis del tipo de data CSS [`<image>`](https://developer.mozilla.org/en-US/docs/Web/CSS/image).

Revisar la sintaxis de los degradados ya que es extensa y permite muchos tipos diferentes de combinaciones. 