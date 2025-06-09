import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import studentRoutes from "./routes/student.routes";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/students", studentRoutes)

app.get("/", (_req, res) => {
    res.send("Okul Yönetim Sistemi Backend API Çalışıyor");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});