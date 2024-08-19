import Footer from "@/components/Footer";

const NewsLayout = ({children}) => {
    return (
        <div>
           {children}
           <Footer></Footer>
        </div>
    );
};

export default NewsLayout;