exports.up = function (knex) {
  return knex.schema
    .createTable('severity_enum', (table) => {
      table.increments('id', { primaryKey: true });
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
    .alterTable('severity_enum', (table) => {
      table.unique('name');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('severity_enum')
};
