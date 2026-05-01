export default function scrollTo(id: string) {
    const headerHeight = document.querySelector("header")?.clientHeight ?? 0;
    const el = document.getElementById(id);
    const top =
        (el?.getBoundingClientRect().top ?? 0) + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
}
