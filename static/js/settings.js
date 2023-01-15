function store () {
    if ($('#AB:checked').val() !== undefined) {
        localStorage.setItem("first", "on");
    }

    else {
        localStorage.setItem("first", "off");
    }

    if ($('#load-site:checked').val() !== undefined) {
        localStorage.setItem("second", "on");
    }

    else {
        localStorage.setItem("second", "off");
    }

    if ($('#pw-protect:checked').val() !== undefined) {
        localStorage.setItem("third", "on");
    }

    else {
        localStorage.setItem("third", "off");
    }
}

function get() {
    var AB = localStorage.getItem("first");
    var load = localStorage.getItem("second");
    var adblock = localStorage.getItem("third");
                
    console.log(AB);
    console.log(load);
    console.log(adblock);
			}