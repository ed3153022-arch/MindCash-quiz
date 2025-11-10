// Configurações da integração com Kiwify
export const KIWIFY_CONFIG = {
  // URL do produto na Kiwify
  PAYMENT_URL: 'https://pay.kiwify.com.br/igYyAIS',
  
  // URL do webhook (será a URL do seu projeto + /api/webhook)
  // Exemplo: https://seudominio.com/api/webhook
  WEBHOOK_URL: process.env.NEXT_PUBLIC_APP_URL + '/api/webhook',
  
  // Configurações do produto
  PRODUCT: {
    name: 'Diagnóstico Completo MindCash',
    description: 'Análise completa da sua mentalidade financeira',
    features: [
      'Análise completa da sua mentalidade financeira',
      'Relatório personalizado com seu perfil',
      'Plano de ação estratégico para evolução',
      'Acesso vitalício ao conteúdo'
    ]
  }
};

// Função para redirecionar para o pagamento
export const redirectToPayment = () => {
  window.open(KIWIFY_CONFIG.PAYMENT_URL, '_blank');
};

// Função para processar dados do webhook
export const processWebhookData = (webhookData: any) => {
  const {
    customer_email,
    customer_name,
    product_name,
    order_id,
    transaction_id,
    amount,
    status,
    event_type
  } = webhookData;

  return {
    email: customer_email,
    nome: customer_name,
    produto: product_name,
    pedido: order_id,
    transacao: transaction_id,
    valor: amount,
    status: status,
    evento: event_type,
    dataProcessamento: new Date().toISOString()
  };
};