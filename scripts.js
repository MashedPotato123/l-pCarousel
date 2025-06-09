document.addEventListener('DOMContentLoaded', () => {

  const carousel = document.getElementById('carousel');
  let currentIndex = 0;
  function moveSlide(direction) {
    const itemsPerPage = getItemsPerPage();
    const totalItems = carousel.children.length;
    const maxIndex = Math.max(0, totalItems - itemsPerPage);

    currentIndex += direction;

    if (currentIndex > maxIndex) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = maxIndex;
    }
    
    const itemWidth = carousel.clientWidth / itemsPerPage;
    const slideDistance = itemWidth * currentIndex;
    
    carousel.style.transform = `translateX(-${slideDistance}px)`;
  }

  function getItemsPerPage() {
    if (window.innerWidth <= 600) {
      return 1;
    } else if (window.innerWidth <= 1024) {
      return 2;
    }
    return 4;
  }
  const teamMembers = [
      {
          name: "Kyla Taylor",
          position: "CEO & Stakeholder Relations",
          imgSrc: "1.jpg",
          bio: "In her role as a consultant, Kyla has worked with the public sector and the private sector in a diverse range of industries, from retail and e-commerce to technology and service-based companies. She has helped businesses, from startups to established enterprises, navigate complex market landscapes. Kyla has a reputation for delivering results through unconventional methods. Her holistic approach to business strategy integrates leadership, influence, marketing, sales, operations, customer experience and stakeholder engagement."
      },
      {
          name: "Jason Rost",
          position: "Senior Communications Strategist",
          imgSrc: "2.jpg",
          bio: "Jason is an agile communications professional with a proven track record of success spanning over a decade in both corporate and non-profit realms. Drawing on his background in performing arts management, Jason brings a unique perspective to his work, balancing creative expression with a keen understanding of obtaining measurable business objectives. He loves to channel the wildest ideas into practical solutions. Jason excels at supporting client communication plans, building brand reputation, and leveraging organizational milestones and critical moments. He specializes in strategic internal and external communication planning, public relations, and event management. As a passionate wordsmith, he meticulously crafts compelling narratives focusing on timing, key messaging, and audience targeting to deliver impactful results. A little more about Jason: Residing in Ottawa with his wife and three children, Jason is a dedicated advocate for enriching experiences. Whether immersing himself in theatrical productions, art exhibitions, or a baseball game, he cherishes moments of cultural and social engagement. Jason’s commitment extends beyond personal interests; he serves on the Board of Directors for Kids Up Front Ottawa, striving to ensure underserved youth access unforgettable live experiences.",
          BioHeader: "A little more about Jason:",
          bio_2:"Residing in Ottawa with his wife and three children, Jason is a dedicated advocate for enriching experiences. Whether immersing himself in theatrical productions, art exhibitions, or a baseball game, he cherishes moments of cultural and social engagement. Jason’s commitment extends beyond personal interests; he serves on the Board of Directors for Kids Up Front Ottawa, striving to ensure underserved youth access unforgettable live experiences"
      },
      {
          name: "Laura Smith",
          position: "Business Operations & Client Services",
          imgSrc: "3.jpg",
          bio: "Laura is bringing her expertise in communication and operations to support our team and our clients with operations and project management, communications, and stakeholder relations. Laura has a Bachelor of Science in Human Kinetics, leadership accreditation, and over twelve years of experience in consultative and administrative management roles."
      },
      {
          name: "Anastasia O’Hare",
          position: "Systems & Processes",
          imgSrc: "4.jpg",
          bio: "Anastasia O’Hare is a seasoned and award-winning Customer Success and Sales professional with over 20 years of experience driving enterprise account management, customer success, and service delivery. Known for her ability to cultivate strong, trust-based relationships with clients, she has consistently achieved impressive retention rates of 98-100%. Anastasia’s expertise includes managing multimillion-dollar portfolios, identifying growth opportunities, and delivering tailored solutions that meet client business objectives. Her career spans roles in leading organizations, where she has excelled in driving customer satisfaction, creating strategic roadmaps, and growing accounts through upselling and cross-selling initiatives. With experience in SaaS, IT, finance, and CRM solutions, she brings a wealth of knowledge in project management, contract negotiation, and consultative sales."
      },
      {
          name: "Manu Jha",
          position: "Growth Strategy and Product Marketing",
          imgSrc: "5.jpg",
          bio: "With over 10 years of marketing experience in hyper-growth startups across emerging industries—including AI (Insurance), Web 3.0 (FinTech), and EdTech—Manu has played pivotal roles in two companies that evolved into billion-dollar enterprises. Starting as a hands-on contributor and building marketing teams from the ground up, he has led teams ranging from 3 to 15 members. His expertise lies in integrating product marketing with demand generation to accelerate growth in both B2B and B2C markets. When Manu isn’t helping businesses grow and thrive, you’ll maybe find him watching movies or TV—probably Breaking Bad—catching up on the news, or listening to music, likely Taylor Swift."
      },
      {
          name: "Pawlo Pascual, RGD",
          position: "Creative & Design Team Lead",
          imgSrc: "6.jpg",
          bio: "As Launch and Prosper's Creative and Design Team Lead, Pawlo Pascual, RGD, brings over a decade of expertise in crafting captivating visual experiences that drive results. With a keen eye for detail and a passion for innovation, Pawlo spearheads the design team, delivering high-impact branding, web design, and digital solutions that elevate client success. His exceptional creative direction and leadership skills ensure seamless collaboration and outstanding outcomes. As a Registered Graphic Designer (RGD), Pawlo stays at the forefront of industry trends, ensuring Launch and Prosper's design offerings remain fresh, effective, and always user-centered."
      },
      {
          name: "J.P. Borchardt​",
          position: "Director & Videographer",
          imgSrc: "8.jpg",
          bio: "For the past 15 years, J.P. Borchardt has built a versatile career as a Producer, Director, Videographer, and Editor, contributing to a diverse range of feature films, television shows, music videos, and corporate video productions. As a Director, J.P. has earned two short film awards at the CTV Cinéfest International Film Festival. With five feature films and thousands of video projects under his belt, J.P. has established himself as a well-rounded, knowledgeable video artist who expertly navigates clients through every stage of production while overseeing each project’s creative, logistical, and technical aspects. You can view J.P.’s online portfolio at: www.jpborchardt.com."
      }
  ];

  const modal = document.getElementById('popup-modal');
  const modalImg = document.getElementById('modal-img');
  const modalName = document.getElementById('modal-name');
  const modalPosition = document.getElementById('modal-position');
  const modalBio = document.getElementById('modal-bio');
  const BioHeader = document.getElementById('modal-bio-header');
  const modalBio2 = document.getElementById('modal-bio-2');
  const closeModalBtn = document.querySelector('.modal-close-btn');

function openModal(index) {
    const member = teamMembers[index];
    modalImg.src = member.imgSrc;
    modalName.textContent = member.name;
    modalPosition.textContent = member.position;

    modalBio.classList.remove('long-text');
    modalBio.textContent = member.bio;
    
    const longTextThreshold = 750;
    if (member.bio.length > longTextThreshold) {
        modalBio.classList.add('long-text');
    }
    
    modal.classList.add('visible');
}

function closeModal() {
    modal.classList.remove('visible');
}

  document.getElementById('prev-btn').addEventListener('click', () => moveSlide(-1));
  document.getElementById('next-btn').addEventListener('click', () => moveSlide(1));

  document.querySelectorAll('.carousel-item').forEach(item => {
      item.addEventListener('click', () => {
          const index = item.getAttribute('data-index');
          openModal(index);
      });
  });

  closeModalBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          closeModal();
      }
  });
  
  window.addEventListener('resize', () => {
    const itemsPerPage = getItemsPerPage();
    const totalItems = carousel.children.length;
    const maxIndex = Math.max(0, totalItems - itemsPerPage);
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    moveSlide(0);
  });
});
