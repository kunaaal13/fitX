import { Image } from 'expo-image';
import { router } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Exercise } from 'utils/exercises';

interface ExerciseListProps {
  exercises: Exercise[];
}

function ExerciseList({ exercises }: ExerciseListProps) {
  return (
    <View>
      <FlatList
        data={exercises}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item, index }) => {
          const animation = index % 2 === 0 ? FadeInLeft : FadeInRight;
          return (
            <Animated.View
              entering={animation
                .duration(400)
                .delay(index * 200)
                .springify()}>
              <TouchableOpacity
                onPress={() => router.push(`/exercise/${item.id}`)}
                className="flex py-3 space-y-2">
                <View className="bg-white shadow rounded-[25px]">
                  <Image
                    source={{ uri: item.gifUrl }}
                    contentFit="cover"
                    style={{ width: widthPercentageToDP(44), height: widthPercentageToDP(52) }}
                    className="rounded-[25px]"
                  />
                </View>

                <Text
                  style={{ fontSize: heightPercentageToDP(1.7) }}
                  className="text-neutral-700 font-semibold ml-1  tracking-wide">
                  {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

export default ExerciseList;
