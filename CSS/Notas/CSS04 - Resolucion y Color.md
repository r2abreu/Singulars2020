# Resolucion y Color 

## Pixel (Picture Element)

Cualquier imagen que se muestra en la pantalla, esta formada por miles o millones de pequenos puntos conocidos como pixeles. 

El pisel es la unidad minima de informacion grafica que puede ser representada en una pantallada, cada pixel puede ser controlado de forma individual. 
 
 ## Resolucion de Pantalla 

 Es el numero total de pixeles que forman la imagen visible en pantalla, se expresa indicando la cantidaad de pixeles en horizontal y en vertical, la multiplicacion de estos dos varlores nos indican la cantidad de pixeles en una pantalla. 

 A la hora de hacer nuestras paginas web, debemos pensar en que resoluciones de pantalla usaran las personas que accedana ellas, de manera que puedan ver el contenido de forma correcta. 

Anteriormente se hacian paginas con tamanos fijos, ahora con la aparicion de multitud de dispositivos como tablets o telefonos moviles, no podemos disenar para pantallas y resoluciones concretas, tenemos que hacer disenos que puedan adaptarse a diferentes tamanos (responsive).

## Resolucion de Imagen

Al igual que la resolucion de nuestras paginas, las imagenes tambien tienen una resolucion determinada. Es importante tener en cuenta la resolucion de las imagenes para poder usarlas en nuestra web. 

Cada imagen debe pasar por un proceso de optimizacion antes de estar en nuestra pagina web, para asegurarnos que los tiempo de carga no son excesivos para nuestros usuarios, igualmente, en terminos de accesibilidad, no todos los usuarios cuentan con una conexion a internet avanzada, por lo cual tenemos que tener en cuenta que nuestra web debe ser optimizada y su performance el correcto. 

Algunos pasos a seguir para la optimizacion de imagen: 

* Elegir el formato correcto. 
* Elegir el nivel correcto de compresion.
* Usar dimensiones correctas.

## Colores en las Pantallas 

El espacio en las pantallas es por naturaleza negro, ya que es el color de la ausencia de luz, la ausencia de luz en un pixel por ejemplo. 

A esta pantalla se le va a anadiendo luz por cada pixel, a su vez, cada pixel puede obtener un valor que puede ser rojo, verde o azul. Esto nos permite hacer combinaciones entre los pixeles de diferentes colores. 

Una intensidad total de colores siempre nos otorgara el color blanco, mientras la ausencia de luz nos dara un color negro. 

## Profundidad de Color 

La profundidad de color, es el numero maximo de colores que puede ser expresada en un pixel, se expresa en bits. 

| Profundidad | Numero pixeles | Nombre |
| 1 bit | 2^1 = 2  | Blanco y negro |
| 2 bits | 2^2 = 4 | Escala de grises |
| 8 bits | 2^8 = 256 | Escala de grises |
| 16 bits  | 2^16 = 65.536 | *High Color* |
| 24 bits | 2^24 = 16.777.216 | *True Color* (Ojo humano) |
| 32 bits = 24 + 8 | 2^24 colores y 8 bits de canal alfa | *True color* Canal Alpha |

## Colores 

Se pueden usar diferentes notaciones para poder describir colores: 

* *CSS keyword*
* *RGBa*
* *HEXa*
* *HSLa*

Con respecto a los detalles tecnicos, cada color se compone de 24 bits, esto nos otorga 2^24 combinaciones (16 millones de colores distintos). Se usan 8 bits para el color rojo, 8 para el verde y 8 para el azul, estas son aproximadamente 256 combinaciones por color (tambien 8 bits mas del canal alfa).

## Colores Seguros 

Por tema de compatibilidad, hay ciertas computadoras que no tienen la capacidad de renderizar esta cantidad total de combinaciones, por los cuales existen unos colores seguros que existen en caso de que queramos usar colores que son completamente compatibles. 

Sin embargo estos colores estan perdiendo relevancia con el tiempo.

## Nombres de Colores 

Tambien cada color puede ser referido por su nombre como valor de alguna propiedad CSS, esto se le conoce como *color names* y son palabras reservadas del lenguaje. Hay un total de 147 colores que pueden ser especificados por su nombre, por ejemplo: *DarkCyan*.

