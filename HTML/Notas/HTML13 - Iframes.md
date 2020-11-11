# iFrames

Anteriormente para la creacion de paginas web, se usaban *frames* para componener la pagina, esta practica esta desaconsejada hoy en dia, de igual manera que se desaconseja crear layouts con tablas. 

Sin embargo, hoy en dia aun podemos encontrar paginas web que le den uso a los *frames*. Pero tambien se da uso a un elemento particular llamado `<iframe>` el cual permite poder ver contenido de otra pagina web dentro de la nuestra, es una especie de ventanilla hacia el exterior dentro de nuestra pagina web. 

Con esto podemos integrar un mapa de Google Maps o un video de YouTube, es un elemento que es vigente y que se sigue usando en especial con productos de Google. 

## Layout 

Es posible que querramos realizar layouts de nuestra pagina a partir de trozos de `iframes`, sin embargo no es recomendable o util ya que los navegadores tienen problemas de compatibilidad con estos elementos, la visualizacion no sera la correcta y adicionalmente es un sistema que no aporta la accesibilidad requerida por todos los usuarios. 

## Atributos 

| Atributo | Valor | Descripcion |
|----------|-------|-------------|
| `height` | pixels | Especifica el alto. |
| `width` | pixels | Especifica el ancho del iframe. |
| `name` | text | Especifica el nombre del iframe. |
| `sandbox` | `allow-forms, allow-same-origin, allow-scripts, allow-top-navigation`. | Establece una serie de restricciones para el iframe. |
| `src` | URL | Especifica la direccion del documento a integrar en el iframe. |
| `srcdoc` | HTML_code | Especifica el cotenido HTML de la pagina a mostrar (No soportado por IE). |


## Valores del atributo `sandbox`

| Valor | Descripcion |
|-------|-------------|
| `""` | Aplica todas las restricciones indicadas abajo. |
| `allow-same-origin` | Permite que el contenido del iframe sea tratado como si fuera del mismo origin que eldocumento contenedor. |
| `allow-top-navigation` | Permite que el contenido del iframe cargue contenido del documento que contiene. |
| `allow-forms` | Permite el envio de formularios. |
| `allow-scripts` | Permite la ejecucion de scripts. |
