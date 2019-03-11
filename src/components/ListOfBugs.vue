<template>
   <div class="list-of-bugs container ">
     <table class="table table-bordered">
        <thead>
       <tr>
          <th><p>Date Created</p></th>
          <th><p>Title</p></th>
          <th><p>Reported By</p></th>
          <th><p>Status</p></th>
       </tr>
        </thead>
       <tr @click="checkBug(bug)" v-for="bug in bugs">
          <td><p>{{bug.createdAt}}</p></td>
          <td><p>{{bug.title}}</p></td>
          <td><p>{{bug.creator}}</p></td>
          <td><p>{{bug.closed}}</p></td>
       </tr>
     </table>
   </div>
</template>

<script>
export default {
   name: "list-of-bugs",
   props: [],
   data() {
      return {}
   },
   computed: {
      bugs() {
         return this.$store.state.bugs
      }
   },
   methods: {
      checkBug(bug) {
         this.$router.push({name: 'bug-details', params: {id: bug._id}})
      }
   },
   components: {}
}
</script>

<style>

</style>
