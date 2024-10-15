package net.ausiasmarch.dado.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.ausiasmarch.dado.bean.Resultado;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RestController
@RequestMapping("/dado")
public class Dado {

    private Integer getIntRandomNumber(Integer min, Integer max) {
        return (int) (Math.random() * (max - min + 1) + min);
    }

    @GetMapping("/tira")
    public ResponseEntity<Resultado> tira() {
        Resultado oResultado = new Resultado(getIntRandomNumber(1, 6));
        return new ResponseEntity<Resultado>(oResultado, HttpStatus.OK);
    }

}
