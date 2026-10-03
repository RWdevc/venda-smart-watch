import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
<section
          className="relative w-full overflow-hidden pb-space-3xl pt-space-xl"
          id="visao-geral"
        >
          <div
            className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-xl lg:py-space-2xl"
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"
            >
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <span
                    className="text-label-badge font-label-badge uppercase tracking-wider text-primary px-space-sm py-1 rounded bg-surface-container-high font-semibold"
                    >Linha 2025 • Titânio Aeroespacial</span
                  >
                  <div
                    className="flex items-center gap-1 text-xs text-on-surface-variant"
                  >
                    <div className="flex text-[#ffb800]">
                      <span
                        className="material-symbols-outlined text-[15px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        >star</span
                      ><span
                        className="material-symbols-outlined text-[15px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        >star</span
                      ><span
                        className="material-symbols-outlined text-[15px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        >star</span
                      ><span
                        className="material-symbols-outlined text-[15px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        >star</span
                      ><span
                        className="material-symbols-outlined text-[15px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        >star</span
                      >
                    </div>
                    <span className="font-medium text-on-surface">4.9</span
                    ><span className="text-on-surface-variant"
                      >(1.428 clientes no Brasil)</span
                    >
                  </div>
                </div>
                <h1
                  className="text-display-hero-mobile md:text-display-hero font-display-hero text-on-surface font-extrabold tracking-tight leading-tight uppercase"
                >
                  Sua rotina, saúde e chamadas.<br /><span
                    className="text-primary-container font-extrabold"
                    >Tudo no seu pulso.</span
                  >
                </h1>
                <p
                  className="text-body-lg md:text-body-xl font-body-md text-on-surface-variant max-w-xl leading-relaxed"
                >
                  O smartwatch premium em titânio e tela AMOLED nítida sob o
                  sol. Atenda chamadas sem tirar o telefone do bolso, acompanhe
                  batimentos e sono, e tenha bateria para 7 dias sem
                  preocupação.
                </p>
                <div
                  className="bg-surface-container-low p-space-lg rounded-2xl border border-surface-container-high/60 flex flex-col gap-space-md shadow-lg"
                >
                  <div
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high/40"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-space-xs">
                        <span
                          className="text-body-sm font-body-sm text-on-surface-variant line-through font-label-numeric"
                          >De R$ 289,00</span
                        ><span
                          className="text-label-micro font-label-micro bg-primary-container/10 text-primary px-space-xs py-0.5 rounded font-bold uppercase"
                          >Economize R$ 102</span
                        >
                      </div>
                      <div className="flex items-baseline gap-space-xs mt-1">
                        <span
                          className="text-headline-sm font-headline-sm text-on-surface-variant font-normal"
                          >Por</span
                        ><span
                          className="text-headline-xl md:text-display-hero-mobile font-display-hero font-extrabold text-on-surface"
                          >R$ 187<span className="text-headline-sm">,00</span></span
                        ><span
                          className="text-body-sm font-body-sm text-primary font-medium"
                          >no Pix (5% off)</span
                        >
                      </div>
                      <p
                        className="text-label-micro font-label-micro text-on-surface-variant mt-0.5"
                      >
                        ou até 12x de R$ 18,77 em qualquer cartão de crédito
                      </p>
                    </div>
                    <div
                      className="flex flex-col gap-1 text-xs text-on-surface-variant"
                    >
                      <span
                        className="flex items-center gap-1.5 text-on-surface font-medium"
                        ><span
                          className="material-symbols-outlined text-[16px] text-primary"
                          >check_circle</span
                        >
                        2 pulseiras inclusas (Aço + Silicone)</span
                      ><span className="flex items-center gap-1.5"
                        ><span
                          className="material-symbols-outlined text-[16px] text-primary"
                          >verified_user</span
                        >
                        30 dias para testar sem risco</span
                      ><span className="flex items-center gap-1.5"
                        ><span
                          className="material-symbols-outlined text-[16px] text-primary"
                          >local_shipping</span
                        >
                        Frete Grátis com Rastreio</span
                      >
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-space-md">
                    <a
                      className="flex-1 inline-flex items-center justify-center gap-space-sm py-3.5 px-space-xl rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-body-md uppercase font-bold tracking-wide hover:opacity-95 active:scale-[0.98] transition-all"
                      href="#checkout"
                      ><span className="">Comprar Agora com Frete Grátis</span
                      ><span className="material-symbols-outlined text-[20px]"
                        >arrow_forward</span
                      ></a
                    >
                  </div>
                  <div
                    className="flex items-center justify-between text-xs text-on-surface-variant flex-wrap gap-2 pt-1"
                  >
                    <span className="flex items-center gap-1"
                      ><span
                        className="material-symbols-outlined text-[15px] text-primary-container"
                        >lock</span
                      >
                      Pagamento Seguro Mercado Pago</span
                    ><span className="flex items-center gap-1"
                      ><span
                        className="material-symbols-outlined text-[15px] text-primary-container"
                        >inventory_2</span
                      >
                      Produto Novo e Homologado</span
                    ><span className="flex items-center gap-1"
                      ><span
                        className="material-symbols-outlined text-[15px] text-primary-container"
                        >replay</span
                      >
                      Devolução Grátis e Fácil</span
                    >
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center items-center">
                <div
                  className="relative w-full max-w-[440px] aspect-square rounded-2xl bg-surface-container-low border border-surface-container-high/50 p-space-md flex items-center justify-center overflow-hidden"
                >
                  <img
                    alt="Chronos Kinetic Smartwatch com pulseira milanesa e múltiplos mostradores"
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYza-6S8olq7EEswokOcrRCSmpNE_EeYUzyAr3YZt0e6x-8uZZf3c-aUkq7HdKkymo2Zn0JU72-nNJOUQGlKVNaRVa7FHIxfiSc9LRCwzb7wDwwdvSsHUGtYUUcBqBgzaVewwBZtQlhAsE2TeRsNJ2E8u-HW-uVrVeBWLEtqIiJY4W7rzyMUbcsuAZTE-lCKYOkFze5PWOsRbtMpI0cSgZJbEQdgs56U-FCfCHz_X7vnHx0tEMLROyxTIZ8fcpMt-g4Q"
                  />
                  <div
                    className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px- space-sm py-2 rounded-lg border border-surface-container-high/40 flex items-center justify-between text-xs"
                  >
                    <span
                      className="text-on-surface font-medium flex items-center gap-1.5"
                      ><span
                        className="w-2 h-2 rounded-full bg-primary-container"
                      ></span>
                      Tela AMOLED 1.39"</span
                    ><span className="text-on-surface-variant font-label-numeric"
                      >Compatível iOS &amp; Android</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
