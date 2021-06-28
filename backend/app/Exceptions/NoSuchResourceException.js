"use strict";

const { LogicalException } = require("@adonisjs/generic-exceptions");

class NoSuchResourceException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(error, { response }) {
    return response.status(404).json({
      error: "Recurso não existe!!!",
    });
  }
}

module.exports = NoSuchResourceException;
