import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../ui/table";
import { Tracker } from "../Tracker";

export const products = [
    {
        id: "5e9cefa0-858d-491a-9c6f-155d05732bec",
        gty: 12,
        name: "Carrot",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Carrot/carrot-1.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Carrot/carrot-1.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Carrot/carrot-3.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Carrot/carrot-4.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Carrot/carrot-2.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 1.5,
        afterDiscount: 1.2,
        discount: 20,
        type: "discount",
        star: 4,
        review: 18,
        stockStatus: "In Stock",
        sku: "K654987C",
        brand: "EcoFresh",
        category: "Vegetable",
        tags: ["Root Vegetables", "Fresh"],
        description:
            "Vibrant and naturally sweet carrots, rich in essential nutrients and ideal for a variety of dishes. Whether eaten raw, roasted, or blended into soups, these carrots provide a delightful taste and numerous health benefits. Known for their high vitamin A content, they support eye health and strengthen the immune system. Carrots are a versatile addition to any meal and are freshly harvested for maximum flavor and nutritional value.",
        keyPoints: [
            "Packed with vitamin A for improved vision.",
            "Naturally sweet and crisp texture.",
            "Perfect for snacking, cooking, or juicing.",
            "Grown using sustainable farming practices."
        ],
        note: "Limited stock available!",
        additionalInfo: {
            weight: "300g",
            color: "Orange",
            type: "Root Vegetable",
            category: "Vegetable",
            stockStatus: "In Stock",
            tags: ["Root Vegetables", "Fresh"]
        },
        comments: [
            {
                id: "d2f54c55-e35c-4cb9-a536-2a428e5f2e00",
                name: "Borey Sok",
                rating: 5,
                date: "1 day ago",
                comment:
                    "The carrots are so sweet and crunchy! My kids love them."
            },
            {
                id: "a320ce43-ea37-4171-bf6c-62caad56151e",
                name: "Sotheary Meas",
                rating: 4,
                date: "2 days ago",
                comment: "Perfect for soups and stir-fries. Would buy again."
            },
            {
                id: "11725c75-9285-4701-b7c4-e4082393d101",
                name: "Kimlang Pen",
                rating: 3,
                date: "3 days ago",
                comment:
                    "Good quality but a few pieces were smaller than expected."
            },
            {
                id: "5445f37f-80b0-4607-ad7c-485c25ec6c72",
                name: "Sokunthea Ra",
                rating: 5,
                date: "1 day ago",
                comment: "Crunchy and sweet! My kids love it raw."
            },
            {
                id: "6fe677c9-d1eb-4cda-99fd-1d03be70c4ac",
                name: "Kong Bo",
                rating: 4,
                date: "2 days ago",
                comment: "Fresh carrots but one piece was a bit soft."
            },
            {
                id: "23b4d20e-bbd5-48e1-8fe8-84ba4c684568",
                name: "Nita Son",
                rating: 5,
                date: "3 days ago",
                comment: "Great quality! Perfect for soups."
            }
        ],
        dateAdded: "2023-07-15T08:45:00Z"
    },
    {
        id: "95fcde71-d4f2-4ec3-bc3c-fb021f91b341",
        gty: 5,
        name: "Cucumber",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cucumber/cucumber-4.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cucumber/cucumber-4.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cucumber/cucumber-1.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cucumber/cucumber-2.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cucumber/cucumber-3.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 1.5,
        afterDiscount: 1.2,
        discount: 1,
        type: "discount",
        star: 5,
        review: 6,
        stockStatus: "In Stock",
        sku: "CU905410",
        brand: "EcoFresh",
        category: "Vegetable",
        tags: ["Fresh", "Crunchy"],
        description:
            "Nutritious and tender broccoli florets, packed with vitamins, minerals, and antioxidants. This superfood is perfect for steaming, roasting, or adding to casseroles and salads. Rich in vitamin C and dietary fiber, broccoli supports overall health and wellness. With its fresh, earthy taste and numerous health benefits, broccoli is a staple for a balanced diet and a healthy lifestyle.",
        keyPoints: [
            "Rich in vitamin C for immune support.",
            "Excellent source of dietary fiber.",
            "Ideal for steaming, roasting, or adding to meals.",
            "Carefully harvested for maximum freshness and flavor."
        ],
        note: "Fast-selling item.",
        additionalInfo: {
            weight: "300g",
            color: "Green",
            type: "Vegetable",
            category: "Vegetable",
            stockStatus: "In Stock",
            tags: ["Fresh", "Crunchy"]
        },
        comments: [
            {
                id: "8427de7e-4061-45eb-b679-6a15816fb814",
                name: "Lyda San",
                rating: 5,
                date: "1 day ago",
                comment: "Super crunchy cucumbers. Great for snacking!"
            },
            {
                id: "b7a66d6f-8fc6-471e-a780-ae9c1693b9c9",
                name: "Ratanak Kong",
                rating: 5,
                date: "2 days ago",
                comment: "So fresh and hydrating. Perfect for summer salads."
            },
            {
                id: "94f782fe-820b-4781-8395-020cecab0931",
                name: "Sina Ron",
                rating: 4,
                date: "3 days ago",
                comment: "Nice quality, but one cucumber was slightly overripe."
            },
            {
                id: "e8caf797-a710-45da-9479-9b3fc3c73290",
                name: "Sothy Mean",
                rating: 5,
                date: "1 day ago",
                comment: "Perfect cucumbers for my pickles. Fresh and crunchy!"
            },
            {
                id: "1dd424f9-1681-49db-8355-c750f238db18",
                name: "Narath Sun",
                rating: 5,
                date: "2 days ago",
                comment: "Loved the freshness. Ideal for juicing."
            },
            {
                id: "0c98df7e-fc33-4899-bec5-0cab82eb2eb0",
                name: "Sophal Chan",
                rating: 5,
                date: "3 days ago",
                comment: "Fresh and affordable. Exactly what I needed."
            }
        ],
        dateAdded: "2023-11-05T19:10:00Z"
    },
    {
        id: "77d047b5-7577-4392-9f5a-dfedf6328af9",
        gty: 8,
        name: "Broccoli",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Broccoli/broccoli-2.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Broccoli/broccoli-2.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Broccoli/broccoli-4.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Broccoli/broccoli-1.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Broccoli/broccoli-3.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 3.0,
        afterDiscount: 2.5,
        discount: 17,
        type: "discount",
        star: 4,
        review: 21,
        stockStatus: "In Stock",
        sku: "K839406B",
        brand: "EcoFresh",
        category: "Vegetable",
        tags: ["Fresh", "Health Food"],
        description:
            "Juicy and flavorful tomatoes, bursting with natural sweetness and tang. Perfect for salads, sauces, and sandwiches, these tomatoes are rich in vitamins A and C, as well as lycopene, a powerful antioxidant. Their vibrant red color and fresh taste make them an essential ingredient in many cuisines worldwide. Harvested at peak ripeness to ensure unmatched flavor and quality.",
        keyPoints: [
            "Rich in vitamins A and C for overall health.",
            "Contains lycopene, a powerful antioxidant.",
            "Perfect for salads, sauces, and cooking.",
            "Harvested fresh for superior taste and quality."
        ],
        note: "Only 3 left in stock!",
        additionalInfo: {
            weight: "350g",
            color: "Green",
            type: "Cruciferous Vegetable",
            category: "Vegetable",
            stockStatus: "In Stock",
            tags: ["Fresh", "Health Food"]
        },
        comments: [
            {
                id: "88a728b1-a196-4560-8be1-0b9b25c38e83",
                name: "Thida Neang",
                rating: 5,
                date: "1 day ago",
                comment:
                    "The broccoli is so fresh and tasty. My family loves it!"
            },
            {
                id: "e66c3b0c-5467-4e09-87ad-3e02221fdfff",
                name: "Makara Yun",
                rating: 4,
                date: "2 days ago",
                comment: "Good quality but slightly smaller than expected."
            },
            {
                id: "55e8ce91-d69d-4563-8d94-b4cbf5d30f5c",
                name: "Sophal Rath",
                rating: 5,
                date: "3 days ago",
                comment: "Really fresh and full of flavor. Great for steaming!"
            },
            {
                id: "1582a97d-d3c3-4e11-ba28-7b92574887fe",
                name: "Malis Tan",
                rating: 5,
                date: "1 day ago",
                comment: "Fresh and perfect for steaming!"
            },
            {
                id: "760514ee-4421-401d-b641-5c49c9c8fc5d",
                name: "Sarun Loun",
                rating: 4,
                date: "2 days ago",
                comment: "Great quality but a bit pricey."
            },
            {
                id: "a60270a7-fb1a-4d56-9a0b-4b64e6c7cd52",
                name: "Dalin Han",
                rating: 5,
                date: "3 days ago",
                comment: "Really fresh and delicious!"
            }
        ],
        dateAdded: "2023-05-12T22:55:00Z"
    },
    {
        id: "172a202f-e3b3-4d62-a622-febecd1d9db1",
        gty: 5,
        name: "Tomato",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Tomato/tomato-3.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Tomato/tomato-3.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Tomato/tomato-1.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Tomato/tomato-2.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Tomato/tomato-4.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 3,
        afterDiscount: 2.5,
        discount: 2,
        type: "hot deal",
        star: 4,
        review: 6,
        stockStatus: "In Stock",
        sku: "A398204F",
        brand: "EcoFresh",
        category: "Vegetable",
        tags: ["Fresh", "Tomato"],
        description:
            "Juicy and flavorful tomatoes, bursting with natural sweetness and tang. Perfect for salads, sauces, and sandwiches, these tomatoes are rich in vitamins A and C, as well as lycopene, a powerful antioxidant. Their vibrant red color and fresh taste make them an essential ingredient in many cuisines worldwide. Harvested at peak ripeness to ensure unmatched flavor and quality.",
        keyPoints: [
            "Rich in vitamins A and C for overall health.",
            "Contains lycopene, a powerful antioxidant.",
            "Perfect for salads, sauces, and cooking.",
            "Harvested fresh for superior taste and quality."
        ],
        note: "Only 10 left in stock.",
        additionalInfo: {
            weight: "250g",
            color: "Red",
            type: "Fruit Vegetable",
            category: "Vegetable",
            stockStatus: "In Stock",
            tags: ["Fresh", "Tomato"]
        },
        comments: [
            {
                id: "8a4aa6c9-c298-4a45-b49a-289cd543f54e",
                name: "Sophea Ton",
                rating: 5,
                date: "1 day ago",
                comment:
                    "These tomatoes are so fresh and juicy! Loved them in my salad."
            },
            {
                id: "b6369c37-2ac0-4930-831b-812f188654f0",
                name: "Rina kaov",
                rating: 4,
                date: "2 days ago",
                comment: "Good quality but some tomatoes were a little soft."
            },
            {
                id: "fb608721-55d4-40e1-b6be-2dc4859420e2",
                name: "Nita San",
                rating: 5,
                date: "3 days ago",
                comment: "Perfectly fresh tomatoes! Will definitely buy again."
            },
            {
                id: "5f84d18d-fce0-4fb4-b7f7-6889bc5344be",
                name: "Rathany Leng",
                rating: 5,
                date: "1 day ago",
                comment: "So fresh! Made my curry extra delicious."
            },
            {
                id: "6fe677c9-d1eb-4cda-99fd-1d03be70c4ac",
                name: "Soben Meas",
                rating: 4,
                date: "2 days ago",
                comment: "Great tomatoes, but arrived a little late."
            },
            {
                id: "5445f37f-80b0-4607-ad7c-485c25ec6c72",
                name: "Monin Yun",
                rating: 5,
                date: "3 days ago",
                comment:
                    "Exactly what I needed for my stew. Fresh and flavorful."
            }
        ],
        dateAdded: "2023-09-28T06:00:00Z"
    },
    {
        id: "7f3aeb15-1d45-4e5d-9f8f-a8c5b7a4d02c",
        gty: 16,
        name: "Beef",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-1.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-1.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-2.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-4.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Beef/beef-3.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 10.0,
        afterDiscount: 8.0,
        discount: 20,
        type: "discount",
        star: 5,
        review: 26,
        stockStatus: "In Stock",
        sku: "M987654F",
        brand: "EcoFresh",
        category: "Meat",
        tags: ["Fresh Meats", "Organic"],
        description:
            "Premium-quality beef, known for its rich flavor and tender texture. Perfect for grilling, roasting, or stewing, this beef is carefully sourced to ensure optimal taste and nutritional value. Packed with protein and essential nutrients, beef is an excellent choice for hearty and satisfying meals. Our beef is expertly cut and prepared to suit a variety of cooking styles and recipes.",
        keyPoints: [
            "Rich in flavor and tender in texture.",
            "Excellent source of protein and iron.",
            "Ideal for grilling, roasting, or stewing.",
            "Expertly cut and prepared for versatility."
        ],
        note: "Limited stock available!",
        additionalInfo: {
            weight: "1kg",
            color: "Red",
            type: "Organic Meat",
            category: "Meats",
            stockStatus: "In Stock",
            tags: ["Fresh Meats", "Organic"]
        },
        comments: [
            {
                id: "a1b2c3d4-5e6f-7g8h-9i10-j11k12l13m14",
                name: "John Doe",
                rating: 5,
                date: "1 day ago",
                comment: "The meat is fresh and tender! Perfect for my BBQ."
            },
            {
                id: "n1o2p3q4-r5s6-t7u8-v9w10-x11y12z13a14",
                name: "Jane Smith",
                rating: 4,
                date: "2 days ago",
                comment: "Great quality meat, though a little pricey."
            },
            {
                id: "b2c3d4e5-f6g7-h8i9-j10k11l12m13n14",
                name: "Emily White",
                rating: 5,
                date: "3 days ago",
                comment: "Loved it! Will definitely buy again."
            },
            {
                id: "c3d4e5f6-g7h8-i9j10-k11l12m13n14o15",
                name: "Michael Brown",
                rating: 4,
                date: "2 days ago",
                comment: "Good meat, but one piece was slightly fatty."
            },
            {
                id: "d4e5f6g7-h8i9-j10k11l12m13n14o15p16",
                name: "Sophia Green",
                rating: 5,
                date: "3 days ago",
                comment: "Amazing quality! Perfect for soups and stir-fries."
            },
            {
                id: "e5f6g7h8-i9j10-k11l12m13n14o15p16q17",
                name: "Peter Johnson",
                rating: 5,
                date: "Today",
                comment:
                    "Absolutely delicious! Used it for my roast dinner, and it turned out perfect."
            }
        ],
        dateAdded: "2024-03-13T11:05:00Z"
    },
    {
        id: "4d2cbe71-ea41-4d8e-89a7-df8928be33b6",
        gty: 1,
        name: "Cabbage",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cabbage/cabbage-1.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cabbage/cabbage-1.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cabbage/cabbage-3.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cabbage/cabbage-2.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Cabbage/cabbage-4.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 2.5,
        afterDiscount: 2.2,
        discount: 1,
        type: "discount",
        star: 5,
        review: 6,
        stockStatus: "In Stock",
        sku: "CA309201",
        brand: "EcoFresh",
        category: "Vegetable",
        tags: ["Healthy", "Organic"],
        description:
            "Fresh, green cabbage with a delightful crunch and mild flavor, perfect for salads, stir-fries, or soups. Rich in fiber and vitamins C and K, cabbage supports digestive health and boosts the immune system. This nutrient-packed vegetable is versatile and adds a refreshing touch to a variety of dishes. Our cabbages are carefully grown and harvested to ensure the highest quality and taste.",
        keyPoints: [
            "High in fiber, promoting a healthy digestive system.",
            "Rich in antioxidants for a strong immune system.",
            "Versatile ingredient for salads, soups, and stir-fries.",
            "Cultivated using eco-friendly farming methods."
        ],
        note: "Fresh stock just arrived.",
        additionalInfo: {
            weight: "500g",
            color: "Green",
            type: "Vegetable",
            category: "Vegetable",
            stockStatus: "In Stock",
            tags: ["Healthy", "Organic"]
        },
        comments: [
            {
                id: "5aec1ef6-d762-44f9-80c1-384e6f48bae1",
                name: "Kanika Son",
                rating: 5,
                date: "1 day ago",
                comment:
                    "Loved the crispiness of this cabbage. Highly recommend!"
            },
            {
                id: "a97304d4-58ff-4918-9f88-ad080b53446b",
                name: "Nary L.",
                rating: 4,
                date: "2 days ago",
                comment:
                    "Fresh and great quality, though slightly smaller than expected."
            },
            {
                id: "39e8824a-6e19-41e4-b6ce-82469345bd2a",
                name: "Chanroeun K.",
                rating: 5,
                date: "3 days ago",
                comment: "This cabbage made my soup so flavorful!"
            },
            {
                id: "e1232d6c-5ae0-432f-aa37-168bae30ff84",
                name: "Sreyneang Phat",
                rating: 5,
                date: "1 day ago",
                comment: "Perfectly fresh. Great for making coleslaw."
            },
            {
                id: "aab31ff6-cd22-43a2-87ee-20b1e76a3569",
                name: "Pich Nun",
                rating: 4,
                date: "2 days ago",
                comment: "Tasty and crisp, but delivery was slightly late."
            },
            {
                id: "0ed25191-1789-4f06-80b1-217038c73780",
                name: "Sophea Chan",
                rating: 5,
                date: "3 days ago",
                comment: "Freshest cabbage I've bought in a while. Amazing!"
            }
        ],
        dateAdded: "2024-01-20T14:30:00Z"
    },
    {
        id: "4d7d8bf0-a987-456b-9bfa-3c156f0eabcf",
        gty: 10,
        name: "Pork",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Pork/pork-3.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Pork/pork-3.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Pork/pork-1.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Pork/pork-2.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Pork/pork-4.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 7.5,
        afterDiscount: 6.0,
        discount: 20,
        type: "hot deal",
        star: 5,
        review: 25,
        stockStatus: "In Stock",
        sku: "P54321X",
        brand: "EcoFresh",
        category: "Meat",
        tags: ["Protein", "Fresh Meat"],
        description:
            "Succulent and flavorful pork, a versatile choice for a variety of dishes. From stir-fries to roasts, our pork is carefully selected to ensure tenderness and delicious taste. Packed with essential nutrients, pork provides high-quality protein and is a staple in many cuisines. Whether you prefer lean cuts or juicy portions, our pork caters to your cooking needs.",
        keyPoints: [
            "Tender and flavorful, perfect for versatile cooking.",
            "High-quality source of protein and essential nutrients.",
            "Suitable for stir-fries, roasts, and barbecues.",
            "Carefully selected and prepared for quality assurance."
        ],
        note: "Limited stock available!",
        additionalInfo: {
            weight: "500g",
            color: "Pink",
            type: "Fresh Meat",
            category: "Meat",
            stockStatus: "In Stock",
            tags: ["Protein", "Fresh Meat"]
        },
        comments: [
            {
                id: "7c9d2ef1-f65a-4b6f-975d-8b1f1d19c543",
                name: "Chanda Sok",
                rating: 5,
                date: "1 day ago",
                comment: "The pork was fresh and tender. Great quality!"
            },
            {
                id: "1b2c3d4f-a7b8-9876-cdef-2a34567bd890",
                name: "Veasna Meas",
                rating: 4,
                date: "2 days ago",
                comment: "Good taste but slightly fatty for my preference."
            },
            {
                id: "2345abcd-6789-4321-9876-abcde123456f",
                name: "Sovanna Pen",
                rating: 5,
                date: "3 days ago",
                comment: "Perfect for my stew recipe. Will buy again!"
            },
            {
                id: "1234efgh-5678-ijkl-9012-mnopqrstuvwx",
                name: "Narith Bo",
                rating: 4,
                date: "2 days ago",
                comment: "Good quality but the packaging could be improved."
            },
            {
                id: "4567ijkl-8901-mnop-2345-qrsabcdetuvw",
                name: "Neary Son",
                rating: 5,
                date: "3 days ago",
                comment: "Great quality pork. Excellent for grilling!"
            },
            {
                id: "7890abcd-1234-5678-9101-xyz987654321",
                name: "Pich Sovath",
                rating: 5,
                date: "1 day ago",
                comment:
                    "The pork was juicy and flavorful. Perfect for making stir-fry. Highly recommend!"
            }
        ],
        dateAdded: "2023-10-03T13:20:00Z"
    },
    {
        id: "7a9cfad0-858d-491a-9c6f-155d05732bec",
        gty: 5,
        name: "Chicken",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Chicken/chicken-1.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Chicken/chicken-1.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Chicken/chicken-4.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Chicken/chicken-3.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Chicken/chicken-2.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 6.5,
        afterDiscount: 5.2,
        discount: 20,
        type: "best seller",
        star: 4,
        review: 25,
        stockStatus: "In Stock",
        sku: "CHICK12345",
        brand: "EcoFresh",
        category: "meat",
        tags: ["Chicken", "Fresh Meat"],
        description:
            "Fresh and tender chicken, ideal for a wide range of recipes. Packed with lean protein and essential nutrients, chicken is a healthy and versatile ingredient for everyday meals. Whether grilled, roasted, or fried, our chicken offers exceptional taste and texture. Sourced and prepared with care, it’s a favorite choice for home-cooked and gourmet dishes.",
        keyPoints: [
            "Lean and tender, packed with protein.",
            "Perfect for grilling, roasting, or frying.",
            "A versatile choice for healthy meals.",
            "Sourced with care for exceptional quality."
        ],
        note: "Limited stock available!",
        additionalInfo: {
            weight: "1.2kg",
            color: "White",
            type: "Poultry",
            category: "Poultry",
            stockStatus: "In Stock",
            tags: ["Chicken", "Fresh Meat"]
        },
        comments: [
            {
                id: "d2f54c55-e35c-4cb9-a536-2a428e5f2e00",
                name: "Borey Sok",
                rating: 5,
                date: "1 day ago",
                comment:
                    "The chicken is so tender and juicy! Grilled it and it turned out amazing."
            },
            {
                id: "a320ce43-ea37-4171-bf6c-62caad56151e",
                name: "Sotheary Meas",
                rating: 4,
                date: "2 days ago",
                comment:
                    "Perfect for curries and soups. Will definitely repurchase."
            },
            {
                id: "11725c75-9285-4701-b7c4-e4082393d101",
                name: "Kimlang Pen",
                rating: 4,
                date: "3 days ago",
                comment: "Great quality, but some pieces were slightly fatty."
            },
            {
                id: "5445f37f-80b0-4607-ad7c-485c25ec6c72",
                name: "Sokunthea Ra",
                rating: 5,
                date: "1 day ago",
                comment: "Absolutely delicious! My family loved it."
            },
            {
                id: "6fe677c9-d1eb-4cda-99fd-1d03be70c4ac",
                name: "Kong Bo",
                rating: 4,
                date: "2 days ago",
                comment: "Fresh and juicy, but one piece was slightly tough."
            },
            {
                id: "23b4d20e-bbd5-48e1-8fe8-84ba4c684568",
                name: "Nita Son",
                rating: 5,
                date: "3 days ago",
                comment:
                    "High quality! Cooked a roast and it turned out perfectly."
            }
        ],
        dateAdded: "2024-06-17T16:25:00Z"
    },
    {
        id: "2f9dce10-1234-491b-9a12-155d05732bef",
        gty: 3,
        name: "Salmon",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Fish/salmon-2.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Fish/salmon-2.jpg",
                id: 1,
                alt: "Fish Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Fish/salmon-3.jpg",
                id: 2,
                alt: "Fish Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Fish/salmon-4.jpg",
                id: 3,
                alt: "Fish Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Fish/salmon-1.jpg",
                id: 4,
                alt: "Fish Image 4"
            }
        ],
        price: 5.5,
        afterDiscount: 4.8,
        discount: 13,
        type: "best seller",
        star: 4,
        review: 25,
        stockStatus: "In Stock",
        sku: "F987654C",
        brand: "AquaFresh",
        category: "Fish",
        tags: ["Fresh Fish", "Freshwater fish "],
        description:
            "Channa Striata, also known as striped snakehead fish, is a prized ingredient in traditional and modern cuisines. Known for its firm, flavorful meat, this freshwater fish is rich in protein and omega-3 fatty acids. It is commonly used in soups, curries, or steamed dishes, offering a delicious and healthy meal option. Sustainably sourced and freshly prepared, Channa Striata is a perfect addition to your table.",
        keyPoints: [
            "Firm and flavorful meat, ideal for various dishes.",
            "Rich in protein and omega-3 fatty acids.",
            "Perfect for soups, curries, and steamed recipes.",
            "Freshly sourced for quality and taste."
        ],
        note: "Limited stock available! Ensure freshness upon delivery.",
        additionalInfo: {
            weight: "1kg",
            color: "Silver-Gray",
            type: "Freshwater Fish",
            category: "Fish",
            stockStatus: "In Stock",
            tags: ["Fresh Fish", "Freshwater Fish"]
        },
        comments: [
            {
                id: "f2a54d55-b45c-4cb9-a456-3a428e5f4e00",
                name: "Sela Roeun",
                rating: 5,
                date: "1 day ago",
                comment:
                    "The fish was very fresh and flavorful. Perfect for our family BBQ."
            },
            {
                id: "b321ce33-db47-4271-bc6c-73caad66141f",
                name: "Chanthou Sorn",
                rating: 4,
                date: "2 days ago",
                comment:
                    "Great quality, though one piece was slightly smaller than expected."
            },
            {
                id: "12725c85-a284-4702-b7d4-e4082393d202",
                name: "Sokhom Nhim",
                rating: 5,
                date: "3 days ago",
                comment: "Delicious and fresh! Will order again."
            },
            {
                id: "6555f37e-80c1-4607-bd8c-495c25ec6b73",
                name: "Somphors Taing",
                rating: 4,
                date: "2 days ago",
                comment: "Very fresh fish but took slightly longer to deliver."
            },
            {
                id: "7fe877c9-d1cb-4cda-99ed-2d03ce80c4ad",
                name: "Kosal Roeung",
                rating: 5,
                date: "1 day ago",
                comment: "Fantastic for soups. My family loved it!"
            },
            {
                id: "24b5e20d-bcd5-48f1-8ff8-95ba5c685679",
                name: "Sina Chan",
                rating: 5,
                date: "3 days ago",
                comment: "Fresh and clean. Perfect for frying."
            }
        ],
        dateAdded: "2023-04-25T18:40:00Z"
    },
    {
        id: "9d2a4eaf-9e1b-4f9d-a1cf-7f2a3d3e9af1",
        gty: 6,
        name: "Duck",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Duck/duck-1.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Duck/duck-1.jpg",
                id: 1,
                alt: "Duck Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Duck/duck-3.jpg",
                id: 2,
                alt: "Duck Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Duck/duck-2.jpg",
                id: 3,
                alt: "Duck Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Duck/duck-4.jpg",
                id: 4,
                alt: "Duck Image 4"
            }
        ],
        price: 9.99,
        afterDiscount: 7.99,
        discount: 20,
        type: "best seller",
        star: 5,
        review: 25,
        stockStatus: "In Stock",
        sku: "D12345C",
        brand: "EcoFresh",
        category: "Meat",
        tags: ["Poultry", "Fresh"],
        description:
            "Fresh and tender chicken, ideal for a wide range of recipes. Packed with lean protein and essential nutrients, chicken is a healthy and versatile ingredient for everyday meals. Whether grilled, roasted, or fried, our chicken offers exceptional taste and texture. Sourced and prepared with care, it’s a favorite choice for home-cooked and gourmet dishes.",
        keyPoints: [
            "Lean and tender, packed with protein.",
            "Perfect for grilling, roasting, or frying.",
            "A versatile choice for healthy meals.",
            "Sourced with care for exceptional quality."
        ],
        note: "Limited stock available!",
        additionalInfo: {
            weight: "1.5kg",
            color: "Pinkish",
            type: "Poultry",
            category: "Meat",
            stockStatus: "In Stock",
            tags: ["Poultry", "Fresh"]
        },
        comments: [
            {
                id: "d1f7e455-6b3d-43cb-946f-ef2e47240c20",
                name: "Sophorn Kim",
                rating: 5,
                date: "1 day ago",
                comment:
                    "The duck was tender and flavorful, great for my dinner party."
            },
            {
                id: "f342cce3-4db8-47fb-a8ed-34de77c1c85f",
                name: "Kosal Srun",
                rating: 4,
                date: "2 days ago",
                comment:
                    "Fresh and delicious, but slightly smaller than expected."
            },
            {
                id: "c4d2e9c1-a4ff-4f92-a0e8-b547da623514",
                name: "Pisey Chhay",
                rating: 5,
                date: "3 days ago",
                comment: "Excellent quality! Will order again."
            },
            {
                id: "a5d4f6b7-e8f9-4c6a-8d2a-4db8ff0b23ef",
                name: "Vannary Yim",
                rating: 5,
                date: "4 days ago",
                comment:
                    "This duck was incredibly juicy and flavorful! Perfect for my family dinner."
            },
            {
                id: "c8b3a84b-d8c9-42ba-9b63-9f2cd7b89216",
                name: "Rey Sokha",
                rating: 4,
                date: "5 days ago",
                comment:
                    "Good quality duck, cooked it with herbs. Very tasty but a little fatty."
            },
            {
                id: "1b98b4f3-755a-49c2-8ff3-f079383d0c3c",
                name: "Mongkhon Chan",
                rating: 5,
                date: "6 days ago",
                comment:
                    "Fresh and flavorful duck! Perfect for our family gathering."
            }
        ],
        dateAdded: "2024-02-09T09:15:00Z"
    },
    {
        id: "a1189815-92af-45e1-b567-b148b920a7c9",
        gty: 65,
        name: "Apple",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Apple/white-apple-1.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Apple/white-apple-1.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Apple/white-apple-3.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Apple/white-apple-4.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Apple/white-apple-2.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 2.5,
        afterDiscount: 2.0,
        discount: 20,
        type: "top rate",
        star: 4,
        review: 24,
        stockStatus: "In Stock",
        sku: "K654987A",
        brand: "EcoFresh",
        category: "Fruit",
        tags: ["Fresh", "Organic"],
        description:
            "Crisp and sweet apples, perfect for snacking, baking, or juicing. Rich in fiber and essential nutrients, apples are a delicious way to support heart health and maintain energy throughout the day. With their vibrant color and juicy taste, apples are a versatile and timeless fruit enjoyed worldwide. These apples are handpicked to ensure the highest quality and freshness.",
        keyPoints: [
            "High in fiber for improved digestion.",
            "Rich in antioxidants to promote heart health.",
            "Perfect for snacking, cooking, or juicing.",
            "Carefully handpicked for premium quality."
        ],
        note: "Limited stock available!",
        additionalInfo: {
            weight: "500g",
            color: "Red",
            type: "Fruit",
            category: "Fruit",
            stockStatus: "In Stock",
            tags: ["Fresh", "Organic"]
        },
        comments: [
            {
                id: "d118d193-57e0-43ed-9ebc-dec400c68f17",
                name: "Ming Narith",
                rating: 5,
                date: "1 day ago",
                comment: "Crisp and sweet apples, absolutely loved them!"
            },
            {
                id: "7f3d6c13-0896-4cc1-a545-7c31fc2fd63a",
                name: "Kimleng Khoeun",
                rating: 4,
                date: "Sopheak Chea",
                comment: "Fresh and tasty, but one was slightly bruised."
            },
            {
                id: "da9aaef1-ce19-40fc-8bdc-c9615a58d040",
                name: "Lida Leng",
                rating: 5,
                date: "3 days ago",
                comment: "Great apples! Perfect for making pies."
            },
            {
                id: "18e6dc41-5b1c-434c-9629-d1f54fc96aa4",
                name: "Tannh Vannak",
                rating: 5,
                date: "4 days ago",
                comment: "So juicy and fresh! My family enjoyed these."
            },
            {
                id: "2c141b88-49b8-4a5d-b947-fe935a4876dd",
                name: "Chhim Vannara",
                rating: 4,
                date: "5 days ago",
                comment: "Good quality apples, but a bit pricey."
            },
            {
                id: "1247e56a-da37-48ba-af50-ea4a4accc21a",
                name: "Vann Phan",
                rating: 5,
                date: "6 days ago",
                comment: "Best apples I've had in a while, very crunchy!"
            }
        ],
        dateAdded: "2023-08-30T12:30:00Z"
    },
    {
        id: "ea7b04c1-a26a-44a2-8dc1-f213abb67ee4",
        gty: 2,
        name: "Banana",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Banana/banana-2.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Banana/banana-2.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Banana/banana-4.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Banana/banana-3.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Banana/banana-2.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 1.5,
        afterDiscount: 1.2,
        discount: 20,
        type: "top rate",
        star: 4,
        review: 30,
        stockStatus: "In Stock",
        sku: "K654987B",
        brand: "EcoFresh",
        category: "Fruit",
        tags: ["Fresh", "Organic"],
        description:
            "Creamy and naturally sweet bananas, a perfect snack to fuel your day. Packed with potassium and vitamins, bananas support muscle health and boost energy levels. Whether eaten on their own, blended into smoothies, or used in baking, bananas are a versatile and nutritious choice. Harvested at the peak of ripeness, they bring natural sweetness to every bite.",
        keyPoints: [
            "Rich in potassium for healthy muscles and nerves.",
            "Natural source of energy and essential nutrients.",
            "Ideal for snacking, smoothies, or baking.",
            "Harvested at the peak of ripeness for best flavor."
        ],
        note: "Limited stock available!",
        additionalInfo: {
            weight: "500g",
            color: "Yellow",
            type: "Fruit",
            category: "Fruit",
            stockStatus: "In Stock",
            tags: ["Fresh", "Organic"]
        },
        comments: [
            {
                id: "32493867-6ee4-479f-90a2-b079ee1567ba",
                name: "Dara Sok",
                rating: 5,
                date: "2 days ago",
                comment: "Super fresh and sweet bananas! Perfect for breakfast."
            },
            {
                id: "26472713-5693-4399-9bdf-43fdb3058598",
                name: "Phalla Kim",
                rating: 4,
                date: "3 days ago",
                comment: "Good quality, but a couple were slightly bruised."
            },
            {
                id: "b341a0b9f3-3040-4473-8f72-82ca83dc5f60",
                name: "Sothea Rith",
                rating: 5,
                date: "1 day ago",
                comment: "Perfect ripeness, great for smoothies!"
            },
            {
                id: "f473fcc4-1cfc-4937-b047-3347c44e8b51",
                name: "Phan Sokheng",
                rating: 5,
                date: "4 days ago",
                comment: "My kids loved these bananas. Will buy again."
            },
            {
                id: "48a9c492-9845-408a-a441-8f2743b2d628",
                name: "Bun Thavy",
                rating: 4,
                date: "5 days ago",
                comment: "Fresh and tasty, but slightly smaller than expected."
            },
            {
                id: "ab108fa9-6b68-41cf-b0e0-70feafd8760b",
                name: "Nita Son",
                rating: 5,
                date: "6 days ago",
                comment: "These bananas were perfect for baking banana bread!"
            }
        ],
        dateAdded: "2023-12-01T10:05:00Z"
    },
    {
        id: "229272df-6aef-44df-9e08-faa2d060b4ca",
        gty: 33,
        name: "Orange",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Orange/white-orange-2.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Orange/white-orange-2.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Orange/white-orange-4.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Orange/white-orange-3.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Orange/white-orange-1.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 3.0,
        afterDiscount: 2.4,
        discount: 20,
        type: "top rate",
        star: 5,
        review: 40,
        stockStatus: "In Stock",
        sku: "K654987O",
        brand: "EcoFresh",
        category: "Fruit",
        tags: ["Fresh", "Citrus"],
        description:
            "Bright and tangy oranges, filled with refreshing juice and a burst of citrus flavor. A rich source of vitamin C, oranges are perfect for boosting immunity and adding zest to your day. Enjoy them fresh, as juice, or in cooking and baking. These oranges are carefully selected to bring you the best combination of taste, nutrition, and juiciness.",
        keyPoints: [
            "Excellent source of vitamin C for immunity support.",
            "Juicy and tangy, perfect for eating fresh or juicing.",
            "Adds flavor to cooking and baking recipes.",
            "Handpicked to ensure premium quality."
        ],
        note: "Perfect for immune boosting!",
        additionalInfo: {
            weight: "400g",
            color: "Orange",
            type: "Fruit",
            category: "Fruit",
            stockStatus: "In Stock",
            tags: ["Fresh", "Citrus"]
        },
        comments: [
            {
                id: "0cad7597-6c8a-416d-af27-b510638e8191",
                name: "Vicheka Chhin",
                rating: 5,
                date: "1 day ago",
                comment: "So juicy and perfect for juicing!"
            },
            {
                id: "4feba43b-10e4-4b6d-baea-66642338c1d0",
                name: "Kalyan Tith",
                rating: 4,
                date: "3 days ago",
                comment: "Fresh oranges but a bit too tangy for my taste."
            },
            {
                id: "09b4241b-c611-4add-9d92-40d4fe794707",
                name: "Rattanak Chhin",
                rating: 5,
                date: "2 days ago",
                comment: "Best oranges I've had this season!"
            },
            {
                id: "efc435d1-708b-45d4-ac4d-fc0ca2486d00",
                name: "Sovath Chao",
                rating: 4,
                date: "4 days ago",
                comment: "Good quality but one orange was slightly overripe."
            },
            {
                id: "c5b4246fb5-e026-4b3a-91c9-3453a747f417",
                name: "Borey Sok",
                rating: 5,
                date: "5 days ago",
                comment: "Absolutely love these oranges, fresh and flavorful!"
            },
            {
                id: "31c6b738-a68f-467f-80dd-94ccba588d7f",
                name: "Sokunthea Ra",
                rating: 4,
                date: "3 days ago",
                comment: "Great for making marmalade."
            }
        ],
        dateAdded: "2024-07-22T07:50:00Z"
    },
    {
        id: "604a772f-a512-41d8-835c-8a1eb1687f26",
        gty: 4,
        name: "Mango",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Mango/white-mango-1.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Mango/white-mango-1.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Mango/white-mango-4.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Mango/white-mango-2.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Mango/white-mango-3.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 4.0,
        afterDiscount: 3.2,
        discount: 20,
        type: "hot deal",
        star: 4,
        review: 50,
        stockStatus: "Limited Stock",
        sku: "K654987M",
        brand: "EcoFresh",
        category: "Fruit",
        tags: ["Exotic", "Fresh"],
        description:
            "Luscious and juicy mangoes, bursting with tropical sweetness and flavor. Known as the 'king of fruits,' mangoes are rich in vitamins A and C, as well as antioxidants that support skin and immune health. Perfect for enjoying fresh, in smoothies, or as a dessert ingredient, these mangoes bring a taste of the tropics to your table. Carefully selected to ensure maximum flavor and juiciness.",
        keyPoints: [
            "Packed with vitamins A and C for healthy skin and immunity.",
            "Sweet and juicy, perfect for fresh eating or cooking.",
            "Versatile ingredient for smoothies and desserts.",
            "Harvested for premium flavor and freshness."
        ],
        note: "Seasonal fruit! Grab it now.",
        additionalInfo: {
            weight: "500g",
            color: "Yellow",
            type: "Fruit",
            category: "Fruit",
            stockStatus: "Limited Stock",
            tags: ["Exotic", "Fresh"]
        },
        comments: [
            {
                id: "5f2776fa-c32a-4fc1-985b-f72c409c6f49",
                name: "Veasna Kim",
                rating: 5,
                date: "2 days ago",
                comment: "The mangoes were so sweet and juicy! Loved them."
            },
            {
                id: "2bebc0ee-f28f-4169-bb2c-e3c1c972e420",
                name: "Ravy Phan",
                rating: 5,
                date: "3 days ago",
                comment: "Best mangoes I've had in a long time!"
            },
            {
                id: "df054efc-55d6-4a91-96c5-1981bab6a6d9",
                name: "Samnang Chea",
                rating: 4,
                date: "1 day ago",
                comment: "Fresh and sweet, but one was a bit under ripe."
            },
            {
                id: "6a978373-383f-40a7-873b-9fde3d3cfe21",
                name: "Thida Rith",
                rating: 5,
                date: "4 days ago",
                comment: "Perfect mangoes for smoothies. So good!"
            },
            {
                id: "1be7ad67-dc04-418b-b3d3-980a8f072568",
                name: "Vannara Neth",
                rating: 5,
                date: "6 days ago",
                comment: "My kids loved these mangoes, will buy again."
            },
            {
                id: "a01ca03b-354a-48fc-af64-47f179db54b4",
                name: "Sreymom Em",
                rating: 4,
                date: "5 days ago",
                comment: "Delicious, but a bit pricey."
            }
        ],
        dateAdded: "2023-06-14T03:25:00Z"
    },
    {
        id: "dd900e16-19f5-4348-b996-2a84676095cc",
        gty: 6,
        name: "Strawberry",
        src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Strawberry/white-strawberry-4.jpg",
        images: [
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Strawberry/white-strawberry-4.jpg",
                id: 1,
                alt: "Image 1"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Strawberry/white-strawberry-1.jpg",
                id: 2,
                alt: "Image 2"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Strawberry/white-strawberry-2.jpg",
                id: 3,
                alt: "Image 3"
            },
            {
                src: "https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Strawberry/white-strawberry-3.jpg",
                id: 4,
                alt: "Image 4"
            }
        ],
        price: 5.0,
        afterDiscount: 4.0,
        discount: 20,
        type: "discount",
        star: 4,
        review: 35,
        stockStatus: "Out Stock",
        sku: "K654987S",
        brand: "EcoFresh",
        category: "Fruit",
        tags: ["Fresh", "Berries"],
        description:
            "Plump and fragrant strawberries, bursting with sweet and tangy flavor. Packed with vitamin C and antioxidants, strawberries promote healthy skin and overall wellness. Enjoy them fresh, in desserts, or blended into smoothies for a refreshing treat. Grown with care, these strawberries are a delightful addition to any meal or snack.",
        keyPoints: [
            "Rich in vitamin C and antioxidants for healthy skin.",
            "Sweet and tangy flavor, perfect for snacking or desserts.",
            "Versatile ingredient for smoothies, jams, and salads.",
            "Grown and harvested with care for the freshest taste."
        ],
        note: "Perfect for a sweet treat!",
        additionalInfo: {
            weight: "250g",
            color: "Red",
            type: "Fruit",
            category: "Fruit",
            stockStatus: "In Stock",
            tags: ["Fresh", "Berries"]
        },
        comments: [
            {
                id: "db8a8a4d-0792-4f94-b560-f9277b8aec36",
                name: "Sokha Chan",
                rating: 5,
                date: "1 day ago",
                comment: "The strawberries were so fresh and delicious!"
            },
            {
                id: "2979d795-86f0-41b3-9c6c-52f6a3bb7456",
                name: "Dara Sam",
                rating: 4,
                date: "2 days ago",
                comment: "Great flavor but some were smaller than expected."
            },
            {
                id: "98989b3e-aea1-4569-864b-6ec6d9f021e2",
                name: "Chanda Heng",
                rating: 5,
                date: "3 days ago",
                comment: "Amazing strawberries! Perfect for desserts."
            },
            {
                id: "9f15c14e-cfae-44f7-bc23-20b02e0425ce",
                name: "Srey Vathana",
                rating: 4,
                date: "4 days ago",
                comment: "Sweet and fresh, but slightly expensive."
            },
            {
                id: "5184ff08-0623-4d87-84b5-76093677eb94",
                name: "Sovathara Meas",
                rating: 5,
                date: "5 days ago",
                comment: "Best strawberries I’ve bought this season."
            },
            {
                id: "a3b0d612-cb01-4c39-a69b-bff3c5669a83",
                name: "Kimsan Thach",
                rating: 5,
                date: "6 days ago",
                comment: "Perfectly fresh and juicy, my family loved them!"
            }
        ],
        dateAdded: "2023-10-19T17:35:00Z"
    }
];

export const OrderDetail = () => {
    const id = "INV003";

    const process = [1, 2];

    const total = products.reduce((acc, product) => {
        return acc + product.price * product.gty;
    }, 0);

    const invoices = [
        {
            invoice: "INV001",
            totalAmount: "Processing"
        },
        {
            invoice: "INV002",
            totalAmount: "on the way"
        },
        {
            invoice: "INV003",
            totalAmount: "Completed"
        },
        {
            invoice: "INV004",
            totalAmount: "Completed"
        },
        {
            invoice: "INV005",
            totalAmount: "Completed"
        },
        {
            invoice: "INV006",
            totalAmount: "Completed"
        }
    ];

    const status = invoices.find((invoice) => invoice.invoice === id);

    return (
        <div className=" ">
            <div className=" w-[1070px] border rounded-md border-gray-200 ">
                {/* address */}
                <div className=" flex py-7 w-full gap-x-5 justify-center">
                    <div className="flex">
                        <div>
                            <p className="text-gray-400 text-[14px] font-medium leading-[14px] tracking-[0.42px] uppercase py-[18px] pl-6 border border-gray-200 rounded-tl-md border-r-0">
                                Billing Address
                            </p>
                            <div className=" border border-t-[0px] border-gray-200 rounded-bl-md pl-6 pr-6 border-r-0">
                                <div>
                                    <p className="text-gray-900 text-[16px] font-normal leading-[24px] font-poppins pt-4">
                                        Dainne Russell
                                    </p>
                                    <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins pt-2 max-w-[282px]">
                                        4140 Parker Rd. Allentown, New Mexico
                                        31134
                                    </p>
                                </div>
                                <div className="mt-9 mb-3">
                                    <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins pb-1">
                                        Email
                                    </p>
                                    <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                        dainne.ressell@gmail.com
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins pb-1">
                                        Phone
                                    </p>
                                    <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                        (671) 555-0110
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-400 text-[14px] font-medium leading-[14px] tracking-[0.42px] uppercase py-[18px] pl-6 border border-gray-200 rounded-tr-md">
                                Shipping Address
                            </p>
                            <div className=" border border-t-[0px]  border-gray-200 rounded-br-md pl-6 pr-6">
                                <div>
                                    <p className="text-gray-900 text-[16px] font-normal leading-[24px] font-poppins pt-4">
                                        Dainne Russell
                                    </p>
                                    <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins pt-2 max-w-[282px]">
                                        4140 Parker Rd. Allentown, New Mexico
                                        31134
                                    </p>
                                </div>
                                <div className="mt-9 mb-3">
                                    <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins pb-1">
                                        Email
                                    </p>
                                    <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                        dainne.ressell@gmail.com
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins pb-1">
                                        Phone
                                    </p>
                                    <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                        (671) 555-0110
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border border-gray-200 rounded-md rounded-b-none">
                            <div className="p-6 flex ">
                                <div className="pr-10 space-y-[6px] border-r">
                                    <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins">
                                        Order ID:
                                    </p>
                                    <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                        #4152
                                    </p>
                                </div>
                                <div className="pl-5 pr-6 space-y-[6px]">
                                    <p className="text-gray-400 text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase font-poppins">
                                        Payment Method:
                                    </p>
                                    <p className="text-gray-900 text-[14px] font-normal leading-[21px] font-poppins">
                                        Paypal
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-[11px] p-5 border border-t-0 border-gray-200 rounded-md rounded-t-none">
                            <div className=" flex justify-between pb-3 border-b border-gray-200">
                                <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                                    Subtotal:
                                </p>
                                <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                                    ${total.toFixed(2)}
                                </p>
                            </div>
                            <div className=" flex justify-between py-3 border-b border-gray-200">
                                <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                                    Discount
                                </p>
                                <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                                    10%
                                </p>
                            </div>
                            <div className=" flex justify-between py-3 border-b border-gray-200">
                                <p className="text-gray-600 text-[14px] font-normal leading-[21px] font-poppins">
                                    Shipping
                                </p>
                                <p className="text-gray-900 text-[14px] font-medium leading-[21px] font-poppins">
                                    Free
                                </p>
                            </div>
                            <div className=" flex justify-between pt-3">
                                <p className="text-gray-900 text-[18px] font-normal leading-[27px] font-poppins">
                                    Total
                                </p>
                                <p className="text-[#2C742F] text-[18px] font-semibold leading-[27px] font-poppins">
                                    ${(total - total * 0.1).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full gap-x-8 justify-center relative pt-5">
                    <Tracker status={status?.totalAmount} />
                    <div className=" absolute flex justify-between w-[97%] top-1">
                        <div className=" flex flex-col justify-center items-center">
                            <div className="mb-2 size-10 bg-black rounded-full flex items-center justify-center">
                                <CheckIcon className=" text-white" />
                            </div>
                            <p
                                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                                    process.includes(1)
                                        ? "text-green-500"
                                        : "text-white"
                                }`}
                            >
                                Order received
                            </p>
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <div className="mb-2 size-10 bg-black rounded-full flex items-center justify-center">
                                {status?.totalAmount.toLocaleLowerCase() ===
                                    "processing" ||
                                status?.totalAmount.toLocaleLowerCase() ===
                                    "on the way" ||
                                status?.totalAmount.toLocaleLowerCase() ===
                                    "completed" ? (
                                    <CheckIcon className=" text-white" />
                                ) : (
                                    2
                                )}
                            </div>
                            <p
                                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "processing" ||
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "on the way" ||
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "completed"
                                        ? "text-green-500"
                                        : "text-white"
                                }`}
                            >
                                Processing
                            </p>
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <div
                                className={`mb-2 size-10  rounded-full flex items-center justify-center ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "on the way" ||
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "completed"
                                        ? "bg-black"
                                        : " bg-white border-2 border-dashed border-[#00b207] text-[#00b207]"
                                }`}
                            >
                                {status?.totalAmount.toLocaleLowerCase() ===
                                    "on the way" ||
                                status?.totalAmount.toLocaleLowerCase() ===
                                    "completed" ? (
                                    <CheckIcon className=" text-white" />
                                ) : (
                                    3
                                )}
                            </div>
                            <p
                                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "on the way" ||
                                    status?.totalAmount.toLocaleLowerCase() ===
                                        "completed"
                                        ? "text-green-500"
                                        : "text-gray-800"
                                }`}
                            >
                                On the way
                            </p>
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <div
                                className={`mb-2 size-10  rounded-full flex items-center justify-center ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                    "completed"
                                        ? "bg-black"
                                        : " bg-white border-2 border-dashed border-[#00b207] text-[#00b207]"
                                }`}
                            >
                                {status?.totalAmount.toLocaleLowerCase() ===
                                "completed" ? (
                                    <CheckIcon className=" text-white" />
                                ) : (
                                    4
                                )}
                            </div>
                            <p
                                className={` text-center font-poppins text-sm font-normal leading-[1.5] ${
                                    status?.totalAmount.toLocaleLowerCase() ===
                                    "completed"
                                        ? "text-green-500"
                                        : "text-gray-800"
                                }`}
                            >
                                Delivered
                            </p>
                        </div>
                    </div>
                </div>

                <Table className=" mt-20">
                    <TableHeader>
                        <TableRow className="hover:bg-gray-100 bg-gray-100 text-gray-500 font-medium text-xs tracking-wider uppercase leading-none">
                            <TableHead className="pl-10">Product</TableHead>
                            <TableHead>price</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>SubTotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.slice(0, 5).map((invoice) => (
                            <TableRow
                                key={invoice.id}
                                className="text-[#333333] font-poppins text-sm font-normal leading-[1.5]"
                            >
                                <TableCell className="pl-6 py-3 flex items-center gap-x-5 text-gray-900 font-normal text-base leading-6">
                                    {/* <Image
                                        src={invoice.src}
                                        alt={invoice.name}
                                        width={100}
                                        height={100}
                                    /> */}
                                    {invoice.name}
                                </TableCell>
                                <TableCell className="w-[250px] text-gray-900 font-normal text-base leading-6">
                                    ${invoice.price.toFixed(2)}
                                    <span className="pl-1 text-gray-400 font-normal text-base leading-6 line-through">
                                        {" "}
                                        $
                                        {(
                                            invoice.price -
                                            invoice.price *
                                                (invoice.discount / 100)
                                        ).toFixed(2)}
                                    </span>
                                </TableCell>
                                <TableCell>{invoice.gty}</TableCell>
                                <TableCell className=" text-gray-900 font-poppins text-base font-medium leading-6">
                                    ${(invoice.price * invoice.gty).toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};
