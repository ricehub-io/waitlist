import tlPolygon from "@/assets/tl_polygon.png";
import brPolygon from "@/assets/br_polygon.png";

export default function Hero() {
    return (
        <section className="relative flex-1 overflow-hidden">
            <img
                src={tlPolygon}
                alt=""
                width={247}
                height={281}
                className="pointer-events-none absolute top-0 left-0"
            />
            <img
                src={brPolygon}
                alt=""
                width={192}
                height={250}
                className="pointer-events-none absolute right-0 bottom-0"
            />

            <div className="mx-auto flex w-[min(80%,1200px)] flex-col items-center gap-10 py-20">
                <div className="flex flex-col items-center gap-6">
                    <div className="font-dm-mono text-xs tracking-[0.14em] uppercase">
                        <p className="bg-phosphor/8 border-phosphor/24 text-phosphor inline-block border px-4 py-2 align-middle font-medium">
                            Pre-launch
                        </p>
                        <div className="border-slate bg-obsidian inline-flex items-center gap-2 border px-4 py-2 align-middle">
                            <div className="bg-amber-alert aspect-square w-1.5 rounded-full" />
                            <p className="text-amber-alert">
                                Stealth Mode — Coming Soon
                            </p>
                        </div>
                    </div>
                    <h1 className="font-fraunces text-center text-7xl font-bold -tracking-[0.035em]">
                        The marketplace for
                        <br />
                        Linux ricing{" "}
                        <i className="text-phosphor">is almost here.</i>
                    </h1>
                </div>
            </div>
        </section>
    );
}
