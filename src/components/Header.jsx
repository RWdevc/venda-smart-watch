import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <>
<header
      className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.5)]"
    >
      <div
        className="h-20 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md"
      >
        <div className="flex items-center gap-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span
                className="text-headline-sm font-headline-sm tracking-tight text-on-surface uppercase"
                >CHRONOS</span
              ><span
                className="text-headline-sm font-headline-sm tracking-tight text-primary-container font-extrabold uppercase"
                >KINETIC</span
              >
            </div>
            <span
              className="text-label-micro font-label-micro uppercase tracking-widest text-on-surface-variant"
              >TITANIUM EDITION / PULSE PRO</span
            >
          </div>
          <div
            className="hidden xl:flex items-center gap-space-xs bg-surface-container-high px-space-sm py-space-xs rounded-full"
          >
            <span
              className="material-symbols-outlined text-primary-container text-[16px]"
              >verified</span
            ><span
              className="text-label-micro font-label-micro text-primary uppercase"
              >Frete Grátis &amp; Garantia Oficial</span
            >
          </div>
        </div>
        <nav
          className="hidden lg:flex items-center gap-space-lg"
          data-active-classes="text-primary-container font-semibold"
        >
          <a
            className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="visao-geral"
            href="#visao-geral"
            >Visão Geral</a
          ><a
            className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="recursos"
            href="#recursos"
            >Recursos</a
          ><a
            className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="saude-e-bem-estar"
            href="#saude-bem-estar"
            >Saúde &amp; Bem-Estar</a
          ><a
            className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="ficha-tecnica"
            href="#ficha-tecnica"
            >Ficha Técnica</a
          ><a
            className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="avaliacoes"
            href="#avaliacoes"
            >Avaliações</a
          ><a
            className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="garantia-e-suporte"
            href="#garantia"
            >Garantia</a
          >
        </nav>
        <div className="flex items-center gap-space-md">
          <a
            className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-headline-sm text-body-sm uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(0,245,160,0.35)] hover:opacity-95 transition-transform active:scale-95"
            href="#comprar"
            >Comprar com Desconto</a
          ><img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-variant"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VSFOhFrszZjOsaUJoRomFS88EJUoyYV-K88QonFvEfijgdQUCwUL-W5v9trS8ixGi2W6svgNF2EURCZqXs8zArWNjkhAV-zb418-n1G2ptacjGxR9LsMSWkDAbFCm5pOryyIKdWmv8QvAsmLQMCQ8ruK4xDiUL83nWh84jRf69EfO0sjC4iEZj_RXVaffLTBaTNed8iDsHvq71ocJsw2pvqC17K-VRc_b76ayYCVnpcOYjwCbsnIkLKlZTvkYGTLxpYWOzsTYspQ"
          />
        </div>
      </div>
    </header>
    </>
  );
}
