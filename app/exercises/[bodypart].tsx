import { Ionicons } from '@expo/vector-icons';
import ExerciseList from 'components/exercises/exercise-list';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import { bodyParts } from 'utils/constants';
import { getExercisesByBodyPart } from 'utils/exercises';

function BodyPart() {
  // [bodypart] value
  const bodypart = useLocalSearchParams().bodypart as string;
  const [exercises] = useState(getExercisesByBodyPart(bodypart));

  const image = bodyParts.find((part) => part.name === bodypart)?.image;

  if (!image) {
    router.push('/home');
  }

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={image}
        style={{ width: widthPercentageToDP(100), height: heightPercentageToDP(45) }}
        className="rounded-b-[30px]"
      />

      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          marginTop: heightPercentageToDP(5),
          width: heightPercentageToDP(5),
          height: heightPercentageToDP(5),
        }}
        className="bg-violet-500 rounded-full mx-4 absolute flex items-center justify-center">
        <Ionicons name="arrow-back" size={heightPercentageToDP(3)} color="black" />
      </TouchableOpacity>

      {/* Body Part Exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: heightPercentageToDP(3) }}
          className="font-semibold text-violet-500 capitalize">
          {bodypart} exercises
        </Text>
        <View className="mb-10">
          <ExerciseList exercises={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}

export default BodyPart;
