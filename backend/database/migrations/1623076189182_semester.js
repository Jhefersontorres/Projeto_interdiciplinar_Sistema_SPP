'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SemesterSchema extends Schema {
  up () {
    this.create('semesters', (table) => {
      table.increments()
      table.string('description', 254).notNullable().unique()
      table.integer("status").defaultTo("1").notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('semesters')
  }
}

module.exports = SemesterSchema
