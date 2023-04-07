<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <p class="subtitle">Nuxt3<strong>Firestore</strong></p>
      </NuxtLink>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': showMobileNav }"
        aria-label="menu"
        aria-expanded="true"
        data-target="navbar"
        @click="toggleMobileNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbar"
      class="navbar-menu"
      :class="{ 'is-active': showMobileNav }"
    >
      <NuxtLink class="navbar-item" to="/admin"> Admin </NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <button class="button is-primary" @click="logout">
            <strong>Logout</strong>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const showMobileNav = ref(false);
const router = useRouter();

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value;
};

const logout = async () => {
  const signOutResult = await signOutUser();
  console.log(signOutResult);
  router.push("/login");
};
</script>

<style></style>
