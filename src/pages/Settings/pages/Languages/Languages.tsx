import { Box, List, makeStyles } from '@material-ui/core';
import { ILanguage, ILanguagesProps, ILanguagesState } from './Languages.types';
import { LanguageItem } from './components';
import { Page, SearchBox, Styling } from 'components';
import { styles } from './Languages.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export class Languages extends React.Component<ILanguagesProps, ILanguagesState, ILanguage> {
	state = {
		selectedLanguage: 'en',
		languages: [
			{ langName: 'English', text: 'English (default)', selected: true, langCode: 'en' },
			{ langName: 'Russian', text: 'Русский', selected: false, langCode: 'ru' },
			{ langName: 'Catalan', text: 'Catala', selected: false, langCode: 'sp' },
			{ langName: 'French', text: 'français', selected: false, langCode: 'fr' },
			{ langName: 'Italian', text: 'Italiano', selected: false, langCode: 'it' },
			{ langName: 'Malay', text: 'Bahasa Melayu', selected: false, langCode: 'ma' }
		],
		filteredLanguages: new Array<ILanguage>()
	};

	private handleLanguageClick = (event: React.MouseEvent<HTMLElement>, langCode: string) => {
		this.setState({ selectedLanguage: langCode });
	};

	private handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const currentLanguage = event.target.value.toLowerCase();
		const filteredLanguages = this.state.languages.filter(language => language.langName.toLowerCase().includes(currentLanguage));
		this.setState({ filteredLanguages });
	};

	componentDidMount = () => this.setState({ filteredLanguages: this.state.languages });

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title="Languages" titleSize="large" noHorizontalContentPadding>
						<div className={classes.searchBoxWrapper}>
							<SearchBox className={classes.searchBox} onChange={this.handleSearchChange} />
						</div>
						<List className={classes.providersList}>
							{this.state.filteredLanguages.map(filteredLanguage => {
								return (
									<Box key={filteredLanguage.langName}>
										<LanguageItem
											title={filteredLanguage.langName}
											text={filteredLanguage.text}
											code={filteredLanguage.langCode}
											selected={this.state.selectedLanguage === filteredLanguage.langCode}
											onClick={e => this.handleLanguageClick(e, filteredLanguage.langCode)}
										/>
									</Box>
								);
							})}
						</List>
					</Page>
				)}
			</Styling>
		);
	}
}