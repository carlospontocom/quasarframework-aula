<template>

<PageWrapper class="bg-from">

<section>

<div class="form">
        <TextoDinamico as="h1" texto="Adicionar novo cadastro"/>

        <q-form @submit="cadastrar">
        <q-input
            v-model="nome"
            outlined
            placeholder="Nome completo"
            :rules="[(val) => !!val || 'Campo obrigatório!']"
        />

            <q-input
                v-model="email"
                outlined
                placeholder="E-mail"
                :rules="[
                (val) => !!val || 'Campo obrigatório!',
                (val) => /.+@.+\..+/.test(val) || 'E-mail inválido!'
                ]"
            />

            <q-input
                v-model="telefone"
                outlined
                placeholder="(88) 99999-8888"
                mask="(##) #####-####"
                fill-mask
                :rules="[
                    (val) => !!val || 'Campo obrigatório!',
                    (val) => /^\(\d{2}\) \d{5}-\d{4}$/.test(val) || 'Telefone incompleto!'
                ]"
            />

            <q-btn color="green" type="submit" label="Cadastrar"/>
        </q-form>
    </div>
</section>
</PageWrapper>

</template>

<script setup>
    import { ref } from 'vue';
    import { useQuasar } from 'quasar';
    import axios from 'axios';
    import PageWrapper from '@/components/PageWrapper.vue';
    import TextoDinamico from '@/components/TextoDinamico.vue';
    import '@/css/novoUsuario.scss';

    const nome = ref('');
    const email = ref('');
    const telefone = ref('');

    const usuarios = ref([]);
    const $q = useQuasar();
    const url_api = 'https://6a8529b09c451dc67a6351f4.mockapi.io/contatos';

  const cadastrar = async () => {
  try {
    await axios.post(url_api, {
      nome: nome.value,
      email: email.value,
      telefone: telefone.value
    })

    $q.notify({
      message: 'Usuário criado com sucesso!',
      color: 'green',
      position: 'top-right',
      icon: 'check',
      timeout: 600
    })
  } catch (erro) {
    console.error('Erro no cadastro:', erro)
    $q.notify({
      message: 'Falha ao cadastrar usuário!',
      color: 'red',
      position: 'top-right',
      icon: 'warning',
      timeout: 1000
    })
  }
}
 

</script>