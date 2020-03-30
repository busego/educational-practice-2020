class PostList {

    #currentPosts = [];
    #uncheckedID = 0;
    constructor(posts) {
         this.addAll(posts);
    }


    getPage(skip = 0, top = 10, filterConfig = {}) {
        this.sortByDates();
        let props = Object.keys(filterConfig);
        if (props.length === 0) {
            return this.#currentPosts.slice(skip, top + skip);
        } else {
            let hasFiltered = this.filterPosts(filterConfig, props);
            return hasFiltered.slice(skip, top + skip);
        }
    }

    sortByDates() {
        this.#currentPosts.sort(function (a, b) {
            if (a.createdAt > b.createdAt) return 1;
            else if (a.createdAt < b.createdAt) return -1;
            else return 0;
        })
    }

    
    filterPosts(filterConfig = {}, keys) {
        if (filterConfig.hasOwnProperty('hashtags')) {
            var hashtags = filterConfig['hashtags'];
        }
        if (filterConfig.hasOwnProperty('likes')) {
            var likes = filterConfig['likes'];
        }
        let hasFiltered = this.#currentPosts.filter(function (obj) {
            let check = 0;
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] === 'hashtags') {
                    for (let j = 0; j < tags.length; j++) {
                        if (!(obj['hashtags'].includes(hashtags[j]))) {
                            check = 1;
                            break;
                        }
                    }
                } else if (keys[i] === 'likes') {
                    for (let j = 0; j < likes.length; j++) {
                        if (!(obj['likes'].includes(likes[j]))) {
                            check = 1;
                            break;
                        }
                    }
                } else if (!(filterConfig[keys[i]] === obj[keys[i]])) {
                    check = 1;
                }
                if (check === 1) break;
            }
            if (check === 0) return obj;
            else return null;
        });
        return hasFiltered;
    }



    get(id) {
        for (let i = 0; i < this.#currentPosts.length; i++) {
            if (this.#currentPosts[i].id === id) {
                console.log(this.#currentPosts[i].id);
                return this.#currentPosts[i];
            }
        }
        return {};
    }

    add(post) {
        if (PostList.validatePost(post)) {
            post.id = this.#uncheckedID.toString();
            this.#uncheckedID++;
            this.#currentPosts.push(post);
            return true;
        } else {
            return false;
        }
    }

    static validatePost(post) {
        while (true) {
            if (typeof (post.id) !== 'string') {
                break;
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

    edit(id = 0, toChange = {}) {
        let TPost = this.get(id);
        this.remove(id);
        if (toChange.hasOwnProperty('description')) {
            TPost.description = toChange.description;
        }
        if (toChange.hasOwnProperty('photoLink')) {
            TPost.photoLink = toChange.photoLink;
        }
        if (PostList.validatePost(TPost)) {
            this.#currentPosts.push(TPost);
            return true;
        } else {
            return false;
        }
    }

    remove(id = 0) {
        for (let i = 0; i < this.#currentPosts.length; i++) {
            if (this.#currentPosts[i].id === id) {
                this.#currentPosts.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    addAll(posts = []) {
        var notgood = [];
        for (let i = 0; i < posts.length; i++) {
            if (!this.add(posts[i])) {
                notgood.push(posts[i]);
            }
        }
        return notgood;
    }

    clear() {
        this.#currentPosts.splice(0, this.#currentPosts.length);
        this.#uncheckedID = 0;
    }

    printPosts() {
        for (let i = 0; i < this.#currentPosts.length; i++) {
            console.log(this.#currentPosts[i]);
        }
    }

}


var myTweets = new PostList([
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
    }]);



myTweets.printPosts();
console.log('test№1');

console.log(myTweets.addAll([
    {
        id: '1',
        description: 'At wrong of of water those linen',
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
    }]));

myTweets.printPosts();
console.log('test№2');




console.log(myTweets.add({
    id: '1',
    description: 'Lose away off why half led have near bed',
    createdAt: new Date('2020-03-22T21:09:00'),
    author: 'Blue',
    photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
    likes: ["Bear", "Red"],
    hashtags: ["#scale", "#world"]
}));
console.log('test№3');

console.log(myTweets.getPage(4, 17, {likes: ['Yellow']}));
console.log('test№4');
myTweets.edit('1', {description: 'Several any had enjoyed shewing studied two'});
console.log(myTweets.get('1'));
console.log('test№5');

console.log(myTweets.add({}));
console.log('test№6');
myTweets.clear();
myTweets.printPosts();
console.log('test№7');
