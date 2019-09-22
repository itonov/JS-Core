const home = (function () {
    const index = function (ctx) {
        if (userModel.isAuthorized()) {
            petModel.pets().done(function (result) {
                ctx.pets = result.filter((pet) => pet._acl.creator !== storage.getData("userInfo").id);
                ctx.partial("views/user/dashboard.hbs");
            });
        } else {
            ctx.partial("views/home/index.hbs");
        }
    };

    const getCats = function (ctx) {
        petModel.pets().done(function (result) {
            ctx.pets = result.filter((pet) => pet._acl.creator !== storage.getData("userInfo").id
                && pet.category === "Cat")
                .sort((a, b) => b.likes - a.likes);

            ctx.partial("views/user/dashboard.hbs");
        });
    };

    const getDogs = function (ctx) {
        petModel.pets().done(function (result) {
            ctx.pets = result.filter((pet) => pet._acl.creator !== storage.getData("userInfo").id
                && pet.category === "Dog")
                .sort((a, b) => b.likes - a.likes);

            ctx.partial("views/user/dashboard.hbs");
        });
    };

    const getParrots = function (ctx) {
        petModel.pets().done(function (result) {
            ctx.pets = result.filter((pet) => pet._acl.creator !== storage.getData("userInfo").id
                && pet.category === "Parrot")
                .sort((a, b) => b.likes - a.likes);

            ctx.partial("views/user/dashboard.hbs");
        });
    };

    const getReptiles = function (ctx) {
        petModel.pets().done(function (result) {
            ctx.pets = result.filter((pet) => pet._acl.creator !== storage.getData("userInfo").id
                && pet.category === "Reptile")
                .sort((a, b) => b.likes - a.likes);

            ctx.partial("views/user/dashboard.hbs");
        });
    };

    const getOthers = function (ctx) {
        petModel.pets().done(function (result) {
            ctx.pets = result.filter((pet) => pet._acl.creator !== storage.getData("userInfo").id
                && pet.category === "Other")
                .sort((a, b) => b.likes - a.likes);

            ctx.partial("views/user/dashboard.hbs");
        });
    };

    return {
        index,
        getCats,
        getDogs,
        getParrots,
        getReptiles,
        getOthers
    };
}());