

/////////////////////////////////////////////////UPDATE NAV ON LOGIN
function updateNavigation() {
  if (sessionStorage.getItem('isLoggedIn') === 'true') {
    const authButton = document.getElementById('authButton');
    const signIn = document.getElementById('signIn')
    if (signIn) {
      signIn.innerHTML = '<a href="profile.html">Profile</a>';
    }
    if (book) {
      book.innerHTML = '<a href="book.html">Book</a>';
    }
  }
}

function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  sessionStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'home.html';
  
  return false;
}

document.addEventListener('DOMContentLoaded', updateNavigation);

////////////////////////////////////////////////////////////////////