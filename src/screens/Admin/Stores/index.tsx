
import { StarsCount } from "@/components/StarsCount";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockStores } from "@/content/MockStores";
import { Search, Store } from "lucide-react";
import { useState } from "react";

export const Stores = ():React.ReactElement => {

  const [search, setSearch] = useState("");
  const filtered = mockStores.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <div className="flex items-center justify-between animate-fade-in">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Tiendas</h1>
          <p className="text-muted-foreground mt-1">Gestionar las tiendas conectadas</p>
        </div>
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar tienda..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 rounded-xl border-border/60" />
        </div>
      </div>

      <Card className="rounded-2xl p-0 border-gray-200 overflow-hidden animate-fade-in" style={{ animationDelay: '100ms' }}>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-100/80">
              <th className="text-center px-6 py-3.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">Tienda</th>
              <th className="text-center px-6 py-3.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">Plan</th>
              <th className="text-center px-6 py-3.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">Reseñas</th>
              <th className="text-center px-6 py-3.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">Rating</th>
              <th className="text-center px-6 py-3.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">Estado</th>
              
            </tr>
          </thead>
          <tbody >
            {filtered.map((store, i) => (
              <tr
                key={store.id}
                className="border-b border-border/40 hover:bg-muted/20 transition-colors duration-150 animate-fade-in text-center"
                style={{ animationDelay: `${150 + i * 50}ms` }}
              >

                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Store className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-semibold text-sm">{store.name}</span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <Badge variant={store.plan === "free" ? "secondary" : store.plan === "base" ? "default" : store.plan === "pro" ? "gradientShine" : "ghost"}>
                    {store.plan}
                  </Badge>
                </td>

                <td className="px-6 py-4 text-sm font-medium text-foreground">{store.reviews}</td>

                <td className="px-6 py-4 flex items-center justify-center"><StarsCount count={store.avgRating} size="sm" /></td>


                <td className="px-6 py-4">
                  <Badge variant={store.status === "active" ? "success" : "ghost"}>
                    <div className={`h-2 w-2 rounded-full ${store.status === "active" ? "bg-green-600" : "bg-muted-foreground"}`} />
                    <span className={`text-sm font-medium ${store.status === "active" ? "text-success" : "text-muted-foreground"}`}>
                      {store.status === "active" ? "Activa" : "Inactiva"}
                    </span>                    
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}