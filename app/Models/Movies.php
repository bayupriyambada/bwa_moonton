<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movies extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'movies';

    protected $fillable = [
        'name', 'slug', 'video_url', 'thumbnail', 'rating', 'category', 'is_featured'
    ];
}
