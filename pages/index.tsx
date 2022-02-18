import { GetStaticProps } from 'next';
import { useState } from 'react';
import { HTag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <HTag tag="h1">tag</HTag>
      <Button appearance='primary' arrow='right'>button</Button>
      <Button appearance='ghost' arrow='right'>button</Button>
      <P size='b'>big</P>
      <P>medium</P>
      <P size='s'>small</P>
      <Tag size='s' href='hjhjhjhjh' color='ghost'>ghost</Tag>
      <Tag size='m' color='red'>red</Tag>
      <Tag color='green'>green</Tag>
      <Tag size='s' color='gray'>gray</Tag>
      <Tag size='m' color='primary'>primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}