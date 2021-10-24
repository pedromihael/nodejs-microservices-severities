exports.up = function (knex) {
  return knex.schema
    .createTable('severity', (table) => {
      table.increments('id', { primaryKey: true });
      table.integer('weight').unsigned().notNullable();
      table.timestamps(true, true);

      table
        .integer('fk_severity_enum')
        .unsigned()
        .references('id')
        .inTable('severity_enum')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable();
    })
    .alterTable('severity', (table) => {
      table.unique('weight');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('severity')
};
