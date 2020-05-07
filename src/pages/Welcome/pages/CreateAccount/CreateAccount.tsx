import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, PasswordInput, Text, TextField } from 'components';
import { styles } from './CreateAccount.styles';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

export const CreateAccount: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [state, setState] = React.useState({
		emailAddress: '',
		password: ''
	});

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setState(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	return (
		<Page title={formatMessage({ id: 'welcome.create_account.title' })} titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					label={formatMessage({ id: 'welcome.login.email_address' })}
					name="emailAddress"
					value={state.emailAddress}
					onValueChange={handleStateChange}
				/>
				<PasswordInput
					label={formatMessage({ id: 'welcome.create_account.password' })}
					name="password"
					value={state.password}
					onValueChange={handleStateChange}
				/>

				<Box className={classes.footer}>
					<GreenButton compact iconName="submit-report" disabled={!state.emailAddress || !state.password}>
						{formatMessage({ id: 'button.send' })}
					</GreenButton>
					<Text className={classes.createAccountText}>{formatMessage({ id: 'welcome.create_password.text' })}</Text>
				</Box>
			</Box>
		</Page>
	);
};
