package net.ausiasmarch.dado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.ausiasmarch.dado.entity.UsuarioEntity;

public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {

}
