const signinButton = document.querySelector('.js-signin');
const signupButton = document.querySelector('.js-signup');
const headers = {
  'Content-Type': 'application/json',
};

async function getUser(url, method) {
  const response = await fetch(url, method);
  const jsonify = await response.json();
  return jsonify;
}

const isValidEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

const isValidPassword = (password) => {
  if (/^\S{1,20}\w$/.test(password)) {
    return true;
  }
  return false;
};

signinButton.addEventListener('click', async () => {
  const email = document.querySelector('.signin-email').value.toLowerCase();
  const password = document.querySelector('.signin-password').value;
  const warning = document.querySelector('.signin-warning');
  if (!isValidEmail(email)) {
    warning.textContent = 'Not a valid email';
    return;
  }
  if (!isValidPassword(password)) {
    warning.textContent = 'Password should contain 1-20 characters without spaces';
    return;
  }
  const { success, userInfo } = await getUser('/api/v1/getUser', { method: 'POST', headers, body: JSON.stringify({ email, password }) });
  warning.textContent = userInfo;
  if (!success) return;
  const accountBox = document.getElementsByClassName('account-box');
  accountBox[0].style.display = 'none';
  const greet = document.querySelector('.greet');
  greet.textContent = 'Welcome';
});

signupButton.addEventListener('click', async () => {
  const email = document.querySelector('.signup-email').value.toLowerCase();
  const password = document.querySelector('.signup-password').value;
  const warning = document.querySelector('.signup-warning');
  if (!isValidEmail(email)) {
    warning.textContent = 'Not a valid email';
    return;
  }
  if (!isValidPassword(password)) {
    warning.textContent = 'Password should contain 1-20 characters without spaces';
    return;
  }
  const { success, userInfo } = await getUser('/api/v1/createUser', { method: 'POST', headers, body: JSON.stringify({ email, password }) });
  warning.textContent = userInfo;
  if (!success) return;
  const accountBox = document.getElementsByClassName('account-box');
  accountBox[0].style.display = 'none';
  const greet = document.querySelector('.greet');
  greet.textContent = 'Welcome';
});
