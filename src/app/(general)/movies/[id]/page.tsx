interface ParamsProps {
    params: {
        id: string
    }
}

export default function MovisePage({params}:ParamsProps) {
  return (
    <div>
      <h1>Hello Page{params.id}</h1>
    </div>
  );
}