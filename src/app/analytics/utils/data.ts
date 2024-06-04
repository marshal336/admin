
export type User = {
    date: string
    totalAdmission: number;
    totalDischarger: string;
    status: 'pending' | 'success' | 'declined';
    averageLengthOfStay: string;
    netAdmissionChange: string;
}

export const users: User[] = [
    {
        date: 'Sep 9, 2023',
        totalAdmission: 123,
        totalDischarger: '000023',
        averageLengthOfStay: '3.5 days',
        status: 'declined',
        netAdmissionChange: '+10'
    },
    {
        date: 'Sep 9, 2023',
        totalAdmission: 123,
        totalDischarger: '000023',
        averageLengthOfStay: '3.5 days',
        status: 'pending',
        netAdmissionChange: '-10'
    },
    {
        date: 'Sep 9, 2023',
        totalAdmission: 123,
        totalDischarger: '000023',
        averageLengthOfStay: '3.5 days',
        status: 'success',
        netAdmissionChange: '+10'
    },
]