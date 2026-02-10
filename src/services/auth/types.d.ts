
type LoginPayload = {
  email: string;
  password: string;
}

type LoginResponse = {
  user: User | null;
  session: Session | null;
}