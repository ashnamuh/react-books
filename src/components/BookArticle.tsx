import * as React from 'react'
import styled from 'styled-components'
import { Book } from 'types/book'

interface Props {
  book: Book;
}

const S = {
  Container: styled.article`
    background-color: #F9F9F9;
    padding: 16px 16px 16px 140px;
    height: 200px;
    position: relative;
    box-sizing: border-box;

    &:not(:first-child) {
      margin-top: 16px;
    }
    img {
      position: absolute;
      left: 0;
      top: 0;
    }
    a {
      font-size: 16px;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 8px;
    }
    .description {
      margin-top: 8px;
      overflow: hidden;
    }
  `
}

export default function AshComponent({ book }: Props) {
  return (
    <S.Container>
      <img src={book.volumeInfo?.imageLinks?.smallThumbnail || undefined} width={128} alt={book.volumeInfo.title} />
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"><strong>{book.volumeInfo.title}</strong></a>
      <br />
      {book.volumeInfo.authors && <span className="author">{book.volumeInfo.authors.join(', ')}</span>}
      {book.volumeInfo.publisher && <span className="publisher"> | {book.volumeInfo.publisher}</span>}
      {book.volumeInfo.publishedDate && <span className="publishedDate"> | {book.volumeInfo.publishedDate}</span>}
      {book.volumeInfo.description && <p className="description"><span>소개: </span>{book.volumeInfo.description.length > 300 ? book.volumeInfo.description.substring(0, 140 - 1).concat('...') : book.volumeInfo.description}</p>}
    </S.Container>
  )
}
