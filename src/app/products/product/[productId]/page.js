
const SingleDynamicPage = ({params , searchParams}) => {
    // console.log(searchParams)
    return (
        <div>
            <h1>SingSingleDynamicPage Dynamic Route {params?.productId}</h1>
        </div>
    );
};

export default SingleDynamicPage;