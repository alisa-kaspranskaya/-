window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  document.querySelector('.header').classList.add('loaded');
});


const sections = document.querySelectorAll('.year-section');
const years = document.querySelectorAll('.year');
const circle = document.getElementById('circle');

function showYear(index) {
  sections.forEach((sec, i) => {
    sec.classList.toggle('active', i === index);
  });

  years.forEach((y, i) => {
    y.classList.toggle('active', i === index);
  });

  const activeYear = years[index];
  const offsetX = activeYear.offsetLeft + activeYear.offsetWidth / 2 - circle.offsetWidth / 2;
  circle.style.transform = `translateX(${offsetX}px)`;
}

window.addEventListener('load', () => showYear(0));






const photoData = [
      { src: 'photo1.jpg', caption: 'Невский проспект, 1943' },
      { src: 'photo2.jpg', caption: 'Блокадные 125 граммов, 1941' },
      { src: 'photo3.jpg', caption: 'Сбит фашистский стервятник, 1942' },
      { src: 'photo4.jpg', caption: 'У памятника Петру, 1943' },
      { src: 'photo5.jpg', caption: 'Начало операции у Невской Дубровки, 1941' },
      { src: 'photo6.jpg', caption: 'У Невской Дубровки, 1941' },
      { src: 'photo7.jpg', caption: 'Защитник Ленинграда, 1943' },
      { src: 'photo8.jpg', caption: 'Ленинград в дни блокады, 1942' },
      { src: 'photo9.jpg', caption: 'Освобожденный Шлиссельбург, 1943' },
      { src: 'photo10.jpg', caption: 'Дом-крепость, 1942' }
    ];
  
    const galleryContainer = document.getElementById('galleryContainer');
  
    galleryContainer.innerHTML = photoData.map((photo) => `
      <div class="photo-archive__gallery-item">
        <img src="${photo.src}" alt="${photo.caption}" class="photo-archive__gallery-img" />
        <div class="photo-archive__caption">${photo.caption}</div>
      </div>
    `).join('');
  
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
  
    let currentIndex = 0;
  
    function openLightbox(index) {
      currentIndex = index;
      lightboxImg.src = photoData[currentIndex].src;
      lightbox.classList.add('photo-archive__lightbox--active');
    }
  
    function closeLightbox() {
      lightbox.classList.remove('photo-archive__lightbox--active');
      lightboxImg.src = '';
    }
  
    function showPrev() {
      currentIndex = (currentIndex - 1 + photoData.length) % photoData.length;
      lightboxImg.src = photoData[currentIndex].src;
    }
  
    function showNext() {
      currentIndex = (currentIndex + 1) % photoData.length;
      lightboxImg.src = photoData[currentIndex].src;
    }
  
    document.querySelectorAll('.photo-archive__gallery-img').forEach((img, i) => {
      img.addEventListener('click', () => openLightbox(i));
    });
  
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrev();
    });
  
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNext();
    });
  
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('photo-archive__lightbox--active')) return;
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape') closeLightbox();
    });

