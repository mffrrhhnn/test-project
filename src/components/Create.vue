<template>
  <table class="table">
  <thead class="thead-light">
    <tr> 
      <th scope="col">Title</th>
      <th scope="col">ISBN</th>  
      <th scope="col">Publisher</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr> 
      <td>{{Create.Title}}</td>
      <td>{{Create.ISBN}}</td> 
      <td>{{Create.Publisher}}</td>
      <td>{{Create.Descripstion}}</td> 
    </tr> 
  </tbody>
</table>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Create',
    props: {
      Create: string,
    },
}         
</script>

<style scoped>

</style>