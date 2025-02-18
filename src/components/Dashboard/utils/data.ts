import { ChartData } from "chart.js";

export const dataBar: ChartData<"bar", number[], string> = {
    labels: ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE"],
    datasets: [
        {
            data: [10, 22, 4, 8, 20, 12],
            backgroundColor: "#0AC60A",
            borderRadius: 60,
            barPercentage: 0.7,
        },
        {
            data: [8, 12, 4, 8, 16, 23],
            backgroundColor: "#D6F8D6",
            borderRadius: 60,
            barPercentage: 0.7
        }
    ]
};
export const dataPie: ChartData<"pie", number[], string> = {
    datasets: [
        {
            data: [10, 17, 13,],
            backgroundColor: ["#0AC60A", "#D6F8D6", '#ffa500'],
            weight: 3,
        },
    ]
};

export type User = {
    name: {
        a: string;
        b: string;
    };
    admissionDate: string;
    roomNumber: string;
    patientId: string;
    primaryDoctor: string;
}
export const users = [
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/201',
        patientId: '02566',
        primaryDoctor: 'Dr Alimi James'
    },
    {
        name: {
            a: 'Janet Paul',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/54',
        patientId: '13822',
        primaryDoctor: 'Dr Rita Areogun'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/333',
        patientId: '02566',
        primaryDoctor: 'Dr Aaron Lekan'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/231',
        patientId: '12121',
        primaryDoctor: 'Dr Alimi James'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/201',
        patientId: '02566',
        primaryDoctor: 'Dr Alimi James'
    },
    {
        name: {
            a: 'Janet Paul',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/54',
        patientId: '13822',
        primaryDoctor: 'Dr Rita Areogun'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/333',
        patientId: '02566',
        primaryDoctor: 'Dr Aaron Lekan'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/231',
        patientId: '12121',
        primaryDoctor: 'Dr Alimi James'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/201',
        patientId: '02566',
        primaryDoctor: 'Dr Alimi James'
    },
    {
        name: {
            a: 'Janet Paul',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/54',
        patientId: '13822',
        primaryDoctor: 'Dr Rita Areogun'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/333',
        patientId: '02566',
        primaryDoctor: 'Dr Aaron Lekan'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/231',
        patientId: '12121',
        primaryDoctor: 'Dr Alimi James'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/201',
        patientId: '02566',
        primaryDoctor: 'Dr Alimi James'
    },
    {
        name: {
            a: 'Janet Paul',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/54',
        patientId: '13822',
        primaryDoctor: 'Dr Rita Areogun'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/333',
        patientId: '02566',
        primaryDoctor: 'Dr Aaron Lekan'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/231',
        patientId: '12121',
        primaryDoctor: 'Dr Alimi James'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/201',
        patientId: '02566',
        primaryDoctor: 'Dr Alimi James'
    },
    {
        name: {
            a: 'Janet Paul',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/54',
        patientId: '13822',
        primaryDoctor: 'Dr Rita Areogun'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/333',
        patientId: '02566',
        primaryDoctor: 'Dr Aaron Lekan'
    },
    {
        name: {
            a: 'Ola Akintola',
            b: '/my.jpg'
        },
        admissionDate: '12-09-2023',
        roomNumber: 'UI/231',
        patientId: '12121',
        primaryDoctor: 'Dr Alimi James'
    },
]