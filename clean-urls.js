(function () {
  if (window.location.protocol !== 'file:') {
    return;
  }

  var localPages = {
    '/': 'index.html',
    '/services': 'services.html',
    '/booking': 'booking.html',
    '/contact': 'contact.html'
  };

  document.querySelectorAll('a[href]').forEach(function (link) {
    var route = link.getAttribute('href');
    if (Object.prototype.hasOwnProperty.call(localPages, route)) {
      link.setAttribute('href', localPages[route]);
    }
  });
})();
