import { articles } from "@/database/docdb";

function handler(req, res) {
  if (req.method === "GET") {
    res
      .status(200)
      .json(articles)
  }
}

export default handler;