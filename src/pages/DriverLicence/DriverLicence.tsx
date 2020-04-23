import { Box, Button, makeStyles } from '@material-ui/core';
import { IDriverLicenceProps } from './DriverLicence.types';
import { Icon, Page, Text } from 'components';
import { LicenceItem } from './components';
import { styles } from './DriverLicence.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React, { useEffect } from 'react';

const useStyles = makeStyles(styles);

export const DriverLicence: React.FunctionComponent<IDriverLicenceProps> = props => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [state, setState] = React.useState('');
	const [data, setData] = React.useState([]);

	useEffect(() => {
		const params: any = props.location.state;
		const data = params && params.data ? params.data : null;
		const state = params && params.state ? params.state : null;
		setState(state);
		setData(data);
	}, [props.location.state]);

	useEffect(() => {
		if ((!state || state === 'success') && !data) history.push('/driver-licence/add');

		if (state === 'progress') {
			setTimeout(() => setState('success'), 1500);
		}
	}, [data, state, history]);

	const handleRemoveClick = (index: number) => {
		console.log(index);
	};

	return (
		<Page title={formatMessage({ id: 'driver-licence.title' })} titleSize="large">
			{state !== 'success' && <Text className={classes.description}>{formatMessage({ id: 'driver-licence.description' })}</Text>}
			{state === 'progress' && (
				<Box className={classes.submitWrapper}>
					<Box className={classes.progressBox}>
						<Text className={classes.progressText}>{formatMessage({ id: 'driver-licence.validation.progress.title' })}</Text>
					</Box>
					<Text className={classes.description}>{formatMessage({ id: 'driver-licence.validation.progress.description' })}</Text>
				</Box>
			)}
			{state === 'invalid' && (
				<Box className={classes.submitWrapper}>
					<Box className={classes.invalidBox} />
					<Text className={classes.description}>{formatMessage({ id: 'driver-licence.invalid.description' })}</Text>
					<Button fullWidth className={classes.submitButton} href="/driver-licence/add">
						<Icon className={classes.buttonIcon} iconName="reset"></Icon>
						{formatMessage({ id: 'driver-licence.try.again' })}
					</Button>
				</Box>
			)}
			{state === 'success' && (
				<Box className={classes.submitWrapper}>
					<Box className={classes.validBox} />
					{data?.map((item: string, index: number) => (
						<LicenceItem key={index} imageSrc={item} handleRemoveClick={() => handleRemoveClick(index)} />
					))}
					<Button className={classes.addButton} href="/driver-licence/add">
						<Icon className={classes.buttonIcon} iconName="add"></Icon>
						{formatMessage({ id: 'driver-licence.add' })}
					</Button>
				</Box>
			)}
		</Page>
	);
};
