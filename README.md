# Brisas del Volcán Chaparrastique — Sitio web

Sitio web del restaurante familiar **Brisas del Volcán Chaparrastique** (San Miguel, El Salvador).
Hecho con HTML5, CSS3, JavaScript y Bootstrap 5. No necesita instalación ni servidor.

```
brisas-del-volcan/
├── index.html          ← estructura y textos de la página
├── css/style.css       ← colores, tipografías y diseño
├── js/script.js        ← ⚙️ configuración, menú, reseñas y funcionamiento
├── img/
│   ├── hero.jpg                    ← portada (foto real)
│   ├── logo-blanco.png, logo-oscuro.png, favicon.svg
│   ├── fotos/                      ← FOTOS REALES que usa la página
│   │   ├── volcan.jpg, atardecer.jpg, entrada.jpg, restaurante.jpg
│   │   ├── pupusas.jpg, panes.jpg, tipicos.jpg, bebidas.jpg
│   │   └── galeria/foto1.jpg … foto8.jpg
│   └── (familia.jpg, volcan.jpg, galeria/… etc.)  ← imágenes de demostración antiguas,
│                                      ya no se usan y se pueden borrar
└── README.md
```

## Estado actual del contenido

**Datos reales** (tomados de la página de Facebook del restaurante): logo, fotos, dirección
(Las Placitas, San Miguel), teléfono y WhatsApp (+503 6025 5070), correo, horario (sábado y
domingo, 4:00 p. m. – 9:00 p. m.), enlace de Facebook y normas del lugar. El menú completo
con precios viene del menú impreso del restaurante.

**Pendiente** (aparece en rojo o está oculto):

- **Activar las reseñas:** falta crear la base de datos y pegar su dirección (sección 11).
  Mientras tanto la página muestra “Sin reseñas” y el formulario avisa que no puede guardar.
- Enlaces de Instagram y TikTok (sus botones están ocultos hasta que los escribas).
- Sección “Familia Ortega”: está **oculta por el momento**. Para mostrarla, en `index.html`
  quita la palabra `hidden` de `<section id="familia" … hidden>` y completa las tarjetas.
- Foto real de las bebidas (por ahora se usa una foto del ambiente de noche).

---

## 1. Cómo abrir la página

Haz doble clic en `index.html`. Se abre en tu navegador.

Necesitas conexión a internet para que carguen Bootstrap, los íconos y las tipografías
(se descargan desde un CDN). Tus fotos y textos son locales.

## 2. Cómo cambiar las imágenes

La página usa las fotos reales del restaurante. Para cambiar una, guarda tu foto **con el
mismo nombre** en la misma carpeta y reemplaza el archivo. No hay que tocar código.

| Archivo | Dónde aparece | Tamaño sugerido |
|---|---|---|
| `img/hero.jpg` | Portada principal / Momentos | 1920 × 1080 (horizontal) |
| `img/logo-blanco.png` | Navbar y footer | PNG transparente |
| `img/fotos/entrada.jpg` | Nuestra historia | 1200 × 1500 (vertical) |
| `img/fotos/volcan.jpg` | Sección del volcán / Momentos | 1920 × 1200 (horizontal) |
| `img/fotos/restaurante.jpg` | Momentos | 1600 × 1100 (horizontal) |
| `img/fotos/pupusas.jpg` | Gastronomía / Momentos | 1000 × 1250 (vertical) |
| `img/fotos/panes.jpg` | Gastronomía | 1000 × 1250 (vertical) |
| `img/fotos/tipicos.jpg` | Gastronomía | 1000 × 1250 (vertical) |
| `img/fotos/bebidas.jpg` | Gastronomía | 1000 × 1250 (vertical) |
| `img/fotos/atardecer.jpg` | Sección del atardecer | 1920 × 1080 (horizontal) |
| `img/fotos/galeria/foto1.jpg` … `foto8.jpg` | Galería / Momentos | ancho 1200, cualquier orientación |
| `img/favicon.svg` | Ícono de la pestaña | — |

La categoría “Pan dulce” se cambió por “Panes” (pan migueleño y pan con pollo), que es lo
que el restaurante anuncia. Si también venden pan dulce, se puede agregar como categoría.

Consejos:

- Usa formato `.jpg` y procura que cada foto pese menos de 400 KB (puedes comprimirlas en
  squoosh.app) para que la página cargue rápido.
- En `index.html` cada imagen está marcada con un comentario `🔴🔴🔴 IMAGEN: …`. Busca `🔴`
  para encontrarlas todas.
- Al cambiar una foto, actualiza su texto `alt="…"` con una descripción real (ayuda a la
  accesibilidad y al SEO).
- **Fotos de la familia Ortega:** la sección “Familia Ortega” está oculta por el momento.
  Tiene 4 tarjetas vacías y el comentario del código explica cómo poner la foto, el nombre
  y el rol de cada integrante cuando quieras volver a mostrarla.
- **Más fotos en la galería:** copia un bloque `<button class="galeria-item">…</button>` y
  cambia la ruta de la imagen.

## 3. Cómo cambiar los textos

Abre `index.html` con un editor (VS Code, Bloc de notas…). Cada sección está separada por
un comentario grande, por ejemplo `NUESTRA HISTORIA`, `GASTRONOMÍA`, `FOOTER`.
Cambia solo el texto que está entre las etiquetas, sin borrar los símbolos `<` y `>`.

Los colores y tipografías están al inicio de `css/style.css`, en la sección `1. VARIABLES`.

## 4 a 9. Teléfono, WhatsApp, Facebook, Instagram, TikTok y Google Maps

Todo se cambia **en un solo lugar**: el inicio de `js/script.js`.

```js
const restaurante = {
  nombre: "Brisas del Volcán Chaparrastique",
  telefono: "+503 6025 5070",
  whatsapp: "50360255070",
  correo: "brisasdelvolcanchaparrastique@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61588106350409",
  instagram: "COLOCAR_INSTAGRAM",
  tiktok: "COLOCAR_TIKTOK",
  direccion: "Las Placitas, San Miguel, El Salvador",
  horarios: ["Sábado y domingo", "4:00 p. m. – 9:00 p. m."],
  googleMaps: "https://maps.app.goo.gl/wDWNYbzAooEyEmVeA",
  googleMapsEmbed: "https://www.google.com/maps?q=13.4641564,-88.2828746&z=15&output=embed"
};
```

Reemplaza cada valor `COLOCAR_…` (dejando las comillas). Mientras un dato siga diciendo
`COLOCAR_…`, **no se inventa ningún enlace**: los botones de Facebook, Instagram y TikTok
sin enlace no se muestran, y los demás datos aparecen con un aviso rojo.

| Dato | Qué escribir |
|---|---|
| **4. `telefono`** | El número como quieres que se lea. Se muestra en “Visítanos” y permite llamar al tocarlo. |
| **5. `whatsapp`** | Solo números, con código de país (503 para El Salvador), sin espacios ni signos. Activa el botón flotante, “Escríbenos por WhatsApp” y los íconos. El texto inicial del chat se cambia en `mensajeWhatsapp`. |
| **6. `facebook`** | Enlace completo de tu página, empezando con `https://`. |
| **7. `instagram`** | Enlace completo de tu perfil, empezando con `https://`. |
| **8. `tiktok`** | Enlace completo de tu perfil, empezando con `https://`. |
| `direccion` | La dirección tal como quieres que se lea. |
| `horarios` | Un texto, o varias líneas así: `["Lunes a viernes: …", "Sábado y domingo: …"]`. |
| **9. `googleMaps`** | Enlace del botón “Cómo llegar”: en Google Maps busca el restaurante → **Compartir** → **Copiar enlace**. |
| **9. `googleMapsEmbed`** | Mapa dentro de la página: Google Maps → **Compartir** → **Insertar un mapa** → copia **solo** lo que está dentro de `src="…"`. |

Si prefieres pegar el `<iframe>` completo de Google Maps a mano, en `index.html` busca el
comentario `🔴🔴🔴 GOOGLE MAPS` y sigue la indicación.

## 10. Cómo agregar productos al menú

En `js/script.js`, debajo de la configuración, está la lista `menu`. Cada producto es una línea:

```js
{ nombre: "Nombre del producto", descripcion: "Descripción breve", precio: "$0.00" },
```

- Copia esa línea dentro de la categoría que corresponda (`Pupusas`, `Nuevos antojitos`,
  `Enchiladas con pollo`, `Pan con pollo`, `Papas`, `Bebidas`) y separa cada producto con
  una coma.
- Los productos y precios actuales vienen del menú impreso del restaurante.
- En la página, cada categoría es una **sección desplegable** dentro de “Gastronomía”. La
  primera aparece abierta; las demás se abren al tocarlas.
- Si dejas un precio vacío (`precio: ""`), aparece el aviso “Consulta los precios…”.
- Si agregas un producto de prueba, márcalo con `esEjemplo: true` para que se vea la
  etiqueta “Ejemplo”.
- Para una categoría nueva, copia un bloque completo `{ id: "...", nombre: "...", productos: [ ... ] }`.
  El `id` va en minúsculas y sin espacios.

## 11. Reseñas: cómo activarlas y administrarlas

La página ya no trae reseñas de ejemplo. Mientras no haya ninguna, muestra **“Sin reseñas”**.
Cuando un visitante publica una, se guarda en una base de datos en línea y **cualquier
persona que abra la página la ve**. La calificación (por ejemplo 4.6 / 5) se calcula sola
con el promedio de las reseñas.

Una página hecha solo con HTML/CSS/JS no puede guardar datos por sí misma, por eso las
reseñas usan **Firebase Realtime Database** (de Google, con plan gratuito). El código ya
está listo; **solo falta crear la base de datos y pegar su dirección**. Hasta entonces, el
formulario avisa que la reseña no se guardó.

### Activar las reseñas (una sola vez, unos 10 minutos)

1. Entra en [console.firebase.google.com](https://console.firebase.google.com) con una
   cuenta de Google y crea un proyecto (por ejemplo `brisas-del-volcan`). No hace falta
   activar Google Analytics.
2. En el menú, abre **Compilación → Realtime Database → Crear base de datos**. Elige la
   ubicación que te sugiera y el modo **bloqueado**.
3. Abre la pestaña **Reglas**, borra lo que haya, pega esto y pulsa **Publicar**:

   ```json
   {
     "rules": {
       "resenas": {
         ".read": true,
         "$id": {
           ".write": "!data.exists()",
           ".validate": "newData.hasChildren(['nombre', 'estrellas', 'comentario', 'fecha'])",
           "nombre": { ".validate": "newData.isString() && newData.val().length >= 2 && newData.val().length <= 60" },
           "estrellas": { ".validate": "newData.isNumber() && newData.val() >= 1 && newData.val() <= 5" },
           "comentario": { ".validate": "newData.isString() && newData.val().length >= 10 && newData.val().length <= 500" },
           "fecha": { ".validate": "newData.val() === now" },
           "$otro": { ".validate": false }
         }
       }
     }
   }
   ```

   Estas reglas permiten que cualquiera **lea** y **agregue** reseñas con el formato
   correcto, pero nadie puede modificar ni borrar las de otros desde la página.
4. En la pestaña **Datos** copia la dirección de la base de datos. Tiene esta forma:
   `https://TU-PROYECTO-default-rtdb.firebaseio.com`
5. En `js/script.js` pégala en esta línea:

   ```js
   const baseDatosResenas = "https://TU-PROYECTO-default-rtdb.firebaseio.com";
   ```

6. Guarda, abre la página y publica una reseña de prueba. Debe aparecer en la lista y en la
   pestaña **Datos** de Firebase.

### Administrar las reseñas

- **Borrar una reseña** (spam, insultos, pruebas): en Firebase → Realtime Database →
  **Datos** → `resenas`, pasa el cursor sobre la reseña y pulsa la ✕.
- Las reseñas se publican **de inmediato, sin revisión previa**. Conviene revisar la lista
  de vez en cuando. Si más adelante quieres aprobarlas antes de que se vean, se puede
  agregar un paso de moderación.
- **Reseñas escritas a mano:** en `js/script.js`, la lista `resenas` permite agregar
  reseñas fijas (por ejemplo, copiadas de Google o Facebook con permiso del cliente):

  ```js
  { nombre: "Nombre del cliente", estrellas: 5, comentario: "Su comentario." },
  ```

## 12. Cómo publicar en GitHub Pages

1. Crea una cuenta en [github.com](https://github.com) y un repositorio nuevo **público**
   (por ejemplo `brisas-del-volcan`).
2. Sube **el contenido** de esta carpeta (`index.html`, `css`, `js`, `img`, `README.md`):
   botón **Add file → Upload files**, arrastra todo y pulsa **Commit changes**.
   `index.html` debe quedar en la raíz del repositorio.
3. Ve a **Settings → Pages**. En **Source** elige **Deploy from a branch**, rama `main`,
   carpeta `/ (root)` y pulsa **Save**.
4. Espera uno o dos minutos. La dirección será
   `https://TU_USUARIO.github.io/brisas-del-volcan/`.
5. Después de publicar, en `index.html` cambia la línea `og:image` por la dirección completa
   de la foto (`https://TU_USUARIO.github.io/brisas-del-volcan/img/hero.jpg`) para que el
   enlace se vea bien al compartirlo en WhatsApp y Facebook.

Cada vez que subas un archivo modificado, el sitio se actualiza solo.

---

## Lista de pendientes antes de publicar

- [ ] Confirmar que teléfono, dirección y horario (tomados de Facebook) están correctos.
- [ ] Activar las reseñas con Firebase (sección 11) y publicar una de prueba.
- [ ] Agregar los enlaces de Instagram y TikTok, si existen.
- [ ] Cuando quieras, volver a mostrar la sección “Familia Ortega” con fotos y nombres reales.
- [ ] Cambiar la foto de la categoría Bebidas por una foto real de las bebidas.
- [ ] Borrar las imágenes de demostración antiguas que quedaron en `img/` e `img/galeria/` (ya no se usan).
- [ ] Revisar los textos del volcán si deseas ampliarlos, usando siempre fuentes oficiales.

## Información sobre el volcán

Los datos de la sección “El gigante que nos acompaña” son generales (nombre, tipo de volcán,
altitud aproximada, ubicación, registros históricos). La página **no** informa sobre la
actividad actual del volcán y remite a las autoridades oficiales (MARN y Protección Civil).
