const petModel = (function () {
    let petUrl = `appdata/${storage.appKey}/pets`;

    const pets = function () {
        let url = petUrl + `?query!={"_acl":{"creator":"${storage.getData("userInfo").id}"}}`;

        return requester.get(url);
    };

    const add = function (params) {
        let data = {
            "name": params.name,
            "description": params.description,
            "category": params.category,
            "likes": params.likes,
            "imageURL": params.imageURL
        };

        return requester.post(petUrl, data);
    };

    const edit = function (params) {
        let data = {
            "id": params._id,
            "name": params.name,
            "description": params.description,
            "category": params.category,
            "likes": params.likes,
            "imageURL": params.imageURL
        };

        return requester.put(petUrl + "/" + params.petId, data);
    };

    const remove = function (params) {
        return requester.del(petUrl + "/" + params.petId);
    };

    return {
        pets,
        add,
        edit,
        remove
    }
})();