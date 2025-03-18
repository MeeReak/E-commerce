<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Collection;
use Illuminate\Database\Seeder;

class CollectionBlogSeeder extends Seeder
{
    public function run(): void
    {
        // Seed Collections
        $collectionsData = [
            ['name' => 'Healthy Living'],
            ['name' => 'Fitness Tips'],
            ['name' => 'Lifestyle Choices'],
        ];

        $collections = [];
        foreach ($collectionsData as $collectionData) {
            $collections[] = Collection::firstOrCreate($collectionData);
        }

        // Seed Blogs
        $blogs = [
            [
                'name' => 'Top 10 Healthy Foods',
                'images' => ['https://example.com/healthy1.jpg'],
                'date' => '2025-03-01',
                'post_by' => 'Jane Doe',
                'tag' => 'Healthy',
                'goodpoints' => ['Boosts immunity', 'Improves digestion'],
                'collection_id' => $collections[0]->id,
            ],
            [
                'name' => 'Beginner Workout Routine',
                'images' => ['https://example.com/fitness1.jpg'],
                'date' => '2025-03-05',
                'post_by' => 'John Smith',
                'tag' => 'Fitness',
                'goodpoints' => ['Builds strength', 'Increases stamina'],
                'collection_id' => $collections[1]->id,
            ],
            [
                'name' => 'Minimalist Living Tips',
                'images' => ['https://example.com/lifestyle1.jpg'],
                'date' => '2025-03-10',
                'post_by' => 'Emily Johnson',
                'tag' => 'Lifestyle',
                'goodpoints' => ['Reduces stress', 'Saves money'],
                'collection_id' => $collections[2]->id,
            ],
        ];

        foreach ($blogs as $blog) {
            Blog::create($blog);
        }
    }
}
