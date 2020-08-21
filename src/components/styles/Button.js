import styled from "styled-components"

export default styled.button`
  background: white;
  color: black;
  border: none;
  font-size: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
  cursor: pointer;
  align-items: center;
  justify-items: start;

  &.wide {
    min-width: 50%;
  }

  > .show-on-hover {
    display: none;
    font-size: 2rem;
  }

  &:hover {
    background: black;
    color: white;

    > .show-on-hover {
      display: block;
    }
  }
`
