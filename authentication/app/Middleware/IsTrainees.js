'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class IsTrainee {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
   async handle ({ rsponse, request, params, auth }, next) {
    // call next to advance the request
    const loginUser = await auth.getUser();

    const {id} = params
    const solicitation = await Solicitation.find(id);
    if(!solicitation) {
      throw new NoSuchResourceException();
    }

    if(solicitation.user_id !== loginUser.id){
      throw new InvalidAccessException();
    }

    request.solicitation = solicitation;

    await next()
  }
}

module.exports = IsTrainees
