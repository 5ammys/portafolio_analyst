# Cómo agregar imágenes de certificados

## Pasos

1. **Guardá tu imagen** en esta carpeta (`public/certificates/`)
   - Formatos recomendados: `.png`, `.jpg`, `.webp`
   - Puede ser una captura de pantalla del certificado
   - Tamaño sugerido: cualquiera, se adapta solo

2. **Editá el archivo** `src/components/Certificates.tsx`

3. En el certificado que querés, **cambiá `image: null`** por el nombre de tu archivo:

```ts
// ANTES
image: null,

// DESPUÉS
image: "/certificates/mi-certificado.png",
```

4. Si tenés el **link de la credencial online** (Credly, LinkedIn, Coursera, etc.):

```ts
// ANTES
credential: null,

// DESPUÉS
credential: "https://www.credly.com/badges/tu-badge",
```

## Al hacer clic en la imagen del certificado
Se expande una vista previa del certificado directamente en la card.
