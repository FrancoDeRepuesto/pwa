self.addEventListener("push", function (event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "Nueva notificación";
  const options = {
    body: data.body || "Tienes una nueva notificación.",
    icon: "/assets/icons/icon-192x192.png",
    badge: "/assets/icons/badge-72x72.png",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  // Acciones cuando el usuario haga clic en la notificación
  event.waitUntil(clients.openWindow("/")); // Esto abre la aplicación en la ventana principal
});
