<template>
  <div>
    <TheModal
      :isActive="showModal"
      :user="selectedUser"
      title="Confirm Delete"
      @close="showModal = !showModal"
      @confirm="handleConfirm"
    />
    <NuxtLayout>
      <TheHero :pageContent="pageContent" />
      <div class="container mt-4">
        <AdminTabs @activeTab="handleChangeTab" />
        <UserForm
          @submitForm="handleSubmit"
          @editForm="handleSubmitEdit"
          :initData="initData || {}"
          :formType="showTab"
          v-if="showTab === 'add' || showTab === 'edit'"
        />
        <UserList
          :users="content?.user"
          @delete="handleDelete"
          @edit="handleEdit"
          v-if="showTab === 'list'"
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const content = useContent();
const showModal = ref(false);
const selectedUser = ref();
const showTab = ref("list");

const pageContent = computed(() => {
  return getPageContent(content, route);
});

const initData = computed(() => {
  return selectedUser.value ? toRefs(selectedUser.value) : {};
});

const handleSubmit = async (formState) => {
  const payload = {
    email: formState.email,
    password: formState.password,
  };
  const createUserResponse = await createUser(payload.email, payload.password);
  console.log(createUserResponse);
  if (createUserResponse.type === "error") {
    alert(createUserResponse.message);
  } else {
    const result = await addFirestoreData("user", formState);

    document.getElementById("form").reset();
    await getFirestoreData("user");
    showTab.value = "list";
  }
};

const handleSubmitEdit = async (formState) => {
  const result = await updateFirestoreData(
    "user",
    selectedUser.value.id,
    formState
  );

  document.getElementById("form").reset();
  showTab.value = "list";
  await getFirestoreData("user");
};

const handleDelete = (user) => {
  selectedUser.value = user;
  showModal.value = true;
};
const handleEdit = (user) => {
  handleChangeTab("edit");
  selectedUser.value = user;
};

const handleConfirm = async () => {
  showModal.value = false;
  await deleteFirestoreData("user", selectedUser.value.id);
  await getFirestoreData("user");
};

const handleChangeTab = async (tab) => {
  showTab.value = tab;
};
</script>

<style></style>
