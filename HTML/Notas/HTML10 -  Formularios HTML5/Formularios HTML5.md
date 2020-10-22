# Formularios HTML5 

Aunque hemos revisado con anterior los formularios y sus elementos, en HTML5 se incorporaron muchos otros elementos los cuales amplian el repertorio de los formularios. 

Permiten un mejor control de los datos y una validacion mas sencilla, la cual otrora hubiesemos tenido que programar por nuestra cuenta usando JavaScript.

## Compatibilidad

Sin embargo, como estos elementos son nuevos, existen problemas de compatibilidad con otros exploradores los cuales aun no soportan algunos de estos tipos. 

Tambien ocurre que algunos navegadores si que soportan todos los tipos, pero no muestran los elementos de una manera y estilo uniformes, en algunos casos estas diferencias no tienen importancia, en otros casos puede ser motivo para rediseñar una oagina.

Se pueden usar herramientas como la pagina *caniuse* en la cual se muestra la compatibilidad entre exploradores y que caracteristicas podemos o no podemos usar. 

## Nuevos *type* de inputs en HTML5

| Tipo del Input | Descripcion |
| `type="datetime-local` | Permite seleccionar fecha y hora teniendo en cuenta la zona horaria. |
| `type="date` | Para campos de entrada que deban contener fechas. |
| `type="month"` | Permite seleccionar mes y año. |
| `type="week"` | Permite seleccionar semana y año. |
| `type="time"` | Permite seleccionar hora. |
| `type="number"` | Se usa para campos de entrada que deben contener numeros. |
| `type="color"` | Para campos de entrada que deban tener colores. |
| `type=range` | Para campos que deben tener un valor dentro de un rango. |
| `type="email"` | Permite introducir un email. |
| `type="search"` | Para campos de busqueda, se comporta como un input de texto. |
| `type="tel"` | Usado para telefonos. |
| `type="url"` | Campos de entrada que deben contener URL. |

## Elementos Datalist y Output

El elemento `<datalist>` nos permite mostrar al usuario sugerencias a la hora de introducir los datos en campos de texto o de busqueda.

Estas sugerencias pueden ser creadas de forma estatica o generadas dinamicamente en el servidor. 

El elemento `<ouput>` por su parte, sirve para mostrar informacion al usuario, como el resultado de un calculo o una comprobacion. 

## Atributos de `<input>`

Por ultimo, se discuten nuevos atributos para el elemento `<input>` en HTML5. Entre ellos, uno de los que mayor hincapie recibe es el atributo `pattern` el cual nos permite especificar una capa de validacion en HTML basada en patrones de texto creados a partir de expresiones regulares (RegExp).