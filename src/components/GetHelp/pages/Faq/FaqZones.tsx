import { FaqFooter } from 'pages/GetHelp/components';
import { Page } from 'components';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { styles } from './Faq.styles';
import clsx from 'clsx';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqZones: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="So what are the ride areas?" titleSize="medium">
			<Paper elevation={0} className={classes.container}>
				<Typography variant="h6" className={clsx(classes.text, classes.content)}>
					Ride Zones appear as shaded areas outlined in red on the map in the Lime app. These zones may restrict your speed or ability to
					end your ride. Tap on zones in the map to see what type of zone it is and the rules associated with it:
				</Typography>
				<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
					<span className={classes.faqLi}>•</span>
					<span>Out of business: you can’t end a ride/trip in this zone</span>
				</div>
				<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
					<span className={classes.faqLi}>•</span>
					<span>Speed reduction: while in this zone, your speed will be reduced automatically</span>
				</div>
				<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
					<span className={classes.faqLi}>•</span>
					<span>Incentivized parking: park here and get rewards either in Ruler token or receive discounts on your next ride/trip </span>
				</div>
				<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
					<span className={classes.faqLi}>•</span>
					<span>No parking: parking here is not permissible as per traffic laws</span>
				</div>
			</Paper>
			<FaqFooter />
		</Page>
	);
};
