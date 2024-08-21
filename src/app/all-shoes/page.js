import React from "react";

const AllShoes = async () => {
  const res = await fetch(`http://localhost:5000/shoes`, {
    // if i wan to catch and it is a SSG
    // cache: "force-cache",
    // next: {
    //   revalidate: 5,
    // },
    cache: "no-store",
  });
  const shoes = await res.json();
  return (
    <div>
      <h1 className="text-2xl text-center my-2">All Shoes</h1>
      <div className="grid justify-center grid-cols-3 gap-7">
        {shoes.map((item, index) => (
          <div
            key={item.id}
            className="card bg-base-100 mx-auto w-96 shadow-xl"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title}
                <div className="badge badge-secondary">{item.price}$</div>
              </h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy now</button>
                <button className="btn btn-outline btn-secondary">
                  Details
                </button>

                {/* <div className="badge badge-outline">Products</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoes;
