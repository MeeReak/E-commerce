import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo({
    images
}: {
    images: Array<{
        src: string;
        id: number;
        alt: string;
    }>;
}) {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {images.map((img) => (
                    <CarouselItem key={img.id}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square  items-center justify-center p-6">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        width={300}
                                        height={300}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
