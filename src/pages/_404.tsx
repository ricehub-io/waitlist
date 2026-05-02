export default function NotFound() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="font-syne mb-2 text-2xl font-extrabold sm:text-4xl">
                Not Found
            </h1>
            <p className="text-parchment/44 mb-6 text-base sm:text-2xl">
                The page you're looking for could not be found
            </p>
            <a
                href="/"
                className="font-dm-mono bg-phosphor/20 border-phosphor border px-5 py-2 text-sm font-bold tracking-widest uppercase sm:text-lg"
            >
                Go back
            </a>
        </div>
    );
}
