import { Container, Grid, Heading, Text, Image } from '@chakra-ui/react';

import { getIngredients } from '@lib/ingredients';

import Head from '@components/Head';
import Section from '@components/Section';
import Layout from '@components/Layout';
import Card from '@components/Card';

import recipesBanner from '@images/applitools-recipes-banner.png';

export default function Home({ ingredients }) {
  return (
    <Layout displayNav={false}>
      <Section>
        <Container maxW="4xl" textAlign="center">
          <Image mx="auto" mt="1em" src={recipesBanner} width={550} height="auto" alt="Chefs with code ingredients" />
          
          <Heading as="h1" fontSize="6xl" mt="1em" mb=".5em" color="primary.500" variant="display">
            The Kitchen
          </Heading>

          <Text fontSize="2xl">
            A pantry full of web components that can be used for automated testing.
          </Text>

          <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={1} mt="3em">
            {ingredients.map(({ id, title, path }) => {
              return (
                <Card href={path} key={id}>
                  <Heading as="h3">{ title }</Heading>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const ingredients = await getIngredients();
  return {
    props: {
      ingredients
    },
  }
}