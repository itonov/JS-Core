const user = (function(){
    const getLogin = function(ctx){
        ctx.partial('views/user/login.hbs');
    };

    const postLogin = function(ctx){
        let username = ctx.params.username;
        let password = ctx.params.password;
        
        userModel.login(username, password).done(function(data){
            storage.saveUser(data);

            notification().info('Login successful!');
            ctx.redirect('#/');
        }).fail(function () {
            notification().error('Your username or password is incorrect!');
        });
    };

    const logout = function(ctx){
        userModel.logout().done(function(){
            storage.deleteUser();

            notification().info('Logout successful.');
            ctx.redirect('#/');
        });
    };

    const getRegister = function(ctx) {
        ctx.partial('views/user/register.hbs');
    };

    const postRegister = function(ctx) {
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data);

            notification().info("User registration successful.");
            ctx.redirect('#/');
        });
    };

    const initializeLogin = function(){
        let userInfo = storage.getData("userInfo");
        if(userModel.isAuthorized()){
            $("#userViewName").text(userInfo.username);
            $(".navbar-dashboard").show();
            $(".navbar-anonymous").hide();
        } else {
            $(".navbar-dashboard").hide();
            $(".navbar-anonymous").show();
        }
    };

    return {
        getLogin,
        postLogin,
        logout,
        getRegister,
        postRegister,
        initializeLogin
    };
}());