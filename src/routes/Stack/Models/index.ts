import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack {
    Home: undefined
    EventHub: {
      eventName: string;
      data?: string;
      proprietario: string;
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>