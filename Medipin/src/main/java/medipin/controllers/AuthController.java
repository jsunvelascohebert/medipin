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

@RestController
@CrossOrigin
@RequestMapping("/security")
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
    public ResponseEntity<Object> authenticate(@RequestBody Credentials credentials){

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(credentials.getUsername(), credentials.getPassword());

        try{
            Authentication authentication = authenticationManager.authenticate(authToken);

            if(authentication.isAuthenticated()){
                User user = (User) authentication.getPrincipal();
                return new ResponseEntity<>(makeUserTokenMap(user), HttpStatus.OK);
            }

        } catch (AuthenticationException e) {
            System.out.println(e);
        }

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/refresh token")
    public ResponseEntity<Object> refreshToken(@AuthenticationPrincipal User user){
        return new ResponseEntity<>(makeUserTokenMap(user), HttpStatus.OK);
    }

    @PostMapping("/create_account")
    public ResponseEntity<Object> create (@RequestBody Credentials credentials){
        Result<User> result = service.add(credentials);

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
