import { List, makeStyles } from '@material-ui/core';
import { NewsData } from './News.data';
import { NewsItem } from './components';
import { Page } from 'components';
import { styles } from './News.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const News: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="News" titleSize="large" noHorizontalContentPadding>
			<List className={classes.articleList}>
				{NewsData.map((newsData, index) => (
					<NewsItem key={index} {...newsData} />
				))}
			</List>
		</Page>
	);
};
