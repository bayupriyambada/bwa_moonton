<?php

namespace Database\Seeders;

use App\Models\Movies;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoviesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Superhore no dead',
                'slug' => 'superhero-no-dead',
                'category' => 'superhero',
                'video_url' => 'https://www.youtube.com/watch?v=iWlwL01utlE',
                'thumbnail' => 'https://picsum.photos/200/300',
                'rating' => 9.3,
                'is_featured' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Superhore no dead version 2',
                'slug' => 'superhero-no-dead-version-2',
                'category' => 'superhero',
                'video_url' => 'https://www.youtube.com/watch?v=iWlwL01utlE',
                'thumbnail' => 'https://picsum.photos/200/300',
                'rating' => 10,
                'is_featured' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Superhore no dead version 3',
                'slug' => 'superhero-no-dead-version-3',
                'category' => 'superhero',
                'video_url' => 'https://www.youtube.com/watch?v=iWlwL01utlE',
                'thumbnail' => 'https://picsum.photos/200/300',
                'rating' => 10,
                'is_featured' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        Movies::insert($movies);
    }
}
