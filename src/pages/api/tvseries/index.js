import { articles } from "@/database/tvdb";

function handler(req, res) {
  if (req.method === "GET") {
    res
      .status(200)
      .json(articles)
  }
}

export default handler;