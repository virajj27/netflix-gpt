import OpenAI from "openai";
import { GPT_API_KEY } from "./constants";
export const openai = new OpenAI({
  apiKey: GPT_API_KEY,
  dangerouslyAllowBrowser: true,
});
