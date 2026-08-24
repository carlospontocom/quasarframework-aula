<template>
  <q-page class="q-pa-md bg-grey-1">
    <div class="max-width-container">
      
      <!-- Cabeçalho do Manual -->
      <q-card flat bordered class="q-mb-lg bg-white q-pa-md">
        <q-card-section class="row items-center no-wrap">
          <q-avatar icon="menu_book" color="primary" text-color="white" size="56px" class="q-mr-md" />
          <div>
            <div class="text-h4 text-weight-bold text-primary">Manual do Sistema</div>
            <div class="text-subtitle1 text-grey-7">
              Guia oficial de operação e navegação do sistema QVue
            </div>
          </div>
        </q-card-section>
      </q-card>

      <!-- 1. Introdução / Visão Geral -->
      <div class="text-h6 text-weight-bold text-grey-9 q-mb-sm">
        1. Visão Geral
      </div>
      <q-card flat bordered class="q-mb-lg bg-white">
        <q-card-section class="text-body1 text-grey-8 line-height">
          O sistema <strong>QVue</strong> é uma plataforma integrada desenvolvida para facilitar o gerenciamento de usuários, consultas de telefonia corporativa e controle de finanças pessoais.
        </q-card-section>
      </q-card>

      <!-- 2. Módulos do Sistema -->
      <div class="text-h6 text-weight-bold text-grey-9 q-mb-sm">
        2. Guia de Módulos
      </div>

      <q-list class="q-mb-lg">
        
        <!-- Módulo Usuários -->
        <q-expansion-item
          group="manual"
          icon="people"
          label="2.1. Gestão de Usuários"
          caption="Cadastro e controle de acesso"
          header-class="bg-white text-weight-bold border-bottom"
          default-opened
        >
          <q-card flat class="bg-grey-2">
            <q-card-section class="q-gutter-y-sm">
              <div class="text-subtitle2 text-weight-bold">Funcionalidades disponíveis:</div>
              <ul class="q-pl-md">
                <li><strong>Novo Usuário (<code>/NovoUsuario</code>):</strong> Formulário para registrar novos acessos no sistema.</li>
                <li><strong>Gerenciar Usuários (<code>/GerenciarUsuario</code>):</strong> Tabela com a lista de usuários ativos, permitindo editar dados ou alterar permissões.</li>
              </ul>
              <div class="text-caption text-grey-7">
                <strong>Passo a passo rápido:</strong> Para criar um usuário, acesse o menu <em>Usuários &gt; Novo Usuário</em>, preencha nome, e-mail e nível de acesso, e clique em "Salvar".
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Módulo Telefonia -->
        <q-expansion-item
          group="manual"
          icon="phone"
          label="2.2. Telefonia e Contatos"
          caption="Consulta de ramais e e-mails"
          header-class="bg-white text-weight-bold border-bottom q-mt-sm"
        >
          <q-card flat class="bg-grey-2">
            <q-card-section class="q-gutter-y-sm">
              <div class="text-subtitle2 text-weight-bold">Funcionalidades disponíveis:</div>
              <ul class="q-pl-md">
                <li><strong>Lista Telefônica:</strong> Consulta pública de ramais internos e contatos por setor.</li>
                <li><strong>Adm Lista Telefônica:</strong> Área reservada para adicionar, remover ou alterar ramais da lista.</li>
                <li><strong>Enviar E-mail:</strong> Atalho direto para envio de mensagens institucionais.</li>
              </ul>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Módulo Finanças -->
        <q-expansion-item
          group="manual"
          icon="account_balance_wallet"
          label="2.3. Finanças Pessoais"
          caption="Controle financeiro completo"
          header-class="bg-white text-weight-bold border-bottom q-mt-sm"
        >
          <q-card flat class="bg-grey-2">
            <q-card-section class="q-gutter-y-sm">
              <div class="text-subtitle2 text-weight-bold">Funcionalidades disponíveis:</div>
              <ul class="q-pl-md">
                <li><strong>Dashboard (<code>/financas/dashboard</code>):</strong> Resumo geral do saldo, entradas e saídas.</li>
                <li><strong>Receitas e Despesas:</strong> Lançamento do fluxo de caixa diário.</li>
                <li><strong>Contas e Cartões:</strong> Cadastro de contas bancárias e cartões de crédito.</li>
                <li><strong>Relatórios:</strong> Gráficos e exportação de dados para análise de gastos.</li>
              </ul>
            </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-list>

      <!-- 3. Suporte e Ajuda -->
      <div class="text-h6 text-weight-bold text-grey-9 q-mb-sm">
        3. Suporte Técnico
      </div>
      <q-card flat bordered class="bg-white q-pa-md">
        <div class="row items-center">
          <q-icon name="help_outline" size="32px" color="primary" class="q-mr-sm" />
          <div class="text-body2 text-grey-8">
            Dúvidas ou inconsistências no sistema podem ser enviadas para a equipe de TI local através do menu de suporte ou pelo e-mail do administrador.
          </div>
        </div>
      </q-card>

    </div>
  </q-page>
</template>

<script setup>
// Lógica básica do componente, pronta para expansões futuras
</script>

<style scoped>
.max-width-container {
  max-width: 900px;
  margin: 0 auto;
}

.line-height {
  line-height: 1.6;
}

.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}
</style>