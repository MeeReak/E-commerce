<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class CategoryProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Categories
        $categories = [
            [
                'name' => 'Electronics',
            ],
            [
                'name' => 'Vegetables',
            ],
            [
                'name' => 'Clothing',
            ],
        ];

        $user = User::firstOrCreate(['email' => 'customer@example.com'], [
            'name' => 'Test Customer',
            'password' => bcrypt('password'),
        ]);

        foreach ($categories as $categoryData) {
            $category = Category::create($categoryData);

            // Create Products for each Category
            $products = [
                [
                    'name' => $category->name === 'Electronics' ? 'Gaming Laptop' : ($category->name === 'Vegetables' ? 'Carrot' : 'T-Shirt'),
                    'images' => ['https://example.com/'.strtolower($category->name).'/img1.jpg'],
                    'sku' => strtoupper(substr($category->name, 0, 2)).'-001',
                    'price' => $category->name === 'Electronics' ? 1499.99 : ($category->name === 'Vegetables' ? 1.99 : 19.99),
                    'quantity' => 10,
                    'discount' => $category->name === 'Electronics' ? 10.50 : null,
                    'type' => $category->name === 'Vegetables' ? 'perishable' : 'non-perishable',
                    'color' => $category->name === 'Vegetables' ? 'Orange' : 'Black',
                    'noted' => 'Brand new',
                    'good_points' => ['High quality', 'Durable'],
                    'description' => 'A sample product in '.$category->name,
                    'weight' => $category->name === 'Vegetables' ? 0.2 : 2.5,
                    'category_id' => $category->id,
                    'user_id' => $user->id,
                ],
                [
                    'name' => $category->name === 'Electronics' ? 'Smartphone' : ($category->name === 'Vegetables' ? 'Potato' : 'Jeans'),
                    'images' => ['https://example.com/'.strtolower($category->name).'/img2.jpg'],
                    'sku' => strtoupper(substr($category->name, 0, 2)).'-002',
                    'price' => $category->name === 'Electronics' ? 699.99 : ($category->name === 'Vegetables' ? 0.99 : 39.99),
                    'quantity' => 15,
                    'discount' => null,
                    'type' => $category->name === 'Vegetables' ? 'perishable' : 'non-perishable',
                    'color' => $category->name === 'Vegetables' ? 'Brown' : 'Blue',
                    'noted' => null,
                    'good_points' => ['Affordable', 'Reliable'],
                    'description' => 'Another sample product in '.$category->name,
                    'weight' => $category->name === 'Vegetables' ? 0.3 : 1.8,
                    'category_id' => $category->id,
                    'user_id' => $user->id,
                ],
            ];

            foreach ($products as $productData) {
                Product::create($productData);
            }
        }
    }
}
