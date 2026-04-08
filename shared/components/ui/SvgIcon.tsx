import { View } from "react-native";
import { SvgProps } from "react-native-svg";

interface SvgIconProps {
     Source: React.FC<SvgProps>;
     fill?: string;
     className?: string;
}

const SvgIcon = ({ Source, fill = "#f3eef0", className }: SvgIconProps) => (
     <View className={`${className}`}> 
          <Source fill={fill} />
     </View>
);

export default SvgIcon;