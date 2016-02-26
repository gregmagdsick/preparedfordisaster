page('/',
  controller.landing);

page('/login',
  controller.login);

page('/logout',
  controller.logout);

page('/register',
  controller.register);

page('/home',
  controller.homepage);

page('/about',
  controller.about);

page('/resources',
  controller.resources);

page('/myplan',
  controller.plan,
  userInput.kitData());

page();
