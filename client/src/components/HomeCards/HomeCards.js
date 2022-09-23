export default function Home({ x }) {
  return (
    <div>
      <img
        id={x.id}
        src={x.url}
        style={{ width: "250px", height: "250px" }}
        alt="one of the photos"
      ></img>
      <div>
        <h3>{x.title}</h3> {x.pay ? <p>{x.price} $</p> : null}
      </div>
    </div>
  );
}
