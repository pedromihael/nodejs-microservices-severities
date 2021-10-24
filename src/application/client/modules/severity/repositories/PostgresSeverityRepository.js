const knex = require('../../../../../infra/db/adapters/knex')
const ApiErrorFactory = require('../../../../../shared/factories/ApiErrorFactory')

const errorFactory = ApiErrorFactory()

function PostgresSeverityRepository() {
  const create = async data => {
    try {
      const {weight, fk_severity_enum, name} = data
      await knex('severity_enum').insert({ id: fk_severity_enum, name });
      await knex('severity').insert({ weight, fk_severity_enum });
  
      return { ok: true };
    } catch (error) {
      return errorFactory.createError(error, 'createSeverity')
    }
   }
  
  const findAll = async () => {
    try {
      const results = await knex('severity')
        .join('severity_enum', 'fk_severity_enum', 'severity_enum.id')
        .select('severity.id', 'severity.weight', 'severity_enum.name')
        .orderBy('severity.id');
      return results;
    } catch (error) {
      return errorFactory.createError(error, 'findAllSeverities')
    }
   }
  
  const findById = async id => {
    try {
      const result = await knex('severity')
        .join('severity_enum', 'fk_severity_enum', 'severity_enum.id')
        .select('severity.id', 'severity.weight', 'severity_enum.name')
        .where({ 'severity.id': id });
      return result[0];
    } catch (error) {
      return errorFactory.createError(error, 'findSeverityById')
    }
  }

  const findByName = async (name) => {
    try {
      const result = await knex('severity')
        .join('severity_enum', 'fk_severity_enum', 'severity_enum.id')
        .select('severity.id', 'severity.weight', 'severity_enum.name')
        .where({ name });
      return result[0];
    } catch (error) {
      return errorFactory.createError(error, 'findSeverityByName')
    }
  };

  const findByWeight = async (weight) => {
    try {
      const result = await knex('severity')
        .join('severity_enum', 'fk_severity_enum', 'severity_enum.id')
        .select('severity.id', 'severity.weight', 'severity_enum.name')
        .where({ 'severity.weight': weight });
      return result[0];
    } catch (error) {
      return errorFactory.createError(error, 'findSeverityByWeight')
    }
  };
  
  const remove = async id => {
    try {
      await knex('severity').select('fk_severity_enum').where({ id });
      const result = await knex('severity').where({ id }).delete();
      await knex('severity_enum').where({ id: result[0]['fk_severity_enum'] }).delete();
      return { ok: true };
    } catch (error) {
      return errorFactory.createError(error, 'deleteSeverity');
    }
  }

  const save = async (id, data) => {
    try {
      const {field, value} = data
      if (field === 'name') {
        await knex('severity_enum').update({ name: value }).where({ id });
        return { ok: true };
      } else {
        await knex('severity')
          .update({ [`${field}`]: value })
          .where({ id });
        return { ok: true };
      }
    } catch (error) {
      return errorFactory.createError(error, 'updateSeverity');
    }
  }
  
  return {
    create,
    findAll,
    findById,
    findByName,
    findByWeight,
    remove,
    save
  }
}

module.exports = { PostgresSeverityRepository }