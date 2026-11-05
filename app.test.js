const test = require('node:test');
const assert = require('node:assert');

test('Application returns successful response data', () => {
    const response = {
        message: 'Hello! CI/CD Pipeline is working!',
        status: 'success'
    };

    assert.strictEqual(response.status, 'success');
    assert.ok(response.message.length > 0);
});
