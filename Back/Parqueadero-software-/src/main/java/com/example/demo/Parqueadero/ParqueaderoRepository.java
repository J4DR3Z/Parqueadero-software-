package com.example.demo.Parqueadero;


import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface ParqueaderoRepository extends JpaRepository<Parqueadero, Integer> {
    List<Parqueadero> findByDisponibleTrue();
}
