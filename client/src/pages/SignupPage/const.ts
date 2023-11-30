import {
    formField,
    MailField,
    PasswordField,
    UserField,
} from '../../types/auth';

export const signupData: formField[] = [
    new MailField(1),
    new UserField(2),
    new PasswordField(3),
];
