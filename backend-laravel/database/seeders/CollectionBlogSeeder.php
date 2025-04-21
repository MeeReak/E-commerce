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

        // Create or get a user with a UUID
        $user = User::firstOrCreate(
            [
                'email' => 'customer@example.com', // Unique field to check existence
            ],
            [
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
                'user_id' => $user->id,
                'name' => 'Top 10 Healthy Foods',
                'images' => json_encode(['https://example.com/healthy1.jpg']),
                'description' => json_encode(['https://example.com/healthy1.jpg']),
                'collection_id' => $collections[0]->id,
            ],
            [
                'user_id' => $user->id,
                'name' => 'Beginner Workout Routine',
                'images' => json_encode(['https://example.com/fitness1.jpg']),
                'description' => json_encode(['https://example.com/healthy1.jpg']),
                'collection_id' => $collections[1]->id,
            ],
            [
                'user_id' => $user->id,
                'name' => 'Minimalist Living Tips',
                'images' => json_encode(['https://example.com/lifestyle1.jpg']),
                'description' => json_encode(['https://example.com/healthy1.jpg']),
                'collection_id' => $collections[2]->id,
            ],
        ];

        foreach ($blogs as $blog) {
            Blog::create($blog);
        }
    }
}
