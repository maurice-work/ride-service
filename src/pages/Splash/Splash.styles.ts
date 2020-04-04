import { createStyles } from '@material-ui/core';
import { percentage } from 'utils';

const SPLASH_PAGE_INITIAL_WIDTH = 375;
const SPLASH_PAGE_INITIAL_HEIGHT = 667;
const SPLASH_PAGE_LOGO_INITIAL_WIDTH = 185.9;
const SPLASH_PAGE_LOGO_INITIAL_HEIGHT = 49.9;
const SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_WIDTH = 105;
const SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_HEIGHT = 143;
const SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_POSITION_TOP = -38;
const SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_POSITION_RIGHT = 53.7;
const SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_WIDTH = 181;
const SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_HEIGHT = 248;
const SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_POSITION_BOTTOM = -77;
const SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_POSITION_LEFT = 33;

export const styles = createStyles({
	background: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: '#000',
		overflow: 'hidden'
	},
	logoContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		whiteSpace: 'nowrap',
		width: percentage(SPLASH_PAGE_LOGO_INITIAL_WIDTH / SPLASH_PAGE_INITIAL_WIDTH),
		height: percentage(SPLASH_PAGE_LOGO_INITIAL_HEIGHT / SPLASH_PAGE_INITIAL_HEIGHT)
	},
	topBackgroundElementContainer: {
		position: 'absolute',
		whiteSpace: 'nowrap',
		right: percentage(SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_POSITION_RIGHT / SPLASH_PAGE_INITIAL_WIDTH),
		top: percentage(SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_POSITION_TOP / SPLASH_PAGE_INITIAL_HEIGHT),
		width: percentage(SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_WIDTH / SPLASH_PAGE_INITIAL_WIDTH),
		height: percentage(SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_HEIGHT / SPLASH_PAGE_INITIAL_HEIGHT)
	},
	bottomBackgroundElementContainer: {
		position: 'absolute',
		whiteSpace: 'nowrap',
		left: percentage(SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_POSITION_LEFT / SPLASH_PAGE_INITIAL_WIDTH),
		bottom: percentage(SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_POSITION_BOTTOM / SPLASH_PAGE_INITIAL_HEIGHT),
		width: percentage(SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_WIDTH / SPLASH_PAGE_INITIAL_WIDTH),
		height: percentage(SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_HEIGHT / SPLASH_PAGE_INITIAL_HEIGHT)
	},
	image: {
		width: 'auto',
		height: 'auto',
		maxWidth: '100%',
		maxHeight: '100%',
		userSelect: 'none',
		userDrag: 'none',
		imageRendering: 'optimizeQuality' as any
	}
});
