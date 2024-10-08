import Counter from "@/components/Counter";
import Link from "next/link";
import React from "react";

const Homepage = async () => {
  const res = await fetch(`http://localhost:5000/shoes`, {
    // if i wan to catch and it is a SSG
    // cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();
  // console.log(shoes)
  return (
    <div>
      <h1 className="text-5xl text-center">Home Page</h1>
      <Counter></Counter>
      <div className="grid justify-center grid-cols-3 gap-7">
        {shoes.slice(0, 3).map((item, index) => (
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
      <div className="text-center my-4">
        <Link href={'/all-shoes'}>
          <button className="btn btn-outline btn-primary">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
