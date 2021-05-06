import { createGlobalStyle } from 'styled-components';

import PoppinsExtraBold from '../assets/fonts/Poppins/Poppins-ExtraBold.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsRegular from '../assets/fonts/Poppins/Poppins-Regular.ttf';

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins ExtraBold';
        src: url(${PoppinsExtraBold}) format('ttf');
    }
    @font-face {
        font-family: 'Poppins Regular';
        src: url(${PoppinsRegular}) format('ttf');
    }
`;
