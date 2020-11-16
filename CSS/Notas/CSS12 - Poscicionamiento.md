# Poscicionamiento 

La propiedad `position` en CSS nos permite especificar como un elemento esta posicionado en el documento. Las propiedades `top`, `right`, `bottom` y `left` determinaran la posicion final de los elementos que esten posicionados. 


La sintaxis de la propiedad `position` nos permite especificar con el uso de un solo *keyword*, algunos de los valores que siguen en esta lista: 

## `static`: 

El elemento es poscicionado de acuerdo al flujo normal del documento. Las propiedades `top`, `right`, `bottom`, `left` y `z-index` no tiene ningun efecto. Este es el valor por defecto. 

## `relative`: 

El elemento es posicionado de acuerdo al flujo normal del documento y luego puede ser desplazado de acuerdo a su propia posicion, usando los valores `top`, `right`, `bottom` y `left`. Este desplazamiento no afecta la posicion de ningun otro elemento, por lo tanto el espacio que se le ha dado a este elemento es el mismo como si la posicion fuera `static`.

## `absolute`: 

El elemento es removido del flujo normal del documento y no se crea ningun espacio para el elemento en el *layout*. Es posicionado relativo al ancestro mas cercado el cual este posicionado (aquel el cual no tenga una posicion `static`), en caso de que ningun padre este posicionado, entonces estara posicionado relativo al bloque inicial (html). Su posicion final estara determinado por los valores `top`, `right`, `bottom`, `left` y `z-index`.

El valor `absolute` crea un nuevo *stacking context* cuando el valor de `z-index` no es 0. El margen de las cajas posicionados de forma absoluta no colapsan con otros margenes. 

## `fixed`:

El elemento es removido del flujo normal del documento y no hay ningun espacio creado para el elemento en el *layout*. Es posicionado relativo al bloque inicial (html), establecido por el *viewport*, excepto cuando alguno de sus ancestros tenga alguna propiedad `transform`, `perspective` o `filter` seleccionado a otro valor que no sea `none`, en cuyo caso ese ancestro se comportar como el bloque contenedor. Su posicion final estara determinado por los valores `top`, `right`, `bottom`, `left` y `z-index`.

El uso del valor `fixed` crea un nuevo *stacking context* siempre. En documentos impresos, el elemento es siempre colocado en la misma posicion en todas las paginas. 

## `sticky`: 

El elemento es posicionado de acuerdo al flujo normal del coumento y luego es desplazado relativo a aquel ancestro el cual sea *scrollable*, basado en los valores `top`, `right`, `bottom`, `left` y `z-index`, este desplazamiento no afecta la posicion de ningun otro elmeento. 

Este valor siempre crear un nuevo *stacking context*. Nota que un elemento *sticky* justamente se va a *pegar* a aquel ancestro el cual tenga un mecanismo de scroll (Creado cuando `overflow` es `hidden`, `scroll`, `auto` o `overlay`), incluso si aquel ancestro no es realmente aquel ancestro el cual pueda ser escrolleado. 

## Tipos de Poscicionamiento: 

* Un elemento posicionado, es aquel elemento cuyo valor de `posicion` computado sea `relative`, `absolute`, `fixed` o `static` (en otras palabras, cualquiera menos `static`).
* Un elemento relativamnte posicionado, es un elemento cuya posicion computada es `relativa`. Las propiedades `top` y `bottom` especificaran desplazamiento vertical, mientras que las propiedades `left` y `right`, especificaran desplazamiento horizontal. 
* Un elemento posicionado de forma absoluta, es aquel elemento cuya posicion computada sea `absolute` o `fixed`. Las propiedades `top`, `right`, `bottom` y `left` especifican desplazamientos desde los bordes de aquel elemento que lo contenga. Si el elemento tiene margenes, entonces estos margenes son agregados al desplazamiento. El elemento establece un nuevo *block formatting context* (BFC) para sus contenidos.
* Un elemento posicionado *stickily* es un elemento cuya posicion computada, es de valor `sticky`. Es tratado como un elemento posicionado relativamente, hasta que su bloque contendor cruza un umbral especificado (por ejemplo, colocando la propiedad `top` a otro valor que no sea `auto`) dentro de su flujo (o el contenedor dentro del cual ocurre el *scroll*), el cual ene se punto sera tratado como `stuck` hasta que encuentre el borde opuesto de su contenedor. 

