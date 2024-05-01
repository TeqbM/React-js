import { Suspense } from "react";

export default function About() {
  

  return (

    <section className="py-10">
      <div className="container">
        <Suspense fallback={<Loading />}>
         
        </Suspense>
      </div>
    </section>
  );
}


function Loading() {
  return <h2>🌀 Loading...</h2>;
}