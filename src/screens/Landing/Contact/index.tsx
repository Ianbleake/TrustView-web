import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, MessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'sonner';

export const Contact = ():React.ReactElement => {

  
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensaje enviado con exito!", {
        description: "Nos contactaremos contigo pronto."
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main className="container mx-auto px-6 pt-8 pb-20 max-w-4xl">

      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Contactanos</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">¿Tenés preguntas o necesitás ayuda? Estamos acá para ayudarte.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">

        <div className="md:col-span-2 space-y-6">
          {[
            { icon: Mail, title: "Email", detail: "soporte@reviewsapp.com" },
            { icon: MessageSquare, title: "Chat en vivo", detail: "Lun-Vie, 9:00-18:00 (ART)" },
            { icon: MapPin, title: "Ubicación", detail: "Buenos Aires, Argentina" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card">
              <div className="rounded-xl gradient-bg p-3 shadow-glow shrink-0">
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5 p-7 rounded-2xl border border-border/60 bg-card">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nombre</label>
              <Input placeholder="Tu nombre" required className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="tu@email.com" required className="rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Asunto</label>
            <Input placeholder="¿En qué podemos ayudarte?" required className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Mensaje</label>
            <Textarea placeholder="Contanos más detalles..." required className="rounded-xl min-h-30" />
          </div>
          <Button type="submit" disabled={loading} className="w-full gradient-primary text-primary-foreground shadow-glow rounded-xl">
            {loading ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      </div>
    </main>
  )
}
