export type Job = {
    id: string;
    title: string;
    type: string;
    description: string;
    location: string;
    salary: string;
    company?: {
        name: string;
        description: string;
        contactEmail: string;
        contactPhone: string;
    };
};