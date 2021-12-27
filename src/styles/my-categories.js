import { css } from "lit-element";

const styles = css`
  * {
    margin: 0px;
    padding: 0px;
  }

  .ContainerCategories {
    display: flex;
    align-items: center;
    background-color: #000000;
    color: white;
  }

  .ContainerCategories__img {
    margin: 10px;
    width: 40px;
  }

  .ContainerCategories__icons {
    color: white;
    font-size: 30px;
    margin: 15px;
  }

  .ContainerCategories:hover {
    background-color: #525252;
    border-radius: 10px;
    border: none;
  }

  .ContainerCategories:active {
    color: red;
    background-color: #715752;
  }
`;

export { styles };
