import { forwardRef } from 'react';

interface Props {
    imageUrl: string;
    name: string;
}

const Card = forwardRef<HTMLDivElement, Props>(({ imageUrl, name }, ref) => {
    return (
        <div ref={ref} className="rounded-lg bg-white overflow-hidden border border-grey-100 shadow-lg">
            <div className="bg-yellow h-24 w-full" />
            <div>
                <img src={imageUrl} alt={name} className="mx-auto -mt-16 w-40 h-auto" />
                <div className="p-4 pb-8 text-center uppercase text-charcoal font-bold">{name}</div>
            </div>
        </div>
    );
});

export default Card;
