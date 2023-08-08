package medipin.controllers;

import medipin.domain.Result;
import medipin.domain.UserService;
import medipin.models.User;
import medipin.security.Credentials;
import medipin.security.JwtConverter;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api")
@ConditionalOnWebApplication
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtConverter converter;
    private final UserService service;

    public AuthController(AuthenticationManager authenticationManager, JwtConverter converter, UserService service) {
        this.authenticationManager = authenticationManager;
        this.converter = converter;
        this.service = service;
    }


    @PostMapping("/authenticate")
    public ResponseEntity<Object> authenticate(@RequestBody Map<String,
                String> credentials){

        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(credentials.get("username"), credentials.get("password"));

        try {
            Authentication authentication = authenticationManager.authenticate(authToken);

            if (authentication.isAuthenticated()) {
                String jwtToken =
                        converter.getTokenFromUser((User) authentication.getPrincipal());

                HashMap<String, String> map = new HashMap<>();
                map.put("jwt_token", jwtToken);

                // get user from database
                Result<User> result = service.getByUsername(credentials.get(
                        "username"));
                if (result.isSuccess()) {
                    User user = result.getPayload();
                    map.put("name", user.getName());
                    map.put("userId", Integer.toString(user.getUserId()));
                    return new ResponseEntity<>(map, HttpStatus.OK);

                } else {
                    map.put("name", "N/A");
                    map.put("userId", "0");
                    return new ResponseEntity<>(result.getMessages(),
                            HttpStatus.BAD_REQUEST);
                }

            }

        } catch (AuthenticationException ex) {
            System.out.println(ex);
        }

        return new ResponseEntity<>(List.of("Bad Credentials"),
                HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/refresh_token")
    public ResponseEntity<Object> refreshToken(@AuthenticationPrincipal User user){
        return new ResponseEntity<>(makeUserTokenMap(user), HttpStatus.OK);
    }

    @PostMapping("/create_account")
    public ResponseEntity<Object> createAccount (@RequestBody Map<String,
            String> credentials) {

        String name = credentials.get("name");
        String username = credentials.get("username");
        String password = credentials.get("password");

        Credentials creds = new Credentials(name, username, password);
        Result<User> result = service.add(creds);

        if(!result.isSuccess()){
            return new ResponseEntity<>(result.getMessages(), HttpStatus.BAD_REQUEST);
        }

        HashMap<String, Integer> map = new HashMap<>();
        map.put("userId", result.getPayload().getUserId());

        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    private HashMap<String, String> makeUserTokenMap(User user){
        HashMap<String, String>map = new HashMap<>();
        String jwtToken = converter.getTokenFromUser(user);
        map.put("jwt_token", jwtToken);
        return map;
    }
}
