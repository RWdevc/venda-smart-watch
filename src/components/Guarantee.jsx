import React from 'react';
import { motion } from 'framer-motion';

export default function Guarantee() {
  return (
    <>
<section className="w-full py-space-3xl bg-surface" id="garantia">
          <div
            className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop"
          >
            <div
              className="bg-gradient-to-br from-surface-container to-surface-container-low p-space-xl lg:p-space-2xl rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-xl"
            >
              <div className="flex items-center gap-space-lg">
                <div
                  className="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0"
                >
                  <span
                    className="material-symbols-outlined text-primary-container text-[48px]"
                    >verified</span
                  >
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span
                    className="text-label-badge font-label-badge uppercase text-primary-container"
                    >GARANTIA BLINDADA DE 30 DIAS</span
                  >
                  <h3
                    className="text-headline-lg font-headline-lg text-on-surface uppercase"
                  >
                    Risco Zero: Teste por 1 Mês Completo
                  </h3>
                  <p
                    className="text-body-md font-body-md text-on-surface-variant max-w-xl"
                  >
                    Use o Chronos Kinetic em seus treinos, no escritório e no
                    sono. Se por qualquer motivo ele não superar suas
                    expectativas, devolvemos 100% do seu valor imediatamente,
                    sem questionamentos.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col sm:flex-row md:flex-col gap-space-sm shrink-0 w-full md:w-auto"
              >
                <div
                  className="flex items-center gap-space-sm bg-surface-container-high px-space-md py-space-sm rounded-xl"
                >
                  <span
                    className="material-symbols-outlined text-primary text-[20px]"
                    >assignment_turned_in</span
                  >
                  <span
                    className="text-label-micro font-label-micro uppercase font-bold text-on-surface"
                    >Homologação Oficial Nacional</span
                  >
                </div>
                <div
                  className="flex items-center gap-space-sm bg-surface-container-high px-space-md py-space-sm rounded-xl"
                >
                  <span
                    className="material-symbols-outlined text-secondary text-[20px]"
                    >inventory_2</span
                  >
                  <span
                    className="text-label-micro font-label-micro uppercase font-bold text-on-surface"
                    >Embalagem Lacrada Original</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
