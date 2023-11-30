declare global {
    let appData: any;

    interface Window {
        appData: any;
    }
    module '*.svg';
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
interface Window {
    appData: any;
}
export {};
