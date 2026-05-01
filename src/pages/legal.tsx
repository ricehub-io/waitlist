import { useEffect } from "preact/hooks";
import fm from "front-matter";
import { marked } from "marked";
import { useSignal } from "@preact/signals";
import moment from "moment";
import NotFound from "@/pages/_404";
import { HttpError } from "@/api";

interface LegalDocProps {
    filename: string;
}

interface DocAttributes {
    title: string;
    lastUpdated: Date;
}

export default function LegalDoc({ filename }: LegalDocProps) {
    const html = useSignal("");
    const title = useSignal("");
    const timestamp = useSignal("");
    const notFound = useSignal(false);

    useEffect(() => {
        const f = async () => {
            try {
                const res = await fetch(
                    `https://raw.githubusercontent.com/ricehub-io/docs/refs/heads/main/legal/${filename}.md`,
                );
                const resBody = await res.text();

                if (res.status === 404) {
                    notFound.value = true;
                } else if (res.status !== 200) {
                    throw new HttpError(res.status, resBody);
                }

                const { attributes, body } = fm<DocAttributes>(resBody);
                title.value = attributes.title;
                timestamp.value = moment(attributes.lastUpdated).format(
                    "MMMM Do, YYYY",
                );
                html.value = marked.parse(body, { async: false });
            } catch (err) {
                if (err instanceof HttpError) {
                    console.error(err.message);
                }
            }
        };
        f();
    }, []);

    if (notFound.value) {
        return <NotFound />;
    }

    return (
        <div className="mx-auto w-[min(80%,700px)] py-10">
            <h1 className="font-syne text-4xl font-extrabold">{title}</h1>
            <p className="text-muted mb-4 font-light">
                Last updated: {timestamp}
            </p>
            <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: html.value }}
            />
        </div>
    );
}
