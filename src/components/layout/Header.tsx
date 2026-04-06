import logo from "@/assets/logo.svg";

export default function Header() {
    return (
        <header className="border-phosphor/8 font-dm-mono text-muted flex items-center border-b px-11 py-6">
            <img className="h-9" src={logo} alt="RiceHub" />
            <nav className="text-sm tracking-[0.14em] uppercase">
                <Link label="Explore" href="#explore" />
                <Link label="How it works" href="#how-it-works" />
                <Link label="Creators" href="#creators" />
            </nav>
            <p className="mr-6 ml-auto text-sm tracking-[0.14em] uppercase">
                <span className="text-phosphor">343</span> on waitlist
            </p>
            <input
                className="bg-phosphor font-syne text-dark-text cursor-pointer rounded-xs px-5 py-2.5 font-extrabold"
                type="button"
                value="Join Waitlist"
            />
        </header>
    );
}

const Link = ({ label, href }: { label: string; href: string }) => (
    <a href={href} className="ml-10">
        {label}
    </a>
);
