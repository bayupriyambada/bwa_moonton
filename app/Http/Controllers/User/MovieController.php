<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function show(Movies $movies)
    {
        return inertia("User/Dashboard/Movie/Show", ['movies' => $movies]);
    }
}
