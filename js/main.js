'use strict';

{
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');  
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      console.log(rect);

      window.scrollTo({
        top: rect,
        behavior: 'smooth',
      });
    });
  }
}