'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      title: 'Superman Action Figure',
      asin: 'first fake asin',
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/71hhZHVWKHL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/McFarlane-DC-Multiverse-Superman-Action/dp/B07V9142S9",
      description: "Great Toy!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Batman Action Figure',
      asin: 'second fake asin',
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/71szlpJLhOL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/McFarlane-Toys-Collector-Action-Figure/dp/B081HVMNP7/ref=pd_lpo_21_t_1/139-1977829-8291024?_encoding=UTF8&pd_rd_i=B081HVMNP7&pd_rd_r=e38ec5eb-ad41-4b2e-bd6f-90a6063c8a4f&pd_rd_w=ZoudY&pd_rd_wg=gmWhk&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=KZ5R2M896YKP9XTWXR1N&psc=1&refRID=KZ5R2M896YKP9XTWXR1N",
      description: "Mr. Wayne",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Joker Action Figure',
      asin: 'third fake asin',
      rating: 3,
      image: "https://images-na.ssl-images-amazon.com/images/I/71AcntSXgrL._AC_SL1336_.jpg",
      link: "https://www.amazon.com/McFarlane-Toys-Universe-Action-Figures/dp/B081J9VM25/ref=pd_lpo_21_t_2/139-1977829-8291024?_encoding=UTF8&pd_rd_i=B081J9VM25&pd_rd_r=e38ec5eb-ad41-4b2e-bd6f-90a6063c8a4f&pd_rd_w=ZoudY&pd_rd_wg=gmWhk&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=KZ5R2M896YKP9XTWXR1N&psc=1&refRID=KZ5R2M896YKP9XTWXR1N",
      description: "Hahaha",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Products', null, {});
  }
};
