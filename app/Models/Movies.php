<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movies extends Model
{
    use HasFactory;
    protected $table = 'movies';

    protected $fillable = [
        'name', 'slug', 'video_url', 'thumbnail', 'rating', 'category', 'is_featured'
    ];
}