<template>
  <SectionContainer>
    <form method="post" class="login-form" @submit.prevent="dispatchLogin">
      <InputFormControl
        :type="'text'"
        :name="'login_id'"
        :label="'ログインID'"
        :value="formState.login_id"
        :direction="'col'"
        @change="setLoginId"
      />
      <InputFormControl
        :type="'password'"
        :name="'password'"
        :label="'パスワード'"
        :value="formState.password"
        :direction="'col'"
        @change="setPassword"
      />
      <BaseButton :type="'button'" :onClick="dispatchLogin"
        >ログイン</BaseButton
      >
    </form>
  </SectionContainer>
</template>

<script setup>
import { reactive } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import InputFormControl from '@/components/form/InputFormControl.vue';
import BaseButton from '@/components/button/BaseButton.vue';

const formState = reactive({
  login_id: '',
  password: '',
});

const setLoginId = (value) => {
  formState.login_id = value;
};
const setPassword = (value) => {
  formState.password = value;
};

const dispatchLogin = () => {
  console.log('ログイン');
};
</script>
