import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static(process.cwd()));

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

// Also serve the named file if accessed directly
app.get("/%E5%9C%A3%E8%AF%9E%E6%A0%91.html", (req, res) => {
  res.sendFile(path.join(process.cwd(), "圣诞树.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
