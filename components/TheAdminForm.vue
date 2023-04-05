<template>
  <div>
    <div class="section py-4">
      <form @submit.prevent="handleSubmit" id="form" class="card p-5">
        <h2 class="subtitle is-3">Add User</h2>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Email"
              v-model="formState.email"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Name"
              v-model="formState.name"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Phone Number</label>
          <div class="control">
            <input
              class="input"
              placeholder="Phone Number"
              v-model="formState.phone_number"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input"
              placeholder="Username"
              v-model="formState.username"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              placeholder="password"
              v-model="formState.password"
            />
          </div>
        </div>
        <div class="field is-grouped mt-5">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const formState = ref({
  email: "",
  name: "",
  password: "",
  phone_number: "",
  username: "",
});

const emits = defineEmits(["submitForm"])

const handleSubmit = async () => {
  emits("submitForm", formState.value)
};
</script>

<style></style>
