import styled from "styled-components/native";
import { StyleProp, ViewStyle, ViewProps } from "react-native";

interface CardProps extends ViewProps {
    children: React.ReactNode;
    variant?: 'default' | 'elevated' | 'outlined';
    padding?: number;
    radius?: number;
    style?: StyleProp<ViewStyle>;
}

export const CardComponent: React.FC<CardProps> = ({
    children,
    variant = 'default',
    padding = 16,
    radius = 12,
    style,
    ...rest
}) => {
    return (
        <CardContainer
            style={style}
            variant={variant}
            padding={padding}
            radius={radius}
            {...rest}>
            {children}
        </CardContainer>
    );
}

const CardContainer = styled.View<{
    variant: "default" | "outlined" | "elevated";
    padding: number;
    radius: number;
}>`
 flex: 1;
  background-color: ${({ theme }) => theme.backgroundCard};
  border-radius: ${({ radius }) => radius}px;
  padding: ${({ padding }) => padding}px;
  border-width: ${({ variant }) => (variant === "outlined" ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.subText};
  elevation: ${({ variant }) => (variant === "elevated" ? 4 : 0)};
  shadow-color: #000;
  shadow-opacity: ${({ variant }) => (variant === "elevated" ? 0.2 : 0)};
  shadow-radius: 3px;
  shadow-offset: 0px 2px;
`;
