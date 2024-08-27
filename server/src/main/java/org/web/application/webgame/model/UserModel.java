package org.web.application.webgame.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserModel {
    private Long idx;
    private String username;
    private String password;
    private int winCount;
    private int loseCount;
    private UserRole userRole;
}
