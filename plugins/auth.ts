export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {
    // console.log('trigger here');
    
    // const { $auth } = useNuxtApp()

    // console.log($auth?.currentUser)

    // if (!$auth?.currentUser?.uid) {
    //   return navigateTo('/')
    // }
  })
})