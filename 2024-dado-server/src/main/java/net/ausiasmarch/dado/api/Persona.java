package net.ausiasmarch.dado.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.ausiasmarch.dado.bean.PersonaBean;
import java.util.ArrayList;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RestController
@RequestMapping("/persona")

public class Persona {

    private Integer getIntRandomNumber(Integer min, Integer max) {
        return (int) (Math.random() * (max - min + 1) + min);
    }

    private String getNombrePersona() {
        ArrayList<String> oPersonas = new ArrayList<String>();
        oPersonas.add("Pepe");
        oPersonas.add("Laura");
        oPersonas.add("Ignacio");
        oPersonas.add("Maria");
        oPersonas.add("Lorenzo");
        oPersonas.add("Carmen");
        oPersonas.add("Rosa");
        oPersonas.add("Paco");
        oPersonas.add("Luis");
        oPersonas.add("Ana");
        return oPersonas.get(getIntRandomNumber(0, oPersonas.size() - 1));
    }

    private String getApellidoPersona() {
        ArrayList<String> oPersonas = new ArrayList<String>();
        oPersonas.add("Sancho");
        oPersonas.add("Gomez");
        oPersonas.add("Pérez");
        oPersonas.add("Rodriguez");
        oPersonas.add("Garcia");
        oPersonas.add("Fernandez");
        oPersonas.add("Lopez");
        oPersonas.add("Martinez");
        oPersonas.add("Sanchez");
        oPersonas.add("Gonzalez");
        return oPersonas.get(getIntRandomNumber(0, oPersonas.size() - 1));
    }

    private ArrayList<PersonaBean> getPersonas(int numPersonas) {
        ArrayList<PersonaBean> oPersonas = new ArrayList<PersonaBean>();        
        for (int i = 0; i < numPersonas; i++) {
            PersonaBean oPersona = new PersonaBean();
            oPersona.setNombre(getNombrePersona());
            oPersona.setApellido1(getApellidoPersona());
            oPersona.setApellido2(getApellidoPersona());
            oPersona.setEmail(
                    oPersona.getNombre().toLowerCase() + oPersona.getApellido1().toLowerCase()
                            + getIntRandomNumber(99, 999)
                            + "@ausiasmarch.net");
            oPersonas.add(oPersona);
        }
        return oPersonas;
    }

    @GetMapping("/genera/{numPersonas}")
    public ResponseEntity<ArrayList<PersonaBean>> genera(@PathVariable Integer numPersonas) {
        return new ResponseEntity<ArrayList<PersonaBean>>(getPersonas(numPersonas), HttpStatus.OK);
    }

}
