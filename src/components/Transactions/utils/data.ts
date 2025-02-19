

export type Transaction = {
    entities: string
    serviceType: string
    amount: string
    status: 'successfull' | 'pending' | 'failed'
    date: string
}

export const data: Transaction[] = [
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'pending',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'failed',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'successfull',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'pending',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'failed',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'successfull',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'pending',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'failed',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'successfull',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'pending',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'failed',
        date: '9:30AM, 11/7/16'
    },
    {
        entities: 'Wade Warren',
        serviceType: 'Patient ',
        amount: '#670,000',
        status: 'successfull',
        date: '9:30AM, 11/7/16'
    },

]

export const transactions = [
    { h1: '21890', p: 'Success Transactions' },
    { h1: '180', p: 'Failed Transactions' },
    { h1: '23890', p: 'Total Transactions' },
    { h1: '1890', p: 'Pending Transactions' },
];
