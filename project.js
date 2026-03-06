const data = {
  motivation: {
    title: "Daily Motivation Web App",
    desc: "Mood-tracking UI with structured layout, sidebar navigation, and simple interactions.",
    tools: ["HTML", "CSS", "JavaScript", "VS Code", "Netlify"],
    shots: ["assets/motivation.png", "assets/motivation2.png"],
    highlights: [
      "Structured layout and spacing for readability",
      "Simple interactive elements for user input",
      "Consistent typography and visual hierarchy"
    ]
  },
  ppop: {
    title: "P-Pop Album Shop Website",
    desc: "Shop-style album website with product cards and clear call-to-action elements.",
    tools: ["HTML", "CSS"],
    shots: ["assets/ppop.png", "assets/ppop2.png"],
    highlights: [
      "Product card layout for browsing albums",
      "Clear call-to-action placement",
      "Consistent section structure and alignment"
    ]
  },
  calendar: {
    title: "2025 Calendar Web Project",
    desc: "Grid-based calendar interface designed for consistency and readability.",
    tools: ["HTML", "CSS",],
    shots: ["assets/calendar.png", "assets/calendar2.png"],
    highlights: [
      "Clean grid structure for clarity",
      "Consistent styling across months",
      "Readable spacing and typography"
    ]
  },
  pomodoro: {
    title: "Android Pomodoro Timer (Group Project)",
    desc: "Improved timer controls and refined UI layout to support usability.",
    tools: ["Android Studio", "Java", "XML"],
    shots: ["assets/pomodoro.png", "assets/pomodoro2.png"],
    highlights: [
      "Improved layout and interface clarity",
      "Refined timer controls for usability",
      "Collaboration in a group project"
    ]
  },
  concepts: {
    title: "UI Design Concepts",
    desc: "Multi-screen interface concepts: login, browse, cart, checkout flows.",
    tools: ["Visme"],
    shots: ["assets/concepts.png", "assets/concepts2.png"],
    highlights: [
      "Flow-based screen planning",
      "Navigation structure and hierarchy",
      "Focus on clear user actions"
    ]
  },
  pocari: {
    title: "Pocari Sweat Promotional Poster",
    desc: "Promotional poster emphasizing brand consistency, bold typography, and visual hierarchy.",
    tools: ["Canva"],
    shots: ["assets/pocari.png", "assets/pocari2.png"],
    highlights: [
      "Brand-consistent color palette",
      "Bold typography and clear hierarchy",
      "Dynamic product presentation"
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const key = params.get("project") || "motivation";
const p = data[key] || data.motivation;

document.getElementById("title").textContent = p.title;
document.getElementById("desc").textContent = p.desc;

// Tools chips
const toolsWrap = document.getElementById("tools");
toolsWrap.innerHTML = "";
p.tools.forEach(t => {
  const s = document.createElement("span");
  s.className = "tech-pill";
  s.textContent = t;
  toolsWrap.appendChild(s);
});

// Screenshots
document.getElementById("shot1").src = p.shots[0];
document.getElementById("shot2").src = p.shots[1];

// Highlights
const hl = document.getElementById("highlights");
hl.innerHTML = "";
p.highlights.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  hl.appendChild(li);
});