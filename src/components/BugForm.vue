<template>
   <div class="bug-form container-fluid">
      <div class="row">
        <div class="col-10 offset-1">
          <form @submit.prevent="postBug">
            <input required type="text" v-model="newBug.title" placeholder="Title">
            <input required type="text" v-model="newBug.creator" placeholder="User Name">
            <input required type="text" v-model="newBug.description" placeholder="Description of Bugs">
            <button type="submit" class="btn btn-info">Submit Bug</button>
          </form>
        </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "bug-form",
   props: [],
   data() {
      return {
        newBug: {
          title: '',
          creator: '',
          description: ''
        }
      }
   },
   computed: {},
   methods: {
     postBug() {
       this.$store.dispatch('postBug', this.newBug)
     }
   },
   components: {}
}
</script>

<style>

form {
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 5px black;
  background: var(--light);
}

</style>
