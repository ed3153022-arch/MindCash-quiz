import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log do webhook recebido (para debug)
    console.log('Webhook Kiwify recebido:', body);
    
    // Verificar se é um evento de pagamento aprovado
    if (body.event_type === 'sale.approved' || body.event_type === 'payment.approved') {
      const {
        customer_email,
        customer_name,
        product_name,
        order_id,
        transaction_id,
        amount,
        status
      } = body;
      
      // Aqui você pode:
      // 1. Salvar no banco de dados
      // 2. Enviar email de confirmação
      // 3. Liberar acesso ao produto
      // 4. Integrar com outras ferramentas
      
      console.log('Pagamento aprovado:', {
        email: customer_email,
        nome: customer_name,
        produto: product_name,
        pedido: order_id,
        transacao: transaction_id,
        valor: amount,
        status: status
      });
      
      // Exemplo: Você pode redirecionar o usuário ou enviar dados para outro sistema
      // Por enquanto, apenas logamos os dados
      
      return NextResponse.json({ 
        success: true, 
        message: 'Webhook processado com sucesso' 
      });
    }
    
    // Para outros tipos de evento
    return NextResponse.json({ 
      success: true, 
      message: 'Evento recebido' 
    });
    
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// Método GET para testar se a rota está funcionando
export async function GET() {
  return NextResponse.json({ 
    message: 'Webhook Kiwify está funcionando',
    url: 'Use POST para enviar dados do webhook'
  });
}