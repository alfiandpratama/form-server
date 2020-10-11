const handleRegister = (req, res, db) => {
  const { firstName, lastName, gender, email, mobile, dob } = req.body;

  if (!firstName || !lastName || !gender || !email || !mobile) {
    return res.status(400).json({ message: 'Incorrect form submission' });
  }

  db.transaction((trx) => {
    db('users')
      .transacting(trx)
      .returning('*')
      .insert({
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        email: email,
        mobile_number: mobile,
        dob: dob,
        joined: new Date(),
      })
      .then((user) => {
        res.status(201).json({
          message: 'OK',
          data: user[0],
        });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json({ message: 'Unable to register' }));
};

module.exports = {
  handleRegister,
};
