import { Divider, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Page } from 'components';
import { Link as RouterLink } from 'react-router-dom';
import { styles } from './SafetyRegulations.styles';

import React from 'react';

const useStyles = makeStyles(styles);

const items = [
	{
		title: 'Bike',
		href: '/get-help/regulations-bike'
	},
	{
		title: 'Car',
		href: '/get-help/regulations-car'
	},
	{
		title: 'Scooter',
		href: '/get-help/regulations-scooter'
	}
];

export const SafetyRegulations: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="Safety regulations" titleSize="medium">
			<List className={classes.list}>
				{items.map((item, index) => (
					<div key={index}>
						<ListItem className={classes.listItem} component={RouterLink} to={item.href}>
							<ListItemText primary={item.title} classes={{ primary: classes.text }} />
						</ListItem>
						<Divider component="li" className={classes.divider} />
					</div>
				))}
			</List>
		</Page>
	);
};