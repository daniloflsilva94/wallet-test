import { theme } from "@/src/theme/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { ContainerHeader, ContainerTitle, ContentHeader, Label, TextHeader } from "./styles";

type HeaderProps = {
  title?: string;
  backgroundColor?: string;
  onAdd?: () => void;
  screenName?: string;
};

export function Header({ title, backgroundColor, onAdd, screenName }: HeaderProps) {
  if (!title) return null;

  const navigation = useNavigation();

  return (
    <>
      <ContainerHeader backgroundColor={backgroundColor}>
        <ContentHeader>
          <TouchableOpacity onPress={() => navigation.goBack()} testID="header-back-button">
            <MaterialCommunityIcons name="arrow-left" size={26} color={theme.colors.blue_light} />
          </TouchableOpacity>
          <TextHeader backgroundColor={backgroundColor}>{title}</TextHeader>
          {!!onAdd ? (
            <TouchableOpacity onPress={onAdd} testID="header-add-button">
              <MaterialCommunityIcons name="plus" size={26} color={theme.colors.blue_light} />
            </TouchableOpacity>
          )
            :
            <View />
          }
        </ContentHeader>
      </ContainerHeader>
      {backgroundColor && screenName && (
        <ContainerTitle>
          <Label>{screenName}</Label>
        </ContainerTitle>
      )}
    </>
  );
}