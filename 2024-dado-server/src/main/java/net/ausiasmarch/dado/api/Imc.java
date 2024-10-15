package net.ausiasmarch.dado.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.ausiasmarch.dado.bean.ImcBean;
import net.ausiasmarch.dado.bean.ResultadoImcBean;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RestController
@RequestMapping("/imc")
public class Imc {

    @PostMapping("/calcular")
    public ResponseEntity<ResultadoImcBean> calcular(@RequestBody ImcBean oImcBean) {
        ResultadoImcBean oResultadoImcBean = new ResultadoImcBean();
        oResultadoImcBean.setImc(oImcBean.getPeso() / (oImcBean.getAltura() * oImcBean.getAltura()));
        return new ResponseEntity<ResultadoImcBean>(oResultadoImcBean, HttpStatus.OK);
    }

}
