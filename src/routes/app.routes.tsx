import React from 'react';
import Dashboard from '../pages/Dashboard';

import { createStackNavigator } from '@react-navigation/stack';

const DashboardStack = createStackNavigator();

export default function AppRoutes() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
}
