package org.web.application.webgame.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.web.application.webgame.model.UserModel;

@Mapper
public interface UserMapper {
    void register(UserModel userModel);
    UserModel findByUsername(String username);
}
