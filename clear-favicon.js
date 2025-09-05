// Script to force favicon reload
(function() {
  // Remove all existing favicon links
  const links = document.querySelectorAll('link[rel*="icon"]');
  links.forEach(link => link.remove());
  
  // Add new favicon with timestamp
  const timestamp = Date.now();
  
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = `/favicon.svg?t=${timestamp}`;
  document.head.appendChild(favicon);
  
  const shortcutIcon = document.createElement('link');
  shortcutIcon.rel = 'shortcut icon';
  shortcutIcon.type = 'image/x-icon';
  shortcutIcon.href = `/favicon.ico?t=${timestamp}`;
  document.head.appendChild(shortcutIcon);
})();
