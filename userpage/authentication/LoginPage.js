function loginPage() {
    getPlayerHead();
}

async function getPlayerHead() {
    const playerIcon = document.getElementById('playerIcon');

    // Button
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', async () => {
        const url = "https://minotar.net/avatar/";
        const userName = document.getElementById('userNameInput').value.trim();
        const data = await fetch(url + userName);

        playerIcon.src = url + userName + "/100";
        console.log(data);
    })
}

loginPage();