import { ColumnDef } from "@tanstack/react-table";
import { User, users } from "./data";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "~/components/ui/button";

export const columns: ColumnDef<User>[] = [

    {
        accessorKey: "name",
        header: "Full-name",
        cell: (a) => {
            return (
                <div className="flex gap-3 items-center">
                    <Image src={users[a.row.index].name.b} alt="logo" width={20} height={20} className="rounded-full border-[1px] border-[#0AC60A]" />
                    <div className="">{users[a.row.index].name.a}</div>
                </div>
            )
        }
    },
    {
        accessorKey: "recordType",
        header: "Record type",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "dateUpdate",
        header: "Date updated",
    },
    {
        accessorKey: "dateCreated",
        header: "Date created",
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
                            onClick={() => navigator.clipboard.writeText(payment.name.a)}
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