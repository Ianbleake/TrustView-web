import React from 'react';

export const Privacy = ():React.ReactElement => {
  
  return (
    <main className="container mx-auto px-6 pt-8 pb-20 max-w-3xl">
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">Política de Privacidad</h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
        <p className="text-base leading-relaxed">Última actualización: 27 de febrero de 2026</p>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">1. Información que Recopilamos</h2>
          <p>Recopilamos información que nos proporcionás directamente, como tu nombre, email y datos de tu tienda. También recopilamos datos de uso del servicio de forma automática.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">2. Uso de la Información</h2>
          <p>Utilizamos tu información para proporcionar y mejorar nuestros servicios, comunicarnos contigo, personalizar tu experiencia y cumplir con obligaciones legales.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">3. Compartir Información</h2>
          <p>No vendemos ni compartimos tu información personal con terceros, excepto cuando sea necesario para proporcionar el servicio (por ejemplo, procesadores de pago) o cuando lo exija la ley.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">4. Seguridad de los Datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración o destrucción.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">5. Cookies</h2>
          <p>Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico y personalizar el contenido. Podés configurar tu navegador para rechazar cookies.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">6. Retención de Datos</h2>
          <p>Conservamos tu información mientras tu cuenta esté activa o sea necesaria para proporcionarte servicios. Podés solicitar la eliminación de tus datos en cualquier momento.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">7. Tus Derechos</h2>
          <p>Tenés derecho a acceder, rectificar, exportar y eliminar tus datos personales. Para ejercer estos derechos, contactanos a través de nuestra página de contacto.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">8. Cambios en esta Política</h2>
          <p>Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios significativos a través de la plataforma o por email.</p>
        </section>
      </div>
    </main>
  )
}