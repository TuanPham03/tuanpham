window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('home');
    this.setTimeout(function(){
        loading.classList.add('hidden');
        content.style.opacity = '1';
    },3000);
  });