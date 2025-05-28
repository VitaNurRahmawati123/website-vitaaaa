  document.addEventListener('DOMContentLoaded', () => {
      // Parallax Hero Effect
      const codingImage = document.getElementById('codingImage');
      const heroSection = document.querySelector('section');

      if (codingImage && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
          const rect = heroSection.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const moveX = (x - rect.width / 2) * 0.02;
          const moveY = (y - rect.height / 2) * 0.02;

          codingImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });

        heroSection.addEventListener('mouseleave', () => {
          codingImage.style.transform = 'translate(0, 0) scale(1)';
        });
      }

      // Testimonials Logic
      const plusButton = document.querySelector('#Testimonials button');
      const form = document.getElementById('testimonial-form');
      const list = document.getElementById('testimonial-list');

      if (plusButton && form && list) {
        plusButton.addEventListener('click', () => {
          form.classList.toggle('hidden');
        });

        form.addEventListener('submit', (e) => {
          e.preventDefault();

          const name = document.getElementById('name').value.trim();
          const comment = document.getElementById('comment').value.trim();
          const rating = document.getElementById('rating').value;

          if (!name || !comment || !rating) {
            alert('Please fill out all fields.');
            return;
          }

          const newTestimonial = document.createElement('div');
          newTestimonial.className = 'flex items-start gap-4 bg-white p-4 rounded shadow';

          newTestimonial.innerHTML = `
          <img src="prifil.png" alt="${name}" class="w-12 h-12 rounded-full object-cover">
          <div>
            <h4 class="font-semibold text-purple-700">${name}</h4>
            <p class="text-gray-700">${comment}</p>
            <p class="text-yellow-500">Rating: ${'⭐'.repeat(rating)}</p>
          </div>
        `;

          list.prepend(newTestimonial);
          form.reset();
          form.classList.add('hidden');

          alert('Testimonial successfully submitted!');
        });
      } else {
        console.warn('Some testimonial elements not found.');
      }
    });

    window.addEventListener('load', () => {
      setTimeout(() => {
        const loading = document.getElementById('loadingScreen');
        loading.classList.add("blur");

        setTimeout(() => {
          loading.style.display = 'none'; // Sembunyikan loading screen
          document.getElementById('mainContent').style.display = 'block'; // Tampilkan konten utama
        }, 900);

      }, 4000); // Tunggu 4 detik
    });


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll("div[style*='--target-width']");
        bars.forEach(bar => {
          bar.classList.add("fill-bar");
        });
        observer.unobserve(entry.target); // hanya sekali animasi
      }
    });
  });

  const skillsSection = document.querySelector("#Skills");
  if (skillsSection) observer.observe(skillsSection);


    