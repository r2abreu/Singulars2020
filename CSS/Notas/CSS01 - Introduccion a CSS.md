# CSS01: Introduccion a CSS 

## Que es es CSS?

El acronimo significa *Cascading Style Sheet*, son hojas de estilo en casacada. Gracias a estas hojas, podemos definir como mostrar los elementos HTML de una pagina web. Fue incorporado a la web para facilitar el trabajo por part de disenadores y para enriquecer sustancialmente el aspecto de nuestras paginas, de una manera simple y facil de mantener. 

Ya que HTML no fue pensado originalmente para darle formato y estilos a un documento, sino para definir su contenido y estructura. 

## Historicamente 

En HTML 3.2, se incluyeron algunos elementos y atributos para poder darle cierto formato al texto, por ejemplo la etiqueta `<font>`. Este proceso era tedioso y costoso de modificar. 

A partir de HTML4, ya se permite separar el formato en hojas de estilo, escritas en CSS, algo que es soportado hoy en dias por todos los navegadores. Aun asi durante esta version de HTML se permite seguir usando algunos atributos para modificar los elementos (`<align>`, `<valign>`, `<font>`), aunque su uso ya estaba desaconsejado. 

A partir de HTML5 se suprimen practicamente todas las etiquetas y atributos relacionados con el formato de los elementos en la pagina, de manera que este objetivo paso a lograrse enterarmente gracias a CSS. 

## Tres formas de aplicar nuestros estilos CSS

1. Hojas internas: Se definen los estilos dentro de la etiqueta `<style>` dentro del `<head>` del documento. 
2. Estilo en linea: Se define el estilo directamente sobre elemento HTML en cuestion, haciendo uso de su atributo `style`.
3. Hojas Externas (recomendado): Se incluye un enlace en el elemento `<head>` mediante el otro elemento `<link>` el cual enlaza nuestro documento HTML con una hoja de estilos. 

## Precedencia 

A la hora de aplicar nuestros estilos y en caso de que algunas reglas entren en conflicto con otras (dos reglas iguales, sobre un mismo elemento, con propiedades y valores distintos) se tomara cierta predominancia la cual es la siguiente (listada de menor a mayor prioridad): 

1. Estilo por defecto del navegador. 
2. Hojas externas y hojas internas. 
3. Estilo en linea. 

Sin embargo, lo que ocurre tras bastidores es que lo primero que se cargan son los estilos del navegador, luego las hojas de estilos externa e interna sobrescriben algunas de las reglas. Es imporatnte el orden en este caso en el cual son ubicadas las reglas (cascada).

El estilo en linea del elemento en caso de que le haya sido aportado de esta manera, sobrescribira a las reglas que entren en conflicto. 

## Sintaxis CSS 

Cada regla CSS estan compuestas por un selector y una declaracion. El selector nos permite como su nombre lo indica, poder seleccionar uno o varios elementos sobre los cuales sera ejercida la regla que estamos declarando. 

```
h1 {
    color: red;
}
```

Las declaraciones por su parte, expresan que propiedades del elemento seran modificadas asi como los valores que tomaran estas propiedades y que sean al final aquellos que modiquen los estilos de estos elementos. 

Los comentarios en CSS se realizan con la siguiente sintaxis: 

```
/* COMENTARIO */
```

## `Developer Tools` en los exploradores

Cada explorador tiene unas herramientas para los programadores a los cuales podemos accder pulsando la tecla F12. Esta herramienta permite diferentes utilidades, como ver los elementos en tiempo real y poder ver que propiedades les estan afectando, se puede ademas editar el CSS en vivo y ver los resultados de forma automaticamente. 

De esta misma manera podemos depurar (*debug*) nuestro codigo en caso de que no se este aplicando alguna regla de CSS y tengamos problemas para determinar el origen del error. 

