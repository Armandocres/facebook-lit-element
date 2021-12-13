import { css } from 'lit-element';

const styles = css`
  *{
    margin: 0px;
    padding: 0px;
  }

  .ContainerThink {
    display: flex;
    margin-left: 30%;
    background-color: #000000;
    align-items: center;
    gap: 10px;
    height: 90px;
  }

  .ContainerThink--input {
    border: none;
    border-radius: 10px;
    width: 300px;
    background-color: #525252;
    color: gray;
    height: 8px;
    padding: 10px;
    font-size: 17px;
  }

  .ContainerThink__img {
    width: 37px;
  }

`;

export {styles}