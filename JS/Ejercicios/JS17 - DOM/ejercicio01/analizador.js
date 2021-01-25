// Codigo solucion del ejercicio 

(() => {
   let button = document.querySelector('button');
   button.addEventListener('click', () => { 
      mostrar(document)
   })
})()


// Codigo Original a partir de esta linea

//FUNCION ESPACIOS
//pone espacios en blanco (para tabular el resultado)
function espacios(n){
txt='';
for(;n>0;n--) 
   txt+='&nbsp;&nbsp;&nbsp;&nbsp;';
return txt;
}

//FUNCION MOSTRAR
//imprime la estructura, haciendo uso de la funci�n estructura
function mostrar(elemento){
   document.write(estructura(elemento));
}


 /*
    FUNCION ESTRUCTURA

    Esta funci�n recibe un nodo y devuelve una cadena de texto con la estructura 
    del documento a partir de ese nodo.

    UTILIZACION: 
   - estructura(document); nos devuelve una cadena de texto con
      la estructura de todo el documento.
   - estructura(document.body); nos da la estructura del body.
   - estructura(document.getElementById('div2'); nos da la estructura del div2.
*/
function estructura(nodo, prof=0){
  var txt = '<br />'+espacios(prof)+prof+++'. <b>'+ nodo+'</b>';

  if(nodo.nodeValue!=undefined) 
     txt+=': '+nodo.nodeValue.replace('\n','\\n').replace('\t','\\t');

  for(var i=0; i<nodo.childNodes.length; i++)
     txt+=estructura(nodo.childNodes[i], prof);

  return txt;
}

