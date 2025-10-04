// app/page.tsx — Landing de Senn Consultores (Next.js App Router)
// Estilo: Tailwind CSS (sin degradados) + paleta corporativa
// Nota: agrega Tailwind al proyecto y crea app/globals.css con @tailwind base; @tailwind components; @tailwind utilities;

"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#quienes-somos", label: "Quiénes Somos" },
    { href: "#mision-vision", label: "Misión & Visión" },
    { href: "#valores", label: "Valores" },
    { href: "#objetivos", label: "Objetivos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#cobertura", label: "Cobertura" },
    { href: "#contacto", label: "Contacto" },
  ];

  // Carousel de imágenes del hero
  // Carousel de imágenes del hero (hasta 8)
const images: string[] = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpg",
  "/images/hero/6.jpg",
  "/images/hero/7.jpg",
  "/images/hero/8.jpg",
];
  const [slide, setSlide] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = window.setInterval(() => setSlide((s) => (s + 1) % images.length), 5000);
    return () => window.clearInterval(id);
  }, [paused, images.length]);

  const prev = () => setSlide((s) => (s - 1 + images.length) % images.length);
  const next = () => setSlide((s) => (s + 1) % images.length);

  return (
    <main className="min-h-screen bg-white text-[#0E2A47]">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow text-[#0E2A47]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <a href="#inicio" className="flex items-center">
        <Image
          src="/sennlogo.png"
          alt="Senn Consultores"
          width={140}
          height={40}
          priority
        />
      </a>

      <nav className="hidden gap-6 md:flex">
        {navItems.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className="text-sm text-[#43567F] hover:text-[#0E2A47] transition-colors"
          >
            {it.label}
          </a>
        ))}
      </nav>

      <a
        href="#contacto"
        className="inline-flex items-center rounded-xl bg-[#0E2A47] px-4 py-2 text-sm font-medium text-white hover:bg-[#43567F] md:ml-6"
      >
        Contactar
      </a>
    </div>
  </div>
</header>



      {/* Hero */}
      <section id="inicio" className="relative isolate overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-[#0E2A47]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-white px-3 py-1 text-xs font-medium text-white bg-[#43567F]">Tasaciones & Consultoría</span>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Conectamos a nuestros clientes con el valor real de sus activos
              </h1>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-[#C2CDE5]">
                Facilitamos decisiones estratégicas a través de informes precisos, oportunos y adaptados a cada necesidad.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#servicios" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0E2A47] hover:bg-[#C2CDE5]">Ver Servicios</a>
                {/* <a href="#contacto" className="rounded-xl border border-white px-5 py-3 text-sm font-semibold text-white hover:bg-[#43567F]">Solicitar cotización</a> */}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[2/2] w-full rounded-3xl border-2 border-white shadow-xl">
                <div
                  className="relative h-full w-full overflow-hidden rounded-3xl bg-black"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <button
                    aria-label="Siguiente"
                    className="absolute inset-0 z-10"
                    onClick={next}
                  >
                    <span className="sr-only">Siguiente</span>
                  </button>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="relative h-full w-full">
  {images.slice(0, 8).map((src, i) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={src}
      src={src}
      alt="Galería Senn Consultores"
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
        i === slide ? "opacity-100" : "opacity-0"
      } select-none pointer-events-none`}
      draggable={false}
    />
  ))}
</div>
                  <div className="pointer-events-auto absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 px-3">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="rounded-full bg-white/90 px-3 py-2 text-[#0E2A47] hover:bg-white"
                        aria-label="Anterior"
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/></svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="rounded-full bg-white/90 px-3 py-2 text-[#0E2A47] hover:bg-white"
                        aria-label="Siguiente"
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                      </button>
                    </div>
                  </div>
                  <div className="pointer-events-auto absolute bottom-3 left-1/2 z-20 -translate-x-1/2">
                    <div className="flex gap-2">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setSlide(i); }}
                          className={`h-2.5 w-2.5 rounded-full ${i === slide ? "bg-white" : "bg-[#43567F]"}`}
                          aria-label={`Ir al slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <Section id="quienes-somos" title="Quiénes Somos" eyebrow="Como empresa">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Texto + bullets */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-[#C2CDE5] p-6">
              <h3 className="text-xl font-semibold text-[#0E2A47]">Valoramos lo complejo con precisión</h3>
              <p className="mt-3 text-[#43567F]">
Somos una empresa especializada en tasaciones y consultoría, con amplia experiencia en la valorización de bienes de alta complejidad. Contamos con una trayectoria destacada en el sector bancario e ingeniería en consulta, habiendo desarrollado más de 25.000 tasaciones y participado en la aprobación de más de 80.000.
Fundada en 2012 por Germán Senn, Ingeniero Civil Industrial con 34 años de experiencia en tasaciones y control de proyectos, quien ha liderado áreas de tasaciones en CyD Ingenieros, Banco del Desarrollo - Scotiabank e Itaú.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Metodologías trazables y auditables",
                  "Cobertura nacional y tiempos ágiles",
                  "Equipo multidisciplinario senior",
                  "Informes claros y accionables",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0E2A47] text-white">
                      {/* check icon */}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.415l-7.01 7.01a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l2.293 2.293 6.303-6.303a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </span>
                    <span className="text-[#0E2A47]">{t}</span>
                  </li>
                ))}
              </ul>

              {/* etiquetas de industrias */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Industrial","Inmobiliario","Agro","Energía","Educación"].map((b) => (
                  <span key={b} className="rounded-full bg-[#C2CDE5] px-3 py-1 text-xs font-medium text-[#0E2A47]">{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* KPIs visuales */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#C2CDE5] p-6">
              <div className="text-3xl font-extrabold text-[#0E2A47]">25.000+</div>
              <div className="mt-1 text-sm text-[#43567F]">Tasaciones ejecutadas</div>
            </div>
            <div className="rounded-2xl bg-[#0E2A47] p-6 text-white">
              <div className="text-3xl font-extrabold">80.000+</div>
              <div className="mt-1 text-sm opacity-90">Tasaciones aprobadas en banca</div>
            </div>
            <div className="rounded-2xl border border-[#C2CDE5] p-6">
              <div className="text-3xl font-extrabold text-[#0E2A47]">2012</div>
              <div className="mt-1 text-sm text-[#43567F]">Año de fundación</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Misión & Visión */}
<Section id="mision-vision" title="Misión & Visión">
  <div className="mt-6 grid gap-8 md:grid-cols-2">
    {/* Misión */}
    <div className="relative overflow-hidden rounded-2xl border border-[#C2CDE5] bg-white p-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* target icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 4a8 8 0 1 0 8 8h2A10 10 0 1 1 12 2v2Zm0 4a4 4 0 1 0 4 4h2a6 6 0 1 1-6-6v2Z"/>
          </svg>
        </span>
        <h3 className="text-xl font-semibold text-[#0E2A47]">Misión</h3>
      </div>

      <p className="mt-3 text-[#43567F]">
        Ofrecer servicios de tasación y consultoría de alta calidad, con informes trazables y oportunos para decisiones seguras.
      </p>

      <ul className="mt-5 space-y-2">
        {[
          "Precisión técnica en bienes complejos",
          "Procesos auditables y transparencia",
          "Agilidad y cobertura nacional",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 text-[#0E2A47]">
            <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#0E2A47] text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.415l-7.01 7.01a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l2.293 2.293 6.303-6.303a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>

      {/* Elemento visual gratuito (SVG) */}
      <div className="mt-6 rounded-xl border border-[#C2CDE5] p-4">
        <div className="flex items-center gap-3 text-sm text-[#43567F]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#0E2A47]">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
          <span>Metodologías y plantillas basadas en buenas prácticas (IFRS, control de proyectos).</span>
        </div>
      </div>

      {/* Figura decorativa
      <svg className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 text-[#c2cde53d]" viewBox="0 0 100 100" fill="currentColor" aria-hidden>
        <circle cx="50" cy="50" r="50" />
      </svg> */}
    </div>

    {/* Visión */}
    <div className="relative overflow-hidden rounded-2xl bg-[#0E2A47] p-8 text-white">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0E2A47]">
          {/* compass icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.5 7.1-3.2 7.8a1 1 0 0 1-1.3.5l-2.8-1.1a1 1 0 0 1-.6-.6l1.1-2.8a1 1 0 0 1 .5-.6l7.8-3.2a.5.5 0 0 1 .7.7Z"/>
          </svg>
        </span>
        <h3 className="text-xl font-semibold">Visión</h3>
      </div>

      <p className="mt-3 text-white/90">
        Ser referentes en Chile por experiencia, precisión e innovación; acompañando a sectores clave con una oferta integral.
      </p>

      <ul className="mt-5 space-y-2">
        {[
          "Liderazgo técnico e innovación aplicada",
          "Expansión de cobertura y especialidades",
          "Relaciones de confianza de largo plazo",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[#0E2A47]">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.415l-7.01 7.01a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l2.293 2.293 6.303-6.303a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>

      {/* Cinta de logros/roadmap breve */}
      <div className="mt-6 grid grid-cols-3 divide-x divide-white/20 rounded-xl bg-white/10 p-4 text-center text-sm">
        <div>
          <div className="font-bold">2012</div>
          <div className="opacity-80">Fundación</div>
        </div>
        <div>
          <div className="font-bold">25K+</div>
          <div className="opacity-80">Tasaciones</div>
        </div>
        <div>
          <div className="font-bold">Nacional</div>
          <div className="opacity-80">Cobertura</div>
        </div>
      </div>

      {/* Figura decorativa
      <svg className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 text-white/10" viewBox="0 0 100 100" fill="currentColor" aria-hidden>
        <rect x="10" y="10" width="80" height="80" rx="16" />
      </svg> */}
    </div>
  </div>
</Section>


      {/* Valores */}
      <section id="valores" className="scroll-mt-24 py-24 bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-white/80">Nuestros pilares</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Valores</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Card 01 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">
              <div className="absolute -top-4 -left-4 rounded-2xl bg-[#C2CDE5] px-4 py-2 text-2xl font-black text-[#0E2A47]">01</div>
              <h3 className="mt-6 text-xl font-semibold text-[#0E2A47]">Compromiso con la calidad</h3>
              <p className="mt-3 text-[#43567F]">
                Resultados confiables, precisos y ajustados a las necesidades específicas de cada cliente.
              </p>
            </div>

            {/* Card 02 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">
              <div className="absolute -top-4 -left-4 rounded-2xl bg-[#C2CDE5] px-4 py-2 text-2xl font-black text-[#0E2A47]">02</div>
              <h3 className="mt-6 text-xl font-semibold text-[#0E2A47]">Transparencia y ética</h3>
              <p className="mt-3 text-[#43567F]">
                Información clara y accesible para decisiones informadas y seguras.
              </p>
            </div>

            {/* Card 03 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">
              <div className="absolute -top-4 -left-4 rounded-2xl bg-[#C2CDE5] px-4 py-2 text-2xl font-black text-[#0E2A47]">03</div>
              <h3 className="mt-6 text-xl font-semibold text-[#0E2A47]">Orientación al cliente</h3>
              <p className="mt-3 text-[#43567F]">
                Soluciones personalizadas y un servicio ágil, centrado en los objetivos del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section id="objetivos" className="scroll-mt-24 py-20 bg-[#C2CDE5]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold tracking-tight text-[#0E2A47]">Objetivos</h2>
    <p className="mt-2 text-[#0E2A47] opacity-80">
      Foco en crecimiento, excelencia y relaciones a largo plazo.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {/* Expandir presencia */}
      <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
        <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* target icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M11 11V6a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5Z" />
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-[#0E2A47]">Expandir nuestra presencia</h3>
          <p className="mt-1 text-[#43567F]">
            Consolidar la red de tasadores en capitales regionales y ciudades clave.
          </p>
        </div>
      </div>

      {/* Excelencia */}
      <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
        <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* star icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="m12 2 2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z" />
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-[#0E2A47]">Brindar un servicio de excelencia</h3>
          <p className="mt-1 text-[#43567F]">
            Metodologías avanzadas de valoración y análisis para precisión y transparencia.
          </p>
        </div>
      </div>

      {/* Relaciones a largo plazo */}
      <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
        <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* handshake icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M8.5 12.5 12 9l3.5 3.5a2.1 2.1 0 0 1-3 3L12 15l-.5.5a2.1 2.1 0 0 1-3-3Z" />
            <path d="M2 8h5l5-3 5 3h5v8h-6l-4 2-4-2H2V8Z" opacity=".25" />
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-[#0E2A47]">Fortalecer relaciones a largo plazo</h3>
          <p className="mt-1 text-[#43567F]">
            Soluciones personalizadas que impulsen el éxito de los proyectos.
          </p>
        </div>
      </div>

      {/* Sostenibilidad */}
      <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
        <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* leaf icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M4 13c7 0 9-7 16-7 0 7-7 9-7 16C8 22 4 18 4 13Z" />
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-[#0E2A47]">Compromiso con la sostenibilidad</h3>
          <p className="mt-1 text-[#43567F]">
            Alineación a estándares ambientales, sociales y de gobernanza (ESG).
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Servicios */}
      <Section id="servicios" title="Servicios">
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {/* Tasación de activos */}
    <div className="group rounded-2xl border border-[#C2CDE5] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* briefcase icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M4 5h16v14H4z" />
            <path d="M7 8h10v2H7zM7 12h10v2H7z" className="opacity-60" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#0E2A47]">Tasación de activos</h3>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#43567F]">
        <li>Unidades económicas, plantas industriales y agroindustriales</li>
        <li>Maquinarias y equipos; embarcaciones y aeronaves</li>
        <li>Normas IFRS y toma de seguros</li>
      </ul>
    </div>

    {/* Revisión de inventarios */}
    <div className="group rounded-2xl border border-[#C2CDE5] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* boxes icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M3 7h18v10H3z" />
            <path d="M7 7V4h10v3" className="opacity-60" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#0E2A47]">Revisión de inventarios</h3>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#43567F]">
        <li>Inventarios diversos y conciliaciones</li>
        <li>Levantamiento en terreno y auditoría</li>
      </ul>
    </div>

    {/* Evaluación de proyectos */}
    <div className="group rounded-2xl border border-[#C2CDE5] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* blocks icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 2 3 7l9 5 9-5-9-5Z" />
            <path d="M3 17l9 5 9-5" className="opacity-60" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#0E2A47]">Evaluación de proyectos</h3>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#43567F]">
        <li>Factibilidad técnica y validación de presupuestos</li>
        <li>Análisis residual y comparación de mercado</li>
      </ul>
    </div>

    {/* Seguimiento de obras */}
    <div className="group rounded-2xl border border-[#C2CDE5] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* square icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M4 4h16v16H4z" />
            <path d="M8 8h8v8H8z" className="opacity-60" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#0E2A47]">Seguimiento de obras</h3>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#43567F]">
        <li>Informes de avance (390 proyectos)</li>
        <li>Control de plazos y cubicaciones</li>
      </ul>
    </div>

    {/* Tasación final */}
    <div className="group rounded-2xl border border-[#C2CDE5] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* clock icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
            <path d="M12 7v5l3 3" className="opacity-60" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#0E2A47]">Tasación final</h3>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#43567F]">
        <li>Cierre de proyectos y certificación final</li>
      </ul>
    </div>

    {/* Especialidades */}
    <div className="group rounded-2xl border border-[#C2CDE5] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E2A47] text-white">
          {/* plus icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M4 12h16" />
            <path d="M12 4v16" className="opacity-60" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#0E2A47]">Especialidades</h3>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#43567F]">
        <li>Pisciculturas, centros de cultivo y plantas de proceso</li>
        <li>Inmuebles comerciales; proyectos mineros y de generación eléctrica</li>
      </ul>
    </div>
  </div>
</Section>

      {/* Cobertura */}
<Section id="cobertura" title="Cobertura">
<div className="grid gap-8 md:grid-cols-1">
{/* Mapa/Chile + ciudades ordenadas */}
<div className="relative overflow-hidden rounded-2xl border border-[#C2CDE5] bg-white p-6">
<h3 className="text-lg font-semibold text-[#0E2A47]">Presencia en Chile</h3>
<p className="mt-2 text-[#43567F]">
Cobertura nacional desde <b>Arica</b> hasta <b>Punta Arenas</b>, con tiempos de respuesta ágiles.
</p>


<ul className="mt-4 grid grid-cols-2 gap-2 text-[#0E2A47] sm:grid-cols-3">
{[
"Arica", "Iquique", "Antofagasta", "Copiapó", "La Serena", "Valparaíso",
"Rancagua", "Curicó", "Talca", "Concepción", "Los Ángeles", "Temuco",
"Osorno", "Puerto Montt", "Punta Arenas", "Región Metropolitana"
].map((city) => (
<li key={city} className="flex items-center gap-2">
<span className="inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#0E2A47]" />
<span>{city}</span>
</li>
))}
</ul>


{/* Silueta de Chile decorativa */}
<svg
viewBox="0 0 120 512"
className="pointer-events-none absolute -right-4 bottom-0 h-40 w-auto text-[#C2CDE5] opacity-80"
fill="currentColor"
aria-hidden
>
<path d="M73 0c-3 9-2 14 1 20 6 11 5 22 0 34-7 16-7 30 0 45 5 11 5 21-3 32-8 11-9 22-3 34 5 10 4 19-2 28-9 12-10 24-3 37 5 9 5 18-2 27-9 12-10 24-3 37 5 9 5 18-2 27-9 12-10 24-3 37 6 11 6 21-1 32-6 10-7 20-4 31 4 15 3 29-5 44l14 7c9-17 11-34 7-52-2-10-1-18 4-26 9-14 10-27 2-41-4-8-4-15 2-22 10-13 11-26 3-39-4-7-4-13 1-20 10-14 11-28 2-42-4-6-4-12 0-19 10-15 11-30 2-45-4-7-4-13 1-20 9-13 10-26 2-40-5-9-5-17 0-26C80 13 80 7 73 0Z" />
</svg>
</div>


{/* Chips por macrozona + nota logística */}
<div className="flex flex-col justify-between rounded-2xl bg-[#0E2A47] p-6 text-white">
<div>
<h3 className="text-lg font-semibold">Macrozonas</h3>
<div className="mt-4 flex flex-wrap gap-2">
{[
{ label: "Norte Grande", note: "Arica–Atacama" },
{ label: "Norte Chico", note: "Coquimbo–Valpo" },
{ label: "Centro", note: "RM–O'Higgins–Maule" },
{ label: "Sur", note: "Biobío–Los Lagos" },
{ label: "Austral", note: "Aysén–Magallanes" },
].map((t) => (
<span
key={t.label}
title={t.note}
className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-[#0E2A47]"
>
<svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
<path d="M12 2C7 2 3 6 3 11c0 7 9 11 9 11s9-4 9-11c0-5-4-9-9-9Zm0 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
</svg>
{t.label}
</span>
))}
</div>
</div>
<div className="mt-6 rounded-xl border border-white/20 p-4 text-sm">
<p className="text-white/90">
Coordinación logística nacional para <b>salidas a terreno</b> y <b>peritajes</b> especializados.
</p>
</div>
</div>


{/* Equipo multidisciplinario */}
<div className="rounded-2xl border border-[#C2CDE5] bg-white p-6">
<h3 className="text-lg font-semibold text-[#0E2A47]">Equipo multidisciplinario</h3>
<ul className="mt-3 grid gap-2 text-[#43567F]">
{[
"Ingenieros Civiles e Industriales",
"Arquitectos y Constructores",
"Ingenieros Mecánicos y Agrónomos",
"Especialistas en minería, energía y acuicultura",
].map((r) => (
<li key={r} className="flex items-start gap-2">
<svg viewBox="0 0 20 20" fill="currentColor" className="mt-1 h-4 w-4 text-[#0E2A47]">
<path
fillRule="evenodd"
d="M16.704 5.29a1 1 0 010 1.415l-7.01 7.01a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l2.293 2.293 6.303-6.303a1 1 0 011.414 0z"
clipRule="evenodd"
/>
</svg>
<span>{r}</span>
</li>
))}
</ul>
{/* Sello “Chile” / estándares locales */}
<div className="mt-10 flex items-center gap-3 rounded-xl bg-[#C2CDE5] p-3 text-[#0E2A47]">
<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
<path d="M4 4h16v16H4z" />
<path d="M8 8h8v8H8z" className="opacity-60" />
</svg>
<span>Operación con normativa y estándares locales.</span>
</div>
</div>
</div>
</Section>

{/* Agrega scroll-behavior smooth en globals.css o aquí */}
<style jsx global>{`
html {
scroll-behavior: smooth;
}
`}</style>
<footer className="bg-[#0E2A47] text-white py-12 mt-20" id="contacto">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
{/* Logo o título */}
<div>
<h2 className="text-2xl font-bold mb-3">Senn Consultores</h2>
<p className="text-sm text-[#C2CDE5] max-w-sm">
Expertos en tasaciones y consultoría con cobertura nacional. Entregamos precisión, confianza e innovación desde 2012.
</p>
</div>


{/* Cotizaciones */}
<div>
<h3 className="text-lg font-semibold mb-2">Cotizaciones</h3>
<ul className="space-y-1 text-sm">
<li>
<a href="mailto:tasaciones@senn.cl" className="hover:underline">tasaciones@senn.cl</a>
</li>
<li>
<a href="https://www.senn.cl" target="_blank" className="hover:underline">www.senn.cl</a>
</li>
</ul>
</div>


{/* Contacto directo */}
<div>
<h3 className="text-lg font-semibold mb-2">Consultas e informaciones</h3>
<p className="text-sm">
Germán Senn — <a href="mailto:german@senn.cl" className="hover:underline">german@senn.cl</a>
</p>
<p className="text-sm mt-1">Teléfono: +56 9 9346 7093</p>
<div className="mt-4">
<a href="mailto:tasaciones@senn.cl" className="inline-flex items-center rounded-xl bg-white text-[#0E2A47] px-5 py-2 text-sm font-semibold hover:bg-[#C2CDE5] transition-all">
Escribir ahora
</a>
</div>
</div>
</div>


{/* Línea inferior */}
<div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-[#C2CDE5]">
© {new Date().getFullYear()} Senn Consultores. Todos los derechos reservados.
</div>
</footer>
    </main>
  );
}

function Section({ id, title, eyebrow, children }: { id?: string; title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && <div className="text-xs font-semibold uppercase tracking-wider text-[#43567F]">{eyebrow}</div>}
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        <div className="prose prose-slate mt-4 max-w-none text-[#43567F]">{children}</div>
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#C2CDE5] p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#0E2A47]">{title}</h3>
      <p className="mt-2 text-[#43567F]">{children}</p>
    </div>
  );
}

function ValueCard({ title, number, children }: { title: string; number: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#C2CDE5] p-6">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#C2CDE5]" />
      <div className="text-4xl font-extrabold text-[#C2CDE5]">{number}</div>
      <h3 className="mt-2 text-lg font-semibold text-[#0E2A47]">{title}</h3>
      <p className="mt-2 text-[#43567F]">{children}</p>
    </div>
  );
}
