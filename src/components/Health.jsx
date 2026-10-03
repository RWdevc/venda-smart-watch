import React from 'react';
import { motion } from 'framer-motion';

export default function Health() {
  return (
    <>
<section className="w-full py-space-3xl bg-surface" id="saude-bem-estar">
          <div
            className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-space-2xl"
          >
            <div
              className="flex flex-col md:flex-row md:items-end justify-between gap-space-md"
            >
              <div className="flex flex-col gap-space-xs max-w-xl">
                <span
                  className="text-label-badge font-label-badge uppercase text-primary-container tracking-widest"
                >
                  BIOMETRIA MÉDICA CONTINUA
                </span>
                <h2
                  className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface tracking-tight uppercase"
                >
                  Seu Laboratório de Saúde Particular 24h
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Sensores fotopletismográficos ópticos de espectro quádruplo
                  monitoram constantemente suas variáveis biológicas vitais com
                  precisão clínica.
                </p>
              </div>
              
              <div
                className="flex items-center gap-space-md bg-surface-container-low p-space-md rounded-2xl shadow-md"
              >
                <div
                  className="relative w-12 h-12 flex items-center justify-center"
                >
                  <span
                    className="absolute inset-0 rounded-full bg-error-container/30 animate-ping"
                  ></span>
                  <span
                    className="material-symbols-outlined text-tertiary-fixed-dim text-[28px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    >cardiology</span
                  >
                </div>
                <div>
                  <p
                    className="text-label-micro font-label-micro text-on-surface-variant uppercase"
                  >
                    Eletrocardio e Ritmo
                  </p>
                  <p
                    className="text-label-numeric font-label-numeric text-primary-container font-bold"
                  >
                    Sensor Dual PPG 24/7 Ativo
                  </p>
                </div>
              </div>
            </div>
            
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter-sm"
            >
              
              <div
                className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="material-symbols-outlined text-tertiary-fixed-dim text-[32px]"
                    >favorite</span
                  >
                  <span
                    className="text-label-micro font-label-micro bg-surface-container-high px-space-xs py-0.5 rounded text-on-surface-variant uppercase"
                    >Cardio</span
                  >
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h4 className="text-headline-sm font-headline-sm text-on-surface">
                    Cardíaco Contínuo
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Alertas proativos contra taquicardia em repouso e mapeamento
                    minucioso do esforço físico.
                  </p>
                </div>
                <div className="pt-space-xs">
                  
                  <svg
                    className="w-full h-8 text-error"
                    fill="none"
                    viewBox="0 0 100 25"
                  >
                    <path
                      d="M0 12 L20 12 L25 3 L32 22 L38 8 L44 14 L50 12 L70 12 L75 5 L82 20 L88 12 L100 12"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
              </div>
              
              <div
                className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="material-symbols-outlined text-secondary-container text-[32px]"
                    >blood_pressure</span
                  >
                  <span
                    className="text-label-micro font-label-micro bg-surface-container-high px-space-xs py-0.5 rounded text-on-surface-variant uppercase"
                    >SpO2 / PA</span
                  >
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h4 className="text-headline-sm font-headline-sm text-on-surface">
                    Oxímetro &amp; Pressão
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Estimativa referencial de pressão arterial e saturação de
                    oxigênio sanguíneo periférico.
                  </p>
                </div>
                <div
                  className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"
                >
                  <div
                    className="bg-gradient-to-r from-secondary-container to-primary-container h-full w-[98%] rounded-full"
                  ></div>
                </div>
              </div>
              
              <div
                className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="material-symbols-outlined text-primary-container text-[32px]"
                    >bedtime</span
                  >
                  <span
                    className="text-label-micro font-label-micro bg-surface-container-high px-space-xs py-0.5 rounded text-on-surface-variant uppercase"
                    >Sleep Lab</span
                  >
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h4 className="text-headline-sm font-headline-sm text-on-surface">
                    Monitor de Sono
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Decomposição avançada entre sono REM, profundo, leve e
                    avaliação do índice de recuperação física.
                  </p>
                </div>
                <div
                  className="flex items-center justify-between text-label-micro font-label-micro text-on-surface-variant"
                >
                  <span className="">REM: 2h 15m</span>
                  <span className="text-primary-container font-bold"
                    >Score: 94</span
                  >
                </div>
              </div>
              
              <div
                className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="material-symbols-outlined text-secondary-fixed text-[32px]"
                    >water_drop</span
                  >
                  <span
                    className="text-label-micro font-label-micro bg-surface-container-high px-space-xs py-0.5 rounded text-on-surface-variant uppercase"
                    >H2O</span
                  >
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h4 className="text-headline-sm font-headline-sm text-on-surface">
                    Ingestão de Água
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Lembretes personalizados com intervalos programáveis para
                    você nunca negligenciar sua hidratação.
                  </p>
                </div>
                <div
                  className="text-label-micro font-label-micro text-secondary-fixed font-bold"
                >
                  Meta diária: 2.800ml
                </div>
              </div>
              
              <div
                className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="material-symbols-outlined text-primary text-[32px]"
                    >pill</span
                  >
                  <span
                    className="text-label-micro font-label-micro bg-surface-container-high px-space-xs py-0.5 rounded text-on-surface-variant uppercase"
                    >Rotina</span
                  >
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h4 className="text-headline-sm font-headline-sm text-on-surface">
                    Alertas de Remédios
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Alarmes com vibração discreta para remédios, suplementos e
                    pausa para postura ergonômica.
                  </p>
                </div>
                <div
                  className="text-label-micro font-label-micro text-primary-container font-semibold"
                >
                  Zero doses esquecidas
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
