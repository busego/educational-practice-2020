class PostCollection {
    _collPosts = [];

    constructor(posts = []) {
        this._collPosts = posts.filter(post => this.validate(post));
    }

    //i can't use static validate from nonstatic funcs
    validate(post={}) {
        if (typeof post.description !== 'string' || post.description.length >= 200) {
            console.log("Crashed in validation");
            return false;
        }
        if (post.photoLink !== undefined && typeof post.photoLink !== 'string') {
            console.log("Crashed in validation");
            return false;
        }
        if (!Array.isArray(post.hashtags) && post.hashtags !== undefined) {
            console.log("Crashed in validation");
            return false;
        }
        if (!Array.isArray(post.likes) && post.likes !== undefined) {
            console.log("Crashed in validation");
            return false;
        }
        return true;
    }

    getPage(skip = 0, top = 10, filterConfig = {}) {
        this.filterConfig = filterConfig;
        if(this.filterConfig != null) {
            return this._collPosts.filter(item => (this.filterConfig.author == null || item.author === this.filterConfig.author) &&
              (this.filterConfig.hashtags == null || this.filterConfig.hashtags.filter(tag => item.hashtags.includes(tag)).length === this.filterConfig.hashtags.length))
              .slice(skip, skip + top).sort(a => a.createdAt);
        }
        return this._collPosts.slice(skip, skip + top).sort(a => a.createdAt);
    }



    get(id = 0) {
        return this._collPosts.find(item => item.id === id);
    }

    addAll(posts = []) {
        return posts.filter(post => !this.add(post));
    }

    add(post = {}) {
        if (this.validate(post)) {
            post.id = this._collPosts[this._collPosts.length - 1].id + 1;
            post.createdAt = new Date();
            post.author = "Smb";
            this._collPosts.push(post);
            return true;
        }
        console.log("Crashed in add Post");
        return false;
    }

    edit(id = 0, post = {}) {
        let toEdPost = this.get(id);
        if (!toEdPost) {
            console.log("No such post to edit");
            return false;
        }
        Object.keys(post).forEach(a => toEdPost[a] = post[a]);

        if (this.validate(toEdPost)) {
            this.remove(id);
            this.add(toEdPost);
            return true;
        }
        console.log("Crashed in validation of editPost");
        return false;
    }

    remove(id = 0) {
        this._collPosts = this._collPosts.filter(value => value.id !== id);
        return true
    }

    clear() {
        this._collPosts = []
        console.log('all posts cleared');
    }
}


const myPosts = new PostCollection([
    {
        id: '1',
        description: 'At wrong of of water those linen',
        createdAt: new Date('2020-03-15T14:03:00'),
        author: 'Bear',
        photoLink: 'https://million-wallpapers.ru/wallpapers/1/49/353539491034742/vremya-kofe-dlya-plyushevogo-medvedya.jpg',
        likes: ['Bear', 'Yellow', 'Blue'],
        hashtags: ['#hello', '#world']
    },
    {
        id: '2',
        description: 'In excuse hardly summer in basket misery',
        createdAt: new Date('2020-01-19T21:00:00'),
        author: 'Yellow',
        photoLink: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        likes: ['Red', 'Yellow'],
        hashtags: ['#spam', '#car, #peace']
    },
    {
        id: '3',
        description: 'By rent an part need',
        createdAt: new Date('2020-03-17T23:00:00'),
        author: 'Blue',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
        likes: ['Purple', 'Blue'],
        hashtags: ['#mice', '#world']
    },
    {
        id: '4',
        description: 'Oh shutters do removing reserved wandered an',
        createdAt: new Date('2020-02-11T20:10:00'),
        author: 'Purple',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorble.png',
        likes: ['Bear', 'Purple', 'Blue', 'Yellow', 'Blue'],
        hashtags: ['#breakfast ', '#old', '#period']
    },
    {
        id: '5',
        description: 'Pianoforte reasonable as so am inhabiting',
        createdAt: new Date('2020-03-18T17:08:00'),
        author: 'Green',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorsdble.png',
        likes: ['Bear', 'Red'],
        hashtags: ['#half', '#sixteen']
    },
    {
        id: '6',
        description: 'Chatty design remark and his abroad figure but its',
        createdAt: new Date('2020-02-17T15:07:00'),
        author: 'Grey',
        photoLink: 'https://api.adorable.io/avatars/285/baw2r@adorsdle.png',
        likes: ['Bear', 'Blue'],
        hashtags: ['#anxious ', '#world', '#space']
    },
    {
        id: '7',
        description: 'Those an equal point no years do',
        createdAt: new Date('2020-03-15T19:19:00'),
        author: 'Red',
        photoLink: 'https://api.adorable.io/avatars/285/bawr@adorsdle.png',
        likes: ['Bear', 'Yellow', 'Blue'],
        hashtags: ['#hello', '#world']
    },
    {
        id: '8',
        description: 'Shy and subjects wondered trifling pleasant',
        createdAt: new Date('2020-01-19T22:00:00'),
        author: 'Grey',
        photoLink: 'https://api.adorable.io/avatars/285/baw2r@adorsdle.png',
        likes: ['Blue', 'Red'],
        hashtags: ['#equal', '#space']
    },
    {
        id: '9',
        description: 'Depend warmth fat but her but played',
        createdAt: new Date('2020-02-19T20:09:00'),
        author: 'Blue',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
        likes: ['Bear', 'Purple', 'Red'],
        hashtags: ['#goodness', '#oppose']
    },
    {
        id: '10',
        description: 'Smart mrs day which begin. Snug do sold mr it if such',
        createdAt: new Date('2020-03-17T22:22:22'),
        author: 'Red',
        photoLink: 'https://api.adorable.io/avatars/285/bawr@adorsdle.png',
        likes: ['Bear', 'Yellow', 'Purple', 'Red', 'Blue'],
        hashtags: ['#flash', '#world', '#stairs']
    },
    {
        id: '11',
        description: 'Terminated uncommonly at at estimating',
        createdAt: new Date('2020-03-16T21:37:00'),
        author: 'Green',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorsdble.png',
        likes: ['Bear', 'Yellow', 'Blue'],
        hashtags: ['#hello', '#world']
    },
    {
        id: '12',
        description: 'Man behaviour met moonlight extremity acuteness direction',
        createdAt: new Date('2020-03-10T11:11:00'),
        author: 'Blue',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
        likes: ['Red', 'Yellow', 'Purple'],
        hashtags: ['#bye', '#melancholy', '#rapture']
    },
    {
        id: '13',
        description: 'Mile tell if help they ye full name',
        createdAt: new Date('2020-03-11T13:08:00'),
        author: 'Purple',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorble.png',
        likes: ['Green', 'Blue'],
        hashtags: ['#discovery', '#morning']
    }]);


console.log(myPosts.addAll([
    {
        id: '11',
        description: 'Terminated uncommonly at at estimating',
        createdAt: new Date('2020-03-16T21:37:00'),
        author: 'Green',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorsdble.png',
        likes: ['Bear', 'Yellow', 'Blue'],
        hashtags: ['#hello', '#world']
    },
    {
        id: '12',
        description: 'Man behaviour met moonlight extremity acuteness direction',
        createdAt: new Date('2020-03-10T11:11:00'),
        author: 'Blue',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
        likes: ['Red', 'Yellow', 'Purple'],
        hashtags: ['#bye', '#melancholy', '#rapture']
    },
    {
        id: '13',
        description: 'Mile tell if help they ye full name',
        createdAt: new Date('2020-03-11T13:08:00'),
        author: 'Purple',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorble.png',
        likes: ['Green', 'Blue'],
        hashtags: ['#discovery', '#morning']
    },
    {
        id: '14',
        description: 'Any over for say bore such sold five but hung',
        createdAt: new Date('2020-02-17T22:10:00'),
        author: 'Yellow',
        photoLink: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        likes: ['Yellow', 'Green'],
        hashtags: ['#studied', '#frequently']
    },
    {
        id: '15',
        description: 'Behind sooner dining so window excuse he summer',
        createdAt: new Date('2020-03-17T23:06:00'),
        author: 'Purple',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorble.png',
        likes: ['Red', 'Green', 'Blue'],
        hashtags: ['#studied', '#frequently', '#world']
    },
    {
        id: '16',
        description: 'Age old begin had boy noisy table front whole given',
        createdAt: new Date('2020-03-18T23:09:00'),
        author: 'Bear',
        photoLink: 'https://million-wallpapers.ru/wallpapers/1/49/353539491034742/vremya-kofe-dlya-plyushevogo-medvedya.jpg',
        likes: ['Red', 'Yellow', 'Green'],
        hashtags: ['#bachelor', '#life']
    },
    {
        id: '17',
        description: 'Gentleman he september in oh excellent',
        createdAt: new Date('2020-03-23T17:48:00'),
        author: 'Red',
        photoLink: 'https://api.adorable.io/avatars/285/bawr@adorsdle.png',
        likes: ['Bear', 'Green'],
        hashtags: ['#year', '#compliment']
    },
    {
        id: '18',
        description: 'Lose away off why half led have near bed',
        createdAt: new Date('2020-03-22T21:09:00'),
        author: 'Blue',
        photoLink: 'https://api.adorable.io/avatars/285/b2r@adorable.png',
        likes: ['Bear', 'Red'],
        hashtags: ['#scale', '#world']
    },
    {
        id: '19',
        description: 'Age old begin had boy noisy table front whole given',
        createdAt: new Date('2020-03-20T20:20:00'),
        author: 'Bear',
        photoLink: 'https://million-wallpapers.ru/wallpapers/1/49/353539491034742/vremya-kofe-dlya-plyushevogo-medvedya.jpg',
        likes: ['Yellow', 'Purple'],
        hashtags: ['#hello', '#merry']
    },
    {
        id: '20',
        description: 'Several any had enjoyed shewing studied two',
        createdAt: new Date('2020-03-21T13:09:00'),
        author: 'Yellow',
        photoLink: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        likes: ['Bear', 'Green', 'Red', 'Yellow'],
        hashtags: ['#year', '#met']
    }]));



console.log(myPosts.add({
    id: '1',
    description: 'Lose away off why half led have near bed',
    createdAt: new Date('2020-03-21T13:09:00'),
    author: 'Yellow',
    photoLink: 'https://api.adorable.io/avatars/285/abott@adorable.png',
    likes: ['Bear', 'Red'],
    hashtags: ['#scale', '#world']
}));

console.log(myPosts.get('4'));
console.log(myPosts.getPage(5, 15));
myPosts.edit('1', {description: 'Several any had enjoyed shewing studied two'});
console.log(myPosts.get('1'));

console.log(myPosts.add({}));
myPosts.remove(1);
myPosts.clear();

console.log(myPosts.get('4'));
console.log(myPosts.get("8"));
