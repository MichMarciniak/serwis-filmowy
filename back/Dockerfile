# Wbudowana java, nie trzeba instalowac
FROM eclipse-temurin:25-jdk-alpine AS builder

# Domyslny katalog aplikacji
WORKDIR /app

# Skopiowanie plików do builda
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Uprawnienia
RUN chmod +x mvnw

# Pobranie samych zależności
RUN ./mvnw dependency:go-offline

# Skopiowanie kodu
COPY src ./src

# Build bez testów
RUN ./mvnw clean package -DskipTests


# --- Uruchomienie ---
FROM eclipse-temurin:25-jre-alpine 
WORKDIR /app

# użytkownik appuser : appgroup
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Skopiowanie JAR z buildera
COPY --from=builder --chown=appuser:appgroup /app/target/*.jar app.jar

# Przełączenie na appuser'a żeby nie uruchomić jako root
USER appuser

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]



