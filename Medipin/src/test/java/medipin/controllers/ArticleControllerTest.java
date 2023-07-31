package medipin.controllers;

import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import medipin.data.ArticleRepository;
import medipin.models.Article;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringJUnitConfig
@AutoConfigureMockMvc
@SpringBootTest
@Import(TestConfig.class)
class ArticleControllerTest {

    @MockBean
    ArticleRepository repository;

    @Autowired
    MockMvc mvc;

    /* ***** ***** getAll and getById tests ***** ***** */

    @Test
    void getAllShouldReturn200() throws Exception {
        List<Article> articles = List.of(
                new Article(1, "Test get",
                        "Testing description",
                        "http://www.test.com/testing/article",
                        LocalDate.of(2023, 7, 31),
                        "Test Publisher")
        );

        when(repository.getAll()).thenReturn(articles);

        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        jsonMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false); // Serialize dates as strings
        jsonMapper.configure(DeserializationFeature.READ_DATE_TIMESTAMPS_AS_NANOSECONDS, false); // Read timestamps as seconds

        String expected = jsonMapper.writeValueAsString(articles);

        mvc.perform(get("/api/article"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(content().json(expected, true));
    }

    @Test
    void getAllShouldReturn404() throws Exception {
        when(repository.getAll()).thenReturn(null);
        mvc.perform(get("/api/article"))
                .andExpect(status().isNotFound());

        when(repository.getAll()).thenReturn(new ArrayList<>());
        mvc.perform(get("/api/article"))
                .andExpect(status().isNotFound());
    }

    @Test
    void getByIdShouldReturn200() throws Exception {
        Article expectedArticle = new Article(1, "Test get",
                "Testing description",
                "http://www.test.com/testing/article",
                LocalDate.of(2023, 7, 31),
                "Test Publisher");

        when(repository.getById(1)).thenReturn(expectedArticle);
        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        jsonMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
        jsonMapper.configure(DeserializationFeature.READ_DATE_TIMESTAMPS_AS_NANOSECONDS, false);

        String expected = jsonMapper.writeValueAsString(expectedArticle);
        mvc.perform(get("/api/article/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(content().json(expected));
    }

    @Test
    void getByIdShouldReturn404() throws Exception {
        when(repository.getById(1)).thenReturn(null);
        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        mvc.perform(get("/api/article/1"))
                .andExpect(status().isNotFound());
    }

    /* ***** ***** validation and add tests ***** ***** */

    @Test
    void validationShouldReturn400() throws Exception {
        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        var request = post("/api/article")
                .contentType(MediaType.APPLICATION_JSON);

        mvc.perform(request).andExpect(status().isBadRequest());

        Article article = new Article(0, "",
                null, "", null, null);

        String jsonIn = jsonMapper.writeValueAsString(article);

        request = post("/api/article")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonIn);

        mvc.perform(request).andExpect(status().isBadRequest());
    }

    @Test
    void successfulAddShouldReturn201() throws Exception {
        Article articleIn = new Article(0, "Test get",
                "Testing description",
                "http://www.test.com/testing/article",
                LocalDate.of(2023, 7, 31),
                "Test Publisher");
        Article articleOut = new Article(1, "Test get",
                "Testing description",
                "http://www.test.com/testing/article",
                LocalDate.of(2023, 7, 31),
                "Test Publisher");

        when(repository.add(articleIn)).thenReturn(articleOut);
        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        jsonMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
        jsonMapper.configure(DeserializationFeature.READ_DATE_TIMESTAMPS_AS_NANOSECONDS, false);

        String jsonIn = jsonMapper.writeValueAsString(articleIn);
        String jsonOut = jsonMapper.writeValueAsString(articleOut);

        var request = post("/api/article")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonIn);

        mvc.perform(request)
                .andExpect(status().isCreated())
                .andExpect(content().json(jsonOut));
    }

    @Test
    void invalidAddShouldReturn404() throws Exception {
        Article articleIn = new Article(1, "Test get",
                "Testing description",
                "http://www.test.com/testing/article",
                LocalDate.of(2023, 7, 31),
                "Test Publisher");

        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        String json = jsonMapper.writeValueAsString(articleIn);

        var request = post("/api/article")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json);

        mvc.perform(request).andExpect(status().isBadRequest());
    }

    /* ***** ***** update tests ***** ***** */

    @Test
    void successfulUpdateShouldReturn204() throws Exception {
        Article articleIn = new Article(1, "Test get",
                "Testing description",
                "http://www.test.com/testing/article",
                LocalDate.of(2023, 7, 31),
                "Test Publisher");

        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        String json = jsonMapper.writeValueAsString(articleIn);
        when(repository.update(articleIn)).thenReturn(true);

        var request = put("/api/article/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json);

        mvc.perform(request).andExpect(status().isNoContent());
    }

    @Test
    void conflictedUpdateShouldReturn409() throws Exception {
        Article articleIn = new Article(1, "Test get",
                "Testing description",
                "http://www.test.com/testing/article",
                LocalDate.of(2023, 7, 31),
                "Test Publisher");

        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        String json = jsonMapper.writeValueAsString(articleIn);

        var request = put("/api/article/2")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json);

        mvc.perform(request).andExpect(status().isConflict());
    }

    @Test
    void invalidUpdateShouldReturn401() throws Exception {
        Article articleIn = new Article(0, "Test get",
                "Testing description",
                "http://www.test.com/testing/article",
                LocalDate.of(2023, 7, 31),
                "Test Publisher");

        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        String json = jsonMapper.writeValueAsString(articleIn);

        var request = put("/api/article/0")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json);

        mvc.perform(request).andExpect(status().isBadRequest());
    }

    @Test
    void invalidUpdateShouldReturn404() throws Exception {
        Article articleIn = new Article(1, "Test get",
                "Testing description",
                "http://www.test.com/testing/article",
                LocalDate.of(2023, 7, 31),
                "Test Publisher");

        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());

        String json = jsonMapper.writeValueAsString(articleIn);
        when(repository.update(articleIn)).thenReturn(false);
        var request = put("/api/article/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json);

        mvc.perform(request).andExpect(status().isNotFound());
    }

    /* ***** ***** deleteById tests ***** ***** */

    @Test
    void successfulDeleteShouldReturn204() throws Exception {
        when(repository.deleteById(1)).thenReturn(true);
        var request = delete("/api/article/1");
        mvc.perform(request).andExpect(status().isNoContent());
    }

    @Test
    void failedDeleteAttachedToTopicArticleOrUTANShouldReturn400() throws Exception {
        when(repository.isAttachedToTopicArticle(1)).thenReturn(true);
        when(repository.isAttachedToUTAN(1)).thenReturn(true);
        var request = delete("/api/article/1");
        mvc.perform(request).andExpect(status().isBadRequest());
    }

    @Test
    void failedDeleteShouldReturn404() throws Exception {
        when(repository.deleteById(100)).thenReturn(false);
        var request = delete("/api/article/100");
        mvc.perform(request).andExpect(status().isNotFound());
    }

}