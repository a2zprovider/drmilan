import { Dimensions } from "react-native"
import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
    // Use dark color scheme
    console.log('dark');
}
if (colorScheme === 'light') {
    // Use dark color scheme
    console.log('light');
}
if (colorScheme === 'null') {
    // Use dark color scheme
    console.log('null');
}

export const AppInfo = {
    name: 'Vijaysreerk',
    version: '1.0.0'
}

export const COLORS = {
    primary: '#2596be',
    white: '#ffffff',
    primary_fade: '#2596be55',
    bgColor: '#f0f0f5',

    primary01: 'rgba(108, 95, 252, 0.1)',
    primary02: 'rgba(108, 95, 252, 0.2)',
    primary03: 'rgba(108, 95, 252, 0.3)',
    primary06: 'rgba(108, 95, 252, 0.6)',
    primary09: 'rgba(108, 95, 252, 0.9)',

    primary_bg_color: '#6c5ffc',
    primary_bg_hover: '#233ac5',
    primary_bg_border: '#5161c1',
    dark_body: '#292e4a',
    dark_border: '#30314e',
    dark_primary: '#6c5ffc',
    transparent_primary: '#6c5ffc',
    transparent_success: 'rgba(0, 230, 130, 0.1)',
    transparent_warning: 'rgba(255, 193, 7, 0.1)',
    transparent_danger: 'rgba(255, 0, 0, 0.1)',
    transparent_body: '#584cd9',
    transparent_theme: 'rgba(0, 0, 0, 0.2)',
    dark_primary_hover: '#233ac5',
    primary_transparentcolor: '#eaedf7',
    darkprimary_transparentcolor: '#2b356e',
    transparentprimary_transparentcolor: 'rgba(255, 255, 255, 0.05)',
    indigo: '#4b0082',
    purple: '#6f42c1',
    orange: '#fd7e14',
    yellow: '#FBB034',
    green: '#28a745',
    teal: '#20c997',
    cyan: '#17a2b8',
    white: '#fff',
    gray: '#6c757d',
    gray_dark: '#343a40',
    primary: '#6c5ffc',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#343a40',
}

export const SCREEN = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export const API_BASE = 'https://vijaysreerk.com/api/'
// export const API_BASE = 'https://mlm.a2zproviders.com/api/'