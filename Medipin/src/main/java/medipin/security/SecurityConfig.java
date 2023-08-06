package medipin.security;

import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@ConditionalOnWebApplication
public class SecurityConfig {

    private final JwtConverter converter;

    public SecurityConfig(JwtConverter converter){
        this.converter = converter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http,
                                           AuthenticationConfiguration authConfig) throws Exception {
        http.csrf().disable();
        http.cors();

        http.authorizeRequests() // TODO : revise these according to security needs

                /* TODO ***** ***** users ***** ***** */

                /* TODO ***** ***** topics ***** ***** */




                /* ***** ***** articles ***** ***** */

                .antMatchers(HttpMethod.GET, "/api/article").permitAll()
                .antMatchers(HttpMethod.GET, "/api/article/*").permitAll()
                .antMatchers(HttpMethod.POST, "/api/article").permitAll()
                .antMatchers(HttpMethod.PUT, "/api/article/*").permitAll()
                .antMatchers(HttpMethod.DELETE, "/api/article/*").permitAll()

                /* ***** ***** notes ***** ***** */

                .antMatchers(HttpMethod.GET, "/api/note").permitAll()
                .antMatchers(HttpMethod.GET, "/api/note/*").permitAll()
                .antMatchers(HttpMethod.POST, "/api/note").permitAll()
                .antMatchers(HttpMethod.PUT, "/api/note/*").permitAll()
                .antMatchers(HttpMethod.DELETE, "/api/note/*").permitAll()

                /* ***** ***** misc ***** ***** */

                .and()
                .addFilter(new JwtRequestFilter(authenticationManager(authConfig),converter))
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();

    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
        return config.getAuthenticationManager();
    }
}
