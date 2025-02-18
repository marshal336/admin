import { ColumnDef } from "@tanstack/react-table";
import { User, users } from "./data";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Checkbox } from "~/components/ui/checkbox"


import Image from "next/image";

export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
    {
        accessorKey: "name",
        header: "Name",
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
        accessorKey: "emailAddress",
        header: "Email Address",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "departament",
        header: "Department",
    },
    {
        accessorKey: "employentStatus",
        header: "Employment Status",
    },
    {
        id: "action",
        header: "Action",
        cell: (e) => {
            return (
                <div className="flex gap-5 items-center">
                    <MdDriveFileRenameOutline className="text-2xl cursor-pointer "/>
                    <FaRegTrashAlt className="text-xl cursor-pointer text-red-400"/>
                </div>
            )
        }
    },
]