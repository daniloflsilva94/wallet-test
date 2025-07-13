import { ReactNode } from "react";
import { Header } from "../header";
import { ContainerView, Content } from "./styles";

type ContainerProps = {
  children: ReactNode;
  style?: any;
  title?: string;
  screenName?: string;
  backgroundColor?: string;
  onAdd?: () => void;
};

export function Container({ children, style, title, backgroundColor, onAdd, screenName  }: ContainerProps) {
  return (
    <>
      <ContainerView {...style}>
        <Header title={title} backgroundColor={backgroundColor} onAdd={onAdd} screenName={screenName} />
        <Content>
          {children}
        </Content>
      </ContainerView>
    </>
  );
}