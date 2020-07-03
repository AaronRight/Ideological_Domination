package com.tengu.parties;

import com.tengu.users.User;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
public class Party {
    @Id
    @GeneratedValue
    private UUID id;

    String title;
    String color;

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

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Set<User> getUsers() { return new HashSet<>();/*users;*/ }

    public void addUser(User user) { /*this.users.add(user);*/ }

    public void removeUser(User user) { /*this.users.remove(user);*/ }
}
