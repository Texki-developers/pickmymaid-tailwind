import India from './india.png';
import Philippines from './philipine.png';
import Nepal from './NEPAL.png';
import Srilanka from './sri lanka.png';
import Indonesia from './indonesia.png';
// Use public path for the generic banner to avoid bundling this large asset
const forAll = { src: '/assets/images/About/banner-background.png' } as const;

export { India, Philippines, Nepal, Srilanka, Indonesia, forAll };
