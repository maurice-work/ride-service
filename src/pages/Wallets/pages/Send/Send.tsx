import { Box, InputAdornment, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, IconButton, Page, Text, TextField } from 'components';
import { RulerButton } from '../../components';
import { rulerPriceBonusData } from '../../Wallets.data';
import { styles } from './Send.styles';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Send: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [showDialog, setShowDialog] = React.useState<boolean>(false);
	const [amount, setAmount] = React.useState<string>('');
	const [walletAddress, setWalletAddress] = React.useState<string>('');

	const handleRulerButtonClick = (amount: string): void => setAmount(amount);

	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => setAmount(event.target.value);

	const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>): void => setWalletAddress(event.target.value);

	const handleQrClick = (): void => {};

	const handleSendClick = (): void => {
		setShowDialog(true);
	};

	const handleDialogClose = () => {
		setShowDialog(false);
	};

	return (
		<Page title={formatMessage({ id: 'wallets.send.title' })} titleSize="medium">
			<Box className={classes.addFundsWrapper}>
				<TextField
					name="walletAddress"
					label={formatMessage({ id: 'wallets.send.send_to' })}
					inputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton iconName="qr" onClick={handleQrClick} />
							</InputAdornment>
						)
					}}
					value={walletAddress}
					onValueChange={handleWalletAddressChange}
				/>
				<Text className={clsx(classes.helperText, classes.textCenter)}>
					{formatMessage({ id: 'wallets.add_funds.helper_text.ruler_bonus' })}
				</Text>
				<Box className={classes.rulerPriceBonusButtonGroup}>
					{rulerPriceBonusData.map((data, index) => (
						<RulerButton
							key={index}
							price={data.rulerPrice}
							bonus={data.rulerBonus}
							active={data.rulerPrice === amount}
							onRulerButtonClick={handleRulerButtonClick}
						/>
					))}
				</Box>
				<TextField
					name="insertAmount"
					className={classes.insertAmount}
					label={formatMessage({ id: 'wallets.add_funds.helper_text.amount_description' })}
					inputProps={{
						startAdornment: <InputAdornment position="start">€</InputAdornment>
					}}
					value={amount}
					onValueChange={handleAmountChange}
				/>
			</Box>
			<GreenButton iconName="submit-report" compact disabled={!amount || !walletAddress} onClick={handleSendClick}>
				{formatMessage({ id: 'button.send' })}
			</GreenButton>
			<Dialog
				open={showDialog}
				hasClose={true}
				illustrationName="superman"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'wallets.send.dialog.title' })}
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'wallets.send.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};