import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";

export function PaginationDemo({
  param,
  pageName,
}: {
  param: string;
  pageName: string;
}) {
  const page = [1, 2, 3, 4, 5];
  const currentPage = parseInt(param, 10);

  const getNextPage = () =>
    `${pageName}/${currentPage < page[0] ? currentPage + 1 : page[0]}`;
  const getPreviousPage = () =>
    `${pageName}/${
      currentPage > page.length - 1 ? currentPage - 1 : page.length - 1
    }`;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="mr-3 p-3"
            href={`/${getPreviousPage()}`}
          />
        </PaginationItem>

        {page.map((item) => (
          <PaginationItem key={item}>
            <PaginationLink
              className={
                currentPage === item
                  ? "bg-[#00B207] hover:bg-[#00B207] text-white text-center text-base font-normal leading-[150%] px-[15px]"
                  : "text-gray-600 bg-white text-center text-base font-normal leading-[150%] px-[15px]"
              }
              href={`/${pageName}/${item}`} // Ensure single `pageName`
              isActive={currentPage === item}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext className="ml-3 p-3" href={`/${getNextPage()}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
