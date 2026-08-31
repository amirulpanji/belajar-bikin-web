document.addEventListener('DOMContentLoaded', () => {
  const btnDemo = document.getElementById('btn-demo');
  const outputDemo = document.getElementById('output-demo');

  btnDemo.addEventListener('click', () => {
    outputDemo.textContent = '// Output JS: Selamat! Kamu berhasil menjalankan script interaktif pertama kamu.';
  });
});