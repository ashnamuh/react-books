import * as React from 'react'
import styled from 'styled-components'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const S = {
  Container: styled.label`
  font-size: 18px;
  input {
    width: 20px;
    height: 20px;
    appearance: radio;
    vertical-align: middle;
  }
`
}

export default function Radio(props: Props) {
  const {
    className,
    label,
    ...restProps
  } = props


  return (
    <S.Container className={className}>
      {label}
      <input type="radio" {...restProps} />
    </S.Container>
  )
}
