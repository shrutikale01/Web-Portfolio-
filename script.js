// Dark mode toggle with local storage
const darkToggle = document.getElementById('dark-mode-toggle');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
 

