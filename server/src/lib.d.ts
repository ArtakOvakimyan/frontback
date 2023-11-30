declare global {
    let appData: any;

    interface Window {
        appData: any;
    }

    module '*.svg';
}
export {};
