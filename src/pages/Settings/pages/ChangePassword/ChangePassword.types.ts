import { IntlShape } from 'react-intl';

export interface IChangePasswordState {
	newPassword: string;
	oldPassword: string;
	confirmedPassword: string;
	showDialog: boolean;
}

export interface IChangePasswordProps {
	intl: IntlShape;
}
