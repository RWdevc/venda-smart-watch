import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <>
<section
          className="w-full py-space-3xl bg-surface-container-lowest"
          id="recursos"
        >
          <div
            className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-space-2xl"
          >
            <div
              className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs"
            >
              <span
                className="text-label-badge font-label-badge uppercase text-primary tracking-widest"
                >CONEXÃO DIRETA NO DIA A DIA</span
              >
              <h2
                className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface tracking-tight uppercase"
              >
                Feito para facilitar a sua rotina real
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Sem precisar pegar o smartphone a cada aviso. Controle chamadas,
                compromissos e mensagens discretamente no pulso.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg">
              <div
                className="bg-surface-container-low border border-surface-container-high/50 rounded-2xl overflow-hidden flex flex-col"
              >
                <div
                  className="relative w-full aspect-[4/3] bg-surface-container-high overflow-hidden"
                >
                  <img
                    alt="Smartwatch Chronos realizando chamada bluetooth com áudio cristalino"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsgtELF_6oiSLiB5tndWeqZAFXyxkkQlV5UoUCPEitRYDVLT9yAORrLtOeH9foeZqJpYUy3-JtBrsfNUKs8kwfrOW2DxH3MlCpJd8EHkz9KZQdrCiy4gSK3KpitvKyA83iolC2ZvFflLHXCQCbnRbFH6w6VFkf_0J7OlbqJYzaOpvgt9zdroRWoL7BszOwITSfYAcYwZj9lidAqQUEiIxd25UWulfRDZqw8ndDu1nEwMnsumtEZRv75awwNHLIeT9ROw"
                  />
                  <div
                    className="absolute top-3 left-3 bg-surface-container-lowest/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-surface-container-high/40 flex items-center gap-1.5"
                  >
                    <span
                      className="material-symbols-outlined text-primary-container text-[16px]"
                      >call</span
                    >
                    Viva-Voz Integrado HD
                  </div>
                </div>
                <div
                  className="p-space-lg flex flex-col gap-space-sm flex-1 justify-between"
                >
                  <div>
                    <h3
                      className="text-headline-sm font-headline-sm text-on-surface mb-1"
                    >
                      Atenda e Faça Chamadas com Liberdade
                    </h3>
                    <p
                      className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed"
                    >
                      Equipado com microfone de cancelamento acústico e
                      alto-falante nítido. Fale durante a direção, corrida ou
                      tarefas de trabalho com um toque na tela.
                    </p>
                  </div>
                  <div
                    className="grid grid-cols-3 gap-space-sm pt-space-xs border-t border-surface-container-high/40 text-center"
                  >
                    <div className="p-2 bg-surface-container rounded-lg">
                      <p className="text-xs font-semibold text-on-surface">
                        Bluetooth 5.3
                      </p>
                      <p className="text-label-micro text-on-surface-variant">
                        Conexão sem cortes
                      </p>
                    </div>
                    <div className="p-2 bg-surface-container rounded-lg">
                      <p className="text-xs font-semibold text-on-surface">
                        Teclado Numérico
                      </p>
                      <p className="text-label-micro text-on-surface-variant">
                        Disque direto
                      </p>
                    </div>
                    <div className="p-2 bg-surface-container rounded-lg">
                      <p className="text-xs font-semibold text-on-surface">
                        Assistente de Voz
                      </p>
                      <p className="text-label-micro text-on-surface-variant">
                        Siri &amp; Google
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-surface-container-low border border-surface-container-high/50 rounded-2xl overflow-hidden flex flex-col"
              >
                <div
                  className="relative w-full aspect-[4/3] bg-surface-container-high overflow-hidden"
                >
                  <img
                    alt="Recebimento de notificações inteligentes WhatsApp e redes sociais no relógio"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOW3cJwVrTOgM4YXLd3NQionCUomdfxDFBB1U_qzZj-x2c5AQGMRRJ2m2lQBzrInsN7531vNeu5lQkDN88HydMkoVgXu_0mghPGUl1iEWjVguix-LyRMJP8niZW-anWSRxqjsdRLfFBc9qtgdgdLGb6US4kkZJPFhASyOWL1rvvtuMuXLg_DkhAb9ecdWYFkcfuozCiJ2uG_Ydu6y5oMwT9hf3guoYGx8OSSoTNrNp2AKqAMkqnEAwX9CbYTH3yVL-fw"
                  />
                  <div
                    className="absolute top-3 left-3 bg-surface-container-lowest/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-surface-container-high/40 flex items-center gap-1.5"
                  >
                    <span
                      className="material-symbols-outlined text-primary-container text-[16px]"
                      >notifications</span
                    >
                    Mensagens Imediatas
                  </div>
                </div>
                <div
                  className="p-space-lg flex flex-col gap-space-sm flex-1 justify-between"
                >
                  <div>
                    <h3
                      className="text-headline-sm font-headline-sm text-on-surface mb-1"
                    >
                      Notificações em Português sem Falhas
                    </h3>
                    <p
                      className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed"
                    >
                      Leia mensagens completas do WhatsApp, direct do Instagram,
                      SMS, alertas de bancos e e-mails com vibração precisa e
                      discreta.
                    </p>
                  </div>
                  <div
                    className="flex flex-wrap gap-1.5 pt-space-xs border-t border-surface-container-high/40"
                  >
                    <span
                      className="text-xs bg-surface-container px-2.5 py-1 rounded text-on-surface font-medium"
                      >WhatsApp</span
                    ><span
                      className="text-xs bg-surface-container px-2.5 py-1 rounded text-on-surface font-medium"
                      >Instagram</span
                    ><span
                      className="text-xs bg-surface-container px-2.5 py-1 rounded text-on-surface font-medium"
                      >Nubank / Bancos</span
                    ><span
                      className="text-xs bg-surface-container px-2.5 py-1 rounded text-on-surface font-medium"
                      >Gmail</span
                    ><span
                      className="text-xs bg-surface-container px-2.5 py-1 rounded text-on-surface font-medium"
                      >Uber</span
                    ><span
                      className="text-xs bg-surface-container px-2.5 py-1 rounded text-on-surface font-medium"
                      >Telegram</span
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
