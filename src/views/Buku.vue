<template>
<div id="app">
    <div class="container">
      <h1 class="mb-4">Book List</h1>
      <hr>
      <p> 
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Add Book
        </button>
      </p>

      <CRUD v-bind:CRUD='CRUD'/>

      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <h2>Input Data User</h2>
          <hr>
          <CRUD/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Services from "../views/Services";
import Create from "../views/Services";
import CRUD from "./CRUD.vue";
export default {
    name: "Services",
    data() {
        return {
            Create: {
                id: null,
                Judul: "",
                isbn: "",
                author: "",
                deskripsi: "",
                published: false,
            },
            submitted: false,
        };
    },
    methods: {
        save() {
            var data = {
                Judul: this.Judul,
                isbn: this.isbn,
                author: this.author,
                deskripsi: this.deskripsi,
            };
            Services.create(data)
                .then((response) => {
                this.Create.id = response.data.id;
                console.log(response.data);
                this.submitted = true;
            })
                .catch((e) => {
                console.log(e);
            });
        },
        newTutorial() {
            this.submitted = false;
            this.tutorial = {};
        },
    },
    components: { CRUD }
};
</script>