import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "8 Sep, 2020",
    totalAmount: "Processing",
    paymentMethod: "$135.00 (5 Products)",
  },
  {
    invoice: "INV002",
    paymentStatus: "24 May, 2020",
    totalAmount: "on the way",
    paymentMethod: "$25.00 (1 Product)",
  },
  {
    invoice: "INV003",
    paymentStatus: "22 Oct, 2020",
    totalAmount: "Completed",
    paymentMethod: "$250.00 (4 Products)",
  },
  {
    invoice: "INV004",
    paymentStatus: "1 Feb, 2020",
    totalAmount: "Completed",
    paymentMethod: "$35.00 (1 Products)",
  },
  {
    invoice: "INV005",
    paymentStatus: "21 Sep, 2020",
    totalAmount: "Completed",
    paymentMethod: "$578.00 (13 Products)",
  },
  {
    invoice: "INV006",
    paymentStatus: "22 Oct, 2020",
    totalAmount: "Completed",
    paymentMethod: "$345.00 (7 Products)",
  },
  // {
  //   invoice: "INV007",
  //   paymentStatus: "Unpaid",
  //   totalAmount: "$300.00",
  //   paymentMethod: "Credit Card",
  // },
];

export function RecentOrder({ showAll }: { showAll?: boolean }) {
  return (
    <div className=" border border-gray-200 rounded-md mt-6">
      <div className=" flex items-center justify-between py-4 px-6">
        <header className="text-[#1A1A1A] font-poppins text-xl font-medium leading-[1.5]">
          Order History
        </header>
        <Link
          className="text-[#00B207] font-poppins text-base font-medium leading-[1.5]"
          href={`/orders`}
        >
         {showAll && "View All"}
        </Link>
      </div>
      <Table>
        <TableHeader className="bg-black">
          <TableRow className=" bg-gray-100 hover:bg-gray-100 text-[#4D4D4D] font-poppins text-xs font-medium leading-none tracking-[0.36px] uppercase ">
            <TableHead className="pl-6">Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.invoice}
              className="text-[#333333] font-poppins text-sm font-normal leading-[1.5]"
            >
              <TableCell className="font-medium pl-6 py-3">
                {invoice.invoice}
              </TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell className="w-[120px] text-[#00B207] font-poppins text-sm font-medium leading-[1.5]">
                <Link href={`/orders`}>View Details</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </div>
  );
}
