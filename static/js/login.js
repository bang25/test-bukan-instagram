onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log(`Full Name: ${profile.getName()}`);
    console.log(`Email: ${profile.getEmail()}`);

    var x  = document.getElementsByClassName("logged");
    var i;
    for(i = 0; i <= x.length; i++){
        x[0].classList.remove("logged");
    }
}

onSignOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        console.log('User sign out.');
        hideDashboard();
    });
}

hideDashboard = () => {
    var x = document.getElementsByClassName("onlylogged");
    var i;
    for( i= 0; i <= x.length; i++){
        x[i].classList.add("logged");
    }
}

gotoDashboard = () => {
    window.location.replace("index.html");
}
