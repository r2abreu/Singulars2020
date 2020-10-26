# Multimedia: Video y Audio en HTML5

Algunos ejemplos de elementos multimedia son imagenes, audio, videos y animaciones. Las paginas modernas integran elementos multimedia y los exploradores tienen cierto soporte para poder mostrarlos en diferentes formados. 

## Formatos 

Existen una increible multitud de formatos de video y audio, con diferentes caracteristicas. Estos formatos, tienen codificaciones las cuales sus desarrolladores colocan bajo cierto tipo de licencia. A pesar de que existen muchos formatos, no todos son practicos, es por eso que seguramente en nuestro trabajo usaremos alguno de esta lista: 

| Formato | Extension | Descripcion | 
|---------|-----------|-------------|
| AVI | `.avi` | Audio Video Interleave, desarrollado por Microsoft y usado comunmente en sistemas de Windows. |
| WMV | `.wmv` | Windows Media Video, tambien de Microsoft, desarrollado para Windows. |
| QuickTime | `.mov` | QuickTime fue desarrollado por Apple. |
| RealVideo | `.rm`, `.ram` | RealVideo, desarrollado por Real Media para permitir streaming de video priorizando el ancho de banda. |
| Flash | `.swf`, `.flv` | De Macromedia, necesita un componente para poder ser reproducido, no soportado por productos Apple. |
| Ogg | `.ogg` | Theora Ogg, desarrollado por la Xiph.Org Foundation. |
| WebM | `.webm` | WebM es un proyecto de Mozilla, Opera, Adobe y Google. |
| MPEG | `.mpg`, `.mpeg` | MPEG, desarrollado por Moving Pictures Expert Group, fue el mas popular en Internet, sin embargo no tiene soporte de HTML5 |
| MPEG-4, MP4 | `.mp4` | MP4 es el de mayor crecimiento en Internet, soportado por HTML5 y recomendado por YouTube. |

## Video en HTML5 

Antes de HTML5 no habia un estandar para poder mostrar peliculas o videos en paginas web. La unica manera era usando plugins como el de Macromedia Flash, diferentes navegadores usando distintos plugins por lo cual habia un problema severo de compatibilidad.

HTML5 define un nuevo elemento que especifica una manera estandar de integrar video en una pagina web, lo hace a traves del elemento `<video>`. Parte del contenido de este elemento, es aquel el cual se mostrara en caso de que no se pueda reproducir el video. 

### Atributos del elemento `<video>`

| Atributo | Valor | Descripcion |
|----------|-------|-------------|
| `autoplay` | autoplay | Especifica si el video se debe reproducir automaticamente tan pronto como este listo. |
| `controls` | controls | Especifica si los controles del reproductor deben ser mostrados. |
| `height` | pixels | Establece la altura del reproductor. |
| `width` | pixels | Establece el ancho del reproductor. |
| `loop` | loop | Especifica si la repdocuccion deberia ser en bucle. |
| `muted` | muted | Especifica si se debe reproducir sin audio. |
| `poster` | URL | Especifica una imagen a mostrar mientras que el video carga o hasta que se presiona play.  |
| `preload` | auto, metadata, none | Especifica si empezar a cargar el video cuando la pagina se carga o no. |
| `src` | URL | Indica el destino o la direccion del recurso del video a reproducir. |

En caso de que usemos `autoplay` y `loop`, sin mostrar los controles, podriamos poner los videos en reproduccion continua, sin que el usuario los pueda detener.

## Audio en HTML5 

Con respecto al audio, ocurre tambien lo mismo que como ocurrio con el elemento `<video>`, se trata de una caracteristica la cual no tenia demasiado soporte, sin embargo con el pasar del tiempo se habilito la manera de que de forma nativa se soportase la renderizacion de audio. 

Los atributos son similares a los atributos usados por el elemento `<video>`.

## Compatibilidad

Por motivos de compatibildad de exploradores, nos puede a veces interesar colocar el mismo recurso en diferentes formatos, esto lo lograremos con la etiqueta `<source>`, la cual nos permite indicar los formatos dispoibles de video o audio para que el navegador tome el formato que mas le convenga. 

## Subtitulos 

Usando el elemento `<track>`, podemos especificar pistas de textos, los subtitulos seran visibles mientras el contenido se esta reproduciendo, el formato usado es WebVTT. En Chrome, no funcionaran los subtitulos en la maquina local, los subtitulos deben venir desde un servidor. 

Atributos del elemento `<track>`

| Atributo | Valor | Descripcion |
|--|--|--|
| `default` | default | Especifica si la pista debe ser activada si el usuario no lo indicase. |
| `kind` | captions, chapters, descriptions, metadata, subtitles | Espeficia el tipo de texto de la pista. |
| `label` | text | Espeficica el titulo de la pista. |
| `src` | URL | Especifia la direcion del recurso. |
| `srclang` | language_code | Especifica el codigo de lenguaje, requerida si se trata de una pista de subtitulos. |

Se le pueden dar estilos a los subtitilos, usando el `pseudo-elemento` CSS `::cue`.

## Otros elementos multimedia 

Existen otros elementos multimedia, con son el caso de `<object>` y `<embed>`, sin embargo su uso no es tan extendido. 

