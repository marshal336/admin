import { ColumnDef } from "@tanstack/react-table";
import { User } from "./data";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'date',
        header: 'DATE',
        cell: (e) => {
            return (
                <div className="w-[100px]">{e.cell.getValue() as string}</div>
            )
        }
    },
    {
        accessorKey: 'totalAdmission',
        header: 'Total Admissions'
    },
    {
        accessorKey: 'totalDischarger',
        header: 'Total Discharges'
    },
    {
        accessorKey: 'status',
        header: 'STATUS',
        cell: (e) => {
            const status = e.cell.getValue() as string
            return (
                <div className={`flex gap-2 items-center
                ${status.includes('success') 
                ? ' bg-green-400/20'
                : status.includes('declined')
                ? 'bg-red-400/20'
                : status.includes('pending')
                ? 'bg-yellow-400/20'
                : ''}
                 py-1 px-3 rounded-md`}>
                    <div className={`w-2 h-2
                    ${status.includes('success') 
                    ? ' bg-green-400'
                    : status.includes('declined')
                    ? 'bg-red-400'
                    : status.includes('pending')
                    ? 'bg-yellow-400'
                    : ''} rounded-full`} />
                    <div className={`
                     ${status.includes('success') 
                     ? ' text-green-400'
                     : status.includes('declined')
                     ? 'text-red-400'
                     : status.includes('pending')
                     ? 'text-yellow-400'
                     : ''}`}>{status as string}</div>
                </div>
            )
            
        }
    },
    {
        accessorKey: 'averageLengthOfStay',
        header: 'Average Length of Stay'
    },
    {
        accessorKey: 'netAdmissionChange',
        header: "Net Admission Change",
        cell: (e) => {
            const status = e.cell.getValue() as string
            return (
                    <div className={`
                     ${status.includes('+') 
                     ? ' text-green-400'
                     : status.includes('-')
                     ? 'text-red-400'
                     : ''}`}>{status as string}</div>
            )
            
        }
    },
]