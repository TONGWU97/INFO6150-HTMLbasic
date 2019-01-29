import React from 'react';

const Article = (props) => ( <
    div >
    <
    h1 > { props.title } < /h1> <
    h4 > { props.date } < /h4> <
    h4 > { props.author } < /h4> <
    hr / >
    <
    p > { props.children } < /p> < /
    div >
);

export default Article;