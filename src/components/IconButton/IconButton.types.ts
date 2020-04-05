import { IIconProps } from 'components';
import { IconButtonProps } from '@material-ui/core';

export type SocialIconButtonProps = Omit<IIconButtonProps, 'noShadow' | 'outlined'>;

export type GoBackIconButtonProps = Omit<IIconButtonProps, 'outlined' | 'iconProps'>;

export interface IIconButtonProps extends Omit<IconButtonProps, 'size'> {
	className?: string;
	iconProps: IIconProps;
	size?: number;
	width?: number;
	height?: number;

	noShadow?: boolean;

	outlined?: boolean;
}