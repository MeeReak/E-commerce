# Laravel REST API Project Guidelines

This is a RESTful API built with Laravel for managing products and categories. It features CRUD operations, UUID-based keys, global error handling, and automatic data seeding during migration. Follow these guidelines to set up, run, and use the project effectively.

---

## Prerequisites

-   PHP >= 8.1
-   Composer
-   MySQL (or another supported database)
-   Laravel CLI (optional)
-   Postman or cURL (for testing)

---

## Setup Instructions

### 1. Clone the Project:

```bash
git clone https://github.com/MeeReak/E-commerce.git
cd backend-laravel
```

### 2. Install Dependencies:

```bash
composer install
```

### 3. Configure Environment:

#### Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

#### Edit `.env` with your database details:

```ini
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 4. Generate Application Key:

```bash
php artisan key:generate
```

### 5. Database Setup

#### Run Migrations and Seed Data:

This step sets up the database by creating necessary tables for:

-   **Categories**
-   **Products**
-   **Blogs**
-   **Collections**
-   **Orders**
-   **Order Items**

Run the following command to migrate and seed the database:

```bash
php artisan migrate --seed
```

#### Database Structure:

-   **categories**: Stores categories with UUID primary keys.
-   **products**: Stores products with UUID keys and a foreign key to categories.
-   **categories**: Stores categories with UUID primary keys.
-   **products**: Stores products with UUID keys and a foreign key to categories.
-   **blogs**: Stores blog posts with UUID keys and a foreign key to collections.
-   **collections**: Stores collections with UUID primary keys.
-   **orders**: Stores orders with UUID primary keys and a total amount.
-   **order_items**: Stores items within orders, linking to orders and products via UUIDs.

---

## Running the API

### Start the Server:

```bash
php artisan serve
```

API will be available at: `http://127.0.0.1:8000`

---

## API Endpoints

**Base URL:** `/api/v1`

### Products:

-   `GET /products` - List products (paginated)
-   `GET /products/{uuid}` - Show a product
-   `POST /products` - Create a product
-   `PUT /products/{uuid}` - Update a product
-   `DELETE /products/{uuid}` - Delete a product

### Categorys:

-   `GET /categories` - List categories (paginated)
-   `GET /categories/{uuid}` - Show a category
-   `POST /categories` - Create a category
-   `PUT /categories/{uuid}` - Update a category
-   `DELETE /categories/{uuid}` - Delete a category

### Blogs:

-   `GET /blogs` - List blogs (paginated)
-   `GET /blogs/{uuid}` - Show a blogs
-   `POST /blogs` - Create a blogs
-   `PUT /blogs/{uuid}` - Update a blogs
-   `DELETE /blogs/{uuid}` - Delete a blogs

### Collections:

-   `GET /collections` - List collections (paginated)
-   `GET /collections/{uuid}` - Show a collection
-   `POST /collections` - Create a collection
-   `PUT /collections/{uuid}` - Update a collection
-   `DELETE /collections/{uuid}` - Delete a collection

### Orders:

-   `GET /orders` - List orders (paginated)
-   `GET /orders/{uuid}` - Show a order
-   `POST /orders` - Create a order
-   `PUT /orders/{uuid}` - Update a order
-   `DELETE /orders/{uuid}` - Delete a order
-   `POST /orders/{order}/items'` - Add an item to an order
-   `DELETE /orders/{order}/items/{itemId}` Remove an item from an order

---

## Key Features

-   **UUID Keys:** All table are use UUIDs instead of auto-incrementing integers.
-   **Relationships:** One-to-many between categories and products.
    -   One-to-many between `categories` and `products`.
    -   One-to-many between `collections` and `blogs`.
    -   One-to-many between `orders` and `order_items`.
    -   Many-to-one between `order_items` and `products`.
-   **Global Error Handling:** Consistent JSON error responses (e.g., 404, 422, 500).
-   **Seeding:** Initial data is added during migration for `categories`, `products`, `blogs`, `collections` and `orders`.

---

## Testing the API

### Verify Initial Data:

After running `php artisan migrate --seed`, check the database:

```sql
SELECT * FROM categories;
SELECT * FROM products;
SELECT * FROM blog;
SELECT * FROM collections;
SELECT * FROM orders;
```

### Example POST Request:

Use Postman or cURL:

```bash
POST http://127.0.0.1:8000/api/v1/products
Content-Type: application/json

{
    "name": "Carrot",
    "images": ["https://example.com/carrot.jpg"],
    "sku": "CR-001",
    "price": 1.99,
    "quantity": 100,
    "type": "perishable",
    "color": "Orange",
    "goodpoints": ["Fresh", "Organic"],
    "description": "Fresh carrots.",
    "weight": 0.2,
    "category_id": "<uuid-from-categories>"
}
```

### Expected Responses:

-   **Success:** `201 Created` with product data
-   **Error:** JSON with `success: false` and a message (e.g., `422` for validation errors)

---

## Troubleshooting

### Migration Fails:

-   Check `.env` database settings.
-   Reset and retry:

    ```bash
    php artisan migrate:reset && php artisan migrate --seed
    ```

### Data Not Saving:

-   Ensure `category_id` matches an existing UUID.
-   Check logs: `storage/logs/laravel.log`

### 404 Errors:

-   Verify UUIDs in requests match database records.

---

## Notes

-   **Logs:** Debug info is logged to `storage/logs/laravel.log`.
-   **Customization:** Modify `CategoryProductSeeder.php` to change initial data.

Follow these steps to get started, and enjoy building with this API!
