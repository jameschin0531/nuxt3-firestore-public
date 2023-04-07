<template>
  <div>
    <div class="section py-4">
      <form @submit.prevent="handleSubmit" id="form" class="card p-5">
        <h2 v-if="formType === 'add'" class="subtitle is-3">Add User</h2>
        <h2 v-else-if="formType === 'edit'" class="subtitle is-3">Edit User</h2>
      

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
              type="tel"
               pattern="[0-9]{3}-[0-9]{7}"
              placeholder="Format (123-1234567)"
              v-model="formState.phone_number"
            />
          </div>
        </div>
          <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="e.g. bobsmith@gmail.com"
              v-model="formState.email"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              placeholder="*******"
              type="password"
              minlength="8"
              required
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
const props = defineProps({
  initData: {},
  formType: String,
});
const formState = ref({
  email: "",
  name: "",
  password: "",
  phone_number: "",
  username: "",
});

watchEffect(() => {
  // set the formState once the initData is defined
  if (props.initData && props.formType === "edit") {
    Object.assign(formState.value, props.initData);
  } else {
    formState.value = {
      email: "",
      name: "",
      password: "",
      phone_number: "",
      // username: "",
    };
  }
});

const emits = defineEmits(["submitForm", "editForm"]);

const handleSubmit = async () => {
  if(props.formType === 'edit') {
    emits("editForm", formState.value);
  } else {
    emits("submitForm", formState.value);
  }
};
</script>
<style></style>
