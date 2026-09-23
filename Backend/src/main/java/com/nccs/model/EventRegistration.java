package com.nccs.model;

import jakarta.persistence.*;

@Entity
@Table(name="event_registration")
public class EventRegistration {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String name;
 private String email;
 private String phone;

 @Column(name="event_title")
 private String eventTitle;

 public Long getId(){ return id; }

 public String getName(){ return name; }
 public void setName(String name){ this.name=name; }

 public String getEmail(){ return email; }
 public void setEmail(String email){ this.email=email; }

 public String getPhone(){ return phone; }
 public void setPhone(String phone){ this.phone=phone; }

 public String getEventTitle(){ return eventTitle; }
 public void setEventTitle(String eventTitle){ this.eventTitle=eventTitle; }
}