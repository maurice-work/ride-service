import {
	ChangePassword,
	DarkMode,
	DriveLicence,
	Languages,
	News,
	Notifications,
	Profile,
	ServiceProviders,
	Settings,
	Splash,
	Welcome
} from 'pages';

import {
  GetHelp,
  Faq,
  Privacy,
  Contactus,
  FaqUnlock,
  FaqStart,
  FaqPause,
  FaqLock,
  FaqFinding,
  FaqPark,
  FaqZones,
  SafetyRegulations,
  SafetyScooter
} from 'pages/GetHelp';

import { CssBaseline } from '@material-ui/core';
import { GlobalCss } from './App.styles';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { Theming } from 'components';
import React from 'react';

export const App: React.FunctionComponent = () => (
	<Theming>
		<CssBaseline />
		<GlobalCss />
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/splash" component={Splash} exact />
					<Route path="/settings" component={Settings} exact />
					<Route path="/service-providers/:provider?" component={ServiceProviders} exact />
					<Route path="/welcome" component={Welcome} exact />
					<Route path="/news" component={News} exact />
					<Route path="/settings/change-password" component={ChangePassword} exact />
					<Route path="/drive-license" component={DriveLicence} exact />
					<Route path="/settings/notifications" component={Notifications} exact />
					<Route path="/settings/languages" component={Languages} exact />
					<Route path="/settings/profile" component={Profile} exact />
          <Route path="/settings/dark-mode" component={DarkMode} exact />

          <Route path="/gethelp" component={GetHelp} exact />
          <Route path="/gethelp/faq" component={Faq} exact />
          <Route path="/gethelp/faq/unlock" component={FaqUnlock} exact />
          <Route path="/gethelp/faq/start" component={FaqStart} exact />
          <Route path="/gethelp/faq/pause" component={FaqPause} exact />
          <Route path="/gethelp/faq/lock" component={FaqLock} exact />
          <Route path="/gethelp/faq/finding" component={FaqFinding} exact />
          <Route path="/gethelp/faq/park" component={FaqPark} exact />
          <Route path="/gethelp/faq/zones" component={FaqZones} exact />
          <Route path="/gethelp/privacy-policy" component={Privacy} exact />
          <Route path="/gethelp/contactus" component={Contactus} exact />
          <Route path="/gethelp/regulations" component={SafetyRegulations} exact />
          <Route path="/gethelp/regulations/scooter" component={SafetyScooter} exact />

          <Route exact path="/" render={() => <Redirect to="/splash" />} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	</Theming>
);
