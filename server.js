import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(process.cwd(), "src", "data", "courses.json");

app.use(bodyParser.json());
app.use(cors());

// ===== Helper =====
function readCourses() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (err) {
    console.error("Ошибка чтения courses.json:", err);
    return [];
  }
}

function writeCourses(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// ===== Routes =====

// Все курсы
app.get("/api/courses", (req, res) => {
  res.json(readCourses());
});

// Курс по slug
app.get("/api/courses/:slug", (req, res) => {
  const { slug } = req.params;
  const course = readCourses().find((c) => c.slug === slug);
  if (!course) return res.status(404).json({ error: "Курс не найден" });
  res.json(course);
});

// Создать курс
app.post("/api/courses", (req, res) => {
  const newCourse = req.body;
  const courses = readCourses();
  if (courses.find((c) => c.slug === newCourse.slug)) {
    return res.status(400).json({ error: "Курс с таким slug уже существует" });
  }
  courses.push(newCourse);
  writeCourses(courses);
  res.status(201).json(newCourse);
});

// Обновить курс
app.put("/api/courses/:slug", (req, res) => {
  const { slug } = req.params;
  const courses = readCourses();
  const index = courses.findIndex((c) => c.slug === slug);
  if (index === -1) return res.status(404).json({ error: "Курс не найден" });
  courses[index] = req.body;
  writeCourses(courses);
  res.json(req.body);
});

// Удалить курс
app.delete("/api/courses/:slug", (req, res) => {
  const { slug } = req.params;
  let courses = readCourses();
  const initialLength = courses.length;
  courses = courses.filter((c) => c.slug !== slug);
  if (courses.length === initialLength)
    return res.status(404).json({ error: "Курс не найден" });
  writeCourses(courses);
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`API started on http://localhost:${PORT}`));
