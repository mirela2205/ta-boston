import ProductTile from '../catalog/ProductTile';

export default function BsCatalogPreview() {
  return (
    <section className="container">
      <header className="row">
        <div className="col-12">
          {/* // col-12 ca sa fie tot tp 100% */}
          <h1>
            <span>Boostrap demo</span> suits
          </h1>

          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of men's designer suits. <br></br>
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the world's oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </div>
      </header>

      {/* se centreaza pt ca vine din index.scss unde am codul de jos
       & > section {
    & > header {
      text-align: center; */}

      <ul className="row justify-content-center">
        <li className="col-12 col-lg-3">
          <ProductTile></ProductTile>
        </li>

        <li className="col-12 col-lg-3 offset-lg-1">
          <ProductTile></ProductTile>
        </li>

        <li className="col-12 col-lg-3 offset-lg-1">
          <ProductTile></ProductTile>
        </li>
      </ul>
    </section>
  );
}
