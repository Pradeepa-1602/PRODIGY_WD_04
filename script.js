function toggleMode() {
  document.body.classList.toggle('dark');
  const btn = document.querySelector('.mode-toggle');
  if (document.body.classList.contains('dark')) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}
