import fs from 'fs';
import path from 'path'
import grayMatter from 'gray-matter';

const INGREDIENTS_DIRECTORY = path.join(process.cwd(), 'src/pages/ingredients');

/**
 * readIngredientsFromDirectory
 */

export async function readIngredientsFromDirectory() {
  const filenames = fs.readdirSync(INGREDIENTS_DIRECTORY);

  if ( !filenames || !Array.isArray(filenames) ) {
    throw new Error('Failed to read project directory');
  }

  return filenames.map(filename => {
    const filePath = path.join(INGREDIENTS_DIRECTORY, filename)
    const content = fs.readFileSync(filePath, 'utf8')
    const matter = grayMatter(content);

    return {
      filename,
      content,
      matter
    }
  })
}

/**
 * getIngredients
 */

export async function getIngredients() {
  const projects = await readIngredientsFromDirectory();

  return projects.map(({ filename, content = {}, matter = {} }) => {
    const { data } = matter;
    const id = filename.replace('.mdx', '');
    return {
      file: {
        filename,
      },
      ...data,
      id,
      path: `/ingredients/${id}`
    }
  })
}