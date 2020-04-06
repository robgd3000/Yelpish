const apiKey = "PUCZ1RdDbDoVZPCv6PQuTakfXi2FLKU3mG121DRL907mMwf160snQ11RwTrUHC-cn9QgWkBjo4uETcx4K7gHkm6lP3ucVy9ZbT5ZdQh6I2wqRFMWvTc_Qz1dEX-CXnYx";

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  export default Yelp;