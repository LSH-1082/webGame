package org.web.application.webgame.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.web.application.webgame.DTO.UserDTO;
import org.web.application.webgame.mapper.UserMapper;
import org.web.application.webgame.model.UserModel;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public boolean existUsername(String username) {
        return userMapper.findByUsername(username) != null;
    }

    public String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }

    public String register(UserDTO userDTO) {
        if(existUsername(userDTO.getUsername())) return "nameFailed";
        try {
            UserModel userModel = UserModel.builder()
                    .username(userDTO.getUsername())
                    .password(encodePassword(userDTO.getPassword()))
                    .winCount(0)
                    .loseCount(0)
                    .build();
            userMapper.register(userModel);
            return "success";
        }
        catch(Exception e) {
            return "failed";
        }
    }
}
