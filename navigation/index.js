import React from 'react';

import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';

import RootNavigator from './RootNavigator';
import TabNavigator from './TabNavigator';

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
      <TabNavigator />
    </AuthenticatedUserProvider>
  );
}