// ======================================================
// ⚙️ CONFIGURACIÓN DEL RESTAURANTE
// MODIFICA SOLAMENTE ESTA SECCIÓN
// ======================================================
// Mientras un dato empiece con "COLOCAR_", la página lo trata como
// PENDIENTE: muestra un aviso rojo y no crea ningún enlace inventado.
const restaurante = {
  nombre: "Brisas del Volcán Chaparrastique",

  // Teléfono tal como quieres que se lea. Ejemplo de formato: "+503 0000-0000"
  // (dato tomado de la página de Facebook del restaurante)
  telefono: "+503 6025 5070",

  // Solo números, con código de país y sin espacios ni signos. Ejemplo de formato: "50300000000"
  // (dato tomado de la página de Facebook del restaurante)
  whatsapp: "50360255070",

  // Mensaje que aparecerá escrito al abrir WhatsApp (puedes cambiarlo o dejarlo vacío "")
  mensajeWhatsapp: "Hola, quisiera más información sobre Brisas del Volcán Chaparrastique.",

  // Correo de contacto (dato tomado de la página de Facebook del restaurante)
  correo: "brisasdelvolcanchaparrastique@gmail.com",

  // Enlaces completos a tus perfiles (deben empezar con https://)
  // Los botones de Facebook, Instagram y TikTok que sigan en "COLOCAR_..." no se muestran.
  facebook: "https://www.facebook.com/profile.php?id=61588106350409",
  instagram: "COLOCAR_INSTAGRAM",
  tiktok: "COLOCAR_TIKTOK",

  // Dirección tal como quieres que se lea (así aparece en Facebook; puedes detallarla más)
  direccion: "Las Placitas, San Miguel, El Salvador",

  // Horarios: una línea por elemento. Ejemplo de formato:
  // horarios: ["Lunes a viernes: 00:00 – 00:00", "Sábado y domingo: 00:00 – 00:00"],
  // (horario habitual anunciado en las publicaciones de Facebook)
  horarios: ["Sábado y domingo", "4:00 p. m. – 9:00 p. m."],

  // Enlace para el botón "Cómo llegar" (Google Maps → Compartir → Copiar enlace)
  googleMaps: "https://maps.app.goo.gl/wDWNYbzAooEyEmVeA",

  // Mapa incrustado: Google Maps → Compartir → Insertar un mapa →
  // copia SOLO lo que está dentro de src="..." del iframe.
  // (ahora usa las coordenadas del restaurante según el enlace de arriba)
  googleMapsEmbed: "https://www.google.com/maps?q=13.4641564,-88.2828746&z=15&output=embed"
};

// ======================================================
// 🍽️ MENÚ
// Para agregar un producto copia una línea { nombre, descripcion, precio }
// dentro de la categoría que corresponda.
// Productos y precios tomados del menú impreso del restaurante.
// Cada categoría es una sección desplegable del menú en la página.
// Si un precio queda vacío (precio: ""), el menú muestra un aviso para consultarlo.
// Si agregas productos inventados para probar, márcalos con esEjemplo: true.
// ======================================================
const menu = [
  {
    id: "pupusas",
    nombre: "Pupusas",
    productos: [
      { nombre: "Queso", descripcion: "", precio: "$1.00" },
      { nombre: "Frijol con queso", descripcion: "", precio: "$1.00" },
      { nombre: "Revueltas", descripcion: "", precio: "$1.00" },
      { nombre: "Loroco", descripcion: "", precio: "$1.00" },
      { nombre: "Ajo", descripcion: "", precio: "$1.00" },
      { nombre: "Ayote", descripcion: "", precio: "$1.00" },
      { nombre: "Chicharrón", descripcion: "", precio: "$1.00" },
      { nombre: "Jalapeño", descripcion: "", precio: "$1.00" },
      { nombre: "C.Q.F.", descripcion: "", precio: "$1.25" },
      { nombre: "Loca mix", descripcion: "", precio: "$2.50" }
    ]
  },
  {
    id: "antojitos",
    nombre: "Nuevos antojitos",
    productos: [
      { nombre: "Canoas de plátano", descripcion: "", precio: "$1.50" },
      { nombre: "Yuca frita", descripcion: "", precio: "$2.00" },
      { nombre: "Yuca sancochada", descripcion: "", precio: "$2.00" }
    ]
  },
  {
    id: "enchiladas",
    nombre: "Enchiladas con pollo",
    productos: [
      { nombre: "Enchiladas con pollo", descripcion: "", precio: "$1.50" }
    ]
  },
  {
    id: "pan-con-pollo",
    nombre: "Pan con pollo",
    productos: [
      { nombre: "Pan con pollo · Pechuga", descripcion: "", precio: "$4.00" },
      { nombre: "Pan con pollo · Entrepierna", descripcion: "", precio: "$4.00" }
    ]
  },
  {
    id: "papas",
    nombre: "Papas",
    productos: [
      { nombre: "Papas fritas", descripcion: "", precio: "$2.00" },
      { nombre: "Salchipapas", descripcion: "", precio: "$2.50" }
    ]
  },
  {
    id: "bebidas",
    nombre: "Bebidas",
    productos: [
      { nombre: "Chocolate de tablilla", descripcion: "", precio: "$1.25" },
      { nombre: "Café", descripcion: "", precio: "$1.00" },
      { nombre: "Capuchino instantáneo", descripcion: "", precio: "$1.25" },
      { nombre: "Botella de agua", descripcion: "", precio: "$1.00" },
      { nombre: "Té Lipton", descripcion: "", precio: "$1.25" },
      { nombre: "Refresco natural", descripcion: "", precio: "$1.25" },
      { nombre: "Kolashanpan", descripcion: "", precio: "$1.00" },
      { nombre: "Valle mandarina", descripcion: "", precio: "$1.00" },
      { nombre: "Valle naranja", descripcion: "", precio: "$1.00" },
      { nombre: "Coca-Cola", descripcion: "", precio: "$1.25" },
      { nombre: "Coca-Cola Zero", descripcion: "", precio: "$1.25" },
      { nombre: "Uva", descripcion: "", precio: "$1.00" },
      { nombre: "Fresa", descripcion: "", precio: "$1.00" },
      { nombre: "Sprite", descripcion: "", precio: "$1.00" },
      { nombre: "Pepsi", descripcion: "", precio: "$1.00" },
      { nombre: "Fanta", descripcion: "", precio: "$1.00" }
    ]
  }
];

// ======================================================
// ⭐ RESEÑAS
// Las reseñas las escriben los visitantes desde la página y se guardan en una
// base de datos en línea (Firebase Realtime Database), para que cualquier
// persona que abra el sitio pueda verlas. Mientras no haya ninguna, la página
// muestra "Sin reseñas".
//
// 🔴 PARA ACTIVARLAS: pega aquí la dirección de tu base de datos de Firebase.
//    Tiene esta forma:  "https://TU-PROYECTO-default-rtdb.firebaseio.com"
//    Los pasos para crearla (gratis) están en README.md, sección 11.
//    Mientras diga COLOCAR_..., las reseñas NO se pueden guardar.
// ======================================================
const baseDatosResenas = "COLOCAR_URL_FIREBASE";

// Opcional: reseñas escritas a mano que siempre se muestran (por ejemplo, copiadas
// de Google o Facebook con permiso del cliente). Formato:
//   { nombre: "Nombre", estrellas: 5, comentario: "Su comentario." },
const resenas = [];

// ======================================================
// FIN DE LA CONFIGURACIÓN
// A partir de aquí está el funcionamiento de la página.
// No necesitas modificarlo para cambiar datos del restaurante.
// ======================================================

(function () {
  "use strict";

  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ----------------------------------------------------
  // UTILIDADES
  // ----------------------------------------------------

  /** Indica si un dato de configuración todavía no fue completado. */
  function estaPendiente(valor) {
    if (Array.isArray(valor)) return valor.length === 0;
    return !valor || /^(COLOCAR_|TU_)/.test(String(valor).trim());
  }

  /** Crea un elemento con clase y texto (el texto nunca se interpreta como HTML). */
  function crear(etiqueta, clase, texto) {
    const elemento = document.createElement(etiqueta);
    if (clase) elemento.className = clase;
    if (texto !== undefined) elemento.textContent = texto;
    return elemento;
  }

  /** Muestra un mensaje breve en la parte inferior de la pantalla. */
  let temporizadorAviso;
  function mostrarAviso(mensaje) {
    const aviso = document.getElementById("avisoFlotante");
    if (!aviso) return;
    aviso.textContent = mensaje;
    aviso.classList.add("visible");
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(() => aviso.classList.remove("visible"), 4500);
  }

  /** Dibuja estrellas llenas y vacías dentro de un elemento. */
  function pintarEstrellas(contenedor, cantidad) {
    contenedor.textContent = "";
    for (let i = 1; i <= 5; i++) {
      contenedor.appendChild(crear("i", i <= cantidad ? "bi bi-star-fill" : "bi bi-star"));
    }
  }

  // ----------------------------------------------------
  // CONFIGURACIÓN → ENLACES Y TEXTOS DE CONTACTO
  // ----------------------------------------------------

  /** Construye la dirección real de cada enlace a partir de la configuración. */
  function obtenerEnlace(tipo) {
    const valor = restaurante[tipo];
    if (estaPendiente(valor)) return null;

    if (tipo === "whatsapp") {
      if (/^https?:\/\//i.test(valor)) return valor;
      const numero = String(valor).replace(/\D/g, "");
      if (!numero) return null;
      const mensaje = restaurante.mensajeWhatsapp ? "?text=" + encodeURIComponent(restaurante.mensajeWhatsapp) : "";
      return "https://wa.me/" + numero + mensaje;
    }
    if (tipo === "telefono") return "tel:" + String(valor).replace(/[^\d+]/g, "");
    if (tipo === "correo") return "mailto:" + String(valor).trim();
    return /^https?:\/\//i.test(valor) ? valor : null;
  }

  const nombresEnlace = {
    whatsapp: "WhatsApp",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",
    telefono: "teléfono",
    googleMaps: "Google Maps"
  };

  function configurarEnlaces() {
    document.querySelectorAll("[data-enlace]").forEach((enlace) => {
      const tipo = enlace.dataset.enlace;
      const destino = obtenerEnlace(tipo);

      if (destino) {
        enlace.href = destino;
        if (tipo !== "telefono" && tipo !== "correo") {
          enlace.target = "_blank";
          enlace.rel = "noopener noreferrer";
        }
        return;
      }

      // Dato pendiente: no se inventa ningún enlace.
      // "Cómo llegar" lleva a la sección Visítanos; las redes sin enlace no se
      // muestran; los demás botones avisan que falta configurarlos.
      if (tipo === "googleMaps") {
        enlace.href = "#visitanos";
        return;
      }
      if (tipo === "facebook" || tipo === "instagram" || tipo === "tiktok") {
        (enlace.closest("li") || enlace).hidden = true;
        return;
      }
      enlace.href = "#";
      enlace.addEventListener("click", (evento) => {
        evento.preventDefault();
        mostrarAviso("Enlace de " + nombresEnlace[tipo] + " pendiente de configurar en js/script.js");
      });
    });
  }

  function configurarTextosContacto() {
    document.querySelectorAll("[data-texto]").forEach((celda) => {
      const tipo = celda.dataset.texto;
      const valor = restaurante[tipo];
      if (estaPendiente(valor)) return; // se conserva el aviso rojo del HTML

      celda.textContent = "";

      if (tipo === "horarios") {
        const lineas = Array.isArray(valor) ? valor : [valor];
        lineas.forEach((linea) => celda.appendChild(crear("span", "d-block", linea)));
        return;
      }

      if (tipo === "telefono" || tipo === "whatsapp" || tipo === "correo") {
        const destino = obtenerEnlace(tipo);
        const enlace = crear("a", "", tipo === "whatsapp" ? "Escríbenos por WhatsApp" : valor);
        enlace.href = destino || "#";
        if (tipo === "whatsapp") {
          enlace.target = "_blank";
          enlace.rel = "noopener noreferrer";
        }
        celda.appendChild(enlace);
        return;
      }

      celda.textContent = valor;
    });
  }

  function configurarMapa() {
    const contenedor = document.getElementById("mapaContenedor");
    const origen = restaurante.googleMapsEmbed;
    if (!contenedor || estaPendiente(origen) || !/^https:\/\//i.test(origen)) return;

    const mapa = document.createElement("iframe");
    mapa.src = origen;
    mapa.title = "Mapa de ubicación de " + restaurante.nombre;
    mapa.loading = "lazy";
    mapa.referrerPolicy = "no-referrer-when-downgrade";
    mapa.allowFullscreen = true;
    contenedor.textContent = "";
    contenedor.appendChild(mapa);
  }

  // ----------------------------------------------------
  // NAVBAR
  // ----------------------------------------------------
  function iniciarNavbar() {
    const nav = document.getElementById("navPrincipal");
    const menuNav = document.getElementById("menuNavegacion");
    if (!nav || !menuNav) return;

    // Fondo sólido al bajar
    const actualizarFondo = () => nav.classList.toggle("nav-solida", window.scrollY > 40);
    actualizarFondo();
    window.addEventListener("scroll", actualizarFondo, { passive: true });

    // Fondo sólido mientras el menú móvil está abierto
    menuNav.addEventListener("show.bs.collapse", () => nav.classList.add("nav-abierta"));
    menuNav.addEventListener("hidden.bs.collapse", () => nav.classList.remove("nav-abierta"));

    // Cerrar el menú móvil al elegir una opción
    menuNav.querySelectorAll("a").forEach((elemento) => {
      elemento.addEventListener("click", () => {
        if (window.bootstrap && menuNav.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(menuNav).hide();
        }
      });
    });

    // Resaltar la sección visible
    if (!("IntersectionObserver" in window)) return;
    const enlaces = Array.from(menuNav.querySelectorAll('a.nav-link[href^="#"]'));
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        enlaces.forEach((enlace) => {
          const activo = enlace.getAttribute("href") === "#" + entrada.target.id;
          enlace.classList.toggle("activo", activo);
          if (activo) enlace.setAttribute("aria-current", "true");
          else enlace.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    enlaces.forEach((enlace) => {
      const seccion = document.querySelector(enlace.getAttribute("href"));
      if (seccion) observador.observe(seccion);
    });
  }

  // ----------------------------------------------------
  // MENÚ (modal)
  // ----------------------------------------------------
  function construirMenu() {
    const acordeon = document.getElementById("menuAcordeon");
    if (!acordeon) return;

    let hayEjemplos = false;
    let faltanPrecios = false;
    const hayBootstrap = Boolean(window.bootstrap);

    menu.forEach((categoria, indice) => {
      const idPanel = "menu-panel-" + categoria.id;
      const abierta = indice === 0 || !hayBootstrap; // la primera sección empieza desplegada
      const cantidad = categoria.productos.length;

      const item = crear("div", "accordion-item");
      item.id = "menu-" + categoria.id;

      // Encabezado desplegable
      const cabeceraItem = crear("h4", "accordion-header");
      const boton = crear("button", "accordion-button" + (abierta ? "" : " collapsed"));
      boton.type = "button";
      boton.dataset.bsToggle = "collapse";
      boton.dataset.bsTarget = "#" + idPanel;
      boton.setAttribute("aria-expanded", abierta ? "true" : "false");
      boton.setAttribute("aria-controls", idPanel);
      boton.appendChild(crear("span", "menu-categoria-nombre", categoria.nombre));
      boton.appendChild(crear("span", "menu-categoria-detalle", cantidad + (cantidad === 1 ? " opción" : " opciones")));
      cabeceraItem.appendChild(boton);
      item.appendChild(cabeceraItem);

      // Panel con productos
      const panel = crear("div", "accordion-collapse collapse" + (abierta ? " show" : ""));
      panel.id = idPanel;
      const cuerpo = crear("div", "accordion-body");

      const lista = crear("ul", "menu-lista" + (cantidad > 6 ? " menu-lista-columnas" : ""));
      categoria.productos.forEach((producto) => {
        if (producto.esEjemplo) hayEjemplos = true;

        const fila = crear("li", "menu-producto");
        const cabecera = crear("div", "menu-producto-cabecera");
        cabecera.appendChild(crear("span", "menu-producto-nombre", producto.nombre));
        if (producto.precio) {
          cabecera.appendChild(crear("span", "menu-producto-puntos"));
          cabecera.appendChild(crear("span", "menu-producto-precio", producto.precio));
        } else {
          faltanPrecios = true;
        }
        fila.appendChild(cabecera);

        if (producto.descripcion || producto.esEjemplo) {
          const descripcion = crear("p", "menu-producto-descripcion", producto.descripcion || "");
          if (producto.esEjemplo) descripcion.appendChild(crear("span", "etiqueta-ejemplo", "Ejemplo"));
          fila.appendChild(descripcion);
        }
        lista.appendChild(fila);
      });

      if (categoria.productos.length === 0) {
        lista.appendChild(crear("li", "menu-producto", "Próximamente."));
      }

      cuerpo.appendChild(lista);
      panel.appendChild(cuerpo);
      item.appendChild(panel);
      acordeon.appendChild(item);
    });

    const aviso = document.getElementById("menuAvisoEjemplo");
    if (aviso) aviso.hidden = !hayEjemplos;
    const avisoPrecios = document.getElementById("menuAvisoPrecios");
    if (avisoPrecios) avisoPrecios.hidden = !faltanPrecios;

    // Los botones "Ver menú" de cada categoría despliegan su sección
    document.querySelectorAll("[data-abrir-menu]").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        const panel = document.getElementById("menu-panel-" + enlace.dataset.abrirMenu);
        if (panel && hayBootstrap) bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false }).show();
      });
    });
  }

  // ----------------------------------------------------
  // RESEÑAS
  // ----------------------------------------------------
  const resenasActivas = !estaPendiente(baseDatosResenas) && /^https:\/\//i.test(baseDatosResenas);
  const urlResenas = String(baseDatosResenas).replace(/\/+$/, "") + "/resenas.json";

  function crearTarjetaResena(resena) {
    const columna = crear("div", "col-md-6");
    const tarjeta = crear("article", "resena");

    const estrellas = crear("p", "estrellas");
    estrellas.setAttribute("role", "img");
    estrellas.setAttribute("aria-label", resena.estrellas + " de 5 estrellas");
    pintarEstrellas(estrellas, resena.estrellas);
    tarjeta.appendChild(estrellas);

    tarjeta.appendChild(crear("p", "resena-comentario", "“" + resena.comentario + "”"));

    const pie = crear("p", "resena-pie");
    pie.appendChild(crear("span", "resena-nombre", resena.nombre));
    if (typeof resena.fecha === "number") {
      const fecha = new Date(resena.fecha).toLocaleDateString("es-SV", { year: "numeric", month: "long", day: "numeric" });
      pie.appendChild(crear("span", "resena-fecha", fecha));
    }
    tarjeta.appendChild(pie);

    columna.appendChild(tarjeta);
    return columna;
  }

  /** Comprueba que una reseña tenga la forma esperada antes de mostrarla. */
  function esResenaValida(resena) {
    return Boolean(resena)
      && typeof resena.nombre === "string" && resena.nombre.trim().length >= 2
      && typeof resena.comentario === "string" && resena.comentario.trim().length > 0
      && Number(resena.estrellas) >= 1 && Number(resena.estrellas) <= 5;
  }

  /** Muestra las reseñas y el promedio, o "Sin reseñas" si todavía no hay ninguna. */
  function pintarResenas(listaResenas) {
    const lista = document.getElementById("listaResenas");
    if (!lista) return;

    const bloqueValor = document.getElementById("calificacionBloque");
    const valor = document.getElementById("calificacionValor");
    const vacia = document.getElementById("calificacionVacia");
    const estrellas = document.getElementById("calificacionEstrellas");
    const texto = document.getElementById("calificacionTexto");
    const total = listaResenas.length;

    lista.textContent = "";
    bloqueValor.hidden = total === 0;
    estrellas.hidden = total === 0;
    vacia.hidden = total > 0;

    if (total === 0) {
      texto.textContent = "Aún no hay reseñas publicadas.";
      const columna = crear("div", "col-12");
      const hueco = crear("div", "resenas-vacio");
      hueco.appendChild(crear("i", "bi bi-chat-square-heart"));
      hueco.appendChild(crear("p", "resenas-vacio-titulo", "Sin reseñas"));
      hueco.appendChild(crear("p", "resenas-vacio-texto", "Sé la primera persona en contarnos cómo te fue en Brisas del Volcán."));
      columna.appendChild(hueco);
      lista.appendChild(columna);
      return;
    }

    const promedio = listaResenas.reduce((suma, resena) => suma + Number(resena.estrellas), 0) / total;
    valor.textContent = promedio.toFixed(1);
    pintarEstrellas(estrellas, Math.round(promedio));
    texto.textContent = "Basado en " + total + (total === 1 ? " reseña" : " reseñas") + " de nuestros visitantes";
    listaResenas.forEach((resena) => lista.appendChild(crearTarjetaResena(resena)));
  }

  /**
   * Lee las reseñas guardadas en la base de datos y las muestra, de la más
   * reciente a la más antigua. Si la base de datos no está configurada o no
   * responde, solo se muestran las escritas a mano en la lista "resenas".
   */
  async function cargarResenas() {
    let guardadas = [];
    if (resenasActivas) {
      try {
        const respuesta = await fetch(urlResenas, { cache: "no-store" });
        if (respuesta.ok) {
          const datos = await respuesta.json();
          guardadas = Object.values(datos || {})
            .filter(esResenaValida)
            .map((resena) => ({
              nombre: resena.nombre.trim().slice(0, 60),
              estrellas: Math.round(Number(resena.estrellas)),
              comentario: resena.comentario.trim().slice(0, 500),
              fecha: typeof resena.fecha === "number" ? resena.fecha : undefined
            }))
            .sort((a, b) => (b.fecha || 0) - (a.fecha || 0));
        }
      } catch (error) {
        // Sin conexión o base de datos no disponible: se muestran solo las reseñas locales.
      }
    }
    pintarResenas(guardadas.concat(resenas.filter(esResenaValida)));
  }

  // ----------------------------------------------------
  // FORMULARIO DE RESEÑAS
  // ----------------------------------------------------

  /**
   * Guarda una reseña en la base de datos (Firebase Realtime Database, por REST).
   * Devuelve { guardada: true } solo si la base de datos confirmó que la guardó.
   * Si "baseDatosResenas" no está configurada, no se guarda nada y se avisa.
   * La fecha la pone el servidor ({ ".sv": "timestamp" }), no el visitante.
   */
  async function enviarResena(datos) {
    if (!resenasActivas) return { guardada: false, motivo: "sin-configurar" };
    try {
      const respuesta = await fetch(urlResenas, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: datos.nombre,
          estrellas: datos.estrellas,
          comentario: datos.comentario,
          fecha: { ".sv": "timestamp" }
        })
      });
      return { guardada: respuesta.ok, motivo: respuesta.ok ? "" : "rechazada" };
    } catch (error) {
      return { guardada: false, motivo: "sin-conexion" };
    }
  }

  function iniciarFormularioResena() {
    const formulario = document.getElementById("formResena");
    if (!formulario) return;

    const campoNombre = document.getElementById("resenaNombre");
    const campoComentario = document.getElementById("resenaComentario");
    const contador = document.getElementById("contadorComentario");
    const errorCalificacion = document.getElementById("errorCalificacion");
    const radios = Array.from(formulario.querySelectorAll('input[name="calificacion"]'));
    const etiquetas = radios.map((radio) => formulario.querySelector('label[for="' + radio.id + '"]'));

    const calificacionElegida = () => {
      const marcado = radios.find((radio) => radio.checked);
      return marcado ? Number(marcado.value) : 0;
    };
    const encenderEstrellas = (cantidad) => {
      etiquetas.forEach((etiqueta, indice) => etiqueta.classList.toggle("encendida", indice < cantidad));
    };

    radios.forEach((radio, indice) => {
      radio.addEventListener("change", () => {
        encenderEstrellas(calificacionElegida());
        errorCalificacion.hidden = true;
      });
      etiquetas[indice].addEventListener("mouseenter", () => encenderEstrellas(indice + 1));
      etiquetas[indice].addEventListener("mouseleave", () => encenderEstrellas(calificacionElegida()));
    });

    campoComentario.addEventListener("input", () => {
      contador.textContent = campoComentario.value.length + " / " + campoComentario.maxLength;
      if (campoComentario.value.trim().length >= 10) campoComentario.classList.remove("is-invalid");
    });
    campoNombre.addEventListener("input", () => {
      if (campoNombre.value.trim().length >= 2) campoNombre.classList.remove("is-invalid");
    });

    formulario.addEventListener("submit", async (evento) => {
      evento.preventDefault();

      const datos = {
        nombre: campoNombre.value.trim(),
        estrellas: calificacionElegida(),
        comentario: campoComentario.value.trim()
      };
      const errorEnvio = document.getElementById("resenaError");
      const botonEnviar = formulario.querySelector('button[type="submit"]');
      errorEnvio.hidden = true;

      // Validación
      const nombreValido = datos.nombre.length >= 2;
      const estrellasValidas = datos.estrellas >= 1 && datos.estrellas <= 5;
      const comentarioValido = datos.comentario.length >= 10;

      campoNombre.classList.toggle("is-invalid", !nombreValido);
      campoComentario.classList.toggle("is-invalid", !comentarioValido);
      errorCalificacion.hidden = estrellasValidas;

      if (!nombreValido) { campoNombre.focus(); return; }
      if (!estrellasValidas) { radios[0].focus(); return; }
      if (!comentarioValido) { campoComentario.focus(); return; }

      botonEnviar.disabled = true;
      const resultado = await enviarResena(datos);
      botonEnviar.disabled = false;

      // Si no se guardó, se dice con claridad y no se muestra como publicada.
      if (!resultado.guardada) {
        errorEnvio.textContent = resultado.motivo === "sin-configurar"
          ? "El sistema de reseñas todavía no está activado, así que tu reseña no se guardó. Puedes escribirnos por WhatsApp o Facebook."
          : "No se pudo publicar tu reseña. Revisa tu conexión e inténtalo de nuevo.";
        errorEnvio.hidden = false;
        return;
      }

      formulario.reset();
      encenderEstrellas(0);
      contador.textContent = "0 / " + campoComentario.maxLength;

      const modal = document.getElementById("resenaModal");
      if (window.bootstrap && modal) bootstrap.Modal.getOrCreateInstance(modal).hide();

      mostrarAviso("¡Gracias! Tu reseña fue publicada.");
      await cargarResenas(); // vuelve a leer la lista para mostrar la reseña nueva
    });
  }

  // ----------------------------------------------------
  // GALERÍA (lightbox)
  // ----------------------------------------------------
  function iniciarGaleria() {
    const modal = document.getElementById("lightboxModal");
    const imagen = document.getElementById("lightboxImagen");
    const titulo = document.getElementById("lightboxTitulo");
    const items = Array.from(document.querySelectorAll(".galeria-item"));
    if (!modal || !imagen || items.length === 0 || !window.bootstrap) return;

    const ventana = bootstrap.Modal.getOrCreateInstance(modal);
    let actual = 0;

    function mostrar(indice) {
      actual = (indice + items.length) % items.length;
      const origen = items[actual].querySelector("img");
      imagen.src = origen.currentSrc || origen.src;
      imagen.alt = origen.alt;
      titulo.textContent = (items[actual].dataset.titulo || "") + "  ·  " + (actual + 1) + " / " + items.length;
    }

    items.forEach((item, indice) => {
      item.setAttribute("aria-label", "Ampliar " + (item.dataset.titulo || "fotografía " + (indice + 1)));
      item.addEventListener("click", () => {
        mostrar(indice);
        ventana.show();
      });
    });

    document.getElementById("lightboxAnterior").addEventListener("click", () => mostrar(actual - 1));
    document.getElementById("lightboxSiguiente").addEventListener("click", () => mostrar(actual + 1));

    modal.addEventListener("keydown", (evento) => {
      if (evento.key === "ArrowLeft") mostrar(actual - 1);
      if (evento.key === "ArrowRight") mostrar(actual + 1);
    });

    // Al cerrar, el foco vuelve a la foto que se estaba viendo
    modal.addEventListener("hidden.bs.modal", () => items[actual].focus());
  }

  // ----------------------------------------------------
  // ANIMACIONES AL HACER SCROLL
  // ----------------------------------------------------
  function iniciarApariciones() {
    const elementos = document.querySelectorAll(".aparecer");
    const silueta = document.querySelector(".volcan-silueta");

    if (!("IntersectionObserver" in window) || reducirMovimiento) {
      elementos.forEach((elemento) => elemento.classList.add("visible"));
      if (silueta) silueta.classList.add("dibujada");
      return;
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add(entrada.target === silueta ? "dibujada" : "visible");
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    elementos.forEach((elemento) => observador.observe(elemento));
    if (silueta) observador.observe(silueta);
  }

  /** Parallax ligero (atardecer) y zoom sutil del volcán según el scroll. */
  function iniciarMovimientoScroll() {
    if (reducirMovimiento) return;

    const capasParallax = Array.from(document.querySelectorAll("[data-parallax]"));
    const capasZoom = Array.from(document.querySelectorAll("[data-zoom-scroll]"));
    if (capasParallax.length === 0 && capasZoom.length === 0) return;

    let pendiente = false;

    function actualizar() {
      pendiente = false;
      const altoVentana = window.innerHeight;

      capasParallax.forEach((capa) => {
        const marco = capa.parentElement.getBoundingClientRect();
        if (marco.bottom < 0 || marco.top > altoVentana) return;
        const velocidad = parseFloat(capa.dataset.parallax) || 0.1;
        const distancia = (marco.top + marco.height / 2) - altoVentana / 2;
        const limite = marco.height * 0.14;
        const desplazamiento = Math.max(-limite, Math.min(limite, -distancia * velocidad));
        capa.style.transform = "translate3d(0," + desplazamiento.toFixed(1) + "px,0)";
      });

      capasZoom.forEach((capa) => {
        const marco = capa.parentElement.getBoundingClientRect();
        if (marco.bottom < 0 || marco.top > altoVentana) return;
        const progreso = Math.max(0, Math.min(1, (altoVentana - marco.top) / (altoVentana + marco.height)));
        capa.style.transform = "scale(" + (1.12 - 0.12 * progreso).toFixed(4) + ")";
      });
    }

    function solicitar() {
      if (pendiente) return;
      pendiente = true;
      window.requestAnimationFrame(actualizar);
    }

    window.addEventListener("scroll", solicitar, { passive: true });
    window.addEventListener("resize", solicitar);
    actualizar();
  }

  // ----------------------------------------------------
  // INICIO
  // ----------------------------------------------------
  function iniciar() {
    configurarEnlaces();
    configurarTextosContacto();
    configurarMapa();
    iniciarNavbar();
    construirMenu();
    cargarResenas();
    iniciarFormularioResena();
    iniciarGaleria();
    iniciarApariciones();
    iniciarMovimientoScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
