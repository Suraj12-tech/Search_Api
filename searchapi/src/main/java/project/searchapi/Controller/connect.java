package project.searchapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.searchapi.DTO.SearchData;
import project.searchapi.Repo.search;

import java.util.Map;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/search")
public class connect {

    @Autowired
    private search search;

    @PostMapping
    public ResponseEntity<?> create (@RequestBody SearchData in){
      SearchData save = search.save(in);
      return ResponseEntity.status(HttpStatus.CREATED).body(save);
    }

    @GetMapping("/all")
    public ResponseEntity<?> all(){
        Object get = search.findAll();
        return ResponseEntity.ok().body(get);
    }

    @GetMapping("/fetch")
    public ResponseEntity<?> retive(@RequestBody SearchData req){
        return  search.findById(req.getId()).map(data -> ResponseEntity.ok(
                Map.of(
                        "message", true,
                        "data", data
                )
        )).orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of(
                "message", false,
                "data", "No data found"
        )));

    }

}
