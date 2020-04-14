import { makeStyles, Typography } from '@material-ui/core';
import { Stack } from '@fluentui/react';
import { Page } from 'components';
import { styles } from './GetHelp.styles';
import { FaqFooter } from './components/FaqFooter';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqFinding: React.FunctionComponent = () => {
  const classes = useStyles();

	return (
		<>
      <Page title='Finding a bike or vehicle' titleSize='medium'>
        <Stack horizontalAlign='stretch' grow={1} tokens={{ childrenGap: 0 }} verticalFill>
          <Stack.Item>
            <Typography variant="h6" className={classes.content}>
              To find a bike or vehicle, simply open the Ruler app and you would see all available vehicles/bikes near you.
              Visit the respective place and that’s it. You are all set to star your ride.
            </Typography>
          </Stack.Item>
        </Stack>
        <FaqFooter />
			</Page>
		</>
	);
};
