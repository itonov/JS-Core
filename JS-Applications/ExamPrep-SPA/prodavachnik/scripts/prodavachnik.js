function startApp() {

    const templates = {};

    loadTemplates();

    async function loadTemplates() {
        const [adsCatalogTemplate, adBoxTemplate]
            = await Promise.all([
            $.get('./templates/ads-catalog.html'),
            $.get('./templates/ad-box-partial.html')
        ]);

        templates['catalog'] = Handlebars.compile(adsCatalogTemplate);
        Handlebars.registerPartial('adBox', adBoxTemplate);
    }

    // Attach click events
    (() => {
        $('header').find('a[data-target]').click(navigateTo);
        $('#buttonLoginUser').click(login);
        $('#buttonRegisterUser').click(register);
        $('#linkLogout').click(logout);
        $('#buttonCreateAd').click(createAd);
        $('.notification').click(function () {
            $(this).hide();
        });
        showView('viewHome');
    })();

    if (localStorage.getItem('authtoken') !== null) {
        userLoggedIn();
    } else {
        userLoggedOut();
    }

    // Handle notifications
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();

        if (viewName === 'viewAds') {
            loadAds();
        }
    }

    // Shows only the correct links for a logged in user
    function userLoggedIn() {
        let span = $("#loggedInUser");
        span.text(`Welcome ${localStorage.getItem("username")}`);
        span.show();

        $("#linkHome").show();
        $("#linkLogin").hide();
        $("#linkRegister").hide();
        $("#linkListAds").show();
        $("#linkCreateAd").show();
        $("#linkLogout").show();
    }

    // Shows only the correct links for an anonymous user
    function userLoggedOut() {
        $("#linkHome").show();
        $("#linkLogin").show();
        $("#linkRegister").show();
        $("#linkListAds").hide();
        $("#linkCreateAd").hide();
        $("#linkLogout").hide();
        $("#loggedInUser").hide();
    }

    function navigateTo() {
        showView(this.getAttribute('data-target'));
    }

    // Saves username/id/authtoken to local storage
    function saveSession(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
        userLoggedIn();
    }

    // Logs in the user
    async function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let response = await requester.post('user', 'login', 'basic', {username, password});
            saveSession(response);
            showView('viewAds');
            showInfo('Successfully logged in!');
        } catch (e) {
            handleError(e);
        }
    }

    // Register a user
    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let response = await requester.post('user', '', 'basic', {username, password});
            saveSession(response);
            showView('viewAds');
            showInfo('Successfully registered!');
        } catch (e) {
            handleError(e);
        }
    }

    // Logout a user
    async function logout() {
        try {
            await requester.post('user', '_logout', 'kinvey', {authtoken: localStorage.getItem('authtoken')});
            localStorage.clear(); // Clears all session storage on logout
            userLoggedOut();
            showView('viewHome');
            showInfo('Logout successful!')
        } catch (err) {
            handleError(err);
        }
    }

    // Load all ads
    async function loadAds() {
        try {
            let content = $("#content");
            let ads = await requester.get('appdata', 'adverts', 'kinvey');

            ads.forEach(a => {
                if (a._acl.creator === localStorage.getItem("id")) {
                    a.isAuthor = true;
                }
            });

            let context = {
                ads
            };

            let html = templates['catalog'](context);

            content.html(html);

            let editButton = $(content).find('.edit');
            let deleteButton = $(content).find('.delete');

            editButton.click(openEditAdd);
            deleteButton.click(deleteAd);
        } catch (err) {
            handleError(err);
        }

    }

    // Create an add
    async function createAd() {
        let form = $("#formCreateAd");
        let title = form.find('input[name="title"]').val();
        let description = form.find('input[name="description"]').val();
        let price = form.find('input[name="price"]').val();
        let url = form.find('input[name="imageUrl"]').val();
        let publisher = localStorage.getItem("username");

        let newAd = {
            title,
            description,
            price,
            url,
            publisher
        };

        try {
            let result = await requester.post('appdata', 'adverts', '', newAd);
            $("#formCreateAd").reset();
            showView('viewAds');
            showInfo("Ad created!");
        } catch (err) {
            handleError(err);
        }
    }

    // Delete an add
    async function deleteAd() {
        console.log();
        try {
            let result = await requester.remove('appdata', 'adverts', '');
            console.log(result);
            showInfo("Ad deleted!");
        } catch (err) {
            handleError(err);
        }

    }

    // Edit an add
    async function editAd(id, publisher, date) {

    }

    // Open edit add view
    async function openEditAdd() {

    }
}