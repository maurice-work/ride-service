import { Box, Typography, makeStyles } from '@material-ui/core';
import { IServiceProvidersProps, IServiceProvidersState, ServiceProvider } from './ServiceProviders.types';
import { Page, Provider, ProviderDetail, Styling } from 'components';
import { images } from './images';
import { styles } from './ServiceProviders.styles';
import React from 'react';
import providerData from './provider-data.json';

const useStyles = makeStyles(styles);

export class ServiceProviders extends React.Component<IServiceProvidersProps, IServiceProvidersState> {
	state: IServiceProvidersState = {
		selectedProvider: undefined,
		providers: [] as ServiceProvider[]
	};

	private handleProviderClick = (_event: React.MouseEvent<HTMLElement>, provider: ServiceProvider) =>
		this.setState({ selectedProvider: provider });

	componentDidMount = () => this.setState({ providers: this.fetchProviders() });

	private fetchProviders = (): ServiceProvider[] =>
		providerData.providers.map(provider => {
			const icon = images.find(image => image.title === provider.name)?.src;

			if (icon) {
				provider.icon = icon;
			}

			return provider;
		});

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page canGoBack title="Service Providers" titleSize="large">
						{this.state.selectedProvider ? (
							<ProviderDetail
								key={this.state.selectedProvider.name}
								title={this.state.selectedProvider.name}
								image={this.state.selectedProvider.icon}
								paragraphs={this.state.selectedProvider.paragraphs}
							/>
						) : (
							<Box className={classes.innerContent}>
								<Box className={classes.providersList}>
									{this.state.providers.map(provider => (
										<Provider
											key={provider.name}
											image={provider.icon}
											title={provider.name}
											onClick={e => this.handleProviderClick(e, provider)}
										>
											<Typography variant="body1">{provider.shortDescription}</Typography>
										</Provider>
									))}
								</Box>
							</Box>
						)}
					</Page>
				)}
			</Styling>
		);
	}
}
