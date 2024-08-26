package org.web.application.webgame.DTO;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDTO {
    private Long idx;
    private String username;
    private String password;
    private int winCount;
    private int loseCount;
}
