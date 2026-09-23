package com.nccs.controller;

import org.springframework.web.bind.annotation.*;

import com.nccs.model.Event;
import com.nccs.repository.EventRepository;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins="*")

public class EventController {

    private final EventRepository repo;

    public EventController(EventRepository repo) {
        this.repo = repo;
    }

    // GET EVENTS
    @GetMapping
    public List<Event> getEvents() {
        return repo.findAll();
    }

    // ADD EVENT
    @PostMapping
    public Event addEvent(@RequestBody Event event) {
        return repo.save(event);
    }

    // DELETE EVENT
    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable Long id) {
        repo.deleteById(id);
    }

    // UPDATE EVENT
    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event event) {

        Event existingEvent = repo.findById(id).orElse(null);

        if(existingEvent != null){
            existingEvent.setTitle(event.getTitle());
            existingEvent.setDate(event.getDate());
            existingEvent.setDescription(event.getDescription());
            return repo.save(existingEvent);
        }

        return null;
    }
}