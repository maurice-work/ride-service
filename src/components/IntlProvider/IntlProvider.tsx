/* eslint-disable @typescript-eslint/unbound-method */
import * as React from 'react';
import { ILanguageContext } from './IntlProvider.types';
import { RawIntlProvider, createIntl, createIntlCache } from 'react-intl';
import { getMessages } from './messages';

const initial: ILanguageContext = {
	locale: navigator.language,
	changeLanguage: () => null
};

export const LanguageContext = React.createContext<ILanguageContext>(initial);

const cache = createIntlCache();
/** You can use this variable in other files even after reassigning it. */
let intl = createIntl({ locale: initial.locale, messages: getMessages(initial.locale) }, cache);

export const IntlProvider: React.FC<{ children: React.ReactNode }> = props => {
	const [locale, setLocale] = React.useState(initial.locale);
	const { children } = props;

	const changeLanguage = (newLocale: string): void => {
		intl = createIntl({ locale: newLocale, messages: getMessages(newLocale) }, cache);
		document.documentElement.lang = newLocale;
		setLocale(newLocale);
	};

	return (
		<LanguageContext.Provider
			value={{
				locale,
				changeLanguage
			}}
		>
			<RawIntlProvider value={intl}>{children}</RawIntlProvider>
		</LanguageContext.Provider>
	);
};

export const useLanguageContext = (): ILanguageContext => {
	return React.useContext(LanguageContext);
};
