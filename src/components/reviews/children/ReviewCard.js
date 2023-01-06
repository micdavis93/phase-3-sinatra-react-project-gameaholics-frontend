
import { Item } from 'semantic-ui-react'


export default function ReviewCard({review}) {

  const {id, title, rating, hours, text, game} = review

  return (
    <Item>
      <Item.Image size='small' src={game.image} />
      <Item.Content>
        <Item.Header><strong>{title}</strong></Item.Header>
        <Item.Meta><em>Rating: {rating} | Hours Played: {hours}</em></Item.Meta>
        <Item.Description>"{text}"</Item.Description>
      </Item.Content>
    </Item>
  )
}