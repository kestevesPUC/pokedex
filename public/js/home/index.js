const HOME = function () {
    const pokemonsAPI = "https://pokeapi.co/api/v2/pokemon/";
    const index = function () {
        $.ajax({
            url: pokemonsAPI,
            type: "GET",
            success: function (response) {
                console.log(response)
            },
        });
    }

    return {
        init: function () {
            index();
        },
    };
}();
