self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // Ignorar archivos locales
  if (url.origin === location.origin && !url.pathname.startsWith("/proxy/")) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then(r => r)
      .catch(() => new Response("Error loading resource."))
  );
});
