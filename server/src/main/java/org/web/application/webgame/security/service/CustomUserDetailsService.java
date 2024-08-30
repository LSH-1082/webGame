package org.web.application.webgame.security.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.web.application.webgame.mapper.UserMapper;
import org.web.application.webgame.model.UserModel;
import org.web.application.webgame.security.DTO.CustomUserDetails;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserMapper userMapper;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel userModel = userMapper.findByUsername(username);
        if (userModel != null) return new CustomUserDetails(userModel);
        return null;
    }
}
