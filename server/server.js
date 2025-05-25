// server/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors()); // щоб дозволити запити з іншого порту (Next.js)

const resumes = [
  {
    id: 1,
    name: "Іван Іванов",
    profession: "Frontend Developer",
    skills: ["React", "Next.js", "JavaScript"],
  },
  {
    id: 2,
    name: "Олена Петрівна",
    profession: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

app.get('/resumes', (req, res) => {
  res.json(resumes);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
