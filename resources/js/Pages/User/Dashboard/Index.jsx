import BrowseCard from "@/Components/BrowseCard";
import FeaturedMovie from "@/Components/FeaturedMovie";
import Authenticated from "@/Layouts/Authenticated/Auth";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
export default function Dashboard({ auth, featuredMovies, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <>
            <Authenticated auth={auth}>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>Dashboard</title>
                </Head>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {featuredMovies.map((featuredMovies) => (
                            <FeaturedMovie
                                key={featuredMovies.id}
                                slug={featuredMovies.slug}
                                name={featuredMovies.name}
                                category={featuredMovies.category}
                                thumbnail={featuredMovies.thumbnail}
                                rating={featuredMovies.rating}
                            />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {movies.map((movies) => (
                            <BrowseCard
                                key={movies.id}
                                slug={movies.slug}
                                name={movies.name}
                                category={movies.category}
                                thumbnail={movies.thumbnail}
                                rating={movies.rating}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
