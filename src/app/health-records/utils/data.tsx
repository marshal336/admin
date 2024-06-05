export type User = {
    name: {
        a: string,
        b: string
    }
    recordType: string;
    status: 'Submitted' | 'Reviced';
    dateUpdate: string
    dateCreated: string;
}
export const users = [
    {
        name: {
            a: 'Wade Warren',
            b: '/my.jpg'
        },
        recordType: 'Quality & Compliance',
        status: 'Submitted',
        dateUpdate: '10/28/12',
        dateCreated: '8/21/15',
    },
    {
        name: {
            a: 'Wade Warren',
            b: '/my.jpg'
        },
        recordType: 'Quality & Compliance',
        status: 'Submitted',
        dateUpdate: '10/28/12',
        dateCreated: '8/21/15',
    },
]