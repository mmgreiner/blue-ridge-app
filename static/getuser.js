async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
    }

    (async () => {
        ui = await getUserInfo();
        //console.log(await getUserInfo());
        console.log(ui);
        var p = document.getElementById("myuser");
        p.innerHTML = ui.userDetails;
    })();