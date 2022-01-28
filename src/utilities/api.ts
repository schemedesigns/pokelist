export async function fetchPokemon<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return await response.json();
}
