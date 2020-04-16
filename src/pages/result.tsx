import * as React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import * as bookSelectors from 'services/book/selectors'
import * as bookActions from 'services/book/actions'
import URLSearchParams from '@ungap/url-search-params'
import SearchInput from 'components/input/Search'
import * as colors from 'styles/colors'
import { SearchOptions, OrderType } from 'types/common'

import BookArticle from 'components/BookArticle'
import InfiniteScroll from 'components/InfiniteScroll'

const S = {
  Container: styled.div`
    padding: 0 24px;
    .searchInput {
      position: relative;
      bottom: 15px;
    }
  `,
  Header: styled.header`
   background-image: linear-gradient(to left, ${colors.primary}, ${colors.secondary}, ${colors.tertiary});
   height: 50px;
   padding: 16px 0 0 24px;
   h1 {
     color: white;
     font-size: 18px;
   }
  `,
  Section: styled.section`
  `,
  Loading: styled.div`
    text-align: center;
  `
}

export default function ResultPage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { search } = useLocation()

  const urlParams = new URLSearchParams(search)
  const books = useSelector(bookSelectors.getBooks)
  const booksLoading = useSelector(bookSelectors.getBooksLoading)

  const [mounted, setMounted] = React.useState<boolean>(false)
  const [loadMore, setLoadMore] = React.useState<boolean>(false)
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const query = urlParams.get('q')

  React.useEffect(() => {
    if (query) {
      setSearchQuery(query)
    } else {
      history.replace('/')
    }
    setMounted(true)
  }, [urlParams, query, history])

  const searchOptions = React.useMemo(() => {
    const options: SearchOptions = {}
    if (urlParams.get('orderBy')) {
      options.orderBy = urlParams.get('orderBy') as OrderType
    }
    if (urlParams.get('ebookOnly')) {
      options.ebookOnly = true
    }
    return options
  }, [urlParams])

  React.useEffect(() => {
    if (!booksLoading && query && (!mounted || loadMore)) {
      dispatch(bookActions.fetchBookListAsync.request({ query, options: searchOptions }))
    }
  }, [dispatch, urlParams, mounted, query, loadMore, booksLoading, searchOptions])

  const handleLoadMore = () => {
    if (!booksLoading) {
      setLoadMore(true)
    } else {
      setLoadMore(false)
    }
  }

  return (
    <>
      <S.Header>
        <h1>검색 결과</h1>
      </S.Header>
      <S.Container>
        <SearchInput
          className="searchInput"
          value={searchQuery}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
        />
        <S.Section>
          {books.map(book => {
            return (
              <BookArticle key={book.id} book={book} />
            )
          })}
          {booksLoading && <S.Loading>
            <img src={require('assets/images/loading.svg')} height={80}
              alt="loading.." />
          </S.Loading>}
          <InfiniteScroll handler={handleLoadMore} />
        </S.Section>
      </S.Container>
    </>
  )
}
