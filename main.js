// main.js

const journals = [
  {
    title: "A Mother’s Heart",
    desc: "30-day gratitude journal for mums.",
    img: "img/Mother.jpg",
    link: "#"
  },
  {
    title: "The Glow Within",
    desc: "A pregnancy journal for mums-to-be.",
    img: "img/mum to be.jpg",
    link: "#"
  },
  {
    title: "The Psalm Journal",
    desc: "30 Days of Hope, Trust, and Gratitude.",
    img: "img/Psalm.jpg",
    link: "#"
  },
  {
    title: "369 Method Meditation",
    desc: "Align your thoughts, speak your truth, trust the universe.",
    img: "img/369.jpg",
    link: "#"
  },
  {
    title: "The Strength Within",
    desc: "A journal for fathers-to-be.",
    img: "img/dad to be.jpg",
    link: "#"
  },
  {
    title: "Dad Wisdom",
    desc: "A 30-day journey of inspiration, gratitude & grit.",
    img: "img/dad.jpg",
    link: "#"
  },
  {
    title: "The Daily Reset",
    desc: "A journal for mindful reflection and growth.",
    img: "img/Daily reset.jpg",
    link: "#"
  },
  {
    title: "I Am Enough!",
    desc: "A self-esteem & affirmation journal for girls.",
    img: "img/girl.jpg",
    link: "#"
  },
  {
    title: "30-Day Ho'oponopono Journal",
    desc: "A path to healing and reconciliation.",
    img: "img/hopo.jpg",
    link: "#"
  }
];

// Insert journals into the grid
const grid = document.getElementById('journalsGrid');
journals.forEach(journal => {
  const card = document.createElement('div');
  card.className = 'journal-card';
  card.innerHTML = `
    <img src="${journal.img}" alt="${journal.title} cover">
    <h3>${journal.title}</h3>
    <p>${journal.desc}</p>
    <a href="${journal.link}" target="_blank">View on Amazon</a>
  `;
  grid.appendChild(card);
});
