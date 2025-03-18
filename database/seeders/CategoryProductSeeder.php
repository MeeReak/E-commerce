<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

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
                'id' => Str::uuid()->toString(),
                'name' => 'Electronics',
            ],
            [
                'id' => Str::uuid()->toString(),
                'name' => 'Vegetables',
            ],
            [
                'id' => Str::uuid()->toString(),
                'name' => 'Clothing',
            ],
        ];

        foreach ($categories as $categoryData) {
            $category = Category::create($categoryData);

            // Create Products for each Category
            $products = [
                [
                    'id' => Str::uuid()->toString(),
                    'name' => $category->name === 'Electronics' ? 'Gaming Laptop' : ($category->name === 'Vegetables' ? 'Carrot' : 'T-Shirt'),
                    'images' => ['https://example.com/'.strtolower($category->name).'/img1.jpg'],
                    'sku' => strtoupper(substr($category->name, 0, 2)).'-001',
                    'price' => $category->name === 'Electronics' ? 1499.99 : ($category->name === 'Vegetables' ? 1.99 : 19.99),
                    'quantity' => 10,
                    'discount' => $category->name === 'Electronics' ? 10.50 : null,
                    'type' => $category->name === 'Vegetables' ? 'perishable' : 'non-perishable',
                    'color' => $category->name === 'Vegetables' ? 'Orange' : 'Black',
                    'noted' => 'Brand new',
                    'goodpoints' => ['High quality', 'Durable'],
                    'description' => 'A sample product in '.$category->name,
                    'weight' => $category->name === 'Vegetables' ? 0.2 : 2.5,
                    'category_id' => $category->id,
                ],
                [
                    'id' => Str::uuid()->toString(),
                    'name' => $category->name === 'Electronics' ? 'Smartphone' : ($category->name === 'Vegetables' ? 'Potato' : 'Jeans'),
                    'images' => ['https://example.com/'.strtolower($category->name).'/img2.jpg'],
                    'sku' => strtoupper(substr($category->name, 0, 2)).'-002',
                    'price' => $category->name === 'Electronics' ? 699.99 : ($category->name === 'Vegetables' ? 0.99 : 39.99),
                    'quantity' => 15,
                    'discount' => null,
                    'type' => $category->name === 'Vegetables' ? 'perishable' : 'non-perishable',
                    'color' => $category->name === 'Vegetables' ? 'Brown' : 'Blue',
                    'noted' => null,
                    'goodpoints' => ['Affordable', 'Reliable'],
                    'description' => 'Another sample product in '.$category->name,
                    'weight' => $category->name === 'Vegetables' ? 0.3 : 1.8,
                    'category_id' => $category->id,
                ],
            ];

            foreach ($products as $productData) {
                Product::create($productData);
            }
        }
    }
}
