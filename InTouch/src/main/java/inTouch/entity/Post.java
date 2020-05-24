package inTouch.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Post {
    public String id;
    public String description;
    public Date createdAt;
    public String author;
    public String photoLink;
    public List<String> hashtags;
    public List<String> likes;

    public Post(String id, String description, String author, String photoLink, List<String> hashtags, List<String> likes) {
        this.id = id;
        this.description = description;
        this.createdAt = new Date();
        this.author = author;
        this.photoLink = photoLink;
        this.hashtags = new ArrayList<>(hashtags);
        this.likes = new ArrayList<>(likes);
    }
}
