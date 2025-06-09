import { Request, Response } from "express";
import student from "../models/student";


export const createStudent = async (req:Request, res:Response) => {
    try {
        const newStudent = await student.create(req.body);
        res.status(201).json({ message: "Öğrenci başarıyla eklendi", student: newStudent });
    } catch (error) {
        res.status(500).json({ message: "Öğrenci eklenirken hata oluştu", error });
    }
};

export const getAllStudents = async (_req: Request, res: Response) => {
  try {
    const Students = await student.find();
    res.status(200).json(Students);
  } catch (error) {
    res.status(500).json({ message: "Öğrenciler alınamadı", error });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const foundStudent = await student.findById(req.params.id);
    if (!foundStudent) {
      return res.status(404).json({ message: "Öğrenci bulunamadı" });
    }
    res.status(200).json(foundStudent);
  } catch (error) {
    res.status(500).json({ message: "Öğrenci alınırken hata oluştu", error });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const updatedStudent = await student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedStudent) {
      return res.status(404).json({ message: "Güncellenecek öğrenci bulunamadı" });
    }
    res.status(200).json({ message: "Öğrenci başarıyla güncellendi", student: updatedStudent });
  } catch (error) {
    res.status(500).json({ message: "Güncelleme sırasında hata oluştu", error });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const deletedStudent = await student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Silinecek öğrenci bulunamadı" });
    }
    res.status(200).json({ message: "Öğrenci başarıyla silindi" });
  } catch (error) {
    res.status(500).json({ message: "Silme işlemi sırasında hata oluştu", error });
  }
};