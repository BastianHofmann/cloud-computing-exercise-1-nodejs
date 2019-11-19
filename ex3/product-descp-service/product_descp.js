module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    //To DO: add the pattern functions and describe the logic inside the function
    const getField = (productId, field) => {
        const res = mockData.find(mock => mock.product_id == productId);
        return res ? res[field] : '';
    };


    function productURL(msg, respond) {
        const result = getField(msg.productId, 'product_url');

        if(result) {
            respond(null, { result });
        } else {
            respond(null, { result: '' });
        }
    }

    function productName(msg, respond) {
        const result = getField(msg.productId, 'product_name');

        if(result) {
            respond(null, { result });
        } else {
            respond(null, { result: '' });
        }
    }
}
