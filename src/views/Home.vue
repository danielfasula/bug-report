<template>
   <div class="home container-fluid">
      <div class="row">
        <div class="col">
          <h1 class="text-center text-success">Codeworks BugLog</h1>
        </div>
      </div>
   <div class="row">
      <bug-form></bug-form>
   </div>
   <div class="row">
      <listOfBugs></listOfBugs>
   </div>
   </div>
</template>

<script>

import BugForm from '@/components/BugForm.vue'
import ListOfBugs from '@/components/ListOfBugs.vue'
import BugDetails from '@/components/BugDetails.vue'


export default {
   name: "home",
   props: [],
   data() {
      return {}
   },
   computed: {
      bugs() {
         return this.$store.state.bugs
      },
   },
   methods: {},
   components: {
      BugForm,
      ListOfBugs,
      BugDetails,
   }
}
</script>