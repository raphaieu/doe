<template>
  <div class id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/cadastro" class="btn btn-link"
            >Cadastro</router-link
          >
          <a
            href="http://www.raphael-martins.com/doe/blog"
            target="_blank"
            class="btn btn-link"
            >Blog / Notícias</a
          >
        </section>
        <section class="navbar-center">
          <img
            class="img-responsive img-logo"
            src="@/assets/logo.jpg"
            alt="Logo da Projeto para Doação"
          />
        </section>
        <section class="navbar-section">
          <router-link to="/proposta" class="btn btn-link"
            >Qual a Proposta?</router-link
          >
          <router-link to="/quem-sou" class="btn btn-link"
            >Quem Sou?</router-link
          >
        </section>
      </header>
      <router-view class="pt-2" />
    </div>
    <div id="copyright" class="container grid-lg">
      <div class="columns">
        <div class="column col-4 float-left">
          <form
            action="https://pagseguro.uol.com.br/checkout/v2/donation.html"
            method="post"
          >
            <input type="hidden" name="currency" value="BRL" /><input
              type="hidden"
              name="receiverEmail"
              value="rphsm@hotmail.com"
            /><input type="hidden" name="iot" value="button" /><input
              type="image"
              src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/184x42-doar-azul-assina.gif"
              name="submit"
              alt="Pague com PagSeguro - é rápido, grátis e seguro!"
            />
          </form>
        </div>
        <div class="column col-4 text-center">
          <p>
            <router-link to="/politica-privacidade" target="_blank"
              >Política de Privacidade</router-link
            >
            ·
            <router-link to="/termos-uso" target="_blank"
              >Termos de Uso</router-link
            >
          </p>
        </div>
        <div class="column col-4 float-right text-right">
          <p>
            <a href="https://github.com/raphaieu/doe" target="_blank">GitHub</a>
            ·
            <a href="https://twitter.com/raphaieu" target="_blank"
              >Twitter</a
            >
            ·
            <a href="https://facebook.com/raphaieu" target="_blank"
              >Facebook</a
            >
            ·
            <a href="https://instagram.com/raphaieu" target="_blank"
              >Instagram</a
            >
          </p>
        </div>
        <div class="column col-12 text-center">
          <p>
            Designed and built with <span class="text-error">&hearts;</span> by
            <a href="https://instagram.com/raphaieu" target="_blank"
              >Raphael Martins</a
            >. Licensed under the
            <a
              href="https://github.com/raphaieu/doe/blob/main/LICENSE"
              target="_blank"
              >GNU GENERAL PUBLIC LICENSE</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-logo {
  margin: 10px 0;
  max-width: 125px;
}
#copyright {
  font-size: 0.8em;
  padding-top: 130px;
}
</style>

