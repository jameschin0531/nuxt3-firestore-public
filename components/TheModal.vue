<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="handleClose"></div>
    <div class="modal-card p-3">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click="handleClose"></button>
      </header>
      <section class="modal-card-body">
        <ClientOnly>
          <h3 class="title is-5">Name</h3>
          <h4 class="subtitle is-6">{{user?.name}}</h4>
          <h3 class="title is-5">Email</h3>
          <h4 class="subtitle is-6">{{user?.email}}</h4>
          <h3 class="title is-5">Phone Number</h3>
          <h4 class="subtitle is-6">{{user?.phone_number}}</h4>
        </ClientOnly>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="handleConfirm">
          Confirm Delete
        </button>
        <button class="button" @click="handleClose">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isActive: Boolean,
  user: {},
  title: String
});

const emits = defineEmits(["close", "confirm"]);

const handleClose = () => {
  emits("close");
};

const handleConfirm = () => {
  emits("confirm");
};
</script>

<style></style>
