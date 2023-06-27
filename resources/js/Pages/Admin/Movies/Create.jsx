import Authenticated from "@/Layouts/Authenticated/Auth";
import { Head, Link, useForm } from "@inertiajs/react";
import ValidationErrors from "@/Components/ValidationErrors";
import InputLabel from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "file" ? e.target.files[0] : e.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movies.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Insert Movies</title>
            </Head>
            <h1 className="text-xl">Insert a new movies</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <InputLabel
                    forInput="name"
                    value="Name Movies"
                    className="mt-4"
                />
                <Input
                    type="text"
                    name="name"
                    handleChange={onHandleChange}
                    required
                    variant="primary-outline"
                    placeholder="Name Movies"
                    isError={errors.name}
                />
                <InputLabel
                    forInput="category"
                    value="Category Movies"
                    className="mt-4"
                />
                <Input
                    type="text"
                    name="category"
                    handleChange={onHandleChange}
                    required
                    variant="primary-outline"
                    placeholder="Category Movies"
                    isError={errors.category}
                />
                <InputLabel
                    forInput="video_url"
                    value="Video Url Movies"
                    className="mt-4"
                />
                <Input
                    type="url"
                    name="video_url"
                    handleChange={onHandleChange}
                    required
                    variant="primary-outline"
                    placeholder="Video Url Movies"
                    isError={errors.video_url}
                />
                <InputLabel
                    forInput="thumbnail"
                    value="Thumbnail Movies"
                    className="mt-4"
                />
                <Input
                    type="file"
                    name="thumbnail"
                    handleChange={onHandleChange}
                    required
                    variant="primary-outline"
                    placeholder="Thumbnail Movies"
                    isError={errors.thumbnail}
                />
                <InputLabel
                    forInput="rating"
                    value="Rating Movies"
                    className="mt-4"
                />
                <Input
                    type="number"
                    name="rating"
                    handleChange={onHandleChange}
                    required
                    variant="primary-outline"
                    placeholder="Rating Movies"
                    isError={errors.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                    <InputLabel
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <Button type="submit" className="mt-4" proccessing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
