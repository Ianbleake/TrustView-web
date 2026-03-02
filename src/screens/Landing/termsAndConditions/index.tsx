import React from 'react'

export const TermsAndConditions = ():React.ReactElement => {
  return (
    <main className="container mx-auto px-6 pt-8 pb-20 max-w-3xl">
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">Términos y Condiciones</h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
        <p className="text-base leading-relaxed">Última actualización: 27 de febrero de 2026</p>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar ReviewsApp, aceptás estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, no debés utilizar nuestro servicio.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">2. Descripción del Servicio</h2>
          <p>ReviewsApp es una plataforma de gestión de reseñas diseñada para tiendas online en Tienda Nube. Nuestro servicio permite recolectar, moderar y mostrar reseñas de clientes en tu tienda.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">3. Registro y Cuenta</h2>
          <p>Para utilizar ReviewsApp, debés crear una cuenta proporcionando información precisa y actualizada. Sos responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">4. Planes y Facturación</h2>
          <p>ReviewsApp ofrece planes gratuitos y pagos. Los planes pagos se facturan mensualmente. Podés cancelar tu suscripción en cualquier momento, y el acceso se mantendrá hasta el final del período facturado.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">5. Uso Aceptable</h2>
          <p>No podés utilizar ReviewsApp para publicar reseñas falsas, spam, contenido ofensivo o cualquier actividad que viole las leyes aplicables. Nos reservamos el derecho de suspender cuentas que violen estos términos.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">6. Propiedad Intelectual</h2>
          <p>Todo el contenido, diseño y código de ReviewsApp es propiedad de ReviewsApp. Las reseñas generadas por los usuarios pertenecen a sus respectivos autores, otorgando a ReviewsApp una licencia para mostrarlas en la plataforma.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">7. Limitación de Responsabilidad</h2>
          <p>ReviewsApp se proporciona "tal cual". No garantizamos que el servicio sea ininterrumpido o libre de errores. En ningún caso seremos responsables por daños indirectos derivados del uso del servicio.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-foreground">8. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados a través de la plataforma o por email.</p>
        </section>
      </div>
    </main>
  )
}