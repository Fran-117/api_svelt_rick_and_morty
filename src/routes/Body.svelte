<script lang="ts">
	import pokemon from '$lib/images/pokemon.jpg';
    import rick from '$lib/images/rick.jpg';

</script>

<div class="imagenes">
	<img src={pokemon} alt="Imagen de Pokemon" width="300"/>
	<img src={rick} alt="Imagen de Rick and Morty" width="300"/>
</div>

<style>
.imagenes {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgb(255, 255, 255);
		border: 1px solid #464545ce;
		border-radius: 8px;
		padding: 1rem;
		text-align: center;	
		box-shadow: 0 2px 4px rgb(0, 0, 0);
	}
</style>
