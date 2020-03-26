(function () {
    var posts = [
        {
            id: '1',
            description: 'At wrong of of water those linen',
            createdAt: new Date('2020-03-15T14:03:00'),
            author: 'Bear',
            photoLink: 'https://million-wallpapers.ru/wallpapers/1/49/353539491034742/vremya-kofe-dlya-plyushevogo-medvedya.jpg',
            likes: ["Bear", "Yellow", "Blue"],
            hashtags: ["#hello", "#world"]
        },
        {
            id: '2',
            description: 'In excuse hardly summer in basket misery',
            createdAt: new Date('2020-01-19T21:00:00'),
            author: 'Yellow',
            photoLink: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            likes: ["Red", "Yellow"],
            hashtags: ["#spam", "#car, #peace"]
        },
        {
            id: '3',
            description: 'By rent an part need',
            createdAt: new Date('2020-03-17T23:00:00'),
            author: 'Blue',
            photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
            likes: ["Purple", "Blue"],
            hashtags: ["#mice", "#world"]
        },
        {
            id: '4',
            description: 'Oh shutters do removing reserved wandered an',
            createdAt: new Date('2020-02-11T20:10:00'),
            author: 'Purple',
            photoLink: 'https://api.adorable.io/avatars/285/b2r@adorble.png',
            likes: ["Bear", "Purple", "Blue", "Yellow", "Blue"],
            hashtags: ["#breakfast ", "#old", "#period"]
        },
        {
            id: '5',
            description: 'Pianoforte reasonable as so am inhabiting',
            createdAt: new Date('2020-03-18T17:08:00'),
            author: 'Green',
            photoLink: 'https://api.adorable.io/avatars/285/b2r@adorsdble.png',
            likes: ["Bear", "Red"],
            hashtags: ["#half", "#sixteen"]
        },
        {
            id: '6',
            description: 'Chatty design remark and his abroad figure but its',
            createdAt: new Date('2020-02-17T15:07:00'),
            author: 'Grey',
            photoLink: 'https://api.adorable.io/avatars/285/baw2r@adorsdle.png',
            likes: ["Bear", "Blue"],
            hashtags: ["#anxious ", "#world", "#space"]
        },
        {
            id: '7',
            description: 'Those an equal point no years do',
            createdAt: new Date('2020-03-15T19:19:00'),
            author: 'Red',
            photoLink: 'https://api.adorable.io/avatars/285/bawr@adorsdle.png',
            likes: ["Bear", "Yellow", "Blue"],
            hashtags: ["#hello", "#world"]
        },
        {
            id: '8',
            description: 'Shy and subjects wondered trifling pleasant',
            createdAt: new Date('2020-01-19T22:00:00'),
            author: 'Grey',
            photoLink: 'https://api.adorable.io/avatars/285/baw2r@adorsdle.png',
            likes: ["Blue", "Red"],
            hashtags: ["#equal", "#space"]
        },
        {
            id: '9',
            description: 'Depend warmth fat but her but played',
            createdAt: new Date('2020-02-19T20:09:00'),
            author: 'Blue',
            photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
            likes: ["Bear", "Purple", "Red"],
            hashtags: ["#goodness", "#oppose"]
        },
        {
            id: '10',
            description: 'Smart mrs day which begin. Snug do sold mr it if such',
            createdAt: new Date('2020-03-17T22:22:22'),
            author: 'Red',
            photoLink: 'https://api.adorable.io/avatars/285/bawr@adorsdle.png',
            likes: ["Bear", "Yellow", "Purple", "Red", "Blue"],
            hashtags: ["#flash", "#world", "#stairs"]
        },
        {
            id: '11',
            description: 'Terminated uncommonly at at estimating',
            createdAt: new Date('2020-03-16T21:37:00'),
            author: 'Green',
            photoLink: 'https://api.adorable.io/avatars/285/b2r@adorsdble.png',
            likes: ["Bear", "Yellow", "Blue"],
            hashtags: ["#hello", "#world"]
        },
        {
            id: '12',
            description: 'Man behaviour met moonlight extremity acuteness direction',
            createdAt: new Date('2020-03-10T11:11:00'),
            author: 'Blue',
            photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
            likes: ["Red", "Yellow", "Purple"],
            hashtags: ["#bye", "#melancholy", "#rapture"]
        },
        {
            id: '13',
            description: 'Mile tell if help they ye full name',
            createdAt: new Date('2020-03-11T13:08:00'),
            author: 'Purple',
            photoLink: 'https://api.adorable.io/avatars/285/b2r@adorble.png',
            likes: ["Green", "Blue"],
            hashtags: ["#discovery", "#morning"]
        },
        {
            id: '14',
            description: 'Any over for say bore such sold five but hung',
            createdAt: new Date('2020-02-17T22:10:00'),
            author: 'Yellow',
            photoLink: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            likes: ["Yellow", "Green"],
            hashtags: ["#studied", "#frequently"]
        },
        {
            id: '15',
            description: 'Behind sooner dining so window excuse he summer',
            createdAt: new Date('2020-03-17T23:06:00'),
            author: 'Purple',
            photoLink: 'https://api.adorable.io/avatars/285/b2r@adorble.png',
            likes: ["Red", "Green", "Blue"],
            hashtags: ["#studied", "#frequently", "#world"]
        },
        {
            id: '16',
            description: 'Age old begin had boy noisy table front whole given',
            createdAt: new Date('2020-03-18T23:09:00'),
            author: 'Bear',
            photoLink: 'https://million-wallpapers.ru/wallpapers/1/49/353539491034742/vremya-kofe-dlya-plyushevogo-medvedya.jpg',
            likes: ["Red", "Yellow", "Green"],
            hashtags: ["#bachelor", "#life"]
        },
        {
            id: '17',
            description: 'Gentleman he september in oh excellent',
            createdAt: new Date('2020-03-23T17:48:00'),
            author: 'Red',
            photoLink: 'https://api.adorable.io/avatars/285/bawr@adorsdle.png',
            likes: ["Bear", "Green"],
            hashtags: ["#year", "#compliment"]
        },
        {
            id: '18',
            description: 'Lose away off why half led have near bed',
            createdAt: new Date('2020-03-22T21:09:00'),
            author: 'Blue',
            photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
            likes: ["Bear", "Red"],
            hashtags: ["#scale", "#world"]
        },
        {
            id: '19',
            description: 'Age old begin had boy noisy table front whole given',
            createdAt: new Date('2020-03-20T20:20:00'),
            author: 'Bear',
            photoLink: 'https://million-wallpapers.ru/wallpapers/1/49/353539491034742/vremya-kofe-dlya-plyushevogo-medvedya.jpg',
            likes: ["Yellow", "Purple"],
            hashtags: ["#hello", "#merry"]
        },
        {
            id: '20',
            description: 'Several any had enjoyed shewing studied two',
            createdAt: new Date('2020-03-21T13:09:00'),
            author: 'Yellow',
            photoLink: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            likes: ["Bear", "Green", "Red", "Yellow"],
            hashtags: ["#year", "#met"]
        }
    ];


    function getPosts(skip = 0, top = 10, filterConfig = {}) {
        sortByDate();
        if (Object.keys(filterConfig).length === 0) {
            console.log('empty filter');
            console.log(posts.slice(skip - 1, top + skip));
        } else {
            console.log('filter isnot empty');
            var props = Object.keys(filterConfig);
            if (filterConfig.hasOwnProperty('hashtags')) {
                var tags = filterConfig['hashtags'];
            }
            if (filterConfig.hasOwnProperty('likes')) {
                var likes = filterConfig['likes'];
            }
            var filtered = posts.filter(function (obj) {
                var check = 0;

                for (var i = 0; i < props.length; i++) {
                    if (props[i] === 'hashtags') {
                        for (var j = 0; j < tags.length; j++) {
                            if (!(obj['hashtags'].includes(tags[j]))) {
                                check = 1;
                                break;
                            }
                        }
                    } else if (props[i] === 'likes') {
                        for (var j = 0; j < likes.length; j++) {
                            if (!(obj['likes'].includes(likes[j]))) {
                                check = 1;
                                break;
                            }
                        }
                    } else if (!(filterConfig[props[i]] === obj[props[i]])) {
                        check = 1;
                    }
                    if (check === 1) break;
                }
                if (check === 0) return obj;
                else return null;

            });
            console.log(filtered.slice(skip, top + skip));
        }
    }


    function sortByDate() {
        posts.sort(function (a, b) {
            if (a.createdAt > b.createdAt) return 1;
            else if (a.createdAt < b.createdAt) return -1;
            else return 0;
        })
    }


    function getPost(id) {
        let post = posts.find(item => item.id === id);
        if (post !== null) {
            return post;
        } else {
            return {};
        }
    }

    function validatePost(post) {
        while (true) {
            if (typeof (post.id) === 'string') {
                for (let i = 0; i < posts.length; i++) {
                    if (posts[i].id === post.id)
                        break;
                }
            }
            if (typeof (post.description) === 'string') {
                if (post.description.length > 200)
                    break;
            }
            if (toString.call(post.createdAt) !== '[object Date]') {
                break;
            }
            if (typeof (post.author) === 'string') {
                if (post.author.length < 1)
                    break;
            }
            if (typeof (post.photoLink) !== 'string') {
                break;
            }
            for (let i = 0; i < post.likes.length; i++) {
                if (typeof (post.likes[i]) !== 'string') {
                    break;
                }
            }
            /*for (let i = 0; i < post.hashtags.length; i++) {
                if (typeof (post.hashtags[i]) !== 'string') {
                    break;
                }
            }*/
            return true;
        }
        return false;
    }

    function addPost(post) {
        if (validatePost(post)) {
            posts.push(post);
            return true;
        }
        return false;
    }


    function editPost(id, post) {
        if (validatePost(post)) {
            let toEdPost = getPost(id);
            if (post.hasOwnProperty('description')) {
                toEdPost.description = post.description;
            }
            if (post.hasOwnProperty('photoLink')) {
                toEdPost.photoLink = post.photoLink;
            }
            return true;
        }
        else {
            return false;
        }
    }

    function removePost(id) {
        /*var itemD = posts.find(item => item.id === id);
        delete itemD;*/
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === id) {
                posts.splice(i, 1);
            }
        }
        return false;
    }


    getPosts(0, 14, {likes: ['Yellow']});
    console.log('^test 1, valid, 11 elem < 15, so prints 11');
    getPosts(0, 8, {likes: ['Blue']});
    console.log('^test 2, valid, 11 elem > 8, so prints 8');
    getPosts(100, 10, {hashtags: ['kek']});
    console.log('^-test 3, valid, but empty');
    getPosts(0, 15);
    console.log('^-test 4, valid');
    getPosts(0, {likes: ['Beard']});
    console.log('^-test 5, invalid');
    console.log(getPost('1'));
    console.log('^-test 6, valid');
    console.log(getPost("abc"));
    console.log('^-test 7, invalid id');

    console.log(validatePost({}));
    console.log('^-test 8, validation');
    console.log(validatePost({
        id: '1111',
        description: 'Sunny day',
        createdAt: new Date('2020-01-16T22:00:20'),
        author: 'Man is good',
        photoLink: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        tag: [],
        likes: ['Blue', 'Smile']
    }));
    console.log('^test 9, validation');
    console.log(validatePost({
        id: '1',
        description: 'Sunny day',
        createdAt: new Date('2020-01-16T22:00:20'),
        author: 'Man is good',
        photoLink: '',
        tag: [],
        likes: ['Blue', 'Smile']
    }));
    console.log('^test 10, validation');

    console.log(addPost({
        id: '1',
        description: 'Sunny day',
        createdAt: new Date('2020-01-16T22:00:20'),
        author: 'Man is good',
        photoLink: '',
        tag: [],
        likes: ['Blue', 'Smile']
    }));
    console.log(posts);
    console.log('^test 11, add');

    console.log(addPost({
        id: '170',
        description: 'Sunny day',
        createdAt: new Date('2020-01-16T22:00:20'),
        author: 'Man is good',
        photoLink: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        tag: [],
        likes: ['Blue', 'Smile']
    }));
    console.log(posts);
    console.log('^test 12, add');

    editPost('1', {description: '191'});
    console.log(posts);
    console.log('^test 13, edit');

    removePost('1');
    console.log(posts);
    console.log('^test 14, remove');

}());