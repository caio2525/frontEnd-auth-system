import styled from 'styled-components';

export const ToDosContainer = styled.div`
  margin: 2rem;
`;

export const ToDo = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid grey;
  margin: 1rem;
  text-align: center;
  align-items: center;
`;

export const ToDoName = styled.div`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  text-decoration: ${(props) => {
    if (props.done == true)
    {
      return 'line-through'
    }
    return null
  }}
`;
