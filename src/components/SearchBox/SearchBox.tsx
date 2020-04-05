import { ISearchBoxProps } from './SearchBox.types';
import { Icon } from 'components';
import { InputBase, makeStyles } from '@material-ui/core';
import { styles } from './SearchBox.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({ onChange }) => {
	const classes = useStyles();

	return (
		<div className={classes.inputWrapper}>
			<div className={classes.searchIcon}>
				<Icon iconName={IconName.Search} />
			</div>
			<InputBase
				placeholder="Search…"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput
				}}
				inputProps={{ 'aria-label': 'search' }}
				onChange={onChange}
			/>
		</div>
	);
};
