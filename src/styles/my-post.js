import { css } from "lit-element";

const styles = css`
  .ContainerPost {
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    background-color: #000000;
    color: white;
    margin-left: 85px;
    border: 1px solid white;
    padding: 15px;
  }

  .ContainerPost__img {
    width: 40px;
  }

  .ContainerPost__hours {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .icon-trash {
    color: red;
    background-color: #000000;
    border: none;
  }
`;

export { styles };
