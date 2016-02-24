(function(module) {
  var home = {};

  home.editPlan = function(e) {
    e.preventDefault();
    page('/myplan');
  };



  $('#create-plan').on('click', home.editPlan);

  module.home = home;
})(window);
