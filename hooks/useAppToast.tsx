import { Toast, ToastDescription, ToastTitle, useToast } from "@gluestack-ui/themed";
import { AlertTriangle, CheckCircle } from "lucide-react-native";
import { View } from "react-native";


type ToasType = 'success' | 'error';

export function useAppToast(){
    const toast = useToast();

    const showToast = (type: ToasType, title : string, description: string, duration: number = 50000) =>{
        toast.closeAll();
        toast.show({
            
            placement: type === 'success' ? 'top': 'bottom',
            render: ({id})=>{
                const toastId = "toast-"+id;
                const Icon = type === 'success' ? CheckCircle:AlertTriangle;
                const color = type === 'success'? '#000':'red';
                const action = type === 'success'? 'success':'error'
                const variant = type === 'success'? 'solid': 'outline';
                return(
                    <Toast nativeID={toastId} action={action} variant={variant} >
                        <Icon color={color} size={20} style={{marginRight:8}}/>
                        <View >
                            <ToastTitle>{title}</ToastTitle>
                            <ToastDescription>{description}</ToastDescription>
                        </View>
                    </Toast>
                )
            },
            // containerStyle:{marginTop:15},
            duration:duration
        })
    }
    return {showToast}
       
}