

        // Testimonials Carousel
        const testimonials = [
            {
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                quote: "Fawzi transformou completamente nosso e-commerce. O design intuitivo que ele criou aumentou nossas conversões em 40%. Profissionalismo e criatividade excepcionais!",
                author: "Maria Silva - CEO da FashionStore"
            },
            {
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
                quote: "O aplicativo que o Fawzi desenvolveu superou todas as nossas expectativas. Sua atenção aos detalhes e compreensão das necessidades do usuário foram impressionantes.",
                author: "Carlos Mendes - CTO da TechSolutions"
            },
            {
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                quote: "Contratei o Fawzi para redesign da nossa marca e fiquei maravilhado com o resultado. Ele capturou perfeitamente a essência da nossa empresa em sua proposta visual.",
                author: "Roberto Almeida - Fundador da BrandVision"
            }
        ];

        const testimonialCard = document.querySelector('.testimonial-card');
        const dots = document.querySelectorAll('.dots span');
        let currentIndex = 0;
        
        function updateTestimonial(index) {
            const testimonial = testimonials[index];
            testimonialCard.innerHTML = `
                <img src="${testimonial.img}" alt="Cliente ${index+1}">
                <div class="testimonial-content">
                    <p>"${testimonial.quote}"</p>
                    <div class="author">${testimonial.author}</div>
                </div>
            `;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            currentIndex = index;
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => updateTestimonial(index));
        });
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(currentIndex);
        }, 5000);
        
        // Initialize first testimonial
        updateTestimonial(0);

        // Projects Filter
        const filterButtons = document.querySelectorAll('.filter-buttons button');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.dataset.filter;
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Resume Tabs
       

    // Resume Tabs
    const resumeTabs = document.querySelectorAll('#myTabs .nav-link');
    const resumePanes = document.querySelectorAll('.tab-pane');
    
    resumeTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active from all tabs
            resumeTabs.forEach(t => t.classList.remove('active'));
            resumePanes.forEach(p => p.classList.remove('show', 'active'));

            // Add active to clicked tab
            tab.classList.add('active');

            // Show corresponding pane using data-target
            const targetId = tab.getAttribute('data-target');
            const targetPane = document.querySelector(targetId);
            targetPane.classList.add('show', 'active');
        });
    });

    // habilidades
 
  const ctx = document.getElementById('skillsRadar').getContext('2d');
  const skillsRadar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['PHP', 'Java', 'Node.js', 'Laravel', 'React', 'Vue.js', 'Quasar', 'MySQL', 'Oracle'],
      datasets: [{
        label: 'Nível de Proficiência (%)',
        data: [91, 96, 94, 95, 95, 98, 89, 92, 97],
        fill: true,
        backgroundColor: 'rgba(255, 140, 66, 0.2)',
        borderColor: '#ff8c42',
        pointBackgroundColor: '#ff8c42',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ff8c42'
      }]
    },
    options: {
      scales: {
        r: {
          angleLines: {
            color: '#666'
          },
          grid: {
            color: '#444'
          },
          pointLabels: {
            color: '#ddd',
            font: {
              size: 14
            }
          },
          ticks: {
            backdropColor: 'transparent',
            color: '#bbb',
            stepSize: 20,
            beginAtZero: true,
            max: 100
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#ff8c42',
            font: {
              size: 16,
              weight: 'bold'
            }
          }
        },
        tooltip: {
          enabled: true,
          backgroundColor: '#ff8c42',
          titleColor: '#fff',
          bodyColor: '#fff',
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });




        // Pricing Tabs
      
  const pricingTabs = document.querySelectorAll('#myTab a');
const pricingPanes = document.querySelectorAll('#myTabContent .tab-pane');

pricingTabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = tab.getAttribute('data-tab');
    const target = document.getElementById(targetId);

    // Remove 'active' de todos
    pricingTabs.forEach(t => t.classList.remove('active'));
    pricingPanes.forEach(p => p.classList.remove('active'));

    // Adiciona 'active' ao clicado e ao conteúdo
    tab.classList.add('active');
    if (target) target.classList.add('active');
  });
});



        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // animacoes no body
       
  tsParticles.load("tsparticles", {
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: {
        value: "#1a1a1a"  // Fundo escuro
      }
    },
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 }
      },
      color: {
        value: "#ff8c42"
      },
      shape: {
        type: "circle"  // ou "edge", "triangle", "char"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 4,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "bounce"
        }
      },
      links: {
        enable: true,
        color: "#ff8c42",
        distance: 120,
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });

  /// animacao na secao project

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('active', 'animate-in', 'float-loop');
          }, index * 2500); // atraso em cascata
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.observer').forEach(section => {
    observer.observe(section);
  });

