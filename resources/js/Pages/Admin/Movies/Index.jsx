import Authenticated from "@/Layouts/Authenticated/Auth";
import Button from "@/Components/Button";
import { Head, Link } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";
export default function Index({ auth, flashMessage }) {
    return (
        <Authenticated auth={auth}>
            <Head>
                <title>All Movies</title>
            </Head>
            <Link href={route("admin.dashboard.movies.create")}>
                <Button type="button" className="w-40 mb-8">
                    Insert new movie
                </Button>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
        </Authenticated>
    );
}
