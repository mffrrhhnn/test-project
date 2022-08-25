<template>
 <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          Register
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="name">Username</label>
              <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="name">Profile name</label>
              <input type="text" class="form-control" placeholder="Profile Name" v-model="Create.profile">
              </div>
              <div>
                <div class="form-group">
              <label for="name">Adress</label>
              <textarea class="form-control" id="adress" rows="3" v-model="Create.adress">
                </textarea>
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Services from "../views/Services";
export default {
  name: "Register",
  data() {
    return {
      tutorial: {
        id: null,
        username: "",
        password: "",
        profile: "",
        address: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    Save() {
      var data = {
        username: this.username,
        password: this.password,
        profile: this.profile,
        address: this.address,
      };
      DataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
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
};
</script>