/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LotsOfStyles from './View/index'
import { Login } from './View/Login';
import Cards from './View/Cards';
import CategoryUse from './Screen/CategoryUse';

AppRegistry.registerComponent(appName, () => CategoryUse);
