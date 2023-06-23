package com.codestates.PreProject.auth.config;

import com.codestates.PreProject.auth.filter.JwtAuthenticationFilter;
import com.codestates.PreProject.auth.filter.JwtVerificationFilter;
import com.codestates.PreProject.auth.handler.OAuth2UserSuccessHandler;
import com.codestates.PreProject.auth.handler.UserAccessDeniedHandler;
import com.codestates.PreProject.auth.handler.UserAuthenticationEntryPoint;
import com.codestates.PreProject.auth.jwt.JwtTokenizer;
import com.codestates.PreProject.auth.utils.CustomAuthorityUtils;
import com.codestates.PreProject.auth.helper.handler.UserAuthenticationFailureHandler;
import com.codestates.PreProject.auth.helper.handler.UserAuthenticationSuccessHandler;
import com.codestates.PreProject.user.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final UserService userService;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils,
                                 UserService userService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.userService = userService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()  // 추가
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())  // 추가
                .accessDeniedHandler(new UserAccessDeniedHandler())            // 추가
                .and()
                .apply(new CustomFilterConfigurer())  // 추가
                .and()
                .authorizeHttpRequests(authorize -> authorize // url authorization 전체 추가
//                        .antMatchers(HttpMethod.POST, "/*/members").permitAll()    // OAuth 2로 로그인하므로 회원 정보 등록 필요 없음.
//                        .antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER") // OAuth 2로 로그인하므로 회원 정보 수정 필요 없음.
//                        .antMatchers(HttpMethod.GET, "/*/members").hasRole("ADMIN")  // OAuth 2로 로그인하므로 회원 정보 수정 필요 없음.
//                        .antMatchers(HttpMethod.GET, "/*/members/**").hasAnyRole("USER", "ADMIN")  // OAuth 2로 로그인하므로 회원 정보 수정 필요 없음.
//                        .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER") // OAuth 2로 로그인하므로 회원 정보 수정 필요 없음.
                                .antMatchers(HttpMethod.POST, "/*/questions").hasAnyRole("ADMIN","USER")
                                .antMatchers(HttpMethod.POST, "/*/answers").hasAnyRole("ADMIN","USER")
                                .antMatchers(HttpMethod.PATCH, "/*/questions").hasAnyRole("ADMIN","USER")
                                .antMatchers(HttpMethod.PATCH, "/*/answers").hasAnyRole("ADMIN","USER")
                                .antMatchers(HttpMethod.GET, "/*/questions/**").hasAnyRole("ADMIN","USER")
                                .antMatchers(HttpMethod.GET, "/*/questions").permitAll()
                                .antMatchers(HttpMethod.DELETE, "/*/questions").hasAnyRole("ADMIN","USER")
                                .antMatchers(HttpMethod.DELETE, "/*/answers").hasAnyRole("ADMIN","USER")
                                .anyRequest().permitAll()
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2UserSuccessHandler(jwtTokenizer, authorityUtils, userService))  // (1)
                );

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    // 추가
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class); // (2)
        }
    }
}


/*
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils customAuthorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = customAuthorityUtils;
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll()
                );
        return http.build();
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }


    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }

    }*/
