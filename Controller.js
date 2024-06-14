const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const SECRET_KEY = 'so-segredo';


app.get('/user', async (req, res) => {
  const userID = req.query.userConnected
  try {
    const users = await model.User.findAll({
      where: {
        id: userID
      }
    });
    res.json(users);
    console,log(users)
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).send(JSON.stringify(false));
  }
});

//---------- endpoint cadastro ----------------
app.post('/register', async (req, res) => {
  try {
    let reqs = await model.User.create({
      'firstName': req.body.nameUser,
      'lastName': req.body.lastnameUser,
      'email': req.body.emailUser,
      'password': req.body.pswdUser,
      'createdAt': new Date(),
      'updatedAt': new Date()
    });
    if (reqs) {
      res.send(JSON.stringify(true));
    }
  } catch (error) {
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
      res.json({ success: true, token, userID: user.id, name: user.firstName });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ success: false, message: 'Erro no servidor' });
  }
});

//-------------------transação---------------------
app.post('/transaction', async (req, res) => {
  try {
    let reqs = await model.Transaction.create({
      'name': req.body.Transacao,
      'tipoTransacao': req.body.check,
      'valor': req.body.valor,
      'userId': req.body.userConnected,
      'createdAt': new Date(),
      'updatedAt': new Date()
    });
    if (reqs) {
      res.send(JSON.stringify(true));
    }
  } catch (error) {
    console.error('Erro ao salvar a transação:', error);
    res.status(500).send(JSON.stringify(false));
  }
});

app.get('/transaction', async (req, res) => {
  const userID = req.query.userConnected;
  try {
    const transactions = await model.Transaction.findAll({
      where: {
        userId: userID
      }
    });
    res.json(transactions);
  } catch (error) {
    console.error('Erro ao buscar transações:', error);
    res.status(500).send(JSON.stringify(false));
  }
});

//-----------------Metas------------------------
app.post('/plan', async (req, res) => {
  try {
    let reqs = await model.Plan.create({
      'name': req.body.Meta,
      'valor': req.body.valor,
      'categoryId': req.body.idCat,
      'userId': req.body.userConnected,
      'createdAt': new Date(),
      'updatedAt': new Date()
    });
    if (reqs) {
      res.send(JSON.stringify(true));
    }
  } catch (error) {
    console.error('Erro ao salvar a Meta:', error);
    res.status(500).send(JSON.stringify(false));
  }
});

app.get('/plan', async (req, res) => {
  const userID = req.query.userConnected
  try {
    const plans = await model.Plan.findAll({
      where: {
        userId: userID
      }
    });
    res.json(plans);
  } catch (error) {
    console.error('Erro ao buscar planos:', error);
    res.status(500).send(JSON.stringify(false));
  }
});

//------------------Cartão-----------------------
app.post('/newcard', async (req, res) => {
  try {
    let reqs = await model.Card.create({
      'name': req.body.nomeCartao,
      'numero': req.body.numCartao,
      'tipoCartao': req.body.bandeira,
      'dataFechamento': req.body.diaFechamento,
      'dataVencimento': req.body.diaVencimento,
      'userId': req.body.userConnected,
      'createdAt': new Date(),
      'updatedAt': new Date()
    });
    if (reqs) {
      res.send(JSON.stringify(true));
    }
  } catch (error) {
    console.error('Erro ao salvar o cartão:', error);
    res.status(500).send(JSON.stringify(false));
  }
});

app.get('/newcard', async (req, res) => {
  const userID = req.query.userConnected
  try {
    const cards = await model.Card.findAll({
      where: {
        userId: userID
      }
    });
    res.json(cards);
  } catch (error) {
    console.error('Erro ao buscar cartões:', error);
    res.status(500).send(JSON.stringify(false));
  }
});

//------------------Categoria-----------------------
app.post('/category', async (req, res) => {
  try {
    let reqs = await model.Categoria.create({
      'name': req.body.nomeCategoria,
      'iconeCategoria': req.body.iconeCategoria,
      'colorCategoria': req.body.corCategoria,
      'userId': req.body.userConnected,
      'createdAt': new Date(),
      'updatedAt': new Date()
    });
    if (reqs) {
      res.send(JSON.stringify(true));
    }
  } catch (error) {
    console.error('Erro ao salvar a categoria:', error);
    res.status(500).send(JSON.stringify(false));
  }
});

app.get('/categories', async (req, res) => {
  const userID = req.query.userConnected
  try {
    const categories = await model.Categoria.findAll({
      where: {
        userId: userID
      }
    });
    res.json(categories);
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    res.status(500).send(JSON.stringify(false));
  }
});


let port = process.env.PORT || 8081;
app.listen(port, (req, res) => {
  console.log('Servidor On!');
});
