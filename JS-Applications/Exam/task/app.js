const app = Sammy('#site-content', function(){
    this.use('Handlebars', 'hbs');
    this.before({except: {}}, function() {
        user.initializeLogin();
    });

    this.get('#/', home.index);
    this.get('#/login', user.getLogin);
    this.post('#/login', user.postLogin);
    this.get('#/logout', user.logout);
    this.get('#/register', user.getRegister);
    this.post('#/register', user.postRegister);
    this.get('#/pets/add', pet.getAdd);
    this.post('#/pets/add', pet.postAdd);
    this.get('#/pets/my', pet.getMyPets);
    this.get('#/pets/edit', pet.getEdit);
    this.post('#/pets/edit', pet.postEdit);
    this.get('#/pets/details', pet.getDetails);
    this.get('#/pets/like', pet.getLike);
    this.get('#/pets/delete', pet.getDelete);
    this.post('#/pets/delete', pet.postDelete);
    this.get('#/cats', home.getCats);
    this.get('#/dogs', home.getDogs);
    this.get('#/parrots', home.getParrots);
    this.get('#/reptiles', home.getReptiles);
    this.get('#/others', home.getOthers);
});

$(function(){
    app.run('#/');
});