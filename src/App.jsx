import React from "react";
import { recursos } from "./data/recursos";
import { articulos } from "./data/articulos";
export default function App() {
  const pillars = [
    {
      icon: "📦",
      title: "Supply Chain & Operaciones",
      text: "Formación práctica sobre planificación, inventarios, almacenes, transporte, distribución, servicio y costos.",
    },
    {
      icon: "📊",
      title: "Gestión con datos",
      text: "KPIs, tableros, análisis operativo y toma de decisiones basada en información clara y confiable.",
    },
    {
      icon: "🤖",
      title: "Tecnología aplicada",
      text: "IA, automatización, Excel, Power BI y herramientas digitales aplicadas a procesos reales.",
    },
    {
      icon: "🎯",
      title: "Liderazgo operativo",
      text: "Equipos, comunicación, cultura de resultados, disciplina operativa y ejecución bajo presión.",
    },
  ];

  const topics = [
    "Supply Chain explicado de forma simple y aplicable",
    "KPIs, tableros e indicadores para tomar mejores decisiones",
    "Liderazgo operativo, comunicación y cultura de resultados",
    "IA, automatización y tecnología aplicadas a procesos reales",
  ];

  return (
    <main className="page">
      <section className="hero">
        <div className="heroContent">
          <p className="badge">
            Charlas · Formación · Supply Chain · Tecnología aplicada
          </p>

          <h1>Julio Serrano</h1>

          <p className="heroText">
            Ayudo a profesionales, equipos y empresas a entender y mejorar sus
            operaciones mediante formación clara, práctica y basada en experiencia real.
          </p>

          <div className="buttons">
            <a className="primaryButton" href="mailto:tuemail@ejemplo.com">
              Conversemos →
            </a>
            <a className="secondaryButton" href="#temas">
              Ver temáticas
            </a>
          </div>
        </div>

        <div className="profileCard">
          <div className="profileHeader">
            <div className="iconBox">🚚</div>
            <div>
              <h2>Formación ejecutiva y operativa</h2>
              <p>Aprender desde problemas reales</p>
            </div>
          </div>

          <div className="checkList">
            <p>✅ Clases y charlas sobre logística, distribución, planificación y mejora de procesos.</p>
            <p>✅ Contenido práctico sobre servicio, costo, inventario, productividad y control.</p>
            <p>✅ Aplicación simple de datos, tableros, IA y herramientas digitales.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="sectionLabel">Propuesta de valor</p>
        <h2>Convertir experiencia operativa en aprendizaje claro, útil y accionable.</h2>
        <p className="sectionText">
          Mi enfoque combina experiencia operativa real, análisis de datos,
          liderazgo de equipos y tecnología aplicada para enseñar con claridad
          lo que muchas veces en las empresas se aprende tarde, mal o bajo presión.
        </p>

        <div className="grid">
          {pillars.map((item) => (
            <div className="card" key={item.title}>
              <div className="smallIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="whiteSection" id="temas">
        <div>
          <p className="sectionLabel dark">Temáticas de formación</p>
          <h2>Aprendizaje práctico para equipos y profesionales.</h2>
          <p className="darkText">
            Diseño charlas, clases y espacios de formación sobre problemas reales
            de la operación: servicio, costos, inventarios, productividad,
            indicadores, liderazgo, comunicación entre áreas y tecnología aplicada.
          </p>
        </div>

        <div className="topicList">
          {topics.map((item) => (
            <div className="topic" key={item}>
              <p>✅ {item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="resourcesSection" id="recursos">
        <p className="sectionLabel">Recursos</p>
        <h2>Material práctico para aprender y aplicar.</h2>
        <p className="sectionText">
          Guías, artículos, plantillas y materiales descargables para profesionales
          y equipos que quieren mejorar su forma de mirar, decidir y ejecutar en operaciones.
        </p>

<div className="resourcesGrid">
  {recursos.map((item) => (
    <a
      className="resourceCard"
      href={item.enlace}
      target={item.externo ? "_blank" : undefined}
      rel={item.externo ? "noreferrer" : undefined}
      key={item.titulo}
    >
      <span>{item.icono}</span>
      <h3>{item.titulo}</h3>
      <p>{item.descripcion}</p>
      <strong>{item.boton} →</strong>
    </a>
  ))}
</div>
      </section>
            <section className="articlesSection" id="articulos">
        <p className="sectionLabel">Artículos</p>
        <h2>Ideas prácticas para mejorar operaciones, liderazgo y gestión.</h2>
        <p className="sectionText">
          Reflexiones y herramientas para pasar de la urgencia a la gestión, de los datos a las decisiones
          y de la experiencia individual al aprendizaje compartido.
        </p>

        <div className="articlesList">
          {articulos.map((articulo) => (
            <article className="articleCard" id={articulo.id} key={articulo.id}>
              <p className="articleCategory">{articulo.categoria}</p>
              <h3>{articulo.titulo}</h3>
              <p className="articleSummary">{articulo.resumen}</p>

              <div className="articleContent">
                {articulo.contenido.map((bloque) => (
                  <div key={bloque.subtitulo}>
                    <h4>{bloque.subtitulo}</h4>
                    <p>{bloque.texto}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section twoColumns">
        <div className="wideCard">
          <div className="smallIcon">🧭</div>
          <h2>Formación basada en experiencia real.</h2>
          <p>
            No enseño operaciones desde la teoría pura. Enseño desde la ejecución
            diaria, desde los problemas reales de servicio, costos, inventarios,
            equipos, urgencias, clientes y decisiones que impactan el negocio.
          </p>
        </div>

        <div className="principleCard">
          <h3>Principio</h3>
          <p>
            La mejor formación no llena de conceptos: cambia la forma en que las
            personas miran, deciden y ejecutan.
          </p>
        </div>
      </section>

      <section className="contact">
        <div>
          <h2>¿Conversamos?</h2>
          <p>
            Disponible para charlas, clases, capacitaciones internas, workshops
            y espacios de formación profesional.
          </p>
        </div>

        <div className="buttons">
          <a className="primaryButton" href="mailto:tuemail@ejemplo.com">
            Contactar
          </a>
          <a className="secondaryButton" href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        Argentina · Supply Chain & Operaciones
      </footer>
    </main>
  );
}
