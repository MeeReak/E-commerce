# Laravel REST API Project Guidelines

This is a RESTful API built with Laravel for managing products and categories. It features CRUD operations, UUID-based keys, global error handling, and automatic data seeding during migration. Follow these guidelines to set up, run, and use the project effectively.

---

## Prerequisites

- PHP >= 8.1
- Composer
- MySQL (or another supported database)
- Laravel CLI (optional)
- Postman or cURL (for testing)

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

This creates `categories` and `products` tables and seeds initial data (3 categories, 6 products):

```bash
php artisan migrate --seed
```

#### Database Structure:

- **categories**: Stores categories with UUID primary keys.
- **products**: Stores products with UUID keys and a foreign key to categories.

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
- `GET /products` - List products (paginated)
- `GET /products/{uuid}` - Show a product
- `POST /products` - Create a product
- `PUT /products/{uuid}` - Update a product
- `DELETE /products/{uuid}` - Delete a product

### Categorys:
- `GET /categories` - List categories (paginated)
- `GET /categories/{uuid}` - Show a categories
- `POST /categories` - Create a categories
- `PUT /categories/{uuid}` - Update a categories
- `DELETE /categories/{uuid}` - Delete a categories

---

## Key Features

- **UUID Keys:** Both categories and products use UUIDs instead of auto-incrementing integers.
- **Relationships:** One-to-many between categories and products.
- **Global Error Handling:** Consistent JSON error responses (e.g., 404, 422, 500).
- **Seeding:** Initial data (3 categories, 6 products) is added during migration.

---

## Testing the API

### Verify Initial Data:

After running `php artisan migrate --seed`, check the database:

```sql
SELECT * FROM categories;  -- 3 records
SELECT * FROM products;    -- 6 records
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

- **Success:** `201 Created` with product data
- **Error:** JSON with `success: false` and a message (e.g., `422` for validation errors)

---

## Troubleshooting

### Migration Fails:
- Check `.env` database settings.
- Reset and retry:

  ```bash
  php artisan migrate:reset && php artisan migrate --seed
  ```

### Data Not Saving:
- Ensure `category_id` matches an existing UUID.
- Check logs: `storage/logs/laravel.log`

### 404 Errors:
- Verify UUIDs in requests match database records.

---

## Notes

- **Logs:** Debug info is logged to `storage/logs/laravel.log`.
- **Customization:** Modify `CategoryProductSeeder.php` to change initial data.

Follow these steps to get started, and enjoy building with this API!

