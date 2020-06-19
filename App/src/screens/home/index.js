import React, { Component } from 'react';
import { Text } from 'react-native';

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

];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollViewContent>

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
                showsVerticalScrollIndicator={false}
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

            <ContainerCategoriesItems>
              {dataCategories.map((item) => (
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
              ))}

              {/* <ContainerItems
              data={dataCategories}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CardItem id={item.id}>
                  <Text>
                    {' '}
                    {item.item}
                    {' '}
                  </Text>
                </CardItem>
              )}
              keyExtractor={(item) => item.id}
            /> */}
            </ContainerCategoriesItems>

          </ContainerBody>

        </Container>
      </ScrollViewContent>

    );
  }
}

export default Home;
