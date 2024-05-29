import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

let nextId = 1;
const skills = [
  { id: nextId++, name: "React" },
  { id: nextId++, name: "Redux" },
  { id: nextId++, name: "Redux Thunk" },
  { id: nextId++, name: "RxJS" },
  { id: nextId++, name: "Redux Observable" },
  { id: nextId++, name: "Redux Saga" },
];

let isEven = true;

app.get("/api/search", (req, res) => {
  if (Math.random() > 0.75) {
    return res.status(500).send(JSON.stringify({ error: "Internal Server Error" }));
  }

  const { q } = req.query;
  const delay = isEven ? 1000 : 5000;
  isEven = !isEven;

  setTimeout(() => {
    const data = skills.filter((skill) =>
      skill.name.toLowerCase().startsWith(q.toLowerCase())
    );
    res.send(JSON.stringify(data));
  }, delay);
});

const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`The server is running on port ${port}.`));
