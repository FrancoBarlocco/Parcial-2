import express, { Express, Request, Response } from 'express';
import { ErrorCodes } from './errorCodes';
import { Person } from './person';
import { Company } from './company';
import { arrayBuffer } from 'stream/consumers';
import { json } from 'body-parser';
import cors from 'cors';
import { send } from 'process';

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.listen(port, () => {
  // tslint:disable-next-line
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
const persons: Person[] = [
  { id: 1, name: "Fernando", surname: "Alonso", mail: "wfdqwf@gmail.com", tel: 3923222, company: "Apple" },
  { id: 2, name: "Matias", surname: "Ocampo", mail: "dswddw@gmail.com", tel: 3923222, company: "Samsung" },
  { id: 3, name: "Sebastian", surname: "Vettel", mail: "wdjnwdj@gmail.com", tel: 3923222, company: "Deseos" },
  { id: 4, name: "Nicolas", surname: "Alonso", mail: "wfdqwf@gmail.com", tel: 3923222, company: "Apple" },
  { id: 5, name: "Mario", surname: "Ocampo", mail: "dswddw@gmail.com", tel: 3923222, company: "Samsung" },
  { id: 6, name: "Raul", surname: "Vettel", mail: "wdjnwdj@gmail.com", tel: 3923222, company: "Deseos" },
];

const company: Company[] = [
  {id: 1, name: "Apple", web: "www.google.com"},
  {id: 2, name: "Samsung", web: "www.google.com"},
  {id: 3, name: "Deseos", web: "www.google.com"},
]

/**
 * Get all Persons
 */
app.get('/Persons', (req: Request, res: Response) => {
  res.send(persons);
});

app.get('/company', (req, res) => {
  res.status(200).json({ company });
});

app.get('/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const person = persons.find(p => p.id === id);
  if (person) {
    res.status(200).json({ person });
  } else {
    res.sendStatus(404);
  }
});

app.get('/company/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const companyItem = company.find(c => c.id === id);
  if (companyItem) {
    res.status(200).json({ company: companyItem });
  } else {
    res.sendStatus(404);
  }
});

app.post('/persons/:person', (req, res) => {
  const person = req.params.person;
  
  const existingPerson = persons.find(p => p.name.toLowerCase() === person.toLowerCase());
  if (existingPerson) {
    res.sendStatus(404);
  } else {
    const newPersonId = persons.length + 1;
    const newPerson = {
      id: newPersonId,
      name: req.body.name,
      surname: req.body.surname,
      mail: req.body.mail,
      tel: req.body.tel,
      company: req.body.company
    };
    persons.push(newPerson);
    res.sendStatus(200);
  }
});

app.delete('/Persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = persons.findIndex(person => person.id === id);
  
  if (index !== -1) {
    persons.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});


