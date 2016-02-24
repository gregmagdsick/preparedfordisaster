(function(module) {
  var home = {};

  home.editPlan = function(e) {
    e.preventDefault();
    page('/myplan');
  };

  home.render = function(ele, id)  {
    var template = Handlebars.compile($(id).text());
    return template(ele);
  };

  $('#create-plan').on('click', home.editPlan);

  module.home = home;
})(window);
