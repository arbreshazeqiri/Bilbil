import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";
import PropTypes from "prop-types";

const Group8 = ({ colors: propColors }) => {
  const defaultColors = {
    hair: "#F8EAD3",
    skin: "#FFC19E",
    skinDetails: "#F0A47D",
    eyes: "#47323B",
  };

  const colors = { ...defaultColors, ...propColors };
  const { skin, skinDetails, eyes, hair } = colors;

  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 496 464"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M328 232C328 232 368 232 384 208C384 208 416 208 416 144C416 80.0004 384 72.0004 384 72.0004C384 72.0004 376 32.0004 328 48.0004V232ZM168 232C168 232 128 232 112 208C112 208 80 208 80 144C80 80.0004 112 72.0004 112 72.0004C112 72.0004 120 32.0004 168 48.0004V232Z"
          fill={hair}
        />
        <Path
          d="M0 464L22.088 370.168C25.2166 364.432 29.4833 359.395 34.6267 355.366C39.7701 351.337 45.6819 348.4 52 346.736L200 312H296L444 346.736C450.321 348.398 456.236 351.334 461.382 355.363C466.528 359.393 470.798 364.43 473.928 370.168L496 464H0Z"
          fill="#DCE2F2"
        />
        <Path
          d="M296 312C296 312 288 352 248 352C208 352 200 312 200 312V256H296V312Z"
          fill={skinDetails}
        />
        <Path
          d="M248 0C144 0 144 88 144 88V200C144 249.704 184 288 248 288C312 288 352 249.704 352 200V88C352 88 352 0 248 0Z"
          fill={skin}
        />
        <Path d="M144 128H352V144H144V128Z" fill="#634653" />
        <Path
          d="M288 168C305.673 168 320 153.673 320 136C320 118.327 305.673 104 288 104C270.327 104 256 118.327 256 136C256 153.673 270.327 168 288 168Z"
          fill="#F8EAD3"
        />
        <Path
          d="M208 168C225.673 168 240 153.673 240 136C240 118.327 225.673 104 208 104C190.327 104 176 118.327 176 136C176 153.673 190.327 168 208 168Z"
          fill="#F8EAD3"
        />
        <Path
          d="M288 176C280.089 176 272.355 173.654 265.777 169.259C259.199 164.864 254.072 158.616 251.045 151.307C248.017 143.998 247.225 135.956 248.769 128.196C250.312 120.437 254.122 113.31 259.716 107.716C265.31 102.122 272.437 98.312 280.196 96.7686C287.956 95.2252 295.998 96.0173 303.307 99.0448C310.616 102.072 316.864 107.199 321.259 113.777C325.654 120.355 328 128.089 328 136C327.987 146.605 323.769 156.772 316.27 164.27C308.772 171.769 298.605 175.987 288 176ZM288 112C283.253 112 278.613 113.408 274.666 116.045C270.72 118.682 267.643 122.43 265.827 126.816C264.01 131.201 263.535 136.027 264.461 140.682C265.387 145.338 267.673 149.614 271.029 152.971C274.386 156.327 278.662 158.613 283.318 159.539C287.973 160.465 292.799 159.99 297.184 158.173C301.57 156.357 305.318 153.28 307.955 149.334C310.592 145.387 312 140.747 312 136C312 129.635 309.471 123.53 304.971 119.029C300.47 114.529 294.365 112 288 112Z"
          fill="#634653"
        />
        <Path
          d="M208 176C200.089 176 192.355 173.654 185.777 169.259C179.199 164.864 174.072 158.616 171.045 151.307C168.017 143.998 167.225 135.956 168.769 128.196C170.312 120.437 174.122 113.31 179.716 107.716C185.31 102.122 192.437 98.312 200.196 96.7686C207.956 95.2252 215.998 96.0173 223.307 99.0448C230.616 102.072 236.864 107.199 241.259 113.777C245.654 120.355 248 128.089 248 136C247.987 146.605 243.769 156.772 236.27 164.27C228.772 171.769 218.605 175.987 208 176ZM208 112C203.253 112 198.613 113.408 194.666 116.045C190.72 118.682 187.643 122.43 185.827 126.816C184.01 131.201 183.535 136.027 184.461 140.682C185.387 145.338 187.673 149.614 191.029 152.971C194.386 156.327 198.662 158.613 203.318 159.539C207.973 160.465 212.799 159.99 217.184 158.173C221.57 156.357 225.318 153.28 227.955 149.334C230.592 145.387 232 140.747 232 136C232 129.635 229.471 123.53 224.971 119.029C220.47 114.529 214.365 112 208 112Z"
          fill="#634653"
        />
        <Path
          d="M248 208C248 208 240 256 184 240C184 240 192 184 248 208ZM248 208C248 208 256 256 312 240C312 240 304 184 248 208Z"
          fill={hair}
        />
        <Path
          d="M352 176C360.487 176 368.626 172.629 374.627 166.627C380.629 160.626 384 152.487 384 144C384 135.513 380.629 127.374 374.627 121.373C368.626 115.371 360.487 112 352 112V176ZM144 176C135.513 176 127.374 172.629 121.373 166.627C115.371 160.626 112 152.487 112 144C112 135.513 115.371 127.374 121.373 121.373C127.374 115.371 135.513 112 144 112V176Z"
          fill={skinDetails}
        />
        <Path
          d="M104 334.528V464H191.704L141.656 325.696L104 334.528ZM392 334.528V464H304.296L354.344 325.696L392 334.528Z"
          fill="#37322F"
        />
        <Path
          d="M296 144H280C277.878 144 275.843 143.157 274.343 141.657C272.843 140.157 272 138.122 272 136C272 133.878 272.843 131.843 274.343 130.343C275.843 128.843 277.878 128 280 128H296C298.122 128 300.157 128.843 301.657 130.343C303.157 131.843 304 133.878 304 136C304 138.122 303.157 140.157 301.657 141.657C300.157 143.157 298.122 144 296 144ZM216 144H200C197.878 144 195.843 143.157 194.343 141.657C192.843 140.157 192 138.122 192 136C192 133.878 192.843 131.843 194.343 130.343C195.843 128.843 197.878 128 200 128H216C218.122 128 220.157 128.843 221.657 130.343C223.157 131.843 224 133.878 224 136C224 138.122 223.157 140.157 221.657 141.657C220.157 143.157 218.122 144 216 144Z"
          fill={eyes}
        />
        <Path
          d="M248 96C243.27 95.7382 238.643 94.5161 234.4 92.408C228.653 89.6392 222.378 88.136 216 88C213.878 88 211.843 87.1571 210.343 85.6569C208.843 84.1566 208 82.1217 208 80C208 77.8783 208.843 75.8434 210.343 74.3431C211.843 72.8429 213.878 72 216 72C224.487 72.1159 232.854 74.0242 240.552 77.6C242.892 78.788 245.406 79.598 248 80C250.594 79.598 253.108 78.788 255.448 77.6C263.146 74.0242 271.513 72.1159 280 72C282.122 72 284.157 72.8429 285.657 74.3431C287.157 75.8434 288 77.8783 288 80C288 82.1217 287.157 84.1566 285.657 85.6569C284.157 87.1571 282.122 88 280 88C273.622 88.136 267.347 89.6392 261.6 92.408C257.357 94.5161 252.73 95.7382 248 96ZM248 64C243.27 63.7382 238.643 62.5161 234.4 60.408C228.653 57.6392 222.378 56.136 216 56C213.878 56 211.843 55.1571 210.343 53.6569C208.843 52.1566 208 50.1217 208 48C208 45.8783 208.843 43.8434 210.343 42.3431C211.843 40.8429 213.878 40 216 40C224.487 40.1159 232.854 42.0242 240.552 45.6C242.892 46.788 245.406 47.598 248 48C250.594 47.598 253.108 46.788 255.448 45.6C263.146 42.0242 271.513 40.1159 280 40C282.122 40 284.157 40.8429 285.657 42.3431C287.157 43.8434 288 45.8783 288 48C288 50.1217 287.157 52.1566 285.657 53.6569C284.157 55.1571 282.122 56 280 56C273.622 56.136 267.347 57.6392 261.6 60.408C257.357 62.5161 252.73 63.7382 248 64ZM248 216C241.635 216 235.53 213.471 231.029 208.971C226.529 204.47 224 198.365 224 192C224 189.878 224.843 187.843 226.343 186.343C227.843 184.843 229.878 184 232 184C234.122 184 236.157 184.843 237.657 186.343C239.157 187.843 240 189.878 240 192C240 194.122 240.843 196.157 242.343 197.657C243.843 199.157 245.878 200 248 200C250.122 200 252.157 199.157 253.657 197.657C255.157 196.157 256 194.122 256 192C256 189.878 256.843 187.843 258.343 186.343C259.843 184.843 261.878 184 264 184C266.122 184 268.157 184.843 269.657 186.343C271.157 187.843 272 189.878 272 192C272 198.365 269.471 204.47 264.971 208.971C260.47 213.471 254.365 216 248 216Z"
          fill={skinDetails}
        />
      </Svg>
    </View>
  );
};

Group8.propTypes = {
  colors: PropTypes.shape({
    hair: PropTypes.string,
    skinDetails: PropTypes.string,
    skin: PropTypes.string,
    eyes: PropTypes.string,
  }),
};

export default Group8;
