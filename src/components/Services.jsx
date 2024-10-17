import React from 'react'

function Services() {
    const servicesData = [
      {
        icon: "🍲", // Puedes usar emojis, iconos de FontAwesome, o imágenes
        title: "Producción de Salsas",
        description: "Elaboramos salsas de alta calidad con ingredientes naturales."
      },
      {
        icon: "📦",
        title: "Distribución Nacional",
        description: "Contamos con una red de distribución que abarca todo el país."
      },
      {
        icon: "🌱",
        title: "Productos Naturales",
        description: "Nuestros productos están libres de conservantes y aditivos."
      },
      {
        icon: "🌱",
        title: "Productos Naturales",
        description: "Nuestros productos están libres de conservantes y aditivos."
      },
      {
        icon: "🌱",
        title: "Productos Naturales",
        description: "Nuestros productos están libres de conservantes y aditivos."
      },
      {
        icon: "🌱",
        title: "Productos Naturales",
        description: "Nuestros productos están libres de conservantes y aditivos."
      },
      {
        icon: "🌱",
        title: "Productos Naturales",
        description: "Nuestros productos están libres de conservantes y aditivos."
      }
    ];
  
    return (
      <section className="services">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Services;