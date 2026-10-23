function homepage() {
    redirect();
}

function redirect() {
    const redirect = document.getElementById('orderNowButton');

    redirect.addEventListener('click', event => {
        window.location.href = "../orderpage/orderpage.html";
    });

    const redirectToLogin = document.getElementById('loginButton');
    redirectToLogin.addEventListener('click', event => {
        windows.location.href = "../authentication/login.html";
    })
}

homepage();