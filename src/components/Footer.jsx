import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
<footer className="w-full bg-surface-container-lowest text-on-surface-variant">
      <div
        className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl"
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-gutter-lg pb-space-2xl bg-surface-container-low/50 p-space-lg rounded-xl mb-space-2xl"
        >
          <div className="flex items-center gap-space-sm">
            <span
              className="material-symbols-outlined text-primary-container text-[28px]"
              >lock</span
            >
            <div>
              <p
                className="text-label-badge font-label-badge text-on-surface uppercase"
              >
                Segurança SSL 256-Bit
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Checkout 100% Criptografado
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <span
              className="material-symbols-outlined text-secondary-container text-[28px]"
              >local_shipping</span
            >
            <div>
              <p
                className="text-label-badge font-label-badge text-on-surface uppercase"
              >
                Entrega Assegurada
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Rastreamento em Tempo Real
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <span
              className="material-symbols-outlined text-primary-container text-[28px]"
              >support_agent</span
            >
            <div>
              <p
                className="text-label-badge font-label-badge text-on-surface uppercase"
              >
                Suporte VIP 24h
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Atendimento Especializado
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <span
              className="material-symbols-outlined text-secondary-container text-[28px]"
              >credit_card</span
            >
            <div>
              <p
                className="text-label-badge font-label-badge text-on-surface uppercase"
              >
                Parcelamento Flexível
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Até 12x no Cartão ou Pix
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-lg pb-space-xl">
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span
                className="text-headline-sm font-headline-sm text-on-surface tracking-tight uppercase"
                >CHRONOS</span
              ><span
                className="text-headline-sm font-headline-sm text-primary-container uppercase font-extrabold"
                >KINETIC</span
              >
            </div>
            <p
              className="text-body-sm font-body-sm text-on-surface-variant max-w-md"
            >
              Engenharia horológica suíça combinada com telemetria biométrica de
              última geração. O ápice do desempenho, resistência em titânio
              aeroespacial e conectividade fluida.
            </p>
            <div className="flex items-center gap-space-sm mt-space-sm">
              <span
                className="text-label-micro font-label-micro px-space-sm py-space-xs rounded-full bg-surface-container-high text-primary"
                >PROCESSO CERTIFICADO ISO-9001</span
              ><span
                className="text-label-micro font-label-micro px-space-sm py-space-xs rounded-full bg-surface-container-high text-secondary"
                >GARANTIA DE 1 ANO</span
              >
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-space-xs">
            <h4
              className="text-label-badge font-label-badge text-on-surface uppercase tracking-wider mb-space-xs"
            >
              Navegação
            </h4>
            <a
              className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#visao-geral"
              >Visão Geral</a
            ><a
              className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#recursos"
              >Recursos e Hardware</a
            ><a
              className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#saude-bem-estar"
              >Sensores Biométricos</a
            ><a
              className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#ficha-tecnica"
              >Especificações Técnicas</a
            ><a
              className="text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#avaliacoes"
              >Opiniões Verificadas</a
            >
          </div>
          <div className="md:col-span-4 flex flex-col gap-space-xs">
            <h4
              className="text-label-badge font-label-badge text-on-surface uppercase tracking-wider mb-space-xs"
            >
              Garantia &amp; Confiança
            </h4>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Experimente o Chronos Kinetic por 30 dias. Satisfação garantida ou
              seu dinheiro integralmente estornado sem burocracia.
            </p>
            <div className="flex flex-wrap gap-space-xs mt-space-sm">
              <span
                className="text-label-micro font-label-micro text-on-surface-variant bg-surface-container px-space-sm py-space-xs rounded"
                >PCI COMPLIANT</span
              ><span
                className="text-label-micro font-label-micro text-on-surface-variant bg-surface-container px-space-sm py-space-xs rounded"
                >GOOGLE SAFE BROWSING</span
              ><span
                className="text-label-micro font-label-micro text-on-surface-variant bg-surface-container px-space-sm py-space-xs rounded"
                >ORIGINAL AUTHORIZED</span
              >
            </div>
          </div>
        </div>
        <div
          className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-body-sm font-body-sm text-on-surface-variant"
        >
          <p className="">
            © 2025 Chronos Kinetic Technologies Inc. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-on-surface transition-colors" href="#termos"
              >Termos de Uso</a
            ><a
              className="hover:text-on-surface transition-colors"
              href="#privacidade"
              >Privacidade</a
            ><a className="hover:text-on-surface transition-colors" href="#trocas"
              >Política de Trocas</a
            >
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
