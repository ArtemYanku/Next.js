const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // дозволяє всі CORS запити

// Масив резюме (можна замінити на дані з бази)
const resumes = [
  {
    id: 1,
    name: "Артем Янку",
    position: "Frontend Developer",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    experience: "3 роки досвіду в розробці веб-додатків",
  },
  {
    id: 2,
    name: "Ірина Петренко",
    position: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB", "REST API"],
    experience: "5 років досвіду в бекенд розробці",
  }
];

// Роут для отримання всіх резюме
app.get('/resumes', (req, res) => {
  res.json(resumes);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
