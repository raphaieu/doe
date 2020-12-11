<template>
    <div>
    <h5>Voluntário</h5>
    <form class="form-horizontal">
        <ul class="step">
            <li class="step-item active">
                <a href="#">Dados Pessoais</a>
            </li>
            <li class="step-item">
                <a href="#">Endereço</a>
            </li>
            <li class="step-item">
                <a href="#">Tipo de Doação</a>
            </li>
            <li class="step-item">
                <a href="#">Obrigado!</a>
            </li>
        </ul>
        <div class="form-group has-error">
            <div class="col-3 col-sm-12">
            <label class="form-label" for="nome">Nome: </label>
            </div>
            <div class="col-9 col-sm-12">
            <the-mask
                class="form-input"
                type="text"
                id="nome"
                placeholder="Fulano de Tal"
                mask="NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
                :tokens="nameToken"
                required=true
            />
            <p class="form-input-hint">Nome inválido.</p>
            </div>
        </div>
        <div class="form-group has-success">
            <div class="col-3 col-sm-12">
            <label class="form-label" for="cpf-cnpj">CPF / CNPJ: </label>
            </div>
            <div class="col-9 col-sm-12">
            <the-mask
                class="form-input"
                type="text"
                id="cpf-cnpj"
                placeholder="CPF ou CNPJ"
                :mask="['###.###.###-##', '##.###.###/####-##']"
                required=true
            />
            <p class="form-input-hint">CPF Válido.</p>
            </div>
        </div>
        <div class="form-group">
            <div class="col-3 col-sm-12">
            <label class="form-label" for="telefone">Telefone: </label>
            </div>
            <div class="col-9 col-sm-12">
            <the-mask
                class="form-input"
                type="tel"
                id="telefone"
                placeholder="Fixo, Celular, WhatsApp..."
                :mask="['(##) ####-####', '(##) #####-####']"
                required=true
            />
            </div>
        </div>
        <div class="form-group">
            <div class="col-3 col-sm-12">
            <label class="form-label" for="email">E-mail: </label>
            </div>
            <div class="col-9 col-sm-12">
            <input
                class="form-input"
                type="email"
                id="email"
                placeholder="Seu melhor e-mail"
                required=true
            />
            </div>
        </div>
        <div class="divider"></div>
        <div class="columns">
            <div class="column col-12 float-right text-right">
            <button @click="next(1)" :disabled="error.length > 0 ? true : false" class="btn btn-sm">
                Próximo
            </button>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
import {TheMask} from 'vue-the-mask'

export default {
  components: { TheMask },
  data() {
    return {
      error: ['email'],
      form: 'pf',
      nameToken: {
        N: {
          pattern: /[a-zA-Z ]/,
          transform: v => v.toLocaleUpperCase()
        },
      }
    };
  },
  computed: {},
  methods: {
    validaEmail(email) {
      const er = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    }
  },
};
</script>