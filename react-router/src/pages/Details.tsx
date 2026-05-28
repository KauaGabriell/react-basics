import { useNavigate, useParams } from "react-router";
export function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        Voltar
      </button>
      <h1>Details</h1>
      <span>
        ID do Produto: <strong>{id}</strong>
      </span>
    </div>
  );
}
