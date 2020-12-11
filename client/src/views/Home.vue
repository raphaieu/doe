<template>
  <div class="container grid-lg">
    <div class="columns">
      <div class="column col-12">
        <form @submit.prevent="add(todo)">
          <div class="input-group">
            <input type="text" v-model="todo.description" class="form-input" placeholder="Informe uma região" />
            <button class="btn btn-primary input-group-btn" :class="{loading}">Minha Localização</button>
          </div>
        </form>
      </div>
      <div class="column col-12">
        <div class="todo-list">
          <todo v-for="t in todos" :key="t.id" @toggle="toggleTodo" @remove="removeTodo" :todo="t" />
        </div>
      </div>
      <div class="column col-12">
        <button @click="getLocation">Move to my location</button>
        <gmaps-map>
          <gmaps-marker :options="mapOptions" :position="{ lat: -13.6633569, lng: -69.6394808 }" />
        </gmaps-map>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import { gmapsMap, gmapsMarker } from 'x5-gmaps'
import { mapActions, mapState } from "vuex";

export default {
  name: "app",
  components: { Todo, gmapsMap, gmapsMarker },
  data() {
    return {
      todo: {
        checked: false
      },
      mapOptions: {},
    };
  },
  computed: {
    ...mapState(["todos", "loading", "maps"])
  },
  methods: {
    ...mapActions(["addTodo", "toggleTodo", "removeTodo", "setLocation", "locationError"]),

    async add(todo) {
      await this.addTodo(todo);
      this.todo = { checked: false };
    },

    getLocation() {
        console.log('opa');
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.setLocation, this.locationError)
        else alert('Geolocation is not supported by this browser.')
    },
  }
};
</script>

<style scoped>
.todo-list {
  padding-top: 2rem;
}
.gmaps-map {
  height: 600px;
  width: 100%;
}
</style>
