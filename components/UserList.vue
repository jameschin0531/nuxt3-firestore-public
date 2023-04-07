<template>
  <div>
    <div class="section py-4">
      <div class="box p-5">
        <h2 class="subtitle is-3">Users</h2>
          <UserTable :users="users" @delete="handleDelete" @edit="handleEdit" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  users: {
    type: Array,
    required: true,
  }
});

const emits = defineEmits(["delete","edit"]);

const handleDelete = (user) => {
  emits("delete", user);
};

const handleEdit = (user) => {
  emits("edit", user);
};
</script>

<style></style>
