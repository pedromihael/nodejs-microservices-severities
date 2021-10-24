const {
  CreateSeverityUseCase,
  UpdateSeverityUseCase,
  GetSeverityByIdUseCase,
  ListAllSeveritiesUseCase,
  GetSeverityByNameUseCase,
  DeleteSeverityUseCase,
  GetSeverityByWeightUseCase
} = require('../../useCases')

const { PostgresSeverityRepository } = require('../../repositories/PostgresSeverityRepository')
const repository = PostgresSeverityRepository()

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  const listAllSeveritiesUseCase = ListAllSeveritiesUseCase(repository)
  const response = await listAllSeveritiesUseCase.execute()

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)

  res.send(response)
})

router.get('/:id', async (req, res) => {
  const getSeverityByIdUseCase = GetSeverityByIdUseCase(repository)
  const response = await getSeverityByIdUseCase.execute(req.params.id)

  if(!response) res.status(404).send({ok: false, message: 'not found'})

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.get('/name/:name', async (req, res) => {
  const getSeverityByNameUseCase = GetSeverityByNameUseCase(repository)
  const response = await getSeverityByNameUseCase.execute(req.params.name)

  if(!response) res.status(404).send({ok: false, message: 'not found'})

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.get('/weight/:weight', async (req, res) => {
  const getSeverityByWeightUseCase = GetSeverityByWeightUseCase(repository)
  const response = await getSeverityByWeightUseCase.execute(req.params.weight)

  if(!response) res.status(404).send({ok: false, message: 'not found'})

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.post('/', async (req, res) => {
  const createSeverityUseCase = CreateSeverityUseCase(repository)
  const response = await createSeverityUseCase.execute(req.body)

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.put('/:id', async (req, res) => {
  const data = req.body
  const updateSeverityUseCase = UpdateSeverityUseCase(repository)
  const response = await updateSeverityUseCase.execute(req.params.id, data)

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)})

router.delete('/:id', async (req, res) => {
  const deleteSeverityUseCase = DeleteSeverityUseCase(repository)
  const response = await deleteSeverityUseCase.execute(req.params.id)

  res.send(response)
})

module.exports = router