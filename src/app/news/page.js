import styles from "./News.module.css"
export const metadata = {
    title: "News",
    description: "This is a news page",
    keywords: "news, latest updates"

 };

const News = () => {
    return (
        <div>
                        <h1 className={styles.heading}>News Page</h1>

        </div>
    );
};

export default News;