package project.searchapi.Repo;


import org.springframework.data.jpa.repository.JpaRepository;
import project.searchapi.DTO.SearchData;
public interface search extends JpaRepository<SearchData, Integer > {

}
