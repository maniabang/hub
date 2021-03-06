const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {

    // 바깥으로 빼면 안됨 무조건 구구단 컴포넌트 안에 넣어야 됨
    const [first, setFirst] = React.useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random()*9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {

            setResult( '정답: ');
            setFirst( Math.ceil(Math.random() * 9));
            setSecond( Math.ceil(Math.random() * 9));
            setValue('');

            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    console.log('렌더링');
    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value} />
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
};

module.exports = GuGuDan;