import React from "react";
import PropTypes from "prop-types";

function Card(p) {
  return (
    <div className="col-md-3 mb-3 mt-5">
      <div className="card h-100">
        <img className="card-img-top" src={p.imageUrl} alt={p.title} />
        <div className="card-body">
          <h3 className="card-title fw-semibold text-center">{p.title}</h3>
          <p className="card-text text-center">{p.description}</p>
        </div>
        <div className="card-footer text-center bg-white">
          <a href={p.buttonUrl} className="btn btn-primary mt-3 mb-2">
            {p.buttonLabel}</a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
};

function Cards() {
  return (

    <div className="row container mx-auto">
      <Card
        title="Card title"
        imageUrl="https://picsum.photos/400/300"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
        buttonUrl="#"
        buttonLabel="Find Out More!"
      />

      <Card
        title="Card title"
        imageUrl="https://picsum.photos/400/300"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
        buttonUrl="#"
        buttonLabel="Find Out More!"
      />

      <Card
        title="Card title"
        imageUrl="https://picsum.photos/400/300"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
        buttonUrl="#"
        buttonLabel="Find Out More!"
      />

      <Card
        title="Card title"
        imageUrl="https://picsum.photos/400/300"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
        buttonUrl="#"
        buttonLabel="Find Out More!"
      />

    </div>
  )
}
export default Cards;
