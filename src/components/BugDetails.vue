<template>
   <div class="bug-details col-4">
      <div class="card card-body m-2 text-center">
         <navigation />
         <div class="row">
            <h1>{{bug.title}}</h1>
         </div>
         <div class="row">
            <div class="col-6">Description: {{bug.description}}</div>
            <div class="col-6">Created By: {{bug.creator}}</div>
         </div>
      </div>
            <div class="row">
        <div class="col-10 offset-1">
          <form @submit.prevent="postNote">
            <input required type="text" v-model="newNote.content" placeholder="Comment">
            <input required type="text" v-model="newNote.creator" placeholder="User Name">
            <button type="submit" class="btn btn-dark">Submit Comment</button>
          </form>
        </div>
        <bugNotes></bugNotes>
        <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Update Status
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item pending" href="#">Pending</a>
      <a class="dropdown-item completed" href="#">Completed</a>
      <a class="dropdown-item rejected" href="#">Rejected</a>
    </div>
  </div>
      </div>
   </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import BugNotes from '@/components/BugNotes.vue'
export default {
   name: "bug-details",
   props: [],
   data() {
      return {
         newNote: {
            content: '',
            creator: '',
         }
      }
   },
   computed: {
     bug() {
       let id = this.$route.params.id
       return this.$store.state.bugs.find(bug => bug._id == id)
     }
   },
   methods: {
      postNote() {
      this.newNote.bugId = this.$route.params.id
         this.$store.dispatch('postNote', this.newNote)
      },
      viewNote(bug) {
         this.$router.push({name: 'bug-notes', params: {id: bug._id}})
         },
   },
   components: {
      Navigation,
      BugNotes
   }
}
</script>

<style>
.pending {
   background-color: yellow;
}
.rejected {
   background-color: red;
}
.completed {
   background-color: green;
}

</style>
