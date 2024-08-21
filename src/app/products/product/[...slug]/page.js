
const CatchAllRoutePage = ({params}) => {
    // console.log(params)
    return (
        <div>
            <h1 className="text-center text-xl">Catch All Routes Page</h1>
            <div className="flex justify-center gap-x-2">
                {params.slug.map((item , index)=> <h1 key={index}>{item}</h1>)}
            </div>
        </div>
    );
};

export default CatchAllRoutePage;