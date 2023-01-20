function store() {
    if ($('#AB:checked').val() !== undefined) {
        localStorage.setItem("first", "on");
    } else {
        localStorage.setItem("first", "off");
    }

    if ($('#themes:checked').val() !== undefined) {
        localStorage.setItem("second", "on");
    } else {
        localStorage.setItem("second", "off");
    }

    alert("Changes have been succesfully saved!");
}