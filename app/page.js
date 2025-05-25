"use client";  // Це потрібно для використання React hooks у Next.js 13

import { useEffect, useState } from "react";

export default function Home() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    // Запит до твого сервера Express, який працює на localhost:5000
    fetch("http://localhost:5000/resumes")
      .then((res) => res.json())
      .then((data) => setResumes(data))
      .catch((err) => console.error("Помилка при завантаженні резюме:", err));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Мої резюме</h1>
      {resumes.length === 0 ? (
        <p>Завантаження...</p>
      ) : (
        resumes.map((resume) => (
          <div key={resume.id} className="mb-5 p-5 border rounded shadow">
            <h2 className="text-xl font-semibold">{resume.name}</h2>
            <p><strong>Посада:</strong> {resume.position}</p>
            <p><strong>Навички:</strong> {resume.skills.join(", ")}</p>
            <p><strong>Досвід:</strong> {resume.experience}</p>
          </div>
        ))
      )}
    </main>
  );
}


