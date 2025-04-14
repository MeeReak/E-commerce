<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Collection;
use App\Models\User;
use Illuminate\Database\Seeder;

class CollectionBlogSeeder extends Seeder
{
    public function run(): void
    {

        $user = User::firstOrCreate(['email' => 'customer@example.com'], [
            'name' => 'Test Customer',
            'password' => bcrypt('password'),
        ]);

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
                'good_points' => ['Boosts immunity', 'Improves digestion'],
                'collection_id' => $collections[0]->id,
                'user_id' => $user->id,
            ],
            [
                'name' => 'Beginner Workout Routine',
                'images' => ['https://example.com/fitness1.jpg'],
                'date' => '2025-03-05',
                'post_by' => 'John Smith',
                'tag' => 'Fitness',
                'good_points' => ['Builds strength', 'Increases stamina'],
                'collection_id' => $collections[1]->id,
                'user_id' => $user->id,
            ],
            [
                'name' => 'Minimalist Living Tips',
                'images' => ['https://example.com/lifestyle1.jpg'],
                'date' => '2025-03-10',
                'post_by' => 'Emily Johnson',
                'tag' => 'Lifestyle',
                'good_points' => ['Reduces stress', 'Saves money'],
                'collection_id' => $collections[2]->id,
                'user_id' => $user->id,
            ],
        ];

        foreach ($blogs as $blog) {
            Blog::create($blog);
        }
    }
}
