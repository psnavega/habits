import { View, Text } from "react-native";
import { Header } from "../components/Header";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";


const weekDays = ['D','S','T','Q','Q','S','S'];


export function Home() {
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <Header />

            <View>
                {
                    weekDays.map((weekDay, index) => {
                        return (
                            <Text 
                                key={`${weekDay}-${index}`}
                                className="text-zinc-400 text-xl font-bold text-center mx-1"
                                style={{ width: DAY_SIZE}}>
                                {weekDay}
                            </Text>
                        )
                    })
                }
            </View>
            
            <HabitDay/>
        </View>
    )
}