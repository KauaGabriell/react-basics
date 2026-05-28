import { Link, useSearchParams } from "react-router";

const products = [
	{ id: 1, name: "Smart TV", price: "R$ 2.499,00" },
	{ id: 2, name: "Notebook", price: "R$ 3.799,00" },
	{ id: 3, name: "Headphone", price: "R$ 349,00" },
	{ id: 4, name: "Keyboard", price: "R$ 199,00" },
];

export function Products() {
	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");

	return (
		<div>
			<a href="/">Voltar</a>
			<h1>Produtos</h1>

			{category && (
				<span>
					Categoria <strong>{category}</strong>
				</span>
			)}

			<ul className="product-list">
				{products.map((product) => (
					<li className="product-item" key={product.id}>
						<Link className="product-link" to={`/details/${product.id}`}>
							<span>{product.name}</span>
							<strong>{product.price}</strong>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
