import React from 'react';
import CollectionItem from '../collection_item/collection_item.component'
import './preview.styles.scss';

const PreviewCollection = ({title, items}) => (
  <div className = 'collection-preview'>
    <h1 className = 'title'>{title.toUpperCase()}</h1>
    <div className = 'preview'>
      {
        items.filter((item, i) => i < 4)
        .map(({id, ...otherItemProps}) => (<CollectionItem key={id} {...otherItemProps}/>))}
    </div>
  </div>
)

export default PreviewCollection