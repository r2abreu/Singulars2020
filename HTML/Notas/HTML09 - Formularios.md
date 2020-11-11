# Formularios 

Las aplicaciones web en muchas ocaciones, tienen la necesidad de recoger informacion de los usuarios que las utilizan. Asi mismo puede que sea necesario interactuar con la base de datos por parte del administrador del sitio web. 

Para eso existen los formularios HTML, se usan para que sea posible enviar informacion hacia el servidor de partde del usuario, de manera que podamos recibir datos y procesarlos. Existen diferentes elementos que nos permitiran obtener distintos tipos de informacion. 

La utilidad de las formas varia segun sus fines, pueden haber contratos, solicitudes de informacion, *login*, insercicion de datos, etc. 

## Elementos para formularios 

| Etiqueta | Descripcion |
| `<form>` | Es el inicio de un formulario HTML, dentro de el existiran todos los elementos a usar para los formularios. |
| `<input>` | Define un input de entrada de formulario, una manera de aportar data. |
| `<textarea>` | Es una entrada o input para el formulario el cual acepta texto, sin embargo a diferencia de `type="text"`, este es multilinea. |
| `<label>` | Define una etiqueta para el elemento `<input>`. |
| `<select>` | Define un menu de seleccion de diferentes opciones. |
| `<option>` | Define una opcion para el menu de seleccion. |
| `<optgroup>` | Define un grupo de opciones relacionadas para el menu de seleccion. |
| `<button>` | Define un boton con el que podremos interactuar. |
| `<datalist>` | Define una lista de opciones predefinidas para los inputs. |
| `<output>` | Define el resultado de un proceso programatico. No soportado por Explorer. |
| `<fieldset>` | Agrupa los elementos relacionados dentro de un formulario. |
| `<legend>` | Define una leyenda para el elemento `<fieldset>` |

## Atributos para el elemento `<form>`

| Atributo | Valor | Descripcion |
| `accept-charset` | `character_set` | Especifica la codificacion de caracteres que se usara para el envio del formulario. |
| `action` | URL | Especifica la ruta hacia donde se enviaran los datos del formulario. |
| `autocomplete` | On, off | Especifia si autocompletar esta ON u OFF. |
| `enctype` | `application/x-www-form-urlencodedmultipart/form-datatext/plain` | Especifica como se codificara la informacion al enviarla al servidor (solo para metodosd POST). |
| `method` | get, post, etc | Especifica el metodo HTTP de envio. |
| `name` | text | Especifica si los datos del formulario se deben validar al enviarlos. |
| `novalidate` | novalidate | Especifica si los datos del formulario se deben validar el enviarlos. |
| `target` | `_blank, _self, _parent, _top` | Especifica donde mostrar la respuesta tras el envio del formulario. |

## El elemento `<input>`

Es quizas el mas importante de las formas, ya que es usado para diferentes fines que son variables segun el valor de su atributo `type`.

El atributo `type` permite especificar que tipo de elemento deseamos mostrar ya que hay varios y cada uno se amolda en cierta medida al tipo de informacion que deseamos controlar o recibir. 

Podemos seleccionar botones radiales o casillas, texto o contrasenas, etc. 

Otros atributos del elemento `<input>`

| Atributo | Valor | Descripcion |
| `autocomplete` | on, off | Especifica si un elemento debe tener o no la funcionalidad de autocompletado. |
| `autofocus` | autofocus | Especifica si el elemento `<input>` debe obtener el foco automaticamente cuando la pagina carga. |
| `checked` | checked | Especifica si un `<input>` debe estar marcado cuando la pagina carga (checkboxes and radio buttons). |
| `value` | Texto | Especifica el valor por defecto del `<input>`. Cuando el usuario escribe en el, el nuevo valor quedara almacenado sobre este atributo. |
| `disabled` | disabled | Especifica si un elemento `<input>` debe estar desactivado. Los elementos desactivados no se envian al enviar el formulario. |
| `readonly` | readonly | Especifica si el input es solo de lectura. |
| `maxlenght` | Numero | Especifica el numero maximo de caracteres permitidos en un `<input>`. |
| `size` | Numero | Especifica el ancho de caracteres de un elemento `<input>`. |
| `name` | Texto | Especifica el nombre del campo, es importante ya que es el nombre de la propiedad que estamos enviando al servidor y que forma parte del par key:value de nuestra base de datos. |

## Otros elementos de tipo `<input>` importantes

Existe el elemento de tipo `file` el cual le permite al usuario poder enviar archivos, podremos especificar los formatos soportados de estos archivos gracias al tipo MIME. 

Tambein tenemos un elemento de tipo `image` el cual funciona como un elemento de tipo `submit`, solo que con este tipo podemos darle un estilo grafico al boton el cual es una imagen la cual podemos proporcionar en su atributo `src`.

Hay otro elemento de tipo `input` el cual es necesario para enviar cierta informacion sin que el usuario la indique expresamente, por ejemplo, podemos saber que tipo de formulario se esta rellenando. 

O por ejemplo, podemos aportar informacion que luego usaremos en una base dato, como la fecha y hora del envio del formulario. 

## Elemento `<button>`

Este elemento define un boton el cual podemos usar para interactuar, generalmente podemos usarlo para activar otras acciones que no son necesariamente formularios. 

Este elemento presenta algunos problemas, sobre todo de compatibilidad con los exploradores, es por eso que es buena idea mirar la compatibilidad y decidir si usarlo o usar el elemento `input` con el `type` de `submit`.

| Atributo | Valor | Descripcion |
| `autofocus` | autofocus | Especifica que el boton debe tener el foco automaticamente cuando la pagina cargue. |
| `disabled` | disabled | Especifica que el boton debe estar desactivado. |
| `form` | form_id | Especifica el formulario al que pertenece el boton.|
| `formaction` | URL | Especifica donde enviar los datos cuando el formulario sea enviado, solo para el tipo `submit`. |
| `formenctype` | `application/x-www-form-urlencodedmultipart/form-datatext/plain` | Especifica como debe ser codificada la informacion antes de enviarla al servidor. Solo para tipo `submit`. |
| `formmethod` | get, post | Especifica como enviar la informacion (que metodo HTTP usar). Solo para tipo `submit`. |
| `formnovalidate` | formnovalidate | Especifica que los datos del formulario no deben ser validados. Solo para tipo `submit`. |
| `formtarget` | `_blank, _self, _parent, _top, _framename` | Especifica donde mostrar la respuesta despues de enviar el formulario. Solo par tipo `submit`. |
| `name` | name | Especifica un nombre para un boton. |
| `type` | button, reset, submit | Especifica el tipo de boton que usaremos. |
| `value` | text | Especifica el valor inicial del boton. |
