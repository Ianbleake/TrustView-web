/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRight, Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

type RegisterValues = {
  firstName: string;
  lastName: string;
  storeName: string;
  email: string;
  password: string;
};

export const RegisterForm = (): React.ReactElement => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const storeId = searchParams.get("store");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>();

  const onSubmit = async (data: RegisterValues): Promise<void> => {
    if (!storeId) {
      setErrorMsg("Store inválido o expirado");
      return;
    }

    try {
      setLoading(true);
      setErrorMsg(null);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/onboarding/complete`,
        {
          storeId,
          storeName: data.storeName,
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
        }
      );

      navigate("/platform");
    } catch (error: any) {
      console.error(error);
      setErrorMsg(
        error?.response?.data?.error ??
        "No se pudo crear la cuenta"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="flex flex-col py-6 px-8 min-w-md gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-2xl text-gray-800">
          Crear cuenta
        </h2>
        <span className="text-gray-500 text-sm">
          Configura tu tienda en TrustView
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        {/* Nombre */}
        <div className="flex flex-col gap-1">
          <Label>Nombre</Label>
          <Input
            {...register("firstName", {
              required: "El nombre es obligatorio",
            })}
          />
          {errors.firstName && (
            <span className="text-sm text-red-500">
              {errors.firstName.message}
            </span>
          )}
        </div>

        {/* Apellido */}
        <div className="flex flex-col gap-1">
          <Label>Apellido</Label>
          <Input
            {...register("lastName", {
              required: "El apellido es obligatorio",
            })}
          />
          {errors.lastName && (
            <span className="text-sm text-red-500">
              {errors.lastName.message}
            </span>
          )}
        </div>

        {/* Store */}
        <div className="flex flex-col gap-1">
          <Label>Nombre de la tienda</Label>
          <Input
            {...register("storeName", {
              required: "El nombre de la tienda es obligatorio",
            })}
          />
          {errors.storeName && (
            <span className="text-sm text-red-500">
              {errors.storeName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email", {
              required: "El email es obligatorio",
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <Label>Contraseña</Label>
          <div className="relative">
            <Input
              type={showPass ? "text" : "password"}
              {...register("password", {
                required: "El password es obligatorio",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres",
                },
              })}
            />
            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <Eye /> : <EyeClosed />}
            </div>
          </div>
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Error backend */}
        {errorMsg && (
          <span className="text-sm text-red-600 font-medium">
            {errorMsg}
          </span>
        )}

        <Button type="submit" variant="gradient" disabled={isLoading}>
          {isLoading ? <Spinner /> : <>Crear cuenta <ArrowRight /></>}
        </Button>
      </form>
    </Card>
  );
};
