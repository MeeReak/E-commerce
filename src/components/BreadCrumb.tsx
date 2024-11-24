"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { HouseIcon } from "lucide-react";

export function BreadcrumbWithCustomSeparator() {
  const pathName = usePathname();

  if (pathName === "/") return null;

  const pathArray = pathName.split("/").filter(Boolean);

  return (
    <div className="max-w-[720px] min-w-[700px] py-11 ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink isWrapped>
              <Link className="hover:text-white" href="/">
                <HouseIcon />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathArray.map((item, index) => {
            const isLast = index === pathArray.length - 1;
            const linkPath = `/${pathArray.slice(0, index + 1).join("/")}`;

            return (
              <React.Fragment key={item}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink isWrapped>
                    {isLast ? (
                      <BreadcrumbPage className="text-lg font-normal leading-[1.5] text-[#00B207]">
                        {item}
                      </BreadcrumbPage>
                    ) : (
                      <Link
                        href={linkPath}
                        className="hover:text-white text-lg font-normal leading-[1.5]"
                      >
                        {item}
                      </Link>
                    )}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
