document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll('.page');
    
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            
            const nextPageId = this.getAttribute('href').substring(1);
            const currentPage = document.querySelector('.page.current');
            
            currentPage.classList.remove('current');
            currentPage.classList.add('out');
            
            setTimeout(() => {
                currentPage.style.display = 'none';
                const nextPage = document.getElementById(nextPageId);
                nextPage.style.display = 'block';
                nextPage.classList.add('current');
                
                setTimeout(() => {
                    nextPage.classList.remove('out');
                }, 20);
            }, 500);
        });
    });
    
    // Show the first page
    document.getElementById('home').style.display = 'block';
    document.getElementById('home').classList.add('current');
});
