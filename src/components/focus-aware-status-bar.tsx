import { useIsFocused } from "@react-navigation/native";
import { StatusBar, type StatusBarProps } from "react-native";

export default function FocusAwareStatusBar(props: StatusBarProps) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
