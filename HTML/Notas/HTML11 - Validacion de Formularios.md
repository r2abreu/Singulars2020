# Validacion de Formularios 

Se empezo esta leccion comentando lo importante que es para cada proyecto, que los datos que son requeridos a los usuarios, sean validados por nosotros en diferentes etapas para poder asegurarnos que su insercion en alguna base de datos no cause problemas. 

Esta validacion toma parte tanto en HTML, como en JavaScript y en PHP tambien, cada una de estas etapas intenta validar la informacion pero con distintos propositos. 

En el caso de HTML, la validacion se realiza con la presuncion de que el usuario es benigno, esto quiere decir que no tiene malas intencion pero que sin embargo, puede tener problemas a la hora de ingresar los datos, por lo cual necesitamos guiarlos para que no cometan errores y que proporcionen la informacion en el formato adecuado.

HTML5 incorpora mecanismos de validacion de formularios en el lado del cliente, que nos permiten que las validaciones sean mas sencillas y comodas. Anteriormente, tendriamos que haber recurrido a JavaScript para realizarlas.

Sin embargo, la validacion por HTML no del todo fiable, ya que los navegadores distintos pueden hacer interpretaciones distintas a la hora de validar los datos. Los navegadores que no sean compatibles, no podran validar los datos. 

Adicionalmente, un usuario pudiese acceder a la inspeccion de la pagina en el explirador y saltarse las validaciones al editar el codigo HTML en el lado del cliente. 

Es por eso que es necesario, comprobar los datos tambien en un servidor, en donde no podran alterar el codigo. 

## Veracidad de los datos 

Incluso aunque podamos validar el formato de los datos, **no podemos nunca certificar que estos datos sean autenticos**. 

Es un tema que se queda fuera de nuestro alcance, sin embargo la comprobacion de un correo electronico, si pudiesemos hacerla solicitando alguna respuesta. 

Es por eso que una de las reglas principales a la hora de tratar la informacion es nunca confiando en el input del usuario: **"never trust input"**.

## Algunos mecanismos de validacion en HTML5

Con HTML5 contamos con los siguientes recursos para validar formularios: 

* Nuevos `type` de input: (email, url, number, color...).
* Atributo `required`.
* Atributo `maxlenght`.
* Atributos `man` y `min` para campos numericos.
* Atributo `step` para los tipos de tipo `range`.
* Mensajes de error personalizados (atributo `title`).
* Expresiones regulares (RegExp en atributo `pattern`).

El atributo `title` indicado en el elemento `input` que deba ser validado, se puede usar para mostrar un mensaje al usuario en caso de que introduzca un valor incorrecto. 

De esta forma, es aconsejable incluir en dichos inputs un `title` adecuado que ayude al usuario a corregir los errores.

Adicionalmente podemos usar el atributo `placeholder` para mostrar un ejemplo de lo que deberia ser un valor valido. 

## Formato 

Podemos comprobar que la invalidez de los datos se muestra en los diferentes exploradores de distintas maneras. 

Podemos unificar estos estilos usando la pseudo-clase de CSS `:invalid`.

```
input:invalid {
    border: 1rem solid #f00;
}

input:valid {
    border: 1rem solid #0f0;
}
```

## Expresiones Regulares

Las expresiones regulares son una forma de describir patrones que nos sirven para hacer comparaciones y reemplazos de texto. 

Esta accion comparativa del patron y el texto que hemos de comprobar se denomina *pattern matching*.

En HTML5 para lograr establecer este patron, debemos indicar el patron en el atributo `pattern` del elemento `input`.

| Caracteres | Descripcion |
| `.` | Cualquier caracter, exceptuando `newlines` o cualquier otro terminante de linea Unicode. |
| `\w` | Cualquier caracter alfanumerico. Es el equivalente es el equivalente a `[a-zA-Z0-9_]`.|
| `\W` | Cualquier caracter NO alfanumerico. Equivalente a `[^a-zA-Z0-9_]`. |
| `\d` | Cualquier digito numerico ASCII. Equivalente a `[0-9]`. |
| `\D` | Cualquier digito NO numerico ASCII. Equivalente a `[^0-9]`. |
| `\s` | Cualquier espacio en blanco Unicode. |
| `\S` | Cualquier caracter que no sea un espacio en blanco Unicode. |
| `\b` | *(anchor)* Es un `alphanumeric boundary`, hace `match` antes y despues de un caracter alfanumerico. |
| `\B` | *(anchor)* Cualquier posicion que no sea un `alphanumeric boundary`. |
| `\0` | Caracter NUL |
| `\n` | Caracter `newline` |
| `\f` | Es un *form feed* lo que se conoce como separador de pagina o seccion. |
| `\r` | Es el retorno al principio de la linea actual, sin moverse a la siguiente linea, proviene de *carriage return*. |
| `\t` | Es un tabulador `TAB` |
| `+` | Encuentra una o mas instancias del item que lo precede, es el equivalente `{1,}`. |
| `*` | Encuentra cero o mas instancias del item que lo precede, es el equivalente a `{0,}` |
| `?` | Encuentra cero o una instancia del item que lo precederm es el equivalente a `{0,1}`. |
| `{n}` | Encuentra exactamente, *n* cantidad de veces el item que lo precede. |
| `{n,m}` | Encuentra el item que lo precede al menos *n* veces pero no mas de *m*. |
| `$` | *(anchor)* Ancla la busqueda al inicio de una linea. |
| `^` | *(anchor* Ancla la busqueda al final de una linea. |
| `n(?=p)` | *(anchor)* Require que los caracteres que siguen a *n* sean los especificados en el patron *p*.  |
| `n(?!p)` | *(anchor)* Require que los caracteres que siguen a *n* NO sean los especificados en el patron *p*. |