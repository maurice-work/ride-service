import { Box, makeStyles } from '@material-ui/core';
import { IRulerWalletHistoryProps } from './RulerWalletHistory.types';
import { Icon, Text } from 'components';
import { styles } from './RulerWalletHistory.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const RulerWalletHistory: React.FunctionComponent<IRulerWalletHistoryProps> = ({ date, time, description, hash, amount, type }) => {
	const classes = useStyles({ type });

	return (
		<Box className={classes.content}>
			<Text className={classes.smallText}>{date}</Text>
			<Box className={classes.contentWrapper}>
				<Icon iconName={type === 'send' ? 'arrow-up' : 'arrow-down'} color={type === 'send' ? '#00b559' : '#f46c63'} />
				<Box className={classes.rowWrapper}>
					<Box className={classes.textWrapper}>
						<Text className={classes.smallText}>{time}</Text>
						<Text className={classes.text}>{description}</Text>
						<Text className={classes.smallText}>{hash}</Text>
					</Box>
					<Text className={classes.amountText}>{`€ ${amount} ${type === 'send' ? '+' : '-'}`}</Text>
				</Box>
			</Box>
		</Box>
	);
};
