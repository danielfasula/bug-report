<template>
   <div class="bug-notes container-fluid">
      <div class="card">
         <p>hi</p>
         <p>{{this.bug.notes}}</p>
      </div>
   </div>
</template>

<script>
export default {
   name: "bug-notes",
   props: [],
   data() {
      return {
         
         }
   },
   computed: { 
      notes() {
         return this.$store.state.notes
         },
      bug() {
         let id = this.$route.params.id
         return this.$store.state.bugs.find(bug => bug._id == id)
     }
      },
   methods: {},
   components: {}
}
</script>