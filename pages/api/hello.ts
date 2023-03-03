// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Configuration, OpenAIApi } from 'openai';
import fs from 'fs';

const config = new Configuration({
  apiKey: ""
});

const openai = new OpenAIApi(config);

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const body = req.body;

  let response = await openai.createTranscription( fs.createReadStream('18_Economics.mp3') as any, 'whisper-1', undefined, "srt");

  console.log(response.data);

  res.status(200).json({ name: 'John Doe' })
}
