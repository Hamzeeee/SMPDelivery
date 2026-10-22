function homepage() {
    redirect();
}

function redirect() {
    const redirect = document.getElementById('orderNowButton');

    redirect.addEventListener('click', event => {
        window.location.href = "../orderpage/orderpage.html";
    });
}

homepage();