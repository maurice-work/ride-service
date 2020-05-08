import { CSSProperties, createStyles } from '@material-ui/styles';
import {
	LOADING_BACKGROUND_INITIAL_HEIGHT,
	LOADING_BACKGROUND_INITIAL_POSITION_RIGHT,
	LOADING_BACKGROUND_INITIAL_POSITION_TOP,
	LOADING_BACKGROUND_INITIAL_WIDTH,
	MY_RIDES_PAGE_BACKGROUND_INITIAL_HEIGHT,
	MY_RIDES_PAGE_BACKGROUND_INITIAL_POSITION_LEFT,
	MY_RIDES_PAGE_BACKGROUND_INITIAL_POSITION_TOP,
	MY_RIDES_PAGE_BACKGROUND_INITIAL_WIDTH,
	MY_RIDES_PAGE_CONTENT_INITIAL_HEIGHT,
	MY_RIDES_PAGE_CONTENT_MAX_WIDTH,
	MY_RIDES_PAGE_INITIAL_HEIGHT,
	MY_RIDES_PAGE_INITIAL_WIDTH
} from './MyRides.variables';
import { percentage, pxToRem } from 'styles';

const backgroundContainer: CSSProperties = {
	zIndex: -1,
	position: 'absolute',
	whiteSpace: 'nowrap',
	overflow: 'visible',

	'& img': {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '100%',
		maxWidth: '100%',
		maxHeight: '100%',
		userSelect: 'none',
		userDrag: 'none',
		imageRendering: 'optimizeQuality' as any
	}
};

const backgroundArea: CSSProperties = {
	left: percentage(MY_RIDES_PAGE_BACKGROUND_INITIAL_POSITION_LEFT / MY_RIDES_PAGE_INITIAL_WIDTH),
	top: `${(MY_RIDES_PAGE_BACKGROUND_INITIAL_POSITION_TOP / MY_RIDES_PAGE_INITIAL_HEIGHT) * 100}vh`,
	width: percentage(MY_RIDES_PAGE_BACKGROUND_INITIAL_WIDTH / MY_RIDES_PAGE_INITIAL_WIDTH),
	height: `${(MY_RIDES_PAGE_BACKGROUND_INITIAL_HEIGHT / MY_RIDES_PAGE_INITIAL_HEIGHT) * 100}vh`
};

const loadingBackgroundArea: CSSProperties = {
	right: percentage(LOADING_BACKGROUND_INITIAL_POSITION_RIGHT / MY_RIDES_PAGE_INITIAL_WIDTH),
	top: `${(LOADING_BACKGROUND_INITIAL_POSITION_TOP / MY_RIDES_PAGE_INITIAL_HEIGHT) * 100}vh`,
	width: percentage(LOADING_BACKGROUND_INITIAL_WIDTH / MY_RIDES_PAGE_INITIAL_WIDTH),
	height: `${(LOADING_BACKGROUND_INITIAL_HEIGHT / MY_RIDES_PAGE_INITIAL_HEIGHT) * 100}vh`
};

const content: CSSProperties = {
	zIndex: 1,
	position: 'absolute',
	bottom: 0,
	left: '50%',
	transform: 'translateX(-50%)',
	textAlign: 'center',
	maxWidth: MY_RIDES_PAGE_CONTENT_MAX_WIDTH,
	height: `${(MY_RIDES_PAGE_CONTENT_INITIAL_HEIGHT / MY_RIDES_PAGE_INITIAL_HEIGHT) * 100}vh`
};

const descriptionText: CSSProperties = {
	textAlign: 'center',
	lineHeight: 1.5,
	fontSize: pxToRem(15),
	color: 'rgb(24, 28, 25, 0.5)',
	fontWeight: 600
};

const toHomeButton: CSSProperties = {
	maxWidth: pxToRem(175),
	margin: `${pxToRem(30)} auto 0`
};
export const styles = createStyles({
	descriptionText,
	backgroundContainer,
	content,
	toHomeButton,
	backgroundArea,
	loadingBackgroundArea
});
