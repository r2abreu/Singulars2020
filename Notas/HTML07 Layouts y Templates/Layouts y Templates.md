# Layouts y Templates 

Se conoce como *layout* a la disposicion de los elementos en la pagina web. Muchos sitios web colocan su contenido en multiples columnas como una revista o un diario. Necesitaremos CSS para poder posicionar los elementos y tambien par apoder los fondos o dar color a las paginas. 

## Layout o Diseno 

Antes de escribir ni una sola linea de codigo,e s importante tener claros el diseno que queremos implementar para nuestra pagina o aplicacion. Para ello necesitaremos realizar dibujos, maquetas (*mockups*) y esquemas de navegacion u organigramas. 

Cuando se trabaja para un cliente, se le mostraran los disenos y no se comenzara a escribir codigo hasta que no se este totalmente de acuerdo con el diseno que se implementara. 

## Pasos a Seguir 

Los pasos a seguir para la creacion de una pagina web suelen ser: 

1. Analisis de las necesidades del cliente. 
2. Diseno de una solucion (*responsive*).
3. Acuerdo con el cliente. 
4. Implementacion de la solucion disenada. 

## Diseno Adaptable (*responsive*)

El *viewport* es el area visible de la pagina web y varia en funcion del dispositivo usado para verla. Antes de las tablets y los telefonos moviles, las paginas eran disenadas para pantallas de PC, con disenos estaticos y tamanos fijos. Ahora, el tamano fijo es demasiado grande para nuestros nuevos dispositivos. 

Por defecto, los navegadores escalan la web entera para solucionar esto. La etiqueta `<meta name="viewport">` se introdujo en HTML5 para conseguir que los disenadores web pudieran tomar control del viewport. 

Con ellas los navegadores no escalaran la pagina, puesto que da instrucciones a los mismos sobre como controlar las dimensiones de la pagina y escalarla de forma adecuada. La etiqueta `meta viewport` sera incluida en el `<head>` de todas nuestras paginas, asi como la etiqueta `meta charset`.

El atributo y valor `width=device-width` establece el ancho de la pagina para que coincida con el cancho de la pantalla del dispositivo en que la estamos viendo. El atributo `initial-scale=1.0` establece el nivel de zoom cuando la pagina es cargada en el navegador. 

## *Templates* y plantillas

Crear un buen diseno toma cierto tiemop, podemos ahorrar tiempo al reutilizar nuestras propias plantillas o al buscar inspiracion en terceros para el texto, imagenes e incluso en *layout*.