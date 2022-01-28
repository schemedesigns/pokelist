import { useCallback, useEffect, useRef, useState } from 'react';
import { Pokemon } from '../types/pokemon';
import { stripTrailingSlash } from '../utilities/string';
import Card from './Card';
import { fetchPokemon } from '../utilities/api';
import Hero from './Hero';

interface ApiResponse {
    name: string;
    url: string;
}

async function getNext(offset: number = 0) {
    const { results } = await fetchPokemon<{ results: ApiResponse[]; next: string }>(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`);

    const data = results.map<Pokemon>((item) => {
        const { name, url } = item;

        const cleanUrl = stripTrailingSlash(url);
        const index = cleanUrl.lastIndexOf('/');
        const id = cleanUrl.substring(index + 1);

        return {
            id,
            name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        };
    });

    return data;
}

export default function PokeList() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [nextPokemon, setNextPokemon] = useState<Pokemon[]>([]);
    const [currentOffset, setCurrentOffset] = useState<number>(0);
    const lastCard = useRef<HTMLDivElement>(null);

    const primeNextBatch = useCallback(async () => {
        const offset = currentOffset + 15;
        const data = await getNext(offset);

        setCurrentOffset(offset);
        setNextPokemon(data);
    }, [currentOffset]);

    useEffect(() => {
        const init = async () => {
            const data = await getNext();
            setPokemon(data);
            primeNextBatch();
        };

        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadmore = useCallback(
        (entries) => {
            if (entries[0].isIntersecting) {
                setPokemon([...pokemon, ...nextPokemon]);
                primeNextBatch();
            }
        },
        [nextPokemon, pokemon, primeNextBatch]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(loadmore);
        const currentCard = lastCard.current;

        if (lastCard.current) {
            observer.observe(lastCard.current);
        }

        return () => {
            if (currentCard) {
                observer.unobserve(currentCard);
            }
        };
    }, [lastCard, loadmore]);

    return (
        <div>
            <Hero />
            <div className="container px-8 py-5 pb-16">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {pokemon.map((item, index) => {
                        const { id, name, imageUrl } = item;

                        if (index === pokemon.length - 1) {
                            return <Card name={name} imageUrl={imageUrl} key={id} ref={lastCard} />;
                        }

                        return <Card name={name} imageUrl={imageUrl} key={id} />;
                    })}
                </div>
            </div>
        </div>
    );
}
