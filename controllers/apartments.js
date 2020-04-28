// Controller for the section collection.
const Apartment = require('../models/apartment');


module.exports.new = function(request, response, next)
{
  //send list of all the properties
  Property.find().where('user').equals(request.session.user._id)
  response.render('apartments/new');
}

// POST /apartments
module.exports.create = function(request, response, next) {
  Apartment.create(request.body)
    .then(apartment => response.status(201).send(apartment.property))
    .catch(error => next(error));
};
// DELETE apartmnet
module.exports.remove = function(request, response, next)
{
  response.render('apartments/remove');
}
module.exports.delete = function(request, response, next) {
  Apartment.findByIdAndDelete(request.apartment.u_num)
    .then(apartment => apartment ? response.status(200).end() : next())
    .catch(error => next(error));
};
