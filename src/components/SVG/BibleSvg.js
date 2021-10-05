import React from "react";
import { SvgXml } from "react-native-svg";

const BibleSvg = ({ type, color }) => {
    if (type == "arrowdown") {
        var xml = `<svg xmlns="http://www.w3.org/2000/svg" width="15.324" height="9.443" viewBox="0 0 15.324 9.443">
        <g id="Composant_87_1" data-name="Composant 87 – 1" transform="translate(0.731 0.696)">
          <path id="Tracé_377" data-name="Tracé 377" d="M256.36,254.318l6.81,7.3,7.065-7.3" transform="translate(-256.36 -254.318)" fill="none" stroke=`+(color ? color : 'black')+` stroke-width="2"/>
        </g>
      </svg>
      `;
      }

}
export default BibleSvg;