import { supabase } from "../supabase";


export default async function signIn(
  payload: LoginPayload
): Promise<LoginResponse> {
  // 1️⃣ Login
  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email: payload.email,
      password: payload.password,
    });

  if (authError || !authData.user || !authData.session) {
    throw new Error(authError?.message ?? "Error al iniciar sesión");
  }

  // 2️⃣ Obtener profile por auth_id
  const { data: profile, error: profileError } = await supabase
    .from("profile")
    .select("*")
    .eq("auth_id", authData.user.id)
    .single();

  if (profileError || !profile) {
    throw new Error("No se pudo obtener el perfil del usuario");
  }

  // 3️⃣ Obtener store por profile.id
  const { data: store, error: storeError } = await supabase
    .from("stores")
    .select("*")
    .eq("profile_id", profile.id)
    .maybeSingle();

  if (storeError) {
    throw new Error("No se pudo obtener la tienda");
  }

  return {
    user: authData.user,
    session: authData.session,
    profile,
    store: store ?? null,
  };
}
