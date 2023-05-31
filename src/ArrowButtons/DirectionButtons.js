import styled from 'styled-components'

export const DirectionButtons = styled.div`
  width: 0;
  height: 0;
  cursor:pointer;
  border-left:${(props) => (props.direction === 0 ? '15px solid transparent' : '')};
  border-right:${(props) => (props.direction === 0 ? '15px solid transparent' : '')};
  border-bottom:${(props) => (props.direction === 0 ? '15px solid #31b5e7' : '')};

  border-left:${(props) => (props.direction === 1 ? '15px solid transparent' : '')};
  border-right:${(props) => (props.direction === 1 ? '15px solid transparent' : '')};
  border-top:${(props) => (props.direction === 1 ? '15px solid #31b5e7' : '')};

  border-top:${(props) => (props.direction === 2 ? '15px solid transparent' : '')};
  border-bottom:${(props) => (props.direction === 2 ? '15px solid transparent' : '')};
  border-left:${(props) => (props.direction === 2 ? '15px solid #31b5e7' : '')};

  border-top:${(props) => (props.direction === 3 ? '15px solid transparent' : '')};
  border-bottom:${(props) => (props.direction === 3 ? '15px solid transparent' : '')};
  border-right:${(props) => (props.direction === 3 ? '15px solid #31b5e7' : '')};
 

`                 
