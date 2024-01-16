import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";
import PropTypes from "prop-types";

const Group1 = ({ colors: propColors }) => {
  const defaultColors = {
    skinDetails: "#F0A47D",
    hair: "#47323B",
    skin: "#FFC19E",
    eyes: "#47323B"
  };

  const colors = { ...defaultColors, ...propColors };
  const { skinDetails, hair, eyes, skin } = colors;

  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 496 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0 480l30.52-70.944A48.001 48.001 0 0158.688 386.4L200 336v-64h96v64l141.312 50.4a48.003 48.003 0 0128.168 22.664L496 480H0z"
          fill={skinDetails}
        />
        <Path
          d="M30.52 409.056L0 480h496l-30.52-70.944a48 48 0 00-28.168-22.656L296 336a174.38 174.38 0 01-48 8 174.38 174.38 0 01-48-8L58.688 386.4a48.001 48.001 0 00-28.168 22.656z"
          fill={"#634653"}
        />
        <Path
          d="M248 392s-48 8-48 64c0 0 48-8 48-64zm0 0s48 8 48 64c0 0-48-8-48-64z"
          fill={"#E6294F"}
        />
        <Path d="M200 336s-16 56 48 56 48-56 48-56h-96z" fill={"#F8EAD3"} />
        <Path
          d="M184 408c48 0 64-16 64-16l-48-56-51.056 18.208C154.352 381.784 164.896 408 184 408zm128 0c-48 0-64-16-64-16l48-56 51.056 18.208C341.648 381.784 331.104 408 312 408z"
          fill={"#E6294F"}
        />
        <Path
          d="M248 416c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
          fill={"#BA2140"}
        />
        <Path
          d="M144 248c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
          fill={hair}
        />
        <Path
          d="M136 288c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
          fill={hair}
        />
        <Path
          d="M136 328c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
          fill={hair}
        />
        <Path
          d="M136 368c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
          fill={hair}
        />
        <Path
          d="M160 384c0 13.256-24 40-24 40s-24-26.744-24-40c0-6.365 2.529-12.47 7.029-16.971a24.005 24.005 0 0133.942 0A24.005 24.005 0 01160 384zM352 248c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
          fill={hair}
        />
        <Path
          d="M360 288c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
          fill={hair}
        />
        <Path
          d="M360 328c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
          fill={hair}
        />
        <Path
          d="M360 368c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
          fill={hair}
        />
        <Path
          d="M336 384c0 13.256 24 40 24 40s24-26.744 24-40c0-6.365-2.529-12.47-7.029-16.971a24.005 24.005 0 00-33.942 0A24.005 24.005 0 00336 384z"
          fill={hair}
        />
        <Path
          d="M336 208a31.996 31.996 0 0022.627-9.373 31.996 31.996 0 000-45.254A31.996 31.996 0 00336 144v64zm-176 0a31.996 31.996 0 01-22.627-9.373 31.996 31.996 0 010-45.254A31.996 31.996 0 01160 144v64z"
          fill={skinDetails}
        />
        <Path
          d="M160 80h176v144a80.005 80.005 0 01-23.431 56.569A80.005 80.005 0 01256 304h-16a80.005 80.005 0 01-56.569-23.431A80.005 80.005 0 01160 224V80z"
          fill={skin}
        />
        <Path
          d="M264 104s-48 88-144 32c0 0-8-136 104-136 56 0 72 16 72 16l-32 88z"
          fill={hair}
        />
        <Path
          d="M296 16l-32 88a98.007 98.007 0 0037.4 36.1A98.005 98.005 0 00352 152s48-128-56-136zm-8 176a8 8 0 01-8-8v-16a8 8 0 1116 0v16a8 8 0 01-8 8zm-80 0a8 8 0 01-8-8v-16a8 8 0 1116 0v16a8 8 0 01-8 8z"
          fill={hair}
        />
        <Path
          d="M288 184C285.878 184 283.843 183.157 282.343 181.657C280.843 180.157 280 178.122 280 176V160C280 157.878 280.843 155.843 282.343 154.343C283.843 152.843 285.878 152 288 152C290.122 152 292.157 152.843 293.657 154.343C295.157 155.843 296 157.878 296 160V176C296 178.122 295.157 180.157 293.657 181.657C292.157 183.157 290.122 184 288 184ZM208 184C205.878 184 203.843 183.157 202.343 181.657C200.843 180.157 200 178.122 200 176V160C200 157.878 200.843 155.843 202.343 154.343C203.843 152.843 205.878 152 208 152C210.122 152 212.157 152.843 213.657 154.343C215.157 155.843 216 157.878 216 160V176C216 178.122 215.157 180.157 213.657 181.657C212.157 183.157 210.122 184 208 184Z"
          fill={eyes}
        />
        <Path
          d="M248 280a42.523 42.523 0 01-39.16-20.424 8.004 8.004 0 013.516-10.756 8.004 8.004 0 0110.756 3.516A27.201 27.201 0 00248 264a27.135 27.135 0 0024.896-11.68 7.997 7.997 0 0110.76-3.36 7.942 7.942 0 013.504 10.616A42.523 42.523 0 01248 280zm0-40a24.005 24.005 0 01-16.971-7.029 24.005 24.005 0 010-33.942A24.005 24.005 0 01248 192a8 8 0 110 16 8 8 0 100 16 8 8 0 110 16z"
          fill={skinDetails}
        />
      </Svg>
    </View>
  );
};

Group1.propTypes = {
  colors: PropTypes.shape({
    skinDetails: PropTypes.string,
    hair: PropTypes.string,
    skin: PropTypes.string,
    eyes: PropTypes.string,
  }),
};

export default Group1;
