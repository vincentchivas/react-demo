var users = [{
    key: 0,
    taxno: 'fx001',
    username: '朱颜',
    account: 'xxxxxxxxxx',
    passno: 'yyyyyyyyyyyy'
}, 
{
    key: 'fx002',
    name: '朱颜2',
    account: 'xxxxxxxxxx',
    passno: 'yyyyyyyyyyyy'
},
{
    key: 'fx003',
    name: '朱颜3',
    account: 'xxxxxxxxxx',
    passno: 'yyyyyyyyyyyy'
},
{
    key: 'fx004',
    name: '朱颜4',
    account: 'xxxxxxxxxx',
    passno: 'yyyyyyyyyyyy'
},
{
    key: 'fx005',
    name: '朱颜5',
    account: 'xxxxxxxxxx',
    passno: 'yyyyyyyyyyyy'
}];

var user = 
    {
    key: 'fx001',
    name: '朱颜',
    account: 'xxxxxxxxxx',
    passno: 'yyyyyyyyyyyy'
};
detail = {
    'id':1,
    '姓名':'朱艳萍',
    '税号':'fx021'
    
};
module.exports = {
    // Mock 数据返回
    'GET /users/list': users,
    'GET /users/fx001': user,
};

