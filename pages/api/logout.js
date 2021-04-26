import cookie from 'cookie';

export default async (req, res) => {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        maxAge: new Date(0),
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development',
        path: '/',
      })
    );

    res.status(200).json({ message: 'Success' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
