# Selectores Parte 1 

Los selectores permiten escoger aquellos elementos a los cuales la regla que estara por ser declarada, afectara.  Existen una gran variedad de selectores y es importante conocerlos para la versatilidad de nuestro codigo. 

| Selector | Ejemplo | Descripcion | Version de CSS |
| * | * |  Selecciona todos los elementos del documento | 2 | 
| element | p | Selecciona todos los elementos `<p>` | 1 |
| #id | #modal | Selecciona el elemento con `id="modal"` | 1 |
| .class | .container |  Selecciona todos los elementos los cuales tengan `class="container"` | 1 |
| element, element | header, p | Selecciona todos los elementos `<header>` y todos los elementos `<p>`| 1 |

## Selectores de tipo (Type Selectors)

Nos permite una amplia seleccion de varios elementos del mismo tipo, por ejemplo todos los elementos parragrafos de una pagina. Es la forma mas sencilla sin embargo no es tan especifica y muy generica. 

## Selectores `id` y `class`

Nos permite seleccionar directamente un elemento basandonos en el valor de su propiedad `id` la cual deberia ser unica o seleccionar varios elementos basandonos en el valor de su propiedad `class` la cual puede ser compartida por varios. 

Tambien podemos ser un poco mas creativos con nuestros selectores para poder generar selectores mas especificos combinandolos. Por ejemplo este selector `p.grande`, seleccionara todos los parragrafos que tengan la clase `grande`. De esta manera estamos combinando un selector de tipo y un selector de clase. 

Es importante tener en cuenta con el anterior ejemplo, que al colocar un espacio y hacer que el selector sea `p .grande` cambia completamente el significado, ya que este selector seria ahora un selector de descenciente, con lo cual seleccionariamos cualquier elemento que contenga la clase `grande` y que se encuentre dentro de un parrafo, por ejempl un `<span>`.

## Agrupando Selectores 

Existen momentos en los cuales queremos aplicar una regla a mas de un elemento de forma especifica, esto podemos lograrlo al combinar varios selectores en una misma regla, podemos lograr esto separando los selectores con una `,`, nos permite ahorrar lineas de codigo, sin embargo hay que estar alerta de que el cambiar una propiedad se vera reflejado en varios elementos. 

| Selector  |  Ejemplo  |  Descripcion | CSS |
|  element element  | `div p`  |  Selecciona los elementos `<p>` que se encuentren dentro de los elementos `<div>` (descendientes no directos) | 1 |
| element > element | `div > p` | Selecciona los elementos `<p>` que sean descencientes directos de cualquier elemento `<div>` | 2 |
|  element+element  | `div+p`  | Selecciona el primer elemento `<p>` hermano adyacente (el mas proximo, el hermano directo) de cualquier elemento `<div>`  | 2 |
|  element1~element2  |  `p~ul` |  Selecciona todos los hermanos de forma general. En este caso, todos los elementos `<ul>` que sigan (sean hermanos) de cualquier elemento `<p>` | 3 |


## Selectores de Atributo 

Hemos visto con anterioridad los selectores CSS mas populares, sin embargo hay otros los cuales nos permiten una mayor gama de versatilidad en nuestro codigo CSS. 

| Selector | Ejemplo | Descripcion | CSS |
| `[attribute]` | `[target]` | Selecciona aquellos elementos que tengan un atributo `target` | 2 |
| `[attribute=value]` | `[target="blank"]` | Selecciona aquellos elementos que tengan un atributo target y cuyo valor sea blank | 2 |
| `[attribute|=value]` | `[lang|=en]` | Selecciona aquellos elementos cuyo **primer** valor del atributo lang, sea en | 2 |
| `[attribute^=value]` | `a[href^="https"]` | (prefijo) Selecciona todos los elementos `<a>` cuyo valor del atributo `href` empiece por el valor `https` | 3 |
| `[attribute$="value"]` | `a[href$=".pdf"]` | (sufijo) | Selecciona todos los elementos `<a>` cuyo valor del atributo `href` acabe en el valor `.pdf` | 3 |
| `[attribute*="value"]` | `a[href*="juega"]` | (substring) Selecciona todos los elementos `<a>` cuyo valor del atributo `href` contenga la substring `juega` | 3 |


## Pseudoclases 

Los selectores que comienzan con un `:` son los que se usan para las llamadas pseudoclases. Una pseudoclase sirve para especificar el estado de un elemento. 

| Selector | Ejemplo | Descripcion | CSS |
| `:link`  | `a:link` | Selecciona los enlaces no visitados | 1 |
| `:visited` | `a:visited` | Seleciona los enlaces visitados  | 1 |
| `:active` | `a:active` | Selecciona los enlaces activos | 1 |

### Formularios 

| Selector | Ejemplo | Descripcion | CSS |
| `:focus` | `input:focus` | Selecciona el input que tenga el foco | 2 |
| `:enabled` | `input:enabled` | Selecciona los `<input>` activos | 3 |
| `:disabled` | `input:disabled` | Selecciona los `<input>` inactivos | 3 |
| `:checked` | `input:checked` | Selecciona los `<input>` marcados | 3 |

### Interesantes 

| Selector | Ejemplo | Descripcion | CSS |
| `:hover` | `a:hover` | Selecciona los enlaces que tengan el raton encima | 1 |
| `:target` | `#news:target` | Selecciona el elemento `news` activo al que hemos llegado mediante un enlace que contenia el `id` de este elemento como parte de nuestra ruta | 3 |


