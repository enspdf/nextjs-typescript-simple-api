import Link from "next/link";

export function HomePage() {
    return (
        <div>
            <Link href="/people">
                <a>People</a>
            </Link>
            <hr/>
            <Link href="/vehicles">
                <a>Vehicles</a>
            </Link>
        </div>
    );
};