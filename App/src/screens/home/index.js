import React, { Component } from 'react';
import {
  Text, SafeAreaView, ScrollView, View
} from 'react-native';

import {
  Container,
  ContainerHeader,
  ContainerTitle,
  ContainerSearch,
  ContainerBody,
  ContainerCategories,
  ContainerItems,
  TextInput,
  CardItem,
  ContainerCardProduct,
  ContainerCardProductItem,
  ContainerHeaderCard,
  ContainerCardText,
  ContainerCardTextSecond,
  ContainerTitleItems,
  ScrollViewContent,
  ImageIcon,
  TitleCard,
  SubTitleCard,
  TitleFooterCard,
} from './styles';

const iconChaqueta = require('../../assets/chaquetaIcon.png');


const dataCategories = [
  {
    item: 'Icon1'
  },
  {
    item: 'Icon2'
  },
  {
    item: 'Icon3'
  },
  {
    item: 'Icon4'
  },
  {
    item: 'Icon5'
  },
  {
    item: 'Icon1'
  },
  {
    item: 'Icon2'
  },
  {
    item: 'Icon3'
  },
  {
    item: 'Icon4'
  },
  {
    item: 'Icon5'
  },
  {
    item: 'Icon1'
  },
  {
    item: 'Icon2'
  },
  {
    item: 'Icon3'
  },
  {
    item: 'Icon4'
  },
  {
    item: 'Icon9'
  },

];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Container>
          <ContainerHeader>
            <Text> MENU </Text>
            <ContainerTitle>
              <Text> Location </Text>
              <Text> QUEENS, NYC </Text>
            </ContainerTitle>
            <Text> IMAGEN </Text>
          </ContainerHeader>

          <ContainerBody>
            <ContainerSearch>
              <Text> icon </Text>
              <TextInput placeholder="Search" />
              <Text> icon </Text>
            </ContainerSearch>
            <ContainerCategories>
              <ContainerItems
                data={dataCategories}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <ContainerTitleItems>
                    <CardItem id={item.id}>
                      <Text>
                        {' '}
                        {item.item}
                        {' '}
                      </Text>
                    </CardItem>
                    <Text> Dogs </Text>

                  </ContainerTitleItems>
                )}
                keyExtractor={(item) => item.id}
              />
            </ContainerCategories>
          </ContainerBody>
          <ScrollViewContent showsVerticalScrollIndicator={false}>
            <View style={{
              paddingTop: 30,
              width: '100%',
              height: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',

            }}
            >
              {dataCategories.map((item) => (
                <View
                  key={item.item}
                  style={{
                    margin: 20, width: 140, height: 130, marginTop: 50
                  }}
                >
                  <ContainerCardProduct>
                    <ContainerHeaderCard>
                      <ContainerCardProductItem>
                        <ImageIcon source={iconChaqueta} />
                      </ContainerCardProductItem>
                    </ContainerHeaderCard>
                    <ContainerCardText>
                      <TitleCard> Dexter </TitleCard>
                      <SubTitleCard> French Buldog </SubTitleCard>
                      <ContainerCardTextSecond>
                        <TitleFooterCard> Distance: 2.7 km</TitleFooterCard>
                        <TitleFooterCard> 6 Years Old  </TitleFooterCard>
                      </ContainerCardTextSecond>
                    </ContainerCardText>
                  </ContainerCardProduct>
                </View>
              ))}

            </View>

          </ScrollViewContent>
        </Container>
      </SafeAreaView>
    );
  }
}

export default Home;
