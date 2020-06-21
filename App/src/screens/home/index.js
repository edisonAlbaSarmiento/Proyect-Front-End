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
  ContainerCategoriesItems,
  ContainerCardProduct,
  ContainerCardProductItem,
  ContainerHeaderCard,
  ContainerCardIcon,
  ContainerCardText,
  ContainerCardTextSecond,
  ContainerTitleItems,
  ContainerProducts,
  ContainerItems2,
  ScrollViewContent
} from './styles';

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

            {/* {dataCategories.map((item) => (
                <>
                  <ContainerCardProduct>
                    <ContainerHeaderCard>
                      <ContainerCardProductItem>
                        <Text>
                          {' '}
                          {item.item}
                          {' '}
                        </Text>
                      </ContainerCardProductItem>
                      <ContainerCardIcon>
                        <Text> icon </Text>
                      </ContainerCardIcon>
                    </ContainerHeaderCard>
                    <ContainerCardText>
                      <Text> Dexter </Text>
                      <Text> French Buldog </Text>
                      <ContainerCardTextSecond>
                        <Text> Distance</Text>
                        <Text> 6 Years  </Text>
                      </ContainerCardTextSecond>
                    </ContainerCardText>
                  </ContainerCardProduct>
                </>
              ))} */}

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
                        <Text>
                          {' '}
                          {item.item}
                          {' '}
                        </Text>
                      </ContainerCardProductItem>

                    </ContainerHeaderCard>
                    <ContainerCardText>
                      <Text> Dexter </Text>
                      <Text> French Buldog </Text>
                      <ContainerCardTextSecond>
                        <Text> Distance</Text>
                        <Text> 6 Years  </Text>
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
