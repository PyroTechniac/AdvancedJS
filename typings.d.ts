declare module 'AdvancedJS' {
    export class CustomError extends Error {
        constructor(message: string, name?: string);
        public name: string;
        public stack: string;
        public message: string;
    }

    
    type AdsetGetOptions = {
        value: any;
        mode?: "strict" | "loose"
    }
}
