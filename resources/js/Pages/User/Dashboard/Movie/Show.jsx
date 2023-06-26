import { Head } from "@inertiajs/react";
import ReactPlayer from "react-player";

export default function Show({ movies }) {
    return (
        <>
            <Head>
                <title>Video Player</title>
            </Head>
            <section
                className="mx-auto w-screen relative watching-page font-poppins bg-form-bg"
                id="stream"
            >
                <div className="pt-[80px]">
                    <ReactPlayer
                        url={movies.video_url}
                        controls
                        width="100%"
                        height={"800px"}
                    />
                </div>

                {/* Button back to dashboard */}
                <div className="absolute top-5 left-5 z-20">
                    <a href={route("user.dashboard.index")}>
                        <img
                            src="/assets/icons/ic_arrow-left.svg"
                            className="transition-all btn-back w-[46px]"
                            alt="stream"
                        />
                    </a>
                </div>

                {/* Video Title  */}
                <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                        {movies.name}
                    </span>
                </div>
            </section>
        </>
    );
}
