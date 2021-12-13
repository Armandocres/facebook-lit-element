import { css } from 'lit-element';

const styles = css`
  *{
    margin: 0px;
    padding: 0px;
  }

  .ContainerThink {
    display: flex;
    background-color: #000000;
    justify-content: center;
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

  .ContainerPost {
    margin-left: 258px;
  }
`;

export {styles}