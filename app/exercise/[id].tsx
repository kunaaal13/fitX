import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import { getExerciseById } from 'utils/exercises';

function Exercise() {
  const exerciseId = useLocalSearchParams().id as string;

  const [exercise] = useState(getExerciseById(exerciseId));

  if (!exercise) {
    router.push('/home');

    return null;
  }

  return (
    <View className="flex flex-1">
      <Image
        source={{ uri: exercise.gifUrl }}
        contentFit="cover"
        style={{ width: widthPercentageToDP(100), height: widthPercentageToDP(100) }}
        className="rounded-b-[40px] shadow-md bg-white"
      />

      {/* Close Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-0 right-0 mt-4 mr-4 bg-violet-500 rounded-full flex items-center justify-center"
        style={{
          width: heightPercentageToDP(4),
          height: heightPercentageToDP(4),
        }}>
        <Ionicons name="close" size={heightPercentageToDP(2.5)} color="white" />
      </TouchableOpacity>

      <ScrollView
        className="mx-4 my-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}>
        <View className="space-y-3">
          <Animated.Text
            entering={FadeInDown.duration(300).springify()}
            style={{ fontSize: heightPercentageToDP(3) }}
            className="font-semibold text-violet-500 tracking-wide capitalize">
            {exercise.name}
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(100).duration(300).springify()}
            style={{ fontSize: heightPercentageToDP(2) }}
            className="tracking-wide font-medium">
            Equipment: <Text className="font-normal">{exercise.equipment}</Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(200).duration(300).springify()}
            style={{ fontSize: heightPercentageToDP(2) }}
            className="font-medium tracking-wide">
            Secondary Muscles:{' '}
            <Text className="font-normal">{exercise.secondaryMuscles.join(', ')}</Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(300).duration(300).springify()}
            style={{ fontSize: heightPercentageToDP(2) }}
            className="font-medium tracking-wide">
            Target: <Text className="font-normal">{exercise.target}</Text>
          </Animated.Text>
        </View>

        <View className="space-y-2 mt-5">
          <Animated.Text
            entering={FadeInDown.delay(400).duration(300).springify()}
            style={{ fontSize: heightPercentageToDP(3) }}
            className="font-semibold text-violet-500 tracking-wide">
            Instructions
          </Animated.Text>

          {exercise.instructions.map((instruction, index) => {
            return (
              <Animated.Text
                entering={FadeInDown.delay((index + 5) * 100)
                  .duration(300)
                  .springify()}
                key={instruction}
                style={{ fontSize: heightPercentageToDP(1.7) }}
                className="text-neutral-800">
                {index + 1}. {instruction}
              </Animated.Text>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Exercise;
