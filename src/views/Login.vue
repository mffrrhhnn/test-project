<template>
<div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="Username">Username</label>
              <input type="Username" class="form-control" placeholder="Username">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" placeholder="Password">
            </div>
            <div class="card-header"><button type="submit" class="btn btn-primary" @submit="login()">
            Login
            </button>
            </div>
          </form>
          <a href="Forgot-Password">Forgot Password ?</a>
          <div class="card-header">New Register
            <div class="card-body">  
              <button type="submit" class="btn btn-primary" @click="redirectRegister">Register</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      username: "",
    };
  },
  methods: {
    async login() {
      const auth = { username: this.username, password: this.password };
      try {
        const res = await axios
          .post("http://159.223.57.121:8080/auth/do-login", { auth })
          .then((res) => res.data);
      } catch (error) {}
    },
    redirectRegister(){
      this.$router.push('/Register')
    }
  },
};
</script>