import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'

type ResponseData = {
  output: string
  error?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { proofCode } = req.body

    // Replace 'lean' with the correct path to Lean in your backend
    exec(`echo "${proofCode}" | lean --run`, (error, stdout, stderr) => {
      if (error) {
        res.status(500).json({ output: '', error: stderr })
      } else {
        res.status(200).json({ output: stdout })
      }
    })
  } else {
    res.status(405).end() // Method Not Allowed
  }
}