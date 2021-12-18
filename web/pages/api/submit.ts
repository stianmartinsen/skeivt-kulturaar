// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next';

import middleware from '../../middleware/middleware';
import nextConnect from 'next-connect';

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: any, res: NextApiResponse) => {
  console.log(req.body);
  console.log(req.files);

  try {
    // parse form, redirect on success
    res.redirect(307, '/thanks');
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
