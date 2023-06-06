const HOME = function () {
    const index = function () {
        let data;

        const pokemon_gif = document.querySelector('.pokemon_gif');
        const pokemon_name = document.querySelector('.pokemon_name');
        const pokemon_number = document.querySelector('.pokemon_number');

        let search_pokemon = 1;

        const fetchPokemon = (pokemon) => {
            pokemon_name.innerHTML = "Aguarde...";
            pokemon_number.innerHTML = "";
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
                type: "GET",
                success: function (response) {
                    pokemon_gif.style.display = "inline"
                    data = response;
                    pokemon_name.innerHTML = response.name;
                    pokemon_number.innerHTML = response.id;
                    search_pokemon = response.id;
                    pokemon_gif.src = response.sprites.versions['generation-v']['black-white']['animated']['front_default'];
                },
                error: function (error) {
                    pokemon_gif.style.display = "none";
                    pokemon_name.innerHTML = ":(";
                    pokemon_number.innerHTML = "";
                }
            });

            return data;
        }



        $(".form").on('submit', function (e) {
            e.preventDefault();
            fetchPokemon($(".input_search").val().toLocaleLowerCase())
            $(".input_search").val("")
        })

        $(".buttons .btn-next").on('click', function () {
            search_pokemon += 1;
            fetchPokemon(search_pokemon);
        });

        $(".buttons .btn-prev").on('click', function () {
            if(search_pokemon > 1)
            {
                search_pokemon -= 1;
                fetchPokemon(search_pokemon);
            }
        });

        fetchPokemon(search_pokemon)
    }

    return {
        init: function () {
            index();
        },
    };
}();
