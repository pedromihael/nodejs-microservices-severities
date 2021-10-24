const CreateSeverityUseCase = require('./CreateSeverity')
const UpdateSeverityUseCase = require('./UpdateSeverity')
const GetSeverityByIdUseCase = require('./GetSeverityById')
const ListAllSeveritiesUseCase = require('./ListAllSeverities')
const DeleteSeverityUseCase = require('./DeleteSeverity')
const GetSeverityByNameUseCase = require('./GetSeverityByName')
const GetSeverityByWeightUseCase = require('./GetSeverityByWeight')

module.exports = {
  CreateSeverityUseCase,
  UpdateSeverityUseCase,
  GetSeverityByIdUseCase,
  ListAllSeveritiesUseCase,
  GetSeverityByNameUseCase,
  DeleteSeverityUseCase,
  GetSeverityByWeightUseCase
}
