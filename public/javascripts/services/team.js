module.exports = ['$resource', function ($resource) {
 return $resource('json/team/:id.json', {}, {
    query: {
      method:'GET',
      params: {id:'team'},
      isArray: true
    }
  });
}];
