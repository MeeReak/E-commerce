"use client";

import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { AlertDialogDemo } from "./Confirm";
import { DialogDemo } from "./DisplayForm";
import { EditForm } from "./EditForm";

export const Product = [
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
        id: "a1189815-92af-45e1-b567-b148b920a7c9",
        gty: 5,
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

export function TableDemo() {
    const searchParams = useSearchParams();
    const q = searchParams.get("search");

    const filteredProducts = Product.filter(
        (product) =>
            product.name.toLowerCase().includes(q?.toLocaleLowerCase() || "") ||
            product.category
                .toLowerCase()
                .includes(q?.toLocaleLowerCase() || "")
    );

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className=" pl-5">No</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredProducts.map((product, index) => (
                    <TableRow key={product.id}>
                        <TableCell className=" pl-6">{index + 1}</TableCell>
                        <TableCell>
                            <Image
                                src={product.src}
                                alt={product.name}
                                width={36}
                                height={36}
                            />
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell className=" pl-2">
                            {product.price.toFixed(2)}$
                        </TableCell>
                        <TableCell className=" pl-8">{product.gty}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>
                            <div className=" flex items-center gap-x-2">
                                <DialogDemo />
                                <EditForm product={product} />
                                <AlertDialogDemo itemName={product.name} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
