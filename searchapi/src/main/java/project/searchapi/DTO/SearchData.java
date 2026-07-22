package project.searchapi.DTO;

import com.fasterxml.jackson.databind.JsonNode;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.Map;

@Entity
@Data
public class  SearchData{
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Integer id;
    private String data;//<-------
}
