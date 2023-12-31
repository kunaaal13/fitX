import { ImageURISource, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Carousel, { AdditionalParallaxProps, ParallaxImage } from 'react-native-snap-carousel';

const images = [
  require('assets/images/slides/slide1.webp'),
  require('assets/images/slides/slide2.webp'),
  require('assets/images/slides/slide3.webp'),
  require('assets/images/slides/slide4.webp'),
  require('assets/images/slides/slide5.webp'),
];

function Slider() {
  return (
    <View className="py-5">
      <Carousel
        data={images}
        autoplay
        renderItem={SliderItem}
        hasParallaxImages
        sliderWidth={widthPercentageToDP(100)}
        firstItem={1}
        autoplayInterval={4000}
        itemWidth={widthPercentageToDP(100) - 70}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
}

export default Slider;

function SliderItem<T extends ImageURISource>(
  { item, index }: { item: T; index: number },
  parallaxProps?: AdditionalParallaxProps
) {
  return (
    <View style={{ width: widthPercentageToDP(100) - 70, height: heightPercentageToDP(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: 'contain' }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
}
