import { Container, Heading } from '@chakra-ui/react';

import Head from '@components/Head';
import Layout from '@components/Layout';
import Section from '@components/Section';

export default function TemplateIngredient({ children, frontMatter }) {
  const ingredientFrontmatter = {
    ...frontMatter,
    path: createPathFromResource(frontMatter)
  }

  const { title } = ingredientFrontmatter;

  return (
    <Layout frontMatter={ingredientFrontmatter}>
      <Head title={title} />
      <Section>
        <Container maxW="4xl">
          <Heading as="h1" mb=".8em" fontSize="5xl" variant="display" color="primary.500">{ title }</Heading>
          { children }
        </Container>
      </Section>
    </Layout>
  )
}

function createPathFromResource(frontMatter) {
  return `/${frontMatter.__resourcePath}/`.replace('.mdx', '');
}