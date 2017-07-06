var axios = require('axios');

module.exports = {
  //get all the blogs
  getExercices: function() {
    var requestUrl = "/api";
    return axios.get(requestUrl).then(function(response) {
      return response.data;
    });
  },
  getRips: function(_id) {
    var requestUrl = "/api/" + _id;
    return axios.get(requestUrl).then(function(response) {
      return response.data;
    });
  },
  postExercice: function(title) {
    var requestUrl = "/api/insert";
    var title = {
      title: title
    };
    return axios.post(requestUrl, title).then(function(response) {
      console.log("success"),
      response.data
    }).catch(function(response) {
      console.log("error", response);
    });
  },
  deleteExercice: function(_id) {
    var requestUrl = "/api/" + _id;
    return axios.delete(requestUrl).then(function(response) {
      console.log("success"),
      response.data
    }).catch(function(response) {
      console.log("error", response);
    });
  },
  postRip: function(id, rip) {
    var requestUrl = "/api/rip/" + id;
    var rips = {
      rip: rip
    };
    return axios.put(requestUrl, rips).then(function(response) {
      console.log("success"),
      response.data
    }).catch(function(response) {
      console.log("error", response);
    });
  },
  deleteRip: function(id, _id) {
    var requestUrl = "/api/rip/" + id;
    return axios.delete(requestUrl, {
      data: {
        _id: _id
      }
    }).then(function(response) {
      console.log("success"),
      response.data
    }).catch(function(response) {
      console.log("error", response);
    });
  }
}
