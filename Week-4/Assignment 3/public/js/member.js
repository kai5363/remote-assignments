const logoutButton = document.querySelector('.js-logout');

logoutButton.addEventListener('click', async () => {
  document.location.assign('/logout');
});
