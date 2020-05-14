import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const articleTitle: CSSProperties = {
	marginBottom: pxToRem(5),
	...font({
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal',
		color: '#181c19'
	}),
	fontSize: pxToRem(15)
};

const articleListItem: CSSProperties = {
	display: 'flex !important',
	flexDirection: 'row',
	padding: `${pxToRem(15)} ${pxToRem(20)}`,
	marginBottom: pxToRem(11)
};

const articleText: CSSProperties = {
	...font({
		fontSize: 10,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal',
		color: 'rgba(24, 28, 25, 0.5)'
	})
};

const imageBox: CSSProperties = {
	marginRight: pxToRem(20)
	// borderRadius: pxToRem(10)
};

const articleDescription: CSSProperties = {
	display: 'flex !important',
	justifyContent: 'space-between',
	flexDirection: 'row',
	marginBottom: pxToRem(5),
	...font({
		fontSize: 10,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal',
		color: 'rgba(24, 28, 25, 0.5)'
	})
};

const articleTime: CSSProperties = {
	whiteSpace: 'nowrap'
};

const platformText: CSSProperties = {
	color: '#00b559'
};

export const styles = createStyles({
	imageBox,
	articleListItem,
	articleTitle,
	articleText,
	articleDescription,
	articleTime,
	platformText
});