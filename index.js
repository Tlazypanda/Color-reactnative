
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { createStackNavigator } from 'react-navigation'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
import WebPage from './components/WebPage'

const App = createStackNavigator({
  Home: { screen: ColorList },
  Details: { screen: ColorInfo },
  Web: { screen: WebPage }
})

AppRegistry.registerComponent(appName, () => ColorList);
