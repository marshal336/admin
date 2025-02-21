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
        name: { a: 'Aisha Aremu', b: '' },
        emailAddress: 'aisha@gmail.com',
        phone: '08133768472',
        department: 'Radiology',
        employmentStatus: 'Full-Time',
    },
    {
        name: { a: 'James Smith', b: '' },
        emailAddress: 'james@gmail.com',
        phone: '08023456789',
        department: 'Cardiology',
        employmentStatus: 'Part-Time',
    },
    {
        name: { a: 'Sophia Johnson', b: '' },
        emailAddress: 'sophia@gmail.com',
        phone: '08187654321',
        department: 'Neurology',
        employmentStatus: 'Contract',
    },
    {
        name: { a: 'Michael Brown', b: '' },
        emailAddress: 'michael@gmail.com',
        phone: '08099887766',
        department: 'Orthopedics',
        employmentStatus: 'Full-Time',
    },
    {
        name: { a: 'Emily Davis', b: '' },
        emailAddress: 'emily@gmail.com',
        phone: '08123459876',
        department: 'Pediatrics',
        employmentStatus: 'Intern',
    },
    {
        name: { a: 'Daniel Wilson', b: '' },
        emailAddress: 'daniel@gmail.com',
        phone: '08011223344',
        department: 'Oncology',
        employmentStatus: 'Full-Time',
    },
    {
        name: { a: 'Olivia Martinez', b: '' },
        emailAddress: 'olivia@gmail.com',
        phone: '08144556677',
        department: 'Dermatology',
        employmentStatus: 'Part-Time',
    },
    {
        name: { a: 'Ethan Taylor', b: '' },
        emailAddress: 'ethan@gmail.com',
        phone: '08055667788',
        department: 'Urology',
        employmentStatus: 'Contract',
    },
    {
        name: { a: 'Isabella Anderson', b: '' },
        emailAddress: 'isabella@gmail.com',
        phone: '08166778899',
        department: 'Psychiatry',
        employmentStatus: 'Full-Time',
    },
    {
        name: { a: 'William Thomas', b: '' },
        emailAddress: 'william@gmail.com',
        phone: '08077889900',
        department: 'Anesthesiology',
        employmentStatus: 'Intern',
    },
];