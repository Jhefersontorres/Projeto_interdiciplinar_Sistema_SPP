'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientTypeSchema extends Schema {
  up () {
    this.create('patient_types', (table) => {
      table.increments()
      table.string('description', 254).notNullable().unique()
      table.integer("status").defaultTo("1").notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('patient_types')
  }
}

module.exports = PatientTypeSchema
