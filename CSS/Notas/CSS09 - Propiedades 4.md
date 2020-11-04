# Propieades Enlaces, Listas y Tablas

## Enlaces 

Se pueden aplicar estilos a los **enlaces** mediantes las propiedades CSS: `color`, `font-family`, `background`, `text-decoration`. Usando los selectores adecuados, los enlaces pueden tener estilos diferentes en funcion del estado en el que se encuentren, es bastante importante seguir el orden: 

1. `:link`: Este selector permite dar estilos que no han sido aun visitados. 
2. `:visited`: Este selector permite dar estilos a enlaces que han sido clicados. 
3. `:hover`: Este selector es aplicado cuando un usuario flota sobre el enlace con un dispositivo de apunte (como un raton). Es importante tener en cuenta que este elemento no funcionara en elementos mobiles, incluidos tabletas, ya que el dispositivo no tiene la manera de determinar que el usuario esta flotando sobre el elemento.
4. `:focus`: Esto es aplicado cuando un elemento tiene *focus*. Cuando un elemento con el cual se puede interectuar, por ejemplo en enlace o un *input* de forma, se dice que puede tener *focus*. El *focus* ocurre cuando un explorador descubre que estas listo para interactuar con un elemento en la pagina. Por ejemplo, cuando el cursor esta en un *input* de forma y este esta listo para aceptar escritura, ese elemento se dice que tiene *focus*. Tambien es posible usar `tab` en el teclado para moverse entre los *items* en la pagina. 
5. `:active`: Este selector se aplica cuando un elemento esta siendo activado por un usuario, por ejemplo cuando un boton esta siendo pulsado o cuando un enlace esta siendo clicado. Algunas veces esto es usado para hacer que un boton o un enlace pueda tener mas la sensacion de ser presionada, al cambiar el estilo y la posicion de el elemento levemente. 

## Orden

El de estos elementos o pseudo clases, deben tener un order particular determinado por el siguiente acronimo: LVHFA,  es necesario que se describan "link-visited-hover-active". Este orde se utiliza para asegurarse de que se puedan visualizar los diferentes estilos que estamos dando. 

Esto ocurre por la especificad de CSS, por lo cual si dos selectores aplican a el mismo elemento, aquel que tenga una mayor especificacion ganara. Dado que todas estos selectores comparten el mismo peso especifico, los conflictos se resolveran por casacada. Por lo cual, en caso de que pongamos el `:visited` de ultimo (`:link-:active:a-hover-a:visited`), nunca aparecera ya que siempre sera sobre escrito por el `:hover`. Ahora, si consideramos un super enlace que haya sido visitado, siempre ganara este estilo, ya que terminara siendo el ultimo. 

Es por eso que se recomienda el siguiente orden: 

```
a:link
a:visited
a:hover
a:focus
a:active
```

## Listas 

Algunas de las propiedades especificas para trabajar con listas son las que se muestran en la siguiente tabla:

| Propiedad  | Descripcion | 
|--|--| 
| `list-style` | Establece todas las propiedades de la lista en una sola declaracion. |
| `list-style-image` | Especifica una imagen como la viñeta de la lista. |
| `list-style-position` | Especifica donde debe aparecer el marcador o viñeta. |
| `list-style-type` | Especifica el tipo de viñeta a utilizar. |


## Tablas

Algunas de las propiedades habnituales para trabajar con tablas son las que se utilizan para manipular los bordes, cambiar el ancho y alto, alinear el texto, modificar los margenes o relleno y tambien modificar el color de fondo y de texto.

