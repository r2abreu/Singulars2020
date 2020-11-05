# Miscelaneos 

Aqui hay un resumen de algunas cosas adicionales a tener en cuenta al crear paginas web. 

## Idioma de la pagina 

Siempre se recomienda indicar el idioma en el que se encuentra el escrito el contenido de la pagina. Es importante para los buscadores de internet y para aquellas aplicaciones como lectores de pantalla que mejoren la accesibilidad de nuestras paginas. 

La declaracion del idioma se hace a traves del atributo `lang`, seguido por el codigo del lenguaje como valor. 

```
<!DOCTYPE html>
<html lang="es">
```

## Elemento `<head>`

Ya hemos trabajado con este elemento, recordando que es hijo del elemento `html` y es hermano directo del elemento `body`, el cual es donde se encuentra el contenido visible de la pagina. 

Pero en el elemento `head` se ubica la informacion relativa a la pagina, pero que no se muestra en el documento, es informacion sobre la informacion de nuestra pagina, denominada `metadata`. 

Estas son algunas de las etiquetas que puede recibir el emento `meta`: 

| Elemento | Se usa para... |
|---|---|
| `<base>` | Especifica la url base para todos los enlaces con ruta relativa. Solo puede haber uno elemento `<base>` en un documento. |
| `<title>` | Indica el titulo del documento. |
| `<meta>` | Aporta informacion sobre la pagina. |
| `<link>` | Sirve para incorporar recursos externos, habitualmente hojas de estilo. |
| `<script>` | Se usa para incorporar scripts. |
| `<style>` | Permite definir estilos. |

### Elemento `<base>`

El elemento `<base>` indica la base para todas las rutas relativas del documento, cuando sea usado y se especiquen sus atributos, este elemento debe venir antes que cualquier otro elemento el cual tenga valores de URL como `<link>`.

| Atributo | Valor | Descripcion |
|--|--|--|
| `href` | URL | Especifica la URL base para todas las url en la pagina. |
| `target` | `_blank, _parent, _self, _top, framename` | Especifica el target por defecto para todos los enlaces y formularios en la pagina. |


### Elemento <title>

Define el titulo del documento, es requerido en cada documento HTML. No se puede tener mas de un titulo por pagina y los titulos de cada pagina dentro de un documento deben ser diferentes. 

El elemento `<title>` define el titulo que se mostrara el la pestana del navegador, tiene implicaciones SEO por lo cual se recomienda lo siguiente: 

* Evitar titulos de una o dos palabras, es mejor usar una frase descriptiva. 
* Los motores de busqueda tipicamente muestran los primeros 55 o 60 caracteres del titulo de una pagina. Cualquier texto mas largo puede perderse, por lo cual se recomienda no tener titulos mas largos que ese. En caso que necesites usar un titulo mas grande, asegurate de colocar las partes importantes al principio. 
* No uses cumulos de *keywords*. Si el titulo solo es un cumulo de palabras, los algoritmos reduciran la posicion de la pagina en los resultados de busqueda. 
* Hacer el titulo lo mas unico posible dentro del sitio web, esto quiere decir, evitar duplicar titulos, esto puede contribuir a resultados de busqueda no precisos.

### Elemento `<link>`

Especifica la relacion entre el documento actual y un recurso externo. Este elemento se usa mas comunmente para enlazar hojas de estilo, sin embargo tambien puede ser usado para los iconos de la pagina (tanto favicones como iconos para la *home screen* y aplicaciones en dispositivos mobiles) entre otras.


| Atributo | Valor | Descripcion |
|----------|-------|-------------|
| `href` | URL | Ubicacion del documento. |
| `hreflang` | `language_code` | Codigo del lenguaje del recurso. |
| `media` | `media_query` | Especifica en que dispositivo sera mostrado el elemento enlazado. |
| `rel` | `alternate, archives, author, bookmark, external, first, help, icon, last, license, next, nofollow, noreferrer, pingback, prefetch, prev, search, sidebar, stylesheet, tag, up` | Requerido, especifica la relacion entre el documento y el recurso a enlazar. |
| `sizes` | `height and width` | Especifica las dimensiones del recurso en caso de que sean iconos. |
| `type` | `MIME_type` | Especifica el tipo MIME del recurso. |

### Etiquetas meta

Este elemento representa `metadata` que no puede ser representada por otro HTML elemento releacionado con metadata como `<base>`, `<link>`, `<script>`, `<style>` o `<title>`.

El tipo de metadata provisto por el elemento `meta` puede ser uno de los siguientes: 

* Si el atributo `name` es usado, el elemento `meta` entonces provera informacion a nivel del documento *document-level metadata*, los cuales aplican a toda la pagina. 
* Si el atributo `http-equiv` es usado, el elemento `meta` es una *pragma directive*, la cual provee informacion equivalente a la que pueda ser dada por un encabezado HTTP del mimso nombre. 
* Si el atributo `charset` es usado, entonces el elemento `meta` se trata de una declaracion de codificado o *charset*, el cual especifica la codificacion del documento.
* Si el atributo `itemprop` es usado, entonces el elemento `meta` provee `metadata` definida por el usuario. 

### Entidades HTML 

Algunos caracteres estan reservados para el uso exclusivo de HTML, esto significa que tu exploraror va a *parsear* estos caracteres como codigo HTML. Por ejemplo, el uso del caracter menor que (<), sera interpretado por el explorador como una etiqueta de apertura de un elemento. 

Por lo cual, si queremos mostrar estos caracteres, tenemos que reemplazarlos por sus entidades correspondientes, las cuales pueden encontrarse en diferentes tablas en la web. 

