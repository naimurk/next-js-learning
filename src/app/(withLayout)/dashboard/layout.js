import Footer from "@/components/Footer";

const layout = ({children}) => {
    return (
        <div>
           {children} 
            <Footer></Footer>
        </div>
    );
};

export default layout;