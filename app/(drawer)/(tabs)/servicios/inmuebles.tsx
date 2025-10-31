// import { Feather } from "lucide-react-native"
import { ThemedText } from "@/components/themed-text";
import Feather from '@expo/vector-icons/Feather';
import { Accordion, AccordionContent, AccordionContentText, AccordionHeader, AccordionItem, AccordionTitleText, AccordionTrigger, AddIcon, RemoveIcon } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import styled, { useTheme } from "styled-components/native";



export default function Inmuebles() {
    const item = "item1"
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();
    return (
        <Container>
            {/* <Link href="/(tabs)/servicios" asChild>
                <Touchable>
                    <ArrowLeft name="arrow-left" />
                    <ThemedText>Regresar</ThemedText>
                </Touchable>
            </Link> */}
            <Touchable onPress={() => router.back()}>
                <ArrowLeft name="arrow-left" />
                <ThemedText>Regresar</ThemedText>
            </Touchable>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Mis inmuebles
            </Text>
            {/* <CardComponent variant="elevated" >
                    <Text></Text>
                </CardComponent> */}
            <Accordion type="single" style={{
                backgroundColor: 'transparent',
                marginTop:15}}
                isCollapsible
                onValueChange={(values: string[]) => setExpanded(values.includes("item1"))}>
                <AccordionItem value="item1" style={{
                    borderWidth: 1,
                    // borderColor: '#ff1a72',
                    borderRadius: 12,
                    marginBottom: 10,
                    overflow: 'hidden',
                }} >
                    <AccordionHeader>
                        <AccordionTrigger style={{ padding: 10, backgroundColor: theme.backgroundCard }}>
                            {expanded ? <RemoveIcon /> : <AddIcon />}
                            <AccordionTitleText>
                                item 1 ?
                            </AccordionTitleText>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent style={{ backgroundColor: theme.backgroundCard, padding: 10, paddingTop: 0, marginTop: 0, }}>
                        <AccordionContentText>
                            To place an order, simply select the products you want, proceed to
                            checkout, provide shipping and payment information, and finalize
                            your purchase.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item2" style={{
                    borderWidth: 1,
                    // borderColor: '#ff1a72',
                    borderRadius: 12,
                    marginBottom: 10,
                    overflow: 'hidden',
                }} >
                    <AccordionHeader>
                        <AccordionTrigger  style={{ padding: 10, backgroundColor: theme.backgroundCard }}>
                            {expanded ? <RemoveIcon /> : <AddIcon />}
                            <AccordionTitleText>
                                item 2 ?
                            </AccordionTitleText>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent style={{ backgroundColor: theme.backgroundCard, padding: 10, paddingTop: 0, marginTop: 0, }}>
                        <AccordionContentText>
                            To place an order, simply select the products you want, proceed to
                            checkout, provide shipping and payment information, and finalize
                            your purchase.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>


        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${({ theme }) => theme.background};
`
const ArrowLeft = styled(Feather)`
    color: ${({ theme }) => theme.text};
    font-size: 20px;
`
const Touchable = styled.TouchableOpacity`
    flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 5px;
  padding: 5px;
    
`