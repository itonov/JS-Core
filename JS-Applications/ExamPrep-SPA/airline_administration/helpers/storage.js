const storage = function () {
    const appKey = 'kid_Sy8Cy9GlN';
    const appSecret = '393e3418fd224480883f7f88581d6d47';
    const masterSecret = '3860ff7b504e410d92d3492c5f7df7f5';

    const saveData = function (key, value) {
        localStorage.setItem(appKey + key, JSON.stringify(value));
    };

    const getData = function (key) {
        return JSON.parse(localStorage.getItem(appKey + key));
    };

    const deleteData = function(key) {
        localStorage.removeItem(appKey + key);
    };

    const saveUser = function(data){
        saveData('userInfo', {
            id: data._id,
            username: data.username,
            firstName: data.first_name,
            lastName: data.last_name
        });

        saveData('authToken', data._kmd.authtoken);
    };

    const deleteUser = function(){
        deleteData('authToken');
        deleteData('userInfo');
    };

    return {
        saveData,
        getData,
        deleteData,
        appKey,
        appSecret,
        masterSecret,
        saveUser,
        deleteUser
    };
}();