import {
	LINK_BLACK_COLOR_TYPE_HOVERED_TEXT_COLOR,
	LINK_BLACK_COLOR_TYPE_PRESSED_TEXT_COLOR,
	LINK_BLACK_COLOR_TYPE_TEXT_COLOR,
	LINK_GREEN_COLOR_TYPE_HOVERED_TEXT_COLOR,
	LINK_GREEN_COLOR_TYPE_PRESSED_TEXT_COLOR,
	LINK_GREEN_COLOR_TYPE_TEXT_COLOR
} from './Link.variables';
import { LinkColorType } from './Link.types';

export const getColorFromColorType = (
	colorType: LinkColorType
): { linkColor: string; hoveredLinkColor: string; pressedLinkColor: string } => {
	switch (colorType) {
		case 'black':
			return {
				linkColor: LINK_BLACK_COLOR_TYPE_TEXT_COLOR,
				hoveredLinkColor: LINK_BLACK_COLOR_TYPE_HOVERED_TEXT_COLOR,
				pressedLinkColor: LINK_BLACK_COLOR_TYPE_PRESSED_TEXT_COLOR
			};

		case 'green':
		case 'default':
		default:
			return {
				linkColor: LINK_GREEN_COLOR_TYPE_TEXT_COLOR,
				hoveredLinkColor: LINK_GREEN_COLOR_TYPE_HOVERED_TEXT_COLOR,
				pressedLinkColor: LINK_GREEN_COLOR_TYPE_PRESSED_TEXT_COLOR
			};
	}
};
