import { ReactComponent as Logo } from '../images/logo.svg';
import pikachu from '../images/pikachu.png';

export default function Hero() {
    return (
        <>
            <div className="hero">
                <div className="container px-8 relative pr-24">
                    <Logo />
                    <img src={pikachu} className="hero__img" alt="Pikachu" />
                </div>
            </div>
            <div className="container px-8 py-5 pt-16">
                <div className="md:w-8/12">
                    <h1 className="font-bold text-charcoal uppercase text-3xl mb-2">Welcome to PokéList</h1>
                    <p className="text-grey-500">
                        Did you grow up playing Pokémon? Can you never get enough of Pokémon? Does your mouse have a scroll wheel?! Then your in luck!
                        We dedicated a team of our top developers to build an endless list of all your favorite Pokémon. Just flick that scroll wheel
                        and watch the nostalgia roll on by.
                    </p>
                </div>
            </div>
        </>
    );
}
