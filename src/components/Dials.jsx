import React from 'react';
import { motion } from 'framer-motion';

export default function Dials() {
  return (
    <>
<section className="w-full py-space-3xl bg-surface">
          <div
            className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-space-2xl"
          >
            <div
              className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs"
            >
              <span
                className="text-label-badge font-label-badge uppercase text-primary tracking-widest bg-surface-container px-space-md py-space-xs rounded-full"
              >
                CUSTOMIZAÇÃO INFINITA
              </span>
              <h2
                className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface tracking-tight uppercase"
              >
                Várias Opções de Mostrador de Relógio
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Alterne em segundos entre ponteiros clássicos refinados para
                reuniões formais, displays digitais cyberpunk vibrantes para
                treinos ou coloque a foto que você mais ama no display AMOLED.
              </p>
            </div>
            
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"
            >
              <div
                className="lg:col-span-7 rounded-2xl overflow-hidden bg-surface-container-low p-space-md flex items-center justify-center shadow-xl"
              >
                <img
                  alt="Galeria com centenas de mostradores digitais e analógicos personalizáveis no app"
                  className="w-full h-auto object-cover rounded-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz83XP81TacxCjRerkhSSZjasPVFt-MOaLAJoOhsNf3hdWtpSnkdONxpvxMPyF-KoyQvZFRcA235Ulrgy8hK9xovZ67zrzavf-lwWXqHBYFVeqYAn8A5WTjeduP-kvrMMNWdJJQqkrui9hiKQl3qGRjVV2AkIJa-nhfUyXS0nNMgipIqLUSce-4p6PPZND_Q1dhlLu6ihjNW6Wp8wwLj3N67OXyHZw0etgLVbiNXTP8KrepVn-riQmUh66c3n_Jm7Dyg"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div
                  className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl"
                >
                  <div className="flex items-center gap-space-sm">
                    <span
                      className="material-symbols-outlined text-primary-container text-[24px]"
                      >collections</span
                    >
                    <h4
                      className="text-headline-sm font-headline-sm text-on-surface"
                    >
                      +100 Watch Faces Gratuitas
                    </h4>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Biblioteca em constante expansão através do aplicativo
                    oficial, sem nenhum custo extra por novos mostradores
                    temáticos.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl"
                >
                  <div className="flex items-center gap-space-sm">
                    <span
                      className="material-symbols-outlined text-secondary-container text-[24px]"
                      >photo_camera</span
                    >
                    <h4
                      className="text-headline-sm font-headline-sm text-on-surface"
                    >
                      Mostrador com Sua Própria Foto
                    </h4>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Selecione fotos de sua família, viagens ou momentos
                    marcantes direto do rolo de câmera do smartphone.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl"
                >
                  <div className="flex items-center gap-space-sm">
                    <span
                      className="material-symbols-outlined text-primary text-[24px]"
                      >watch</span
                    >
                    <h4
                      className="text-headline-sm font-headline-sm text-on-surface"
                    >
                      Pulseira de Aço Milanês &amp; Silicone
                    </h4>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Encaixe universal rápido de 20mm compatível com dezenas de
                    materiais e acabamentos.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-space-sm py-space-sm px-space-lg rounded-full bg-surface-container-high text-on-surface font-headline-sm text-body-sm uppercase hover:bg-surface-container-highest transition-colors"
                  href="#checkout"
                >
                  <span className="">Ver Coleção Completa na Compra</span>
                  <span className="material-symbols-outlined text-[18px]"
                    >arrow_forward</span
                  >
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
