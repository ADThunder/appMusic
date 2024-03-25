import fetch from "isomorphic-unfetch";

export default async function handler(req, res) {
  const { method } = req;
  let apiEndpoint;

  switch (req.url) {
    case "/events":
      apiEndpoint = process.env.EVENTS_API;
      break;
    case "/albums":
      apiEndpoint = process.env.ALBUMS_API;
      break;
    case "/posts":
      apiEndpoint = process.env.POSTS_API;
      break;
    default:
      res.status(404).json({ message: "Endpoint not found" });
      return;
  }

  const headers = {
    "Content-Type": "application/json",
  };

  switch (method) {
    case "GET":
      try {
        const response = await fetch(apiEndpoint, { method, headers });
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
    // Các phương thức khác (POST, PUT, DELETE) có thể được xử lý ở đây
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
