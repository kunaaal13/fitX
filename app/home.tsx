import BodyPartsList from 'components/home/body-parts';
import HomeHeader from 'components/home/header';
import Slider from 'components/home/slider';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
      <StatusBar style="dark" />
      <HomeHeader />
      <Slider />
      <BodyPartsList />
    </SafeAreaView>
  );
}

export default Home;
