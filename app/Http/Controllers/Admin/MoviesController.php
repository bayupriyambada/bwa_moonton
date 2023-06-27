<?php

namespace App\Http\Controllers\Admin;

use App\Models\Movies;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Admin\Movies\Store;
use App\Http\Requests\Admin\Movies\Update;

class MoviesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movies::get();
        return inertia("Admin/Movies/Index", [
            'movies' => $movies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Admin/Movies/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk("public")->put("movies", $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']);
        $movies = Movies::create($data);

        return redirect(route('admin.dashboard.movies.index'))->with([
            'message' => "Movie inserted successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

        $movies = Movies::findOrFail($id);
        return inertia("Admin/Movies/Edit", [
            'movies' => $movies
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $movies = Movies::find($id);
        $data = $request->validate([
            'name' => 'nullable|unique:movies,name,' . $movies->id,
            'category' => 'nullable',
            'video_url' => 'nullable|url',
            'thumbnail' => 'nullable|image|max:1024',
            'rating' => 'nullable|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean'
        ]);
        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk("public")->put("movies", $request->file('thumbnail'));
            Storage::disk("public")->delete($movies->thumbnail);
        } else {
            $data['thumbnail'] = $movies->thumbnail;
        }

        $movies->update($data);
        return redirect(route('admin.dashboard.movies.index'))->with([
            'message' => "Movie update successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
