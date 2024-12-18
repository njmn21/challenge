# Especificación de Requisitos de Gilded Rose

## ¿Qué necesitamos?

- Refactorizar el código terrible: `app/gilded-rose.ts`

## Reglas y nuevo requisito

Hola y bienvenido al equipo de Gilded Rose. Como sabes, somos una pequeña posada con una ubicación privilegiada en una ciudad prominente dirigida por una amable posadera llamada Allison. También compramos y vendemos solo los mejores productos. Desafortunadamente, **nuestros productos se degradan constantemente en calidad a medida que se acercan a su fecha de venta**. Tenemos un sistema en su lugar que actualiza nuestro inventario por nosotros. Fue desarrollado por un tipo pragmático llamado Leeroy, quien ha pasado a nuevas aventuras. **Tu tarea es agregar la nueva característica a nuestro sistema para que podamos comenzar a vender una nueva categoría de artículos**. Primero, una introducción a nuestro sistema:

- Todos los artículos tienen un valor de SellIn que indica el número de días que tenemos para vender el artículo.
- Todos los artículos tienen un valor de Calidad que indica cuán valioso es el artículo.
- Al final de cada día, nuestro sistema reduce ambos valores para cada artículo.

Bastante simple, ¿verdad? Bueno, aquí es donde se pone interesante:
- Una vez que ha pasado la fecha de venta, la Calidad se degrada el doble de rápido.
- La Calidad de un artículo nunca es negativa.
- "Aged Brie" en realidad aumenta en Calidad cuanto más viejo se vuelve.
- La Calidad de un artículo nunca es superior a 50.
- "Sulfuras", siendo un artículo legendario, nunca tiene que ser vendido ni disminuye en Calidad.
- "Backstage passes", como el Aged Brie, aumenta en Calidad a medida que su valor de SellIn se acerca;
	
    La Calidad aumenta en 2 cuando quedan 10 días o menos y en 3 cuando quedan 5 días o menos, pero la Calidad cae a 0 después del concierto.

Recientemente hemos firmado con un proveedor de artículos conjurados. Esto requiere una actualización de nuestro sistema:

- Los artículos "Conjured" se degradan en Calidad el doble de rápido que los artículos normales.

Siéntete libre de hacer cualquier cambio en el método UpdateQuality y agregar cualquier código nuevo siempre que todo siga funcionando correctamente. Sin embargo, no alteres la clase Item o la propiedad Items, ya que pertenecen al goblin en la esquina que se enfurecerá instantáneamente y te eliminará de un golpe, ya que no cree en la propiedad compartida del código (puedes hacer que el método UpdateQuality y la propiedad Items sean estáticos si lo deseas, te cubriremos).

Solo para aclarar, un artículo nunca puede tener su Calidad aumentada por encima de 50, sin embargo, "Sulfuras" es un artículo legendario y como tal su Calidad es 80 y nunca cambia.