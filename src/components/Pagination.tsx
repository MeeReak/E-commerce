import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo({ param }: { param: string }) {
  const page = [1, 2, 3, 4, 5];
  const currentPage = parseInt(param);

  const getNextPage = () => (currentPage < 5 ? currentPage + 1 : 1).toString();
  const getPreviousPage = () =>
    (currentPage > 1 ? currentPage - 1 : 5).toString();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="mr-3 p-3" href={getPreviousPage()} />
        </PaginationItem>

        {page.map((item) => (
          <PaginationItem key={item}>
            <PaginationLink
              className={
                currentPage === item
                  ? "bg-[#00B207] hover:bg-[#00B207] text-white text-center text-base font-normal leading-[150%] px-[15px]"
                  : "text-gray-600 bg-white text-center text-base font-normal leading-[150%] px-[15px]"
              }
              href={`${item}`}
              isActive={currentPage === item}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext className="ml-3 p-3" href={getNextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
