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
        netAdmissionChange: 'v',
    },
    {
        date: 'Sep 9, 2023',
        totalAdmission: 123,
        totalDischarger: '000023',
        averageLengthOfStay: '3.5 days',
        status: 'pending',
        netAdmissionChange: 'cvc',
    },
    {
        date: 'Sep 9, 2023',
        totalAdmission: 123,
        totalDischarger: '000023',
        averageLengthOfStay: '3.5 days',
        status: 'success',
        netAdmissionChange: 'cvcv',
    },
    {
        date: 'Sep 10, 2023',
        totalAdmission: 130,
        totalDischarger: '000024',
        averageLengthOfStay: '4.0 days',
        status: 'declined',
        netAdmissionChange: 'ccvcv',
    },
    {
        date: 'Sep 10, 2023',
        totalAdmission: 130,
        totalDischarger: '000024',
        averageLengthOfStay: '4.0 days',
        status: 'pending',
        netAdmissionChange: 'asdasd',
    },
    {
        date: 'Sep 10, 2023',
        totalAdmission: 130,
        totalDischarger: '000024',
        averageLengthOfStay: '4.0 days',
        status: 'success',
        netAdmissionChange: 'adasd',
    },
    {
        date: 'Sep 11, 2023',
        totalAdmission: 140,
        totalDischarger: '000025',
        averageLengthOfStay: '5.0 days',
        status: 'declined',
        netAdmissionChange: '',
    },
    {
        date: 'Sep 11, 2023',
        totalAdmission: 140,
        totalDischarger: '000025',
        averageLengthOfStay: '5.0 days',
        status: 'pending',
        netAdmissionChange: '',
    },
    {
        date: 'Sep 11, 2023',
        totalAdmission: 140,
        totalDischarger: '000025',
        averageLengthOfStay: '5.0 days',
        status: 'success',
        netAdmissionChange: '',
    },
    {
        date: 'Sep 12, 2023',
        totalAdmission: 150,
        totalDischarger: '000026',
        averageLengthOfStay: '6.0 days',
        status: 'declined',
        netAdmissionChange: '',
    },
];
