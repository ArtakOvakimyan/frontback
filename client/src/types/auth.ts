import { HTMLInputTypeAttribute } from 'react';

export abstract class formField {
    id: number;
    placeholder: string;
    labelText: string;
    name: string;
    type: HTMLInputTypeAttribute;
    length?: { minLength: number; maxLength: number };
}

export class UserField extends formField {
    public placeholder = 'username';
    public labelText = 'Username';
    public name = 'username';
    public type = 'text';
    public length = {
        minLength: 0,
        maxLength: 30,
    };

    id: number;
    constructor(fieldId: number) {
        super();
        this.id = fieldId;
    }
}

export class PasswordField extends formField {
    public placeholder = 'password';
    public labelText = 'Password';
    public name = 'password';
    public type = 'password';

    id: number;
    constructor(fieldId: number) {
        super();
        this.id = fieldId;
    }
}
export class MailField extends formField {
    public placeholder = 'mail';
    public labelText = 'Mail';
    public name = 'mail';
    public type = 'email';
    public length = {
        minLength: 0,
        maxLength: 30,
    };

    id: number;
    constructor(fieldId: number) {
        super();
        this.id = fieldId;
    }
}
