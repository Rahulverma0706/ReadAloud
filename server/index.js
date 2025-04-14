const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const gTTS = require("gtts");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("book"), (req, res) => {
  console.log("📥 Received upload:", req.file.filename);
  const filePath = req.file.path;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading file");

    const gtts = new gTTS(data, "en");
    const fileName = `${Date.now()}.mp3`;
    const audioPath = `audios/${fileName}`;

    try {
      gtts.save(audioPath, function (err) {
        if (err) {
          console.error("TTS Error:", err);
          return res.status(500).send("Text-to-Speech conversion failed.");
        }

        res.json({ audioUrl: `https://readaloud-tbqf.onrender.com/audios/${fileName}` });
      });
    } catch (e) {
      console.error("Unexpected error:", e);
      return res.status(500).send("Unexpected server error.");
    }
  });
});

app.use("/audios", express.static("audios"));

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
