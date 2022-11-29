import { NextApiRequest, NextApiResponse } from 'next'

import { database } from '@/middleware/index'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()

console.log('database', database)
handler.use(database)

// handler.get(async (req, res) => {
//   console.log('req', req);
//   if (!req.user) return res.json({ user: null });
//   return res.json({ user: req.user });
// });
