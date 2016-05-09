const users = [{
    key: '1',
    name: 'huangbin',
    age: '30',
    address: 'where is the address'
}, {
    key: '2',
    name: 'huangbin1',
    age: '30',
    address: 'where is the address'
}, {
    key: '3',
    name: 'huangbin2',
    age: '30',
    address: 'where is the address'
}];

const user = {
    key: '1',
    name: 'huangbin',
    age: '30',
    address: 'where is the address'
}
module.exports = {
    // Mock 数据返回
    'GET /users/list': users,
    'GET /users/huangbin': user
};

