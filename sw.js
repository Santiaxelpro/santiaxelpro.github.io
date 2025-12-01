// URL remota a la que haremos proxy
const TARGET = "https://tsyuay.github.io/FrivReborn/classic.html";

self.addEventListener("fetch", event => {
    const url = new URL(event.request.url);

    // Cuando pidan /proxy/ devolver la página remota
    if (url.pathname.startsWith("/proxy")) {
        event.respondWith(fetch(TARGET));
        return;
    }
});
