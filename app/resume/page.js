export default function ResumePage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Артем Янку</h1>
      <p>Email: artem14262@gmail.com</p>
      <p>Телефон: +380996085331</p>

      <h2 style={{ marginTop: "1.5rem", fontSize: "1.5rem" }}>Освіта</h2>
      <ul>
        <li>Дніпропетровський державний університет внутрішніх справ, 3 курс</li>
      </ul>

      <h2 style={{ marginTop: "1.5rem", fontSize: "1.5rem" }}>Навички</h2>
      <ul>
        <li>Python, HTML, CSS, JavaScript, React, Next.js</li>
        <li>VS Code, Git, PyCharm</li>
      </ul>
    </div>
  );
}
