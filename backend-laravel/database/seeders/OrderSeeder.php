<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::firstOrCreate(['email' => 'customer@example.com'], [
            'name' => 'Test Customer',
            'password' => bcrypt('password'),
        ]);
        if (Category::count() === 0) {
            $this->call(CategoryProductSeeder::class);
        }

        $category = Category::where('name', 'Electronics')->first();
        if (! $category) {
            throw new \Exception('Electronics category not found. Run CategoryProductSeeder first.');
        }

        $product = Product::firstOrCreate(['sku' => 'GL-001'], [
            'name' => 'Gaming Laptop',
            'images' => ['https://example.com/img1.jpg'],
            'price' => 1499.99,
            'quantity' => 10,
            'type' => 'non-perishable',
            'color' => 'Black',
            'good_points' => ['High performance'],
            'description' => 'A powerful laptop.',
            'weight' => 2.5,
            'category_id' => $category->id, // Use the UUID from the category
            'user_id' => $user->id,
        ]);

        $order = Order::create([
            'user_id' => $user->id,
            'total' => 1499.99,
            'status' => 'pending',
        ]);

        OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $product->id,
            'quantity' => 1,
            'price' => 1499.99,
        ]);
    }
}
