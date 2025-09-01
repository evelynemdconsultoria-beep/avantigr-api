"use client";

import { useEffect, useState } from "react";

function AvantiBars() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // barras em leve “crescente” e animação mais lenta
  const bars = [
    { h: 12, d: 0.00 },
    { h: 16, d: 0.18 },
    { h: 20, d: 0.36 },
  ];
  return (
    <div aria-hidden className="flex items-end justify-center gap-1.5 mb-4">
      {bars.map((b, i) => (
        <span
          key={i}
          className={`block w-2.5 rounded-md bg-brand-lime ${mounted ? "animate-bar" : ""}`}
          style={{
            height: `${b.h}px`,
            transformOrigin: "center bottom",
            animationDelay: `${b.d}s`,
            animationDuration: "2.8s",
            boxShadow: "0 0 0 1px rgba(0,0,0,.06) inset",
          }}
        />
      ))}
    </div>
  );
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="bg-soft-gradient min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div
          className="rounded-2xl bg-graphite-card shadow-soft shadow-black/50
                     ring-1 ring-black/40 px-8 py-8 sm:py-9 backdrop-blur-sm"
        >
          {/* Logo + Nome */}
          <div className="flex flex-col items-center select-none">
            <AvantiBars />
            <h1 className="text-[34px] leading-none font-semibold tracking-tight">
              <span className="text-gray-200">Avanti</span>{" "}
              <span className="text-brand-lime">GR</span>
            </h1>
            <p className="mt-2 text-sm text-white/80">Acesso ao sistema</p>
          </div>

          {/* Form */}
          <form className="mt-7 space-y-4">
            <div>
              <label className="block text-sm text-white/80 mb-2">Usuário</label>
              <input
                defaultValue="admin"
                type="text"
                className="w-full rounded-xl bg-white/[0.06] text-white
                           placeholder-white/50 border border-white/10
                           focus:outline-none focus:ring-2 focus:ring-brand-lime/70
                           focus:border-transparent px-4 h-11
                           shadow-innerSoft"
                placeholder="Seu usuário"
              />
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-xl bg-white/[0.06] text-white
                             placeholder-white/50 border border-white/10
                             focus:outline-none focus:ring-2 focus:ring-brand-lime/70
                             focus:border-transparent px-4 h-11 pr-11
                             shadow-innerSoft"
                  placeholder="•••"
                />
                {/* Botão com MESMAS CLASSES/ASPECTO do original (quadradinho com círculo) */}
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2
                             inline-flex items-center justify-center
                             h-7 w-7 rounded-lg border border-brand-lime/60
                             text-brand-lime/95"
                >
                  {/* “ponto” interno, sem mudar o desenho */}
                  <span
                    aria-hidden
                    className="block h-3.5 w-3.5 rounded-full"
                    style={{
                      boxShadow: "0 0 0 2px rgba(183,234,22,.95) inset",
                      backgroundColor: showPassword ? "rgba(183,234,22,.95)" : "transparent",
                    }}
                  />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full h-11 rounded-xl bg-brand-lime
                         text-black font-medium tracking-wide
                         hover:brightness-110 active:brightness-95
                         transition-[filter,transform] duration-150
                         shadow-[0_10px_30px_rgba(183,234,22,.28)]
                         focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              Entrar
            </button>

            <div className="text-center">
              <a
                href="#"
                className="text-sm text-white/80 hover:text-white underline underline-offset-4"
              >
                Esqueci a senha
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
