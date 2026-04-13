# Cómo agregar imágenes a los proyectos

## Pasos

1. **Guardá tu imagen** en esta carpeta (`public/projects/`)
   - Formatos recomendados: `.png`, `.jpg`, `.webp`
   - Tamaño recomendado: 800×450px (relación 16:9)
   - Peso máximo sugerido: < 500kb

2. **Editá el archivo** `src/components/Projects.tsx`

3. En el proyecto que querés, **cambiá `image: null`** por el nombre de tu archivo:

```ts
// ANTES
image: null,

// DESPUÉS
image: "/projects/mi-captura.png",
```

## Ejemplo

Si guardaste el archivo como `public/projects/dashboard-ventas.png`:

```ts
{
  id: 0,
  title: "Dashboard de Ventas",
  image: "/projects/dashboard-ventas.png",  // ← así
  ...
}
```

¡Listo! El cambio se aplica automáticamente.
