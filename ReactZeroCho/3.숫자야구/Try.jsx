
import React, { memo, PureComponent, useState } from 'react';

// PureComponent
// class Try extends PureComponent{
//   render(){
//     const{tryInfo} = this.props;
//     return(
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

const Try = memo(({tryInfo}) => {
  
  // props는 바꾸면 안됨, state를 바꿔야 함, 둘 다 바꿔야 한다면 state로 바꿔야 함
  // const [result, setResult] = useState(tryInfo.result);

  // const onClick = () => {
  //   setResult('1');
  // };

  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;