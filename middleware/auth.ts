export default function ({ store, redirect }) {
  // If the user is not logged in, redirect to the login page
  if (!store.state.auth.loggedIn) {
    return redirect('/login')
  }
  // If the user is logged in, continue to the next middleware or page
  return redirect('/')
}