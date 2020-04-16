import * as React from 'react'
import styled from 'styled-components'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void;
}

const S = {
  Container: styled.label`
    border: 1px solid #a3aab3;
    display: inline-block;
    width: 100%;
    position: relative;
    padding: 2px 40px 2px 4px;
    box-sizing: border-box;
    background-color: white;
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

export default function SearchInput(props: Props) {
  const {
    className,
    onSearch,
    ...restProps
  } = props


  return (
    <S.Container className={className}>
      <input type="search" {...restProps} />
      <button type="button" onClick={onSearch}>
        <img src={require('assets/images/search_icon.svg')} alt="search"
          width={25}height={25} />
      </button>
    </S.Container>
  )
}
