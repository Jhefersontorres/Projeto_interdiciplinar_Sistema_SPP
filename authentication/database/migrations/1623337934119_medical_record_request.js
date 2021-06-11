"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MedicalRecordRequestSchema extends Schema {
  up() {
    this.create("medical_record_requests", (table) => {
      table.increments();
      table.string("name_patient", 254).notNullable();
      table
        .integer("patient_types_id")
        .unsigned()
        .references("id")
        .inTable("patient_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.date("date_solicitation", 255).notNullable();
      table.integer("status").defaultTo("1").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("medical_record_requests");
  }
}

module.exports = MedicalRecordRequestSchema;