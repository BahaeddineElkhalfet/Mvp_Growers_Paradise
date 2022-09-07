-- -----------------------------------------------------
-- Schema mvp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mvp` DEFAULT CHARACTER SET utf8mb3 ;
USE `mvp` ;

-- -----------------------------------------------------
-- Table `mvp`.`kids`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`kids` (
  `idkid` INT NOT NULL AUTO_INCREMENT,
  `kidfullname` VARCHAR(45) NULL DEFAULT NULL,
  `kidsage` INT NOT NULL,
  `kiddescription` LONGTEXT NULL DEFAULT NULL,
  `idlab` INT NOT NULL,
  PRIMARY KEY (`idkid`))
ENGINE = InnoDB
AUTO_INCREMENT = 27
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mvp`.`lab`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`lab` (
  `idlab` INT NOT NULL AUTO_INCREMENT,
  `labname` VARCHAR(45) NOT NULL,
  `labnumber` INT NOT NULL,
  `kids_idkid` INT NOT NULL,
  PRIMARY KEY (`idlab`, `labnumber`, `kids_idkid`),
  INDEX `fk_lab_kids_idx` (`kids_idkid` ASC) VISIBLE,
  CONSTRAINT `fk_lab_kids`
    FOREIGN KEY (`kids_idkid`)
    REFERENCES `mvp`.`kids` (`idkid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 54
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mvp`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `userPwd` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;






/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/