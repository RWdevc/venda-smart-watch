import React from 'react';
import { motion } from 'framer-motion';

export default function Customization() {
  return (
    <>
<section className="w-full py-space-3xl bg-surface-container-lowest">
          <div
            className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-space-2xl"
          >
            <div
              className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs"
            >
              <span
                className="text-label-badge font-label-badge uppercase text-primary tracking-widest"
                >PERSONALIZAÇÃO ILIMITADA</span
              >
              <h2
                className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface tracking-tight uppercase"
              >
                Centenas de Mostradores ou Sua Própria Foto
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Troque o estilo do seu mostrador pelo aplicativo gratuito com
                poucos cliques, ou defina imagens especiais da sua galeria.
              </p>
            </div>
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"
            >
              <div
                className="lg:col-span-7 rounded-2xl overflow-hidden bg-surface-container-low border border-surface-container-high/50 p-space-sm flex items-center justify-center"
              >
                <img
                  alt="Galeria de mostradores personalizáveis do Chronos Kinetic"
                  className="w-full h-auto object-cover rounded-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_y0h1crm-W42y14JAQpZRTJkuPPCZ3LE5V585QjW3nYaW2pxRWr7ozpdAEJ8rFsC-t2CtC0x0yB9J-6YPX4-Axmlq8DyjQ65wPyYGgEyaM7ZbzO0CpxiRcBloTnD2cvjBhWBaFgxi1MEh9U8fF4QpV0WUxo7XIXRydxFJAeOMOBmjF2zFcucdW3XlA2cfRS-OHEKRemaLnRMLlqAVZKUJsYsAUyIeuF9nC3YFt0_vEAyZZxV2TB0FF75FvQW_j5gMjw"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div
                  className="flex flex-col gap-1.5 bg-surface-container-low p-space-md rounded-xl border border-surface-container-high/40"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary-container text-[22px]"
                      >collections</span
                    >
                    <h4
                      className="text-headline-sm font-headline-sm text-on-surface"
                    >
                      Mais de 100 Mostradores Gratuitos
                    </h4>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Estilos esportivos, clássicos mecânicos e minimalistas com
                    download direto pelo aplicativo em português.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-1.5 bg-surface-container-low p-space-md rounded-xl border border-surface-container-high/40"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary-container text-[22px]"
                      >photo_camera</span
                    >
                    <h4
                      className="text-headline-sm font-headline-sm text-on-surface"
                    >
                      Foto de Fundo Personalizada
                    </h4>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Defina fotos da família, viagens ou momentos especiais como
                    papel de parede permanente do mostrador.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-1.5 bg-surface-container-low p-space-md rounded-xl border border-surface-container-high/40"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary-container text-[22px]"
                      >watch</span
                    >
                    <h4
                      className="text-headline-sm font-headline-sm text-on-surface"
                    >
                      Kit com 2 Pulseiras Inclusas
                    </h4>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Receba a sofisticada pulseira em Aço Milanês Preto Magnético
                    e mais uma pulseira esportiva em silicone para treinos.
                  </p>
                </div>
                <div className="pt-space-xs">
                  <a
                    className="inline-flex items-center justify-center gap-space-sm py-3 px-space-lg rounded-xl bg-surface-container-high hover:bg-surface-container text-on-surface font-headline-sm text-body-sm uppercase transition-colors border border-surface-container-high"
                    href="#checkout"
                    ><span className="">Garantir Meu Kit com Desconto</span
                    ><span className="material-symbols-outlined text-[18px]"
                      >arrow_forward</span
                    ></a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
