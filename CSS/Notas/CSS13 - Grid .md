# Grid Layout   

El sistema de grid es un sistema de distribucion y poscicionamiento de elementos basado en cuadriculas. 

Flexbox nos permite la distribucion en un solo eje de elementos dentro de un contenedor, con Grid podremos lograr una distribucion en dos ejes, sin embargo es importante tener en cuenta que Grid no sustituye de ninguna manera a Flexbox, sino que son complementarios. 

Usando la propiedad y valor `display:grid` o `display:inline-grid` podemos lograr que un contenedor adquiera las caracteristicas de un contenedor grid, los hijos de este elemento contenedor seran considerados *grid items*.

## Terminologia importante

### Grid Container 

Es *parent* direction de todos los elementos en la cuadricula. 

### Grid Item 

Es el *children* (descendientes directos) del contenedor de cuadricula. 

### Grid Line 

Son aquellas lineas divisorias generadas por la propia estructura de la cuadricula, pueden ser tanto horizontales como verticales, definen las areas. 

### Grid Track 

Es el espacio creado entre dos lineas. Una celda de la cuadricula es definida por la interseccion de dos *tracks*.

### Grid Area 

Es el espacio total rodeado por cuatro lineas de cuadricula. Un area de cuadricula puede estar compuesta por cualquier numero de celdas. Las areas deben ser siempre rectangulares. 

## Propiedades 

| Container | Item |
|-----------|------| 
| `display` | `grid-column-start` |
| `grid-template-columns` | `grid-column-end` |
| `grid-template-rows` | `grid-row-start` |
| `grid-template-areas` | `grid-row-end` |
| `grid-template` | `grid-column` |
| `grid-column-gap` | `grid-row` |
| `grid-row-gap` | `grid-area` |
| `grid-gap` | `justify-self` |
| `justify-items` | `align-self` |
| `align-items` | `place-self` |
| `justify-content` |  |
| `align-content` |  |
| `place-content` |  |
| `grid-auto-columns` |  |
| `grid-auto-rows` |  |
| `grid-auto-flow` |  |
