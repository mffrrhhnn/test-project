<template>
 <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          Add Book
        </div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="form-group">
              <label for="name">Book Title</label>
              <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <label for="ISBN">ISBN</label>
              <input type="number" class="form-control" placeholder="ISBN">
            </div>
            <div class="form-group">
              <label for="name">Publisher</label>
              <input type="text" class="form-control" placeholder="Publisher">
              </div>
              <div>
                <div class="form-group">
              <label for="name">Description</label>
              <textarea class="form-control" id="Desc" rows="3">
                </textarea>
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Back</button>
                <button type="submit" class="btn btn-secondary">Save</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Create', 
    data(){
      return {
        Create: {
          Title: '',
          ISBN: '',
          Publisher: '',
          Description: '',
        }
      }
    },
    methods: {
      submit() {
        console.log('ok!')
      },
      addBook(Create) {
    this.Create.push(Create);
} 
    },
  }
</script>