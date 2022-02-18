import { useState } from 'react';
import { HTag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../Layout/Layout';

function Home(): JSX.Element {

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
    </>);
}

export default withLayout(Home);