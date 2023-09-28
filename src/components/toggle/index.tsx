import { Container, SpanContainer, Input } from "./styles"
import { HtmlHTMLAttributes } from 'react'

interface ToggleProps extends HtmlHTMLAttributes<HTMLDivElement> {
  span: string,
  classNumber: number,
  end?: boolean
}

export function Toggle({ span, classNumber, end = false, ...rest }: ToggleProps) {
  return (
    <Container end={end} {...rest}>
      <SpanContainer>
        {span}
      </SpanContainer>
      <Input className={"toggle" + `${classNumber}`} id={"toggle" + `${classNumber}`} type="checkbox"></Input>
      <label className={"toggleLabel" + `${classNumber}`} htmlFor={"toggle" + `${classNumber}`}></label>
    </Container>
  )
}