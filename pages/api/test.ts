// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPhotosByTag, getTags } from "lib/api";
import fs from "fs/promises";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const test: any = await getPhotosByTag("india");

  res.status(200).json(test);
}
