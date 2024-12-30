import { pool } from "../config/connect";

const getAll = async (req: any, res: any) => {
  try {
    const sql = "SELECT * FROM students";
    const students = await pool.query(sql);
    res.status(200).json({
      data: students[0],
      message: "Students fetched successfully",
    });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const getById = async (req: any, res: any) => {
  const { id } = req.query;
  try {
    const sql = `SELECT * FROM students WHERE id = ${id}`;
    const student = await pool.query(sql);
    res.status(200).json({
      data: student[0],
      message: "Student fetched successfully",
    });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const add = async (req: any, res: any) => {
  const body = req.body;
  try {
    const sql = "INSERT INTO students SET ?";
    const student = await pool.query(sql, body);
    res.status(200).json({
      data: student[0],
      message: "Student added successfully",
    });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const update = async (req: any, res: any) => {
  const { id } = req.query;
  const body = req.body;
  try {
    const sql = `UPDATE students SET ? WHERE id = ${id}`;
    await pool.query(sql, body);
    const studentUpdated = await pool.query(
      `SELECT * FROM students WHERE id = ${id}`
    );
    res.status(200).json({
      data: studentUpdated[0],
      message: "Student updated successfully",
    });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const deleteById = async (req: any, res: any) => {
  const { id } = req.query;
  try {
    const sql = `DELETE FROM students WHERE id = ${id}`;
    await pool.query(sql);
    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export { getAll, getById, add, update, deleteById };
