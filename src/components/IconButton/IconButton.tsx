import { DEFAULT_ICON_BUTTON_SIZE, styles } from './IconButton.styles';
import { GoBackIconButtonProps, IIconButtonProps, SocialIconButtonProps } from './IconButton.types';
import { Icon } from 'components';
import { IconButton as MuiIconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const IconButton: React.FunctionComponent<IIconButtonProps> = ({
	iconProps,
	size,
	width = size,
	height = size,
	noShadow,
	outlined,
	className,
	...restProps
}) => {
	const classes = useStyles({
		width,
		height,
		iconWidth: iconProps.width,
		iconHeight: iconProps.height,
		noShadow,
		outlined
	});

	return (
		<MuiIconButton size="medium" className={clsx(classes.iconButton, className)} {...restProps}>
			<Icon {...iconProps} />
		</MuiIconButton>
	);
};

IconButton.defaultProps = {
	size: DEFAULT_ICON_BUTTON_SIZE
};

export const SocialIconButton: React.FunctionComponent<SocialIconButtonProps> = props => <IconButton noShadow outlined {...props} />;

export const GoBackIconButton: React.FunctionComponent<GoBackIconButtonProps> = props => (
	<IconButton
		iconProps={{
			iconName: 'back'
		}}
		{...props}
	/>
);

GoBackIconButton.defaultProps = {
	noShadow: true
};