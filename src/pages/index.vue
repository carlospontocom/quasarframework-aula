<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>QVue</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Navegação </q-item-label>

        <EssentialLink
          title="Home"
          icon="home"
          to="/"
        />

        <!-- Menu Expansível: listaTelefonica -->

         <q-separator />

         <q-expansion-item
          icon="people"
          label="Usuários"
         >

          <EssentialLink
            title="Novo Usuário"
            icon="person_add"
            to="/NovoUsuario"
            class="space__left"
          />

          <EssentialLink
            title="Gerenciar Usuários"
            icon="manage_accounts"
            to="/GerenciarUsuario"
            class="space__left"
          />
        </q-expansion-item>

        <q-separator />


        <!-- Menu Expansível: lista telefonica -->
       <q-expansion-item
  icon="phone"
  label="Telefonia"
>
  <EssentialLink
    title="Lista telefônica"
    icon="contact_phone"
    to="/NovoUsuario"
    class="space__left"
  />
  <EssentialLink
    title="Adm lista telefônica"
    icon="admin_panel_settings"
    to="/NovoUsuario"
    class="space__left"
  />
  <EssentialLink
    title="Enviar e-mail"
    icon="send"
    to="/GerenciarUsuario"
    class="space__left"
  />
</q-expansion-item>

<q-separator />

 <q-expansion-item
  icon="account_balance_wallet"
  label="Finanças Pessoais"
>
  <EssentialLink
    title="Visão Geral / Dashboard"
    icon="dashboard"
    to="/financas/dashboard"
    class="space__left"
  />
  <EssentialLink
    title="Receitas e Despesas"
    icon="swap_horiz"
    to="/financas/transacoes"
    class="space__left"
  />
  <EssentialLink
    title="Contas e Cartões"
    icon="credit_card"
    to="/financas/contas"
    class="space__left"
  />
  <EssentialLink
    title="Categorias"
    icon="category"
    to="/financas/categorias"
    class="space__left"
  />
  <EssentialLink
    title="Metas e Investimentos"
    icon="trending_up"
    to="/financas/metas"
    class="space__left"
  />
  <EssentialLink
    title="Relatórios"
    icon="bar_chart"
    to="/financas/relatorios"
    class="space__left"
  />
</q-expansion-item>
 
 <q-separator />

  <EssentialLink
    v-for="link in linksList"
    :key="link.title"
    v-bind="link"
  />


    </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from '@/components/EssentialLink.vue'

const linksList = [
  {
    title: "Github",
    caption: "Carlos - repositório",
    icon: "code",
    link: "https://github.com/carlospontocom/quasarframework-aula"
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
:deep(.q-item__section--avatar) {
  margin:0;
  padding:0;
  min-width:35px;
}
</style>

<style scoped>
.space__left{
  margin: 0 0 0 1.3rem;
}
</style>