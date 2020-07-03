package com.tengu.initiatives;

import com.tengu.ideas.Idea;
import com.tengu.users.User;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class Initiative {
    @Id
    @GeneratedValue
    private UUID id;

    String title;
    String text;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idea_id", nullable = false)
    Idea idea;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id", columnDefinition="uuid not null")
    private User author;


    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Idea getIdea() {
        return idea;
    }

    public void setIdea(Idea idea) {
        this.idea = idea;
    }

    @Override
    public String toString() {
        return "Party [" + title + ":" + text + "]";
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }
}
