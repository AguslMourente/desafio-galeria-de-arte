# Desafío de código: Galeria de arte

![image](https://user-images.githubusercontent.com/1208547/206236009-b7f37f58-6103-4a6d-838a-02d5ef38698b.png)

# Consigna

La aplicación consta de dos partes:

- El back: Un admin que nos deja administrar fotos y agregarle tags
- El front: Una webapp que nos permita ver todos los tags y navegar fotos del tag seleccionado.

## Sobre el admin

Pueden usar cualquier CMS as a service para administrar
las fotos y sus tags. Algunas opciones:

- https://www.sanity.io/
- https://strapi.io/
- https://www.contentful.com/
- https://airtable.com/
- https://alinea.sh/

Cada foto debe tener como mínimo 3 datos

```ts
interface Photo {
  title: string;
  imageURL: string;
  tags: string[];
}
```

Cada sistema tiene su forma de administrar imagenes y tags asi que tomen este esquema solo como un ejemplo.

## Sobre el front

El front debe respetar este diseño:
https://www.figma.com/file/fTwmHlt3i7hYoGQT5pXDkT/Galer%C3%ADa-de-arte?node-id=0%3A1&t=5nPHI47ZOTJVy17v-1

Pueden usar cualquier framework (React, Vue, Svelte, etc) o ningún framework.

En la parte inferior se deben mostrar todos los tags disponibles y al hacer click en alguno de los tags el carrousel de arriba debe mostrar las fotos perteneciente a ese tag. Los tags no deben repetirse y deben mostrarse ordenados basados en la cantidad de fotos que tenga ese tag. Los tags con más fotos deben ir al comienzo de la lista.

También van a ver en la parte inferior derecha un selector de colores (esto debe cambiar el color de fondo del carrousel) y unos links para que pongan lo que quieran. Si quieren dejar el link de apx, joya.
