import spark.Spark;

public class PortfolioWebsite {
  public static void main(String[] args) {
    Spark.port(4567);

    Spark.get("/", (req, res) -> {
      return "index.html";
    });

    Spark.get("/about", (req, res) -> {
      return "About Me";
    });

    Spark.get("/projects", (req, res) -> {
      return "My Projects";
    });

    Spark.get("/contact", (req, res) -> {
      return "Contact Me";
    });
  }
}