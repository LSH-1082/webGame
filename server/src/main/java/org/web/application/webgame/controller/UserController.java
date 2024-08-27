package org.web.application.webgame.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.application.webgame.DTO.UserDTO;
import org.web.application.webgame.service.UserService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO){
        return switch (userService.register(userDTO)) {
            case "success" -> ResponseEntity.ok().build();
            case "nameFailed" -> ResponseEntity.badRequest().body("중복된 이름이 존재합니다.");
            default -> ResponseEntity.badRequest().body("알 수 없는 오류가 발생하였습니다!");
        };
    }

    @GetMapping("/login")
    public UserDTO login(@RequestBody UserDTO userDTO){
        return userDTO;
    }
}
