module.exports = ['$resource', function ($resource) {
 return $resource('json/processes/:id.json', {}, {
    query: {
      method:'GET',
      params: {id:'processes'},
      isArray: true
    }
  });
}];
