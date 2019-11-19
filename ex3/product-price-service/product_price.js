module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);


    //To DO: add the pattern functions and describe the logic inside the function

    const getField = (productId, field) => {
        const res = mockData.find(mock => mock.product_id == productId);
        return res ? res[field] : '';
    };

    function productPrice(msg, respond) {
        const result = getField(msg.productId, 'product_price');

        if(result) {
            respond(null, { result });
        } else {
            respond(null, { result: '' });
        }
    }
}
