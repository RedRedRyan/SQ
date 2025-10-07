import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { images } from "@/constants";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Index() {
    const Header = () => (
        <View className="flex-row justify-between items-center px-5 py-4 bg-white border-b border-gray-200">
            <View>
                <Text className="text-sm font-bold text-primary">Hello</Text>
                <TouchableOpacity className="flex-row items-center mt-1">
                    <Text className="text-base font-semibold text-dark-100">Nairobi</Text>
                    <Image
                        source={images.arrowDown}
                        className="w-3 h-3 ml-1"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
  return (
    <SafeAreaView>
        <ScrollView
        showsVerticalScrollIndicator={false}>
            <Header />
        </ScrollView>
    </SafeAreaView>
  );
}
