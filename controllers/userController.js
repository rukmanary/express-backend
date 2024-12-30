const db = require("../config/db");

exports.getProfile = async (req, res) => {
  try {
    const [user] = await db.query(
      "SELECT id, username, email FROM users WHERE id = ?",
      [req.user.id]
    );
    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user[0]);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
};
