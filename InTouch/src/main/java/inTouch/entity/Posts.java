package inTouch.entity;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class Posts {
    private List<Post> posts;

    public Posts() {
        posts = new ArrayList<>();
        List<String> hashtags = new ArrayList<>();
        List<String> likes = new ArrayList<>();
        hashtags.add("bsu");
        hashtags.add("famcs");
        likes.add("egor");
        this.add(new Post("1", "good", "Bot1", "www.photolink.com", hashtags, likes));
        this.add(new Post("2", "bad", "Bot2", "www.photolink.com", hashtags, likes));
        this.add(new Post("3", "better", "Bot3", "www.photolink.com", hashtags, likes));
        this.add(new Post("4", "the best", "Bot4", "www.photolink.com", hashtags, likes));
    }

    public Post getPost(String id) {
        return posts.stream().filter(i -> i.id.equals(id)).findAny().orElse(null);
    }

    public List<Post> getPage() {
        return posts.stream().sorted(Comparator.comparing((Post p) -> p.createdAt).reversed()).skip(0).limit(10).collect(Collectors.toList());
    }


    public boolean validate(Post post) {
        if (post.id == null || post.id.length() < 1) {
            return false;
        }
        if (post.description == null || post.description.length() > 200) {
            return false;
        }
        if (post.createdAt == null) {
            return false;
        }
        if (post.author == null || post.author.length() < 1) {
            return false;
        }
        return post.photoLink == null || post.photoLink.length() >= 1;
    }

    public boolean add(Post post) {
        post.createdAt = new Date();
        if (validate(post)) {
            posts.add(post);
            return true;
        }
        return false;
    }

    public boolean editTweet(String id, Post post) {
        Post editgPost = this.getPost(id);
        if (post.description != null) {
            editgPost.description = post.description;
        }
        if (post.photoLink != null) {
            editgPost.photoLink = post.photoLink;
        }
        if (post.hashtags != null) {
            editgPost.hashtags = post.hashtags;
        }
        return validate(editgPost);
    }


    public List<Post> addPosts(List<Post> posts) {
        List<Post> wrongP = new ArrayList<>();
        for (Post post : posts) {
            if (validate(post)) {
                this.posts.add(post);
            } else {
                wrongP.add(post);
            }
        }
        return wrongP;
    }


    public boolean removePost(String id) {
        return posts.removeIf(post -> post.id.equals(id));
    }

    public void removeAll() {
        posts.clear();
    }
}