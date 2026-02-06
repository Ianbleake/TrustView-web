import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInButton(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <Button variant="gradient" onClick={() => navigate("/auth")}>
      Iniciar Sesión
    </Button>
  );
}
