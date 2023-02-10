var value = localStorage.getItem("third");

function ask() {
    var username = prompt("What would you like the username to be?");
    var password = prompt("What would you like the password to be?");
    
    var x = prompt("Are you sure you want to set these as your credentials? (y,n) (type r to remove) ");

    if (x == "n") {
        username = null;
        password = null;
    }

    else if (x == "y") {
        alert("Credentials have been succesfully set, user will now be asked to enter credentials upon loading link.");
        alert("Please note if the user goes to /prefix/url, it will bypass it.");
    }

    else if (x == "r") {
        username = null;
        password = null;

        alert("Password Protection has been succesfully removed.");
    }

    else {
        username = null;
        password = null;

        alert("Error, cancelling action.");
    }

    return username;
    return password;
}

if (value == "on") {
    if (username != null && pass != password) {
        user = prompt("Enter the username to contnue:", "Username");
        pass = prompt("Enter the password to continue:", "Password");

        if (user == username && pass == password) {
            alert("User has been succesfully verified.");
        } else {
            alert("User verification has failed.");
            window.location.replace("https://google.com/");
        }
    }
}