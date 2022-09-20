import { Breadcrumbs } from "../components/Breadcrumbs";
import { CategoryList } from "../components/CategoryList";
import { Company } from "../components/Company/Company";

export const Catalog = () => {

    return (
        <section className="catalog">
            <div className="catalog__top" style={{ backgroundImage: "url(../images/catalog-bg.jpg)" }}>
                <div className="catalog__top-box">
                    <Breadcrumbs />
                    <h2 className="title">Каталог</h2>
                </div>
            </div>
            <Company />
            <div className="catalog__inner">
                <CategoryList />
            </div>
        </section>
    )
}