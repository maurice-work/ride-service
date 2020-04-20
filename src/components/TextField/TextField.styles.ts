import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const textFieldRoot: CSSProperties = {
	marginBottom: pxToRem(25),
	fontFamily: DEFAULT_FONT_FAMILY,
	'& .MuiInput-underline:before, .MuiInput-underline:after': {
		borderBottom: '2px solid #181c19'
	},
	'& input': {
		padding: `0 0 ${pxToRem(12)} 0`,
		fontSize: pxToRem(15),
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	},
	'& label': {
		top: pxToRem(-12),
		fontSize: pxToRem(15),
		fontWeight: 600,
		lineHeight: 1.67,
		color: 'rgba(24, 28, 25, 0.5) !important'
	}
};

const eyeIcon: CSSProperties = {
	padding: 0,
	marginBottom: pxToRem(12),
	boxShadow: 'none'
};

export const styles = createStyles({
	textFieldRoot,
	eyeIcon
});