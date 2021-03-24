import React, { useState } from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: '1',
    title: 'REACT NATIVE NA PRÁTICA',
    text: 'Estude React Native do zero, usando tecnologias modernas e avançadas para turbinar sua carreira.',
    image: require('./src/assets/img1.png')
  },
  {
    key: '2',
    title: '100% DO SEU JEITO',
    text: 'Aprenda a construir aplicativos e sistemas completos usando React Native, de onde estiver e na hora que puder.',
    image: require('./src/assets/img2.png')
  },
  {
    key: '3',
    title: 'DO ZERO AO MERCADO',
    text: 'Nós pensamos em tudo. Entre e termine os estudos com total preparo para o mercado de trabalho.',
    image: require('./src/assets/img3.png')
  },
];

export default function App(){
  const [showHome, setShowHome] = useState(false);

  function renderSlides({ item }){
    return(
      <View style={{flex:1}}>
        <Image
        source={item.image}
        style={{
          resizeMode: 'cover',
          height: '50%',
          width: '70%',
          marginTop: 90,
          marginLeft: 60
        }}
        />

        <Text style={{
          paddingTop: 15,
          paddingBottom: 10,
          fontSize: 25,
          fontWeight: 'bold',
          color: '#009CFF',
          alignSelf: 'center'
        }}>
          {item.title}
        </Text>

        <Text style={{
          textAlign: 'center',
          color: '#808080',
          paddingHorizontal: 25,
          fontSize:17
        }}>
          {item.text}
        </Text>
      </View>
    )
  }


  if(showHome){
    return <Text>ENTROU NA HOME</Text>
  } else{
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor:'#009CFF',
          width: 30
        }}
        renderNextButton={ () => {}}
        renderDoneButton={ () => <Text style={{
          fontSize: 15,
          backgroundColor: '#009CFF',
          color: '#fff',
          padding: 10,
          borderRadius: 10,
          marginRight: 25,
          paddingTop: 10,
          fontWeight: 'bold'
          }}>ENTRAR</Text>}
        onDone={() => alert('Seja bem-vindo ao App!')}
      />
    );
  }
}
 
