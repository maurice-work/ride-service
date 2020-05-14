import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const submitWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const addPaymentMethodButton: CSSProperties = {
	marginTop: 'auto',
	fontWeight: 'bold'
};

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	padding: `${pxToRem(15)} 0`
};

const notRecommendedButton: CSSProperties = {
	fontWeight: 'bold'
};
export const styles = createStyles({
	submitWrapper,
	dialogContentText,
	notRecommendedButton,
	addPaymentMethodButton
});