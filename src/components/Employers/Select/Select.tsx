import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui'

interface ISelectProps {
    variants: string[]
    placeholder: string
}
export default function SelectC({
    variants,
    placeholder
}: ISelectProps) {

    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className='bg-[--bg]'>
                {variants.map((value, i) => (
                    <SelectItem key={i} value={value}>{value}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )

}