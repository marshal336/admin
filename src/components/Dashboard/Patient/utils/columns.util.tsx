import { ColumnDef } from "@tanstack/react-table";
import { User, users } from './users.util'
import Image from "next/image";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: (a) => {
            return (
                <div className="flex gap-3 items-center">
                    {users[a.row.index].name.b !== ''
                        ? <Image src={users[a.row.index].name.b} alt="logo" width={20} height={20} className="rounded-full border-[1px] border-[--main]" />
                        : <div className="w-5 h-5 bg-[--main] rounded-full border" />
                    }
                    <div className="">{users[a.row.index].name.a}</div>
                </div>
            )
        }
    },
    {
        accessorKey: "admissionDate",
        header: "Admission Date",
    },
    {
        accessorKey: "roomNumber",
        header: "Room Number",
    },
    {
        accessorKey: "patientId",
        header: "Patient ID",
    },
    {
        accessorKey: "primaryDoctor",
        header: "Primary Doctor",
    },
]