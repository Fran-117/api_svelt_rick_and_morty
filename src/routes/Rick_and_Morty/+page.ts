import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


export async function load() {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();

    return {
    personajes: data.results
    };
}
export type Personaje = {
    name: string;
    status: string;
    species: string;
    type: string;
    image: string;
    gender: string;
}
