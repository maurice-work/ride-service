import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const providersList: CSSProperties = {
	marginTop: '6px',
	padding: '0px'
};
const subText: CSSProperties = {
	opacity: 0.5,
	color: '#181c19',
	fontWeight: 600,
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(10),
	lineHeight: 1.5,
	marginTop: pxToRem(20),
	marginBottom: pxToRem(11)
};
const divider: CSSProperties = {
	backgroundColor: '#181c19',
	height: pxToRem(1),
	opacity: 0.05
};
const timePicker: CSSProperties = {
	position: 'absolute',
	right: '0',
	'& .MuiInputBase-input': {
		maxWidth: '50px',
		textAlign: 'right'
	},
	'& .MuiInputAdornment-positionEnd': {
		marginLeft: 0
	},
	'& button': {
		width: '30px',
		height: '30px',
		padding: 0
	}
};
const li: CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	padding: `${pxToRem(10)} 0`
};
const itemText: CSSProperties = {
	margin: 0,
	'& span': {
		color: '#181c19',
		fontSize: pxToRem(15),
		lineHeight: 1.67,
		fontWeight: 600,
		fontFamily: DEFAULT_FONT_FAMILY
	}
};
const secondaryAction: CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	right: 0
};
const secondaryButton: CSSProperties = {
	padding: 0,
	color: '#181c19',
	fontSize: pxToRem(15),
	lineHeight: 1.67,
	fontWeight: 600,
	fontFamily: DEFAULT_FONT_FAMILY,
	opacity: 0.5
};
const customPicker: CSSProperties = {
	'& .picker-wrapper': {
		display: 'flex',
		flexDirection: 'column-reverse',
		borderRadius: '14px',
		'& .picker-toolbar-button': {}
	}
};
const bottomSheetButtonWrapper: CSSProperties = {
	padding: `${pxToRem(30)} 0 ${pxToRem(19)} 0`,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	'& button': {
		flex: 1,
		fontWeight: 'bold',
		'&:first-child': {
			marginRight: pxToRem(7.5)
		},
		'&:last-child': {
			marginLeft: pxToRem(7.5)
		}
	}
};
const bottomSheetButton: CSSProperties = {};

export const styles = createStyles({
	providersList,
	li,
	timePicker,
	customPicker,
	subText,
	divider,
	secondaryAction,
	itemText,
	secondaryButton,
	bottomSheetButtonWrapper,
	bottomSheetButton
});