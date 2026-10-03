import React from 'react';
import { motion } from 'framer-motion';

export default function Specs() {
  return (
    <>
<section
          className="w-full py-space-3xl bg-surface-container-lowest"
          id="ficha-tecnica"
        >
          <div
            className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-space-xl"
          >
            <div
              className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs"
            >
              <span
                className="text-label-badge font-label-badge uppercase text-secondary-container tracking-widest"
              >
                ENGENHARIA E CONSTRUÇÃO
              </span>
              <h2
                className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface tracking-tight uppercase"
              >
                Ficha Técnica &amp; Compatibilidade
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Padrões industriais rigorosos para assegurar longevidade e
                sincronização fluida com seu ecossistema.
              </p>
            </div>
            
            <div
              className="bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-surface-container-high"
              >
                
                <div
                  className="p-space-lg lg:p-space-xl flex flex-col gap-space-md"
                >
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Display</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-on-surface text-right"
                      >1.39" AMOLED Retina (360x360 px) com Touchscreen
                      2.5D</span
                    >
                  </div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Compatibilidade</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-primary-container text-right"
                      >iOS 9.0+ &amp; Android 5.0+</span
                    >
                  </div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Versão Bluetooth</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-on-surface text-right"
                      >Bluetooth 5.3 Low Energy + EDR Audio</span
                    >
                  </div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Bateria &amp; Autonomia</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-on-surface text-right"
                      >Polímero de Lítio 280mAh (5 a 7 dias uso / 15 dias
                      standby)</span
                    >
                  </div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Tempo de Recarga</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-on-surface text-right"
                      >Aprox. 2 horas (Carregador Magnético USB Incluso)</span
                    >
                  </div>
                </div>
                
                <div
                  className="p-space-lg lg:p-space-xl flex flex-col gap-space-md"
                >
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Suporte de Idiomas</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-primary text-right"
                      >Português (Brasil), Inglês, Espanhol, Francês, Alemão,
                      Italiano, Russo, Mandarim</span
                    >
                  </div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Resistência à Água</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-on-surface text-right"
                      >Certificação IP67 (Respingos, suor intenso e chuva
                      diária)</span
                    >
                  </div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Estrutura e Caixa</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-on-surface text-right"
                      >Liga de Zinco Titânio + Polímero ABS de Alta
                      Densidade</span
                    >
                  </div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Pulseira</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-on-surface text-right"
                      >Aço Inoxidável Milanês Preto + Silicone Esportivo
                      Extra</span
                    >
                  </div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span
                      className="text-body-sm font-body-sm text-on-surface-variant"
                      >Sensores Integrados</span
                    >
                    <span
                      className="text-body-sm font-body-sm font-semibold text-on-surface text-right"
                      >PPG Óptico Duplo, Acelerômetro Triaxial,
                      Bio-impedância</span
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
