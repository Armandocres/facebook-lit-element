import { css } from 'lit-element';

const styles = css`
	* {
		margin: 0;
		padding: 0;
		background-color: #000000;
	}

	h1 {
		color: #3B5998;
	}

.item1 { grid-area: categorias; width: 160px;}
.item2 { grid-area: post; width: 95%;}

	.Container {
  	width: 100%;
	}

	.Container__Categorias {
		width: 100%;
		display: grid;
		grid-template-areas:
		'categorias post post post post post post';
	}

	.Container__post {
		background-color: #000000;
	}
`;

export { styles };
