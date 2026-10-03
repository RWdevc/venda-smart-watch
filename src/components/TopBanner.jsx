import React from 'react';
import { motion } from 'framer-motion';

export default function TopBanner() {
  return (
    <div className="w-full bg-surface-container-lowest border-b border-surface-container-high/40 py-2.5 px-margin-mobile">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between text-body-sm font-body-sm">
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-semibold bg-surface-container-high text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            Pronta Entrega
          </span>
          <span className="text-on-surface-variant hidden sm:inline">•</span>
          <p className="text-on-surface text-xs sm:text-body-sm">
            Frete Expresso Grátis para todo o Brasil • Envio em até 24h úteis
          </p>
        </div>
        <div className="flex items-center gap-space-xs text-xs text-on-surface-variant font-label-numeric font-medium">
          <span className="material-symbols-outlined text-[15px] text-primary-container">
            local_shipping
          </span>
          <span>Rastreio Correios ativo</span>
        </div>
      </div>
    </div>
  );
}
