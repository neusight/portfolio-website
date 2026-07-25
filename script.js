const handleLinks = () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const link = event.currentTarget.getAttribute('href');
      if (link && link.startsWith('#')) {
        event.preventDefault();
        document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', handleLinks);
} else {
  handleLinks();
}
