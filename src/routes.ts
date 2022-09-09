import { Router } from "express";

const routes = Router();

routes.get('/', (_req, res) => {
  return res.send({message: 'Hello World!'})
})

routes.post('/', (_req, res) => {
  return res.send({message: 'Hello World!'})
})

routes.put('/', (_req, res) => {
  return res.send({message: 'Hello World!'})
})

routes.delete('/', (_req, res) => {
  return res.send({message: 'Hello World!'})
})

routes.patch('/', (_req, res) => {
  return res.send({message: 'Hello World!'})
})

export default routes;