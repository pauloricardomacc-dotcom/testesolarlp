import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#061D2C]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DCE5EA]">
          <div className="flex items-center gap-2.5 text-[#073B60]">
            <ShieldCheck className="w-6 h-6 text-[#1686C2]" />
            <h3 className="text-xl font-extrabold">Política de Privacidade (LGPD)</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-[#F5F8FA] text-[#073B60] hover:bg-[#DCE5EA]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto py-6 space-y-4 text-xs sm:text-sm text-[#536370] leading-relaxed">
          <p>
            A <strong>Solar Planet</strong>, com matriz em Barreiras – Bahia (Rua Canadá, 134, Sala 01, Bairro Boa Sorte), valoriza a privacidade dos seus clientes e visitantes.
          </p>

          <h4 className="font-bold text-[#073B60] text-sm">1. Coleta de Informações</h4>
          <p>
            Os dados fornecidos voluntariamente por meio do contato telefônico ou formulário do WhatsApp (como nome, cidade, e dados de fatura de energia) são utilizados exclusivamente para a realização da análise técnica inicial de viabilidade fotovoltaica.
          </p>

          <h4 className="font-bold text-[#073B60] text-sm">2. Uso dos Dados</h4>
          <p>
            Seus dados são armazenados de forma estritamente confidencial para elaboração de propostas e atendimento comercial pela nossa equipe no Oeste da Bahia. Não vendemos ou compartilhamos informações pessoais com terceiros.
          </p>

          <h4 className="font-bold text-[#073B60] text-sm">3. Direitos do Titular (LGPD)</h4>
          <p>
            Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a confirmação, atualização ou exclusão de seus dados pessoais a qualquer momento enviando uma solicitação à nossa equipe.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#DCE5EA] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#073B60] text-white font-bold text-xs hover:bg-[#1686C2] transition-colors"
          >
            Entendi e concordo
          </button>
        </div>

      </div>
    </div>
  );
};
