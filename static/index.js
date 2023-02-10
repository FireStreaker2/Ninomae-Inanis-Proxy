"use strict";
const form = document.getElementById("input");
const input = document.getElementById("url");
var AB = localStorage.getItem("first");

function openInNewTab(url) {
  var win = window.open();
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';

  var icon = win.document.createElement('link')
  icon.rel = "shortcut icon"
  icon.href = window.location.origin+"/icon.png"
  icon.type = "image/png"
  win.document.head.appendChild(icon)
  
  var title = win.document.createElement('title')
  title.innerText = "about:blank"
  win.document.head.appendChild(title)

  var iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.id = 'content';
  iframe.src = url;
  win.document.body.appendChild(iframe);
}

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await registerSW();
  } catch (err) {
	alert("An error occured. Check your console for more info.");
    throw err;
  }

  let url = input.value.trim();
  if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
  else if (!(url.startsWith("https://") || url.startsWith("http://")))
    url = "http://" + url;

  if (AB == "on") {
    var locations = location.href;
    var newurl = locations.substring(0, locations.length-1);
    openInNewTab(newurl + __uv$config.prefix + __uv$config.encodeUrl(url));
  } else {
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  }
});
