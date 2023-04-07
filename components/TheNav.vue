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
      <div class="navbar-start">
        <NuxtLink class="navbar-item" to="/about"> About </NuxtLink>
        <NuxtLink class="navbar-item" to="/contact"> Contact </NuxtLink>
        <NuxtLink class="navbar-item" to="/help"> Help </NuxtLink>
        <NuxtLink class="navbar-item" to="/admin"> Admin </NuxtLink>
        <NuxtLink class="navbar-item" to="/someweirdpage"> 404 </NuxtLink>
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
  await signOutUser();
  router.push("/login");
};
</script>

<style></style>
