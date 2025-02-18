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
                    <Image
                        src={users[a.row.index].name.b}
                        alt="logo"
                        width={20}
                        height={20}
                        className="rounded-full"
                        style={{
                            border: '1px solid #0AC60A'
                        }}
                    />
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