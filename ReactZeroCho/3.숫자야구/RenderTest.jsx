import React, { PureComponent } from 'react';

class Test extends PureComponent{
    state = {
        counter: 0,
        String: 'hello',
        number: 1,
        boolean: true,
        object: { a: 'b', c: 'd'},
        array: [5, 3, 6],

    };

    // 최적화에 대한 tool 신경을 많이 써야 함

    // shouldComponentUpdate(nextProps, nextState, nextContext){
    //     if (this.state.counter !== nextState.counter){
    //         return true;
    //     }
    //     return false;
    // }

    onClick = () => {
        const array = this.state.array;
        array.push(1);
        this.setState({
            object: {...this.state.object},
        });
    };

    render(){
        console.log('랜더링', this.state);
        return(
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}

export default Test;