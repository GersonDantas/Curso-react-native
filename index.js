import 'react-native-gesture-handler';
import Menu from './src/menu';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Menu);
