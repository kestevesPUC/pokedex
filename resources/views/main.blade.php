<div>
    <h1 class="pokemon_data">
        <span class="pokemon_number"></span>
        <span class="pokemon_name"></span>
    </h1>
    {{-- FORMULÁRIO --}}
    <form class="form">
        <input type="searcn" class="input_search"  placeholder="Nome ou Número" required/>
    </form>
    <div class="buttons">
        <button class="button btn-prev" href="#"> &lt; Anterior</button>
        <button class="button btn-next" href="#">Próximo &gt;</button>
    </div>
    <img src="#" alt="pokemon_gif" class="pokemon_gif">
    <img src="{{ url('img/pokedex.png') }}" alt="pokedex" class="pokedex">
</div>

