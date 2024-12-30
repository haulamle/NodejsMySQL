import { pool } from "../config/connect";

const getall = async (req: any, res: any) => {
  try {
    const sql = "SELECT * FROM courses";
    const courses = await pool.query(sql);
    res.status(200).json({
      data: courses[0],
      message: "Courses fetched successfully",
    });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
export { getall };
