const pet = (function () {
    const getAdd = function (ctx) {
        ctx.partial("views/pet/add.hbs");
    };

    const postAdd = function (ctx) {
        petModel.add(ctx.params).done(function () {
            notification().info("Pet created.");
            ctx.redirect("#/");
        })
    };

    const getMyPets = function (ctx) {
        petModel.pets().done((res) => {
            ctx.pets = res.filter(pet => pet._acl.creator === storage.getData("userInfo").id);
            ctx.partial("views/pet/myPet.hbs");
        })
    };

    const getEdit = function (ctx) {
        petModel.pets().done((res) => {
            ctx.pet = res.filter(pet => pet._id === ctx.params.petId);
            ctx.partial("views/pet/edit.hbs");
        });
    };

    const postEdit = function (ctx) {
        petModel.edit(ctx.params).done(function () {
            notification().info("Updated successfully!");
            ctx.redirect("#/");
        }).catch((err) => {
            console.log(err);
        });
    };

    const getDetails = function (ctx) {
        petModel.pets().done((res) => {
            ctx.pet = res.filter(pet => pet._id === ctx.params.petId);
            ctx.partial("views/pet/details.hbs");
        });
    };

    const getLike = function (ctx) {
        petModel.pets().done((res) => {
            let neededPet = res.filter(pet => pet._id === ctx.params.petId);
            neededPet[0].likes = +neededPet[0].likes + 1;
            petModel.edit(ctx.params).done(function () {
                ctx.pet = neededPet;
                ctx.partial("views/pet/details.hbs");
            });
        });
    };

    const getDelete = function (ctx) {
        petModel.pets().done((res) => {
            ctx.pet = res.filter(pet => pet._id === ctx.params.petId);
            ctx.partial("views/pet/delete.hbs");
        });
    };

    const postDelete = function (ctx) {
        petModel.remove(ctx.params).done(function () {
            notification().info("Pet removed successfully!");
            ctx.redirect("#/");
        });
    };

    return {
        getAdd,
        postAdd,
        getMyPets,
        getEdit,
        postEdit,
        getDetails,
        getLike,
        postDelete,
        getDelete
    }
})();