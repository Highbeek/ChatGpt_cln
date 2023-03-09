import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });

  res.send(completion.data.choices[0].text);
});

const PORT = 8020;

app.listen(PORT, () => {
  console.log(`server running on port :${PORT}`);
});
