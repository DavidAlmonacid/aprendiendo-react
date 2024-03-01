import { translateText } from "../services/translate.js";

export async function translate(req, res) {
  try {
    const { from, to, text } = req.query;

    const translatedText = await translateText({
      fromCode: from,
      toCode: to,
      text
    });

    return res.status(200).json({ translatedText });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
