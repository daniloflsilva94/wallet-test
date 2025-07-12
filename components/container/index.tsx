import { ReactNode } from "react";
import { ContainerView, ShapeBottom, ShapeTop } from "./styles";

type ContainerProps = {
  children: ReactNode;
  style?: any;
};

export function Container({ children, style }: ContainerProps) {
  return (
    <ContainerView {...style}>
      <ShapeTop />
      {children}
      <ShapeBottom />
    </ContainerView>
  );
}