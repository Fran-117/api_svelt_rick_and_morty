<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Personaje } from './+page.ts';
	export let data: { personajes: Personaje[] };

	let mostrarModal = false;
	let personajeSeleccionado: Personaje | null = null;

	function AbrirModal(personaje: Personaje) {
    personajeSeleccionado = personaje;
    mostrarModal = true;
	}

function CerrarModal() {
    mostrarModal = false;
    personajeSeleccionado = null;
}

function handleKey(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') AbrirModal((e.currentTarget as HTMLElement).dataset.personaje as unknown as Personaje);
    if (e.key === 'Escape') CerrarModal();
	}

</script>


<svelte:head>
	<title>Rick and Morty</title>
	<meta name="description" content="Personajes" />
</svelte:head>

<div class="text-column">
	<h1>Personajes de Rick and Morty</h1>

	<h2>
		Los personajes fueron obtenidos de  <a href="https://rickandmortyapi.com/">Rick and Morty API</a>
	</h2>
	
</div>


<div class="personajes">
	{#each data.personajes as personaje}
			<button
				class="tarjeta"
				type="button"
				on:click={() => AbrirModal(personaje)}
				on:keydown={handleKey}>
				<img src={personaje.image} alt={personaje.name} />
				<h2>{personaje.name}</h2>
			</button>
	{/each}
</div>

{#if mostrarModal && personajeSeleccionado}
<div class="modal" role="dialog" aria-modal="true" aria-label="Detalle de personaje">
    <div class="modal-content">
		<button class="close" type="button" on:click={CerrarModal} aria-label="Cerrar">×</button>
			<h2>{personajeSeleccionado.name}</h2>
			<img src={personajeSeleccionado.image} alt={personajeSeleccionado.name} />
			<p><strong>Estado:</strong> {personajeSeleccionado.status}</p>
			<p><strong>Especie:</strong> {personajeSeleccionado.species}</p>
			<p><strong>Género:</strong> {personajeSeleccionado.gender}</p>
			<p><strong>Tipo:</strong> {personajeSeleccionado.type}</p>
    </div>
</div>
{/if}

<style>

	.modal-content {
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

	.modal-content img {
		width: 200px;
		height: auto;
		border-radius: 50%;
		margin-bottom: 1rem;
	}

	.text-column {
		max-width: 600px;
		margin-bottom: 2rem;
	}

	.personajes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
	}

	.tarjeta {
		background-color: rgb(131, 128, 128);
		border: 1px solid #464545ce;
		border-radius: 8px;
		padding: 1rem;
		text-align: center;	
		box-shadow: 0 2px 4px rgb(0, 0, 0);
	}

	.tarjeta img {
		width: 100%;
		height: auto;
		border-radius: 50%;
		margin-bottom: 0.5rem;
	}

	h1, h2 {
		text-align: center;
	}
</style>
