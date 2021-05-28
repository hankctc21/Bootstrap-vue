export default{
    User:[
        {
            user_id: 1,
            name: 'name1',
            created_at:'2018-09-11 11:12:11'
        },
        {
            user_id: 2,
            name: 'name2',
            created_at:'2018-09-11 11:22:11'
        },
        {
            user_id: 3,
            name: 'name3',
            created_at:'2018-09-11 11:42:11'
        },
    ],
    Content: [
        {
            content_id: 1,
            user_id: 1,
            title: '알람표',
            context: 'undefined',
            created_at: '2019-01-01 13:11:42',
            updated_at: null
        },
        {
            content_id: 2,
            user_id: 3,
            title: 'hi h i',
            context: 'les girit',
            created_at: '2019-01-01 13:11:42',
            updated_at: null
        },
        {
            content_id: 3,
            user_id: 2,
            title: '교재',
            context: '교재이름',
            created_at: '2019-01-01 13:11:42',
            updated_at: null
        },
    ],
    Commnet: [
        {
            comment_id: 1,
            user_id: 2,
            content_id:3,
            context: '수업이 재밌습니다.',
            created_at: '2019-03-29 14:12:12',
            updated_at: null
        }
    ],
    SubComment:[
        {
            subcomment_id: 1,
            comment_id: 3,
            user_id: 1,
            context: '들어주셔서 감사합니다.',
            created_at: '2019-03-29 16:22:11',
            updated_at: null
        }
    ]

}