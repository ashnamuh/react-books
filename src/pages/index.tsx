import * as React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import * as colors from 'styles/colors'
import SearchInput from 'components/input/Search'
import Checkbox from 'components/input/Checkbox'
import Radio from 'components/input/Radio'
import { OrderType } from 'types/common'
import URLSearchParams from '@ungap/url-search-params'

const S = {
  Container: styled.div`
    background-color: ${colors.grayBg};
    height: 100%;
  `,
  Header: styled.header`
   background-image: linear-gradient(to left, ${colors.primary}, ${colors.secondary}, ${colors.tertiary});
   height: 350px;
   h1 {
     text-align: center;
     color: white;
     font-size: 36px;
     position: relative;
     top: 200px;
   }
  `,
  FormWrap: styled.div`
    padding: 0 24px;
    position: relative;
    bottom: 50px;
  `,
  Form: styled.form`
    background-color: white;
    max-width: 480px;
    height: 200px;
    margin: 0 auto;
    box-shadow: 6px 6px 10px 0 #d0d4da;
    border-radius: 12px;
    padding: 16px;
  `,
}

export default function IndexPage() {
  const history = useHistory()

  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const [orderBy, setOrderBy] = React.useState<OrderType>('relevance')
  const [ebookOnly, setEbookOnly] = React.useState<boolean>(false)

  const handleSearch = () => {
    const searchParams = new URLSearchParams()
    searchParams.set('q', searchQuery)
    searchParams.set('orderBy', orderBy)
    if (ebookOnly) {
      searchParams.set('ebookOnly', 'true')
    }
    history.push(`/result?${searchParams.toString()}`)
  }

  return (
    <S.Container>
      <S.Header>
        <h1>책을 찾아드립니다.</h1>
      </S.Header>
      <S.FormWrap>
        <S.Form onSubmit={handleSearch}>
          <SearchInput value={searchQuery}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
            placeholder="책의 제목, 작가 또는 출판사" onSearch={handleSearch}
          />
          <Radio value="relevance" checked={orderBy === 'relevance'}
            label="관련도순"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOrderBy(event.target.value as OrderType)} />
          <Radio value="newest" checked={orderBy === 'newest'}
            label="최신순"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOrderBy(event.target.value as OrderType)} />
          <br />

          <Checkbox checked={ebookOnly}
            label="eBook만"
            onChange={() => setEbookOnly(!ebookOnly)} />
        </S.Form>
      </S.FormWrap>
    </S.Container>
  )
}
