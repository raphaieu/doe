<template>
  <div class="container grid-lg">
    <div class="columns">
      <div class="column col-12">
        <h4 class="text-left">Cadastro</h4>
      </div>
    </div>
    <div class="columns col-gapless">
      <div class="column">
        <div class="empty">
          <div class="empty-icon">
            <i class="icon icon-people"></i>
          </div>
          <p class="empty-title h5">Quero ser um voluntáriado &#9825;</p>
          <div class="empty-action">
            <button @click="selectedForm = 'voluntary'" class="btn btn-lg btn-primary">
              Formulário
            </button>
          </div>
        </div>
      </div>
      <div class="divider-vert" data-content="OU"></div>
      <div class="column">
        <div class="empty">
          <div class="empty-icon">
            <i class="icon icon-location"></i>
          </div>
          <p class="empty-title h5">Local, instituição e/ou um coletivo!</p>
          <div class="empty-action">
            <button @click="selectedForm = 'institute'" class="btn btn-lg btn-primary">
              Formulário
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column col-12">
        <p class="text-center">
          Preencha um dos formulários, siga os passos que iremos fazer com quem
          precisa ser ajudado, a ajuda chegue o mais rápido possível!
        </p>
      </div>
    </div>
    <!-- Form -->
    <div class="columns">
        <div class="column col-12" v-if="selectedForm === 'voluntary'">
            <VoluntaryForm />
        </div>
        <div class="column col-12" v-else-if="selectedForm === 'institute'">
            <InstituteForm />
        </div>
    </div>
  </div>
</template>

<script>
import VoluntaryForm from "@/components/RegisterForm/Voluntary";
import InstituteForm from "@/components/RegisterForm/Institute";

export default {
  components: { VoluntaryForm, InstituteForm },
  data() {
    return {
      selectedForm: '',
    };
  },
  computed: {},
  methods: {
    
  },
};
</script>