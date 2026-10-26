async function getPlayerHead() {
    const playerIcon = document.getElementById('playerIcon');

    // Button
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', async () => {
        const userName = document.getElementById('userNameInput').value.trim();
        getUserName(userName);
        /**
         * const url = "https://minotar.net/avatar/";
         *
         *
         *         playerIcon.src = url + userName + "/100";
         *         window.location.href = "../homepage/homepage.html";
         */
    })
}

async function getUserName(username) {
    const mojangAPI = await fetch(`http://localhost:8080/api/player/` + username);
    if (mojangAPI.status !== 200) {
        document.getElementById('errorMessage').innerHTML = 'Enter a valid username!';
        return;
    }
    console.log(mojangAPI);
}

getPlayerHead();