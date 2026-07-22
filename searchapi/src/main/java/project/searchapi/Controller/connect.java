package project.searchapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.searchapi.DTO.SearchData;
import project.searchapi.Repo.search;

import java.util.Map;

@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
@RestController
@RequestMapping("/search")
public class connect {

    @Autowired
    private search search;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody SearchData in) {
        SearchData saved = search.save(in);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "message", true,
                "data", saved
        ));
    }

    @GetMapping("/all")
    public ResponseEntity<?> all() {
        return ResponseEntity.ok(Map.of(
                "message", true,
                "data", search.findAll()
        ));
    }

    @GetMapping("/fetch")
    public ResponseEntity<?> retrieve(@RequestParam Integer id) {
        return search.findById(id).map(data -> ResponseEntity.ok(Map.of(
                "message", true,
                "data", data
        ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of(
                "message", false,
                "data", "No data found"
        )));
    }
}

