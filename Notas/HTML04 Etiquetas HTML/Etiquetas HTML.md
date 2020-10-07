# HTML04: Etiquetas HTML

## Comentarios

Es importante recordar que los comentarios en HTML se realizan con la sintaxis `<!-- -->` , todo lo que se encuentre dentro de esas flechas no sera renderizado por explorador. 

## Algunas etiquetas interesantes para texto

Estos elementos *inline* permiten formatear el texto como si fueran *output* de una computadora: 

- `<code>` : El texto se muestra como código de programación.
- `<kbd>` : Este elemento denota que su contenido ha sido provisto por un *input* del usuario. Tiene otras funcionalidades que vale la pena revisar [aquí.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
- `<samp>` : Esta relacionado con `<kbd>` y se usa para dar ejemplos de código.
- `<var>` : Muestra el texto como una variable del mundo real, me refiero a una variable física por ejemplo, no a una variable de algún lenguaje de programación.
- `<pre>`: Muestra el texto tal y como se ha escrito, por ejemplo dentro de esta etiqueta no ocurre el *whitespace collapsing*. Con lo cual, el espacio que se deje adicional no sera formateado y sera renderizado.

## Enlaces y el atributo `target`

El elemento `<a>` recibe un atributo `target` el cual indica como y donde se va a abrir el enlace cuando hagamos clic en el: 

- `_blank`: Abre el enlace en una pagina o pestaña en blanco.
- `_parent`: Abre el enlace en la pagina padre del marco en el cual estemos trabajando.
- `_self`: Abre el enlace en el propio marco (valor predeterminado).
- `_top`: Abre el enlace en el marco superior de la pagina.

## Enlaces dentro de una misma pagina

En HTML5 creamos anclas o `anchor` *elements* los cuales nos permiten dirigirnos a diferentes lugares dentro de una misma pagina, nos dirigiremos guiándonos por el atributo `id` de ese elemento y colocandolo en nuestro URL seguido por una almohadilla `#` .

## Enlace a una dirección de mail

Podemos usar el elemento `anchor`  también para crear un enlace el cual al ser ciclado, abra el gestor de correo electrónico predefinido por el usuario para enviar un email. 

Esto sin embargo genera ciertos problemas: 

- Si el usuario no tiene configurado el gesto de correo electrónico, no podar enviarnos el correo electrónico.
- Si colocamos nuestro correo electrónico en alguna pagina web, puede causar que ciertos *bots*  tomen nuestro correo y lo usen para enviarnos *spams*.

La solución seria poder usar formularios de contacto. 

## Enlace a un fichero

Si hacemos un enlace que lleve a algún recurso que el explorador no sepa como renderizar, al hacer click en el, el navegador puede que nos solicite descargar el fichero. Adicionalmente, puede ser interesante mirar el atributo `download` , con el cual podemos extender esta funcionalidad. 

## Atributos de un elemento `<img>`

- `alt` : Especifica un texto alternativo para la imagen.
- `height` : Especifica la altura en pixeles de una imagen.
- `width` : Especifica el ancho en pixeles de una imagen.
- `ismap` : Indica si la imágenes parte de un mapa de imagen.
- `usemap` : Especifica el mapa de imagen (*image map*) que se va a usar.

## Mapas de imagen

Un mapa de imagen es una imagen con zonas en las cuales se puede hacer un click. Lo podemos usar para hacer múltiples enlaces a paginas diferentes desde una misma imagen. Para lograr esto, usaremos dos elementos que están íntimamente relacionados y el elemento `img` también. Estos elementos son `map`  y `area`.

El elemento `area` solo debe ser usado dentro del elemento `map`  y sirve para poder declarar un área clicable dentro de la imagen que servirá de mapa. Este elemento `area` comparte muchos atributos similares a los del elemento `a` ya que en esencia estamos declarando una área que se pueda clicar. 

Adicionalmente dentro del elemento `area` podremos declarar un atributo `coords` el cual permitirá dar las coordenadas que definirán esta area clicable. Tres tipos de áreas pueden ser declaradas como el atributo `shape` y de su valor dependerá como serán usadas las `coords` , estos valores son en pixeles. 

- `rect`: Proviene de rectángulo, los valores de coordenadas serán dos valores pares x — y. El primer par definirá la esquina izquierda arriba y el otro la esquina derecha abajo.
- `circle` : Recibe dos valores, el primer de ellos es un punto conformado por dos cordenadas x — y y el segundo es el radio del circulo.
- `poly` : Es un poligono, y en escencia cada valor forma parte de cada punta del poligono en pares x — y.