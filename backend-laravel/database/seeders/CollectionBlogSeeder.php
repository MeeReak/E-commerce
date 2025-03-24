<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Collection;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

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

        // Create or get a user with a UUID
        $user = User::firstOrCreate(
            [
                'email' => 'customer@example.com', // Unique field to check existence
            ],
            [
                'id' => Str::uuid()->toString(), // Explicitly set UUID
                'first_name' => 'John',
                'last_name' => 'Doe',
                'name' => 'John Doe',
                'gender' => 'Male',
                'phone' => '1234567890',
                'date_of_birth' => '1990-01-01',
                'address' => '123 Main St, Springfield, IL',
                'email_verified_at' => now(),
                'email' => 'customer@example.com',
                'password' => bcrypt('password'),
            ]
        );

        // Seed Blogs
        $blogs = [
            [
                'id' => Str::uuid()->toString(), // Explicitly set UUID
                'user_id' => $user->id,
                'name' => 'Top 10 Healthy Foods',
                'images' => ['https://example.com/healthy1.jpg'],
                'date' => '2025-03-01',
                'post_by' => 'Jane Doe',
                'tag' => 'Healthy',
                'goodpoints' => ['Boosts immunity', 'Improves digestion'],
                'collection_id' => $collections[0]->id,
            ],
            [
                'id' => Str::uuid()->toString(), // Explicitly set UUID
                'user_id' => $user->id,
                'name' => 'Beginner Workout Routine',
                'images' => ['https://example.com/fitness1.jpg'],
                'date' => '2025-03-05',
                'post_by' => 'John Smith',
                'tag' => 'Fitness',
                'goodpoints' => ['Builds strength', 'Increases stamina'],
                'collection_id' => $collections[1]->id,
            ],
            [
                'id' => Str::uuid()->toString(), // Explicitly set UUID
                'user_id' => $user->id,
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
