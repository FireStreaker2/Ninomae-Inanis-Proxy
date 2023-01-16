"use strict";
const form = document.getElementById("uv-form");
const input = document.getElementById("uv-address");
const error = document.getElementById("error");
const errorCode = document.getElementById("error-code");
var AB = localStorage.getItem("first");

function openInNewTab(url) {

  win = window.open();
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
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  let url = input.value.trim();
  if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
  else if (!(url.startsWith("https://") || url.startsWith("http://")))
    url = "http://" + url;

  if (AB != "on") {
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  } else {
    var locations = location.href;
    var newurl = locations.substring(0, locations.length-1);
    openInNewTab(newurl + __uv$config.prefix + __uv$config.encodeUrl(url));
  }
});
