import * as React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import * as colors from 'styles/colors'
import SearchInput from 'components/input/Search'

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
  Input: styled.label`
    border: 1px solid #a3aab3;
    display: inline-block;
    width: 100%;
    position: relative;
    padding: 2px 40px 2px 4px;
    box-sizing: border-box;
    input {
      font-size: 22px;
      width: 100%;
    }
    button {
      position: absolute;
      right: 6px;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  `
}

export default function IndexPage() {
  const history = useHistory()

  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const handleSearch = () => {
    console.log(searchQuery)
    history.push(`/result?q=${searchQuery}`)
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
        </S.Form>
      </S.FormWrap>
    </S.Container>
  )
}
