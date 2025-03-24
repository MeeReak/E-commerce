<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class OrderSeeder extends Seeder
{
    public function run(): void
    {
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

        // Ensure categories exist
        if (Category::count() === 0) {
            $this->call(CategoryProductSeeder::class);
        }

        $category = Category::where('name', 'Electronics')->first();
        if (! $category) {
            throw new \Exception('Electronics category not found. Run CategoryProductSeeder first.');
        }

        // Create or get a product with a UUID
        $product = Product::firstOrCreate(
            ['sku' => 'GL-001'],
            [
                'id' => Str::uuid()->toString(), // Explicitly set UUID
                'name' => 'Gaming Laptop',
                'images' => ['https://example.com/img1.jpg'],
                'price' => 1499.99,
                'quantity' => 10,
                'type' => 'non-perishable',
                'color' => 'Black',
                'goodpoints' => ['High performance'],
                'description' => 'A powerful laptop.',
                'weight' => 2.5,
                'category_id' => $category->id, // Use the UUID from the category
            ]
        );

        // Create an order with a UUID
        $order = Order::create([
            'id' => Str::uuid()->toString(), // Explicitly set UUID
            'user_id' => $user->id,
            'total' => 1499.99,
            'status' => 'pending',
        ]);

        // Create an order item with a UUID
        OrderItem::create([
            'id' => Str::uuid()->toString(), // Explicitly set UUID
            'order_id' => $order->id,
            'product_id' => $product->id,
            'quantity' => 1,
            'price' => 1499.99,
        ]);
    }
}
