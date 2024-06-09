const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const model=require('./models');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const SECRET_KEY = 'so-segredo';


//---------- endpoint cadastro ----------------
app.post('/register', async(req,res)=>{
    try{
        let reqs = await model.User.create({
            'firstName':req.body.nameUser,
            'lastName':req.body.lastnameUser,
            'email':req.body.emailUser,
            'password':req.body.pswdUser,
            'createdAt':new Date(), 
            'updatedAt':new Date()
        });
        if(reqs){
            res.send(JSON.stringify(true))
        }
    } catch (error){
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).send(JSON.stringify(false));
    }
});

//---------- endpoint login ----------------
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await model.User.findOne({ where: { email: email } });
  
      if (user && user.password === password) {
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ success: true, token, userID: user.id });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
  }
);

//-------------------transação---------------------
app.post('/transaction', async(req,res)=>{
  try{
      let reqs = await model.Transaction.create({
          'name':req.body.Transacao,
          'tipoTransacao':req.body.check,
          'valor':req.body.valor,
          'userId':3,
          'createdAt':new Date(), 
          'updatedAt':new Date()
      });
      if(reqs){
          res.send(JSON.stringify(true))
      }
  } catch (error){
      console.error('Erro ao cadastrar usuário:', error);
      res.status(500).send(JSON.stringify(false));
  }
});








//---------- recuperar usuário ----------------
app.get('/me', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ success: false, message: 'Token não fornecido' });

  jwt.verify(token, SECRET_KEY, async (err, decoded) => {
    if (err) return res.status(401).json({ success: false, message: 'Token inválido' });

    try {
      const user = await model.User.findByPk(decoded.id);
      if (!user) return res.status(404).json({ success: false, message: 'Usuário não encontrado' });

      res.json({ success: true, user: { id: user.id, email: user.email } });
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
  });
});

let port = process.env.PORT || 8081;
app.listen(port, (req,res)=>{
    console.log('Servidor On!');
});