import { RiceDto } from "@/types/dto";

export default function RiceCard({
    title,
    price,
    thumbnailUrl,
    tags,
    downloads,
    stars,
}: RiceDto) {
    return (
        <>
            <img src={thumbnailUrl} alt="thumbnail" />
            <div>
                <p>{title}</p>
                {price !== undefined ? <p>${price.toFixed(2)}</p> : <p>Free</p>}
            </div>
            <ul>
                {tags.map((tag) => (
                    <li>{tag}</li>
                ))}
            </ul>
            <div className="bg-muted h-0.5 w-full" />
            <div>
                <p>Curated with permission</p>
                <p>{downloads}</p>
                <p>{stars}</p>
            </div>
        </>
    );
}
