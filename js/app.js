(function () {
    function init() {
        let router = new Router([
            new Route('home', 'home.html', true),
            new Route('members', 'members.html'),
            new Route('about', 'about.html')
        ]);
    }
    init();
}());