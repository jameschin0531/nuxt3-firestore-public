export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    await getFirestoreData("user");
  } catch (error) {
    console.log(error.message);
  }
});
