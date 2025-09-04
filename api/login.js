export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (username === "admin" && password === "123456") {
      return res.status(200).json({ success: true, message: "Login success!" });
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
