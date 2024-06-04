import { ColumnDef } from "@tanstack/react-table";
import { Transaction } from "./data";
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { BsThreeDotsVertical } from "react-icons/bs";

 
export const columns: ColumnDef<Transaction>[] = [
    {
        id: 'no',
        header: "No",
        cell: (a) => <div className="w-3 h-3 rounded-full bg-main" />
    },
    {
        accessorKey: "entities",
        header: "Entities",
    },
    {
        accessorKey: "serviceType",
        header: "Service type",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: (e) => {
            const status = e.cell.getValue() as string
            return (
                <div className={`flex gap-2 items-center
                 py-1 px-3 rounded-md`}>
                    <div className={`w-2 h-2
                    ${status.includes('successfull') 
                    ? ' bg-green-400'
                    : status.includes('failed')
                    ? 'bg-red-400'
                    : status.includes('pending')
                    ? 'bg-yellow-400'
                    : ''} rounded-full`} />
                    <div className={`
                     ${status.includes('successfull') 
                     ? ' text-green-400'
                     : status.includes('failed')
                     ? 'text-red-400'
                     : status.includes('pending')
                     ? 'text-yellow-400'
                     : ''}`}>{status as string}</div>
                </div>
            )
            
        }
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <BsThreeDotsVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.date)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }
    }
]