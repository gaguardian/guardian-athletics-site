import { useState } from 'react'
import PlaceholderImage from '../components/PlaceholderImage'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { featuredProducts, productCategories } from '../data/products'
import '../styles/shop.css'

const shopFilters = ['All', 'Apparel', 'Accessories', 'Training Gear', 'Nutrition']

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProducts =
    activeFilter === 'All'
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === activeFilter)

  return (
    <div className="site-shell shop-page">
      <SiteHeader />

      <main>
        <section className="shop-hero section-border">
          <div className="shop-hero__copy">
            <p className="eyebrow">Guardian Shop</p>

            <h1>
              Wear
              <br />
              <span>the work.</span>
            </h1>

            <p className="shop-hero__lede">
              Apparel, gear, and essentials for the people who put in the work —
              on and off the floor.
            </p>

            <a className="button button--primary" href="#featured-products">
              Shop All <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="shop-hero__visual">
            <PlaceholderImage
              label="Guardian apparel hero photo placeholder"
              className="shop-hero__photo"
            />
          </div>
        </section>

        <section className="shop-categories section-border">
          <div className="shop-section-heading">
            <div>
              <p className="eyebrow">Gear for a stronger tomorrow.</p>
              <h2>Shop by Category</h2>
            </div>
          </div>

          <div className="shop-category-grid">
            {productCategories.map((category, index) => (
              <article className="shop-category-card" key={category.title}>
                <PlaceholderImage
                  label={`${category.title} photo placeholder`}
                  className="shop-category-card__photo"
                />

                <div className="shop-category-card__body">
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.subtitle}</p>
                  </div>

                  <button
                    className="shop-category-card__arrow"
                    type="button"
                    aria-label={`View ${category.title}`}
                    onClick={() => setActiveFilter(category.title)}
                  >
                    →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="featured-products section-border"
          id="featured-products"
        >
          <div className="shop-section-heading featured-products__heading">
            <div>
              <p className="eyebrow">Rep the standard.</p>
              <h2>Featured Products</h2>
            </div>

            <div className="shop-filter-bar" aria-label="Product filters">
              {shopFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={activeFilter === filter ? 'is-active' : ''}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article className="product-card" key={product.name}>
                <PlaceholderImage
                  label={`${product.name} product placeholder`}
                  className="product-card__photo"
                />

                <div className="product-card__body">
                  <p className="product-card__category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-card__price">{product.price}</p>

                  <div className="product-card__rating">
                    <span>{product.rating}</span>
                    <small>({product.reviews})</small>
                  </div>

                  <button className="button button--outline product-card__button" type="button">
                    View Product
                  </button>
                </div>
              </article>
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <div className="shop-empty">
              Products for this category will be added later.
            </div>
          )}

          <div className="shop-view-all">
            <button className="button button--outline" type="button" onClick={() => setActiveFilter('All')}>
              View All Products <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>

        <section className="shop-mission section-border">
          <div className="shop-mission__visual">
            <PlaceholderImage
              label="Guardian merchandise and equipment photo placeholder"
              className="shop-mission__photo"
            />
          </div>

          <div className="shop-mission__copy">
            <p className="eyebrow">More than merch</p>

            <h2>
              A bigger
              <br />
              mission.
            </h2>

            <p>
              Every purchase can support the Guardian community, the facility,
              and the mission to help more people become stronger — in body,
              mind, and life.
            </p>

            <a className="button button--primary" href="#featured-products">
              Shop with Purpose <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="shop-benefits section-border">
          <article>
            <div className="shop-benefit__icon" aria-hidden="true">▣</div>
            <div>
              <h3>Fast & Reliable</h3>
              <p>Shipping details will be connected to the final commerce platform.</p>
            </div>
          </article>

          <article>
            <div className="shop-benefit__icon" aria-hidden="true">◇</div>
            <div>
              <h3>Supports Community</h3>
              <p>A portion of every purchase can be tied back to the Guardian mission.</p>
            </div>
          </article>

          <article>
            <div className="shop-benefit__icon" aria-hidden="true">◒</div>
            <div>
              <h3>Premium Quality</h3>
              <p>Product details are placeholders until final merchandise is selected.</p>
            </div>
          </article>

          <article>
            <div className="shop-benefit__icon" aria-hidden="true">◎</div>
            <div>
              <h3>Athletes Approved</h3>
              <p>Built for the people who train here and represent Guardian.</p>
            </div>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
