import { Box, Button, Divider, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import { IDarkModeProps, IDarkModeState } from './DarkMode.types';
import { Icon, Page, Styling, SwitchListItem, Text } from 'components';
import { IonDatetime } from '@ionic/react';
import { styles } from './DarkMode.styles';

import React from 'react';

const useStyles = makeStyles(styles);

export class DarkMode extends React.Component<IDarkModeProps, IDarkModeState> {
	state = {
		automaticallyDarkMode: true,
		dontUseDarkMode: false,
		scheduledDarkMode: false,
		startTimeDarkMode: '22:00',
		endTimeDarkMode: '07:00'
	};

	private handleAutomaticallyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		if (checked) {
			this.setState({ dontUseDarkMode: false, scheduledDarkMode: false });
		}
		this.setState({ automaticallyDarkMode: checked });
	};

	private handleDontUseChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		if (checked) {
			this.setState({ automaticallyDarkMode: false, scheduledDarkMode: false });
		}
		this.setState({ dontUseDarkMode: checked });
	};

	private handleScheduledChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		if (checked) {
			this.setState({ automaticallyDarkMode: false, dontUseDarkMode: false });
		}
		this.setState({ scheduledDarkMode: checked });
	};

	private handleStartDateChange = (_event: CustomEvent<any>): void => {
		this.setState({ startTimeDarkMode: _event.detail.value });
	};

	private handleEndDateChange = (_event: CustomEvent<any>): void => {
		this.setState({ endTimeDarkMode: _event.detail.value });
	};

	private handleBottomSheetChange = (isOpen: boolean) => {
		this.setState({ open: isOpen, dateItem: '' });
	};

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title="Dark mode" titleSize="medium">
						<List className={classes.providersList}>
							<SwitchListItem
								title="Automatically"
								name="automaticallyDarkMode"
								checked={this.state.automaticallyDarkMode}
								onChange={this.handleAutomaticallyChange}
							/>
							<Divider className={classes.divider} />
							<SwitchListItem
								title="Manually enable till tomorrow"
								name="dontUseDarkMode"
								checked={this.state.dontUseDarkMode}
								onChange={this.handleDontUseChange}
							/>
							<div className={classes.textWrapper}>
								<Text className={classes.subText}>Set by time</Text>
							</div>
							<SwitchListItem
								title="Scheduled"
								name="scheduledDarkMode"
								checked={this.state.scheduledDarkMode}
								onChange={this.handleScheduledChange}
							/>

							{this.state.scheduledDarkMode && (
								<Box>
									<Divider className={classes.divider} />
									<ListItem className={classes.li}>
										<ListItemText className={classes.itemText}>Start</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton}>
												<IonDatetime
													display-timezone="utc"
													display-format="HH:mm"
													mode="ios"
													pickerOptions={{
														cssClass: classes.customPicker,
														buttons: [
															{
																text: 'Cancel',
																handler: () => console.log('Cancel')
															},
															{
																text: 'Set time',
																handler: () => {
																	console.log('set time');
																}
															}
														]
													}}
													picker-format="HH:mm"
													value={this.state.startTimeDarkMode}
													onIonChange={e => this.handleStartDateChange(e)}
												/>
												<Icon iconName="forward" color="rgba(24, 28, 25, 0.5)" />
											</Button>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider className={classes.divider} />
									<ListItem className={classes.li}>
										<ListItemText className={classes.itemText}>Ending</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton}>
												<IonDatetime
													display-timezone="utc"
													display-format="HH:mm"
													mode="ios"
													pickerOptions={{
														cssClass: classes.customPicker,
														buttons: [
															{
																text: 'Cancel',
																handler: () => console.log('Cancel')
															},
															{
																text: 'Set time',
																handler: () => {
																	console.log('set time');
																}
															}
														]
													}}
													picker-format="HH:mm"
													value={this.state.endTimeDarkMode}
													onIonChange={e => this.handleEndDateChange(e)}
												/>
												<Icon iconName="forward" color="rgba(24, 28, 25, 0.5)" />
											</Button>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider className={classes.divider} />
								</Box>
							)}
						</List>
					</Page>
				)}
			</Styling>
		);
	}
}
