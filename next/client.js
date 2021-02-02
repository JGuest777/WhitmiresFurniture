import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '9mk9ne0q',
  dataset: 'production',
  useCdn: true,
});
