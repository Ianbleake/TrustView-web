import { supabase } from "../supabase";

export default async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message ?? "Error al cerrar sesión");
  }
}
