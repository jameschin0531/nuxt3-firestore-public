<template>
  <table class="table is-bordered is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <!-- <th><abbr title="Username">Username</abbr></th> -->
        <th><abbr title="Name">Name</abbr></th>
        <th><abbr title="Email">Email</abbr></th>
        <th><abbr title="Password">Password</abbr></th>
        <th><abbr>Action</abbr></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <!-- <td>{{ user.username }}</td> -->
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
        <td colspan="2">
          <button
            @click="handleEdit(user)"
            class="button is-primary small is-light mr-2"
          >
            Edit
          </button>
          <button
            @click="handleDelete(user)"
            class="button is-danger small is-light"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["delete", "edit"]);

const handleDelete = (user) => {
  emits("delete", user);
};
const handleEdit = (user) => {
  emits("edit", user);
};
</script>