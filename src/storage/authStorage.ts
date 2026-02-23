import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Session, User } from "@supabase/supabase-js";

type SessionStorage = {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  store: Store | null;

  setSession: (data: {
    user: User;
    session: Session;
    profile?: Profile | null;
    store?: Store | null;
  }) => void;

  updateProfile: (profile: Profile) => void;
  updateStore: (store: Store) => void;
  clearSession: () => void;
  updateWidgetConfig: (widgetConfig: WidgetStyles) => void;
};

export const useSessionStorage = create<SessionStorage>()(
  persist(
    (set) => ({
      user: null,
      session: null,
      profile: null,
      store: null,

      setSession: ({ user, session, profile = null, store = null }):void => void
        set({
          user,
          session,
          profile,
          store,
        }),

      updateProfile: (profile):void => void set({ profile }),

      updateStore: (store):void => void set({ store }),

      updateWidgetConfig: (widgetConfig: WidgetStyles):void => void
        set((state) => ({
          store: state.store
            ? { ...state.store, widget_config: widgetConfig }
            : null,
        })),

      clearSession: () :void => void
        set({
          user: null,
          session: null,
          profile: null,
          store: null,
        }),
    }),
    {
      name: "auth-session",
    }
  )
);
