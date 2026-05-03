import React from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle,
  Linkedin,
  Mail,
  MapPin,
  Package,
  Route,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function App() {
  const pillars = [
    {
      icon: <Package />,
      title: "Supply Chain & Operaciones",
      text: "Formación práctica sobre planificación, inventarios, almacenes, transporte, distribución, servicio y costos.",
    },
    {
      icon: <BarChart3 />,
      title: "Gestión con datos",
      text: "KPIs, tableros, análisis operativo y toma de decisiones basada en información clara y confiable.",
    },
    {
      icon: <BrainCircuit />,
      title: "Tecnología aplicada",
      text: "IA, automatización, Excel, Power BI y herramientas digitales aplicadas a procesos reales.",
    },
    {
      icon: <ShieldCheck />,
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
          <p className="badge">Charlas · Formación · Supply Chain · Tecnología aplicada</p>

          <h1>Julio Serrano</h1>

          <p className="heroText">
            Ayudo a profesionales, equipos y empresas a entender y mejorar sus
            operaciones mediante formación clara, práctica y basada en experiencia real.
          </p>

          <div className="buttons">
            <a className="primaryButton" href="mailto:tuemail@ejemplo.com">
              Conversemos <ArrowRight size={20} />
            </a>
            <a className="secondaryButton" href="#temas">
              Ver temáticas
            </a>
          </div>
        </div>

        <div className="profileCard">
          <div className="profileHeader">
            <div className="iconBox">
              <Truck />
            </div>
            <div>
              <h2>Formación ejecutiva y operativa</h2>
              <p>Aprender desde problemas reales</p>
            </div>
          </div>

          <div className="checkList">
            <p><checkcircle /> Clases y charlas sobre logística, distribución, planificación y mejora de procesos.</p>
            <p><checkcircle /> Contenido práctico sobre servicio, costo, inventario, productividad y control.</p>
            <p><checkcircle /> Aplicación simple de datos, tableros, IA y herramientas digitales.</p>
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
              <checkcircle />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section twoColumns">
        <div className="wideCard">
          <Route />
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
            <Mail size={20} /> Contactar
          </a>
          <a className="secondaryButton" href="https://www.linkedin.com/" target="_blank">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <MapPin size={16} /> Argentina · Supply Chain & Operaciones
      </footer>
    </main>
  );
}
