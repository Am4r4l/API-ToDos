function checaToken(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    res.status(401).json({ msg: 'Acesso negado!' });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Token inválido' });
  }
}
