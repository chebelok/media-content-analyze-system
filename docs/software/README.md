# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:
## SQL-скрипт для створення та початкового наповнення бази даних
```sql
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`source` ;

CREATE TABLE IF NOT EXISTS `mydb`.`source` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(45) NOT NULL,
  `key` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scraper`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scraper` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scraper` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`task` ;

CREATE TABLE IF NOT EXISTS `mydb`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `state` TEXT NOT NULL,
  `schedule` TEXT NOT NULL,
  `source_id` INT NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_source1_idx` (`source_id` ASC) VISIBLE,
  INDEX `fk_task_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `mydb`.`source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`access` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_access_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_access_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scrapeInstance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scrapeInstance` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scrapeInstance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` TEXT NOT NULL,
  `flag` VARCHAR(45) NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_scrapeInstance_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_scrapeInstance_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`result` ;

CREATE TABLE IF NOT EXISTS `mydb`.`result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `task_id` INT NOT NULL,
  `scrapeInstance_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_result_scrapeInstance1_idx` (`scrapeInstance_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_scrapeInstance1`
    FOREIGN KEY (`scrapeInstance_id`)
    REFERENCES `mydb`.`scrapeInstance` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`message` ;

CREATE TABLE IF NOT EXISTS `mydb`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `result_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_message_result1_idx` (`result_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_result1`
    FOREIGN KEY (`result_id`)
    REFERENCES `mydb`.`result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`metadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`metadata` ;

CREATE TABLE IF NOT EXISTS `mydb`.`metadata` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` INT NOT NULL,
  `value` TEXT NOT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_metadata_message1_idx` (`message_id` ASC) VISIBLE,
  CONSTRAINT `fk_metadata_message1`
    FOREIGN KEY (`message_id`)
    REFERENCES `mydb`.`message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`source`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`source` (`id`, `url`, `key`) VALUES (DEFAULT, 'https://tsn.ua', 231);
INSERT INTO `mydb`.`source` (`id`, `url`, `key`) VALUES (DEFAULT, 'https://radio.nv.ua', 34);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'user', 'User');
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'admin', 'Administrator');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `login`, `name`, `password`) VALUES (DEFAULT, 'artem12333', 'Artem', 'qwertui');
INSERT INTO `mydb`.`user` (`id`, `login`, `name`, `password`) VALUES (DEFAULT, 'omega', 'Omega', 'onion86');

COMMIT;
```

## RESTfull сервіс для управління даними

### Файл серверу

```js
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection')


const PORT = process.env.PORT || 8080;
const HOST = 'localhost'

connection.connect();

const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/role', require('./routes_role'));
app.use('/access', require('./routes_access'));

app.listen(PORT, () => console.log(`Service starts on http://${HOST}:${PORT}`));
```
### Файл підключення до бази даних
```js
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ivan1234',
  database: 'mydb'
});


module.exports = connection;
```
### Файл контролера для таблиці role
```js
const { Router } = require('express');
const express = require('express');
const connection = require('./connection');

const router = new express.Router();

const sqlScript = {
    getAllRoles: 'SELECT * FROM role',
    getRoleByID: `SELECT * FROM role WHERE id = ?`,
    createRole: `INSERT INTO role(id, name, description) VALUES (?, ?, ?)`,
    updateRoleInfo: `UPDATE role SET name = ?, description = ? WHERE id = ?`,
    deleteRole: `DELETE FROM role WHERE id = ?`
};

router.get('/', (req, res) => {
    connection.query(sqlScript.getAllRoles, (err, resuslt) => {
        if (err) {
            return res.status(500).json({
                message: 'Something went wrong'
            });
        }
        res.status(200).send(resuslt)
    })
})
    .get('/:id', (req, res) => {
        const roleId = req.params.id;
        connection.query(sqlScript.getRoleByID, roleId, (err, [result])=> {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong, no such id'
                });
            }
            if(!result){
                return res.status(404).json({
                    message: 'no roles with this id'
                });
            }
            res.status(200).send(result)
        })
    })
    .post('/:id', (req, res) => {
        const {name, description} = req.body;
        const postId = req.params.id;
        if(!(name && description)) {
            res.status(404).json({
                message: 'All fields must be filled'
            });
            return;
        }
        connection.query(sqlScript.createRole, [postId, name, description], (err) => {
            if(err){
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            res.status(200).send(`Role with id ${postId} was added`)

        })

    })
    .delete('/:id', (req, res) => {
        const deleteId = req.params.id;
        connection.query(sqlScript.deleteRole, deleteId, (err) =>{
            if(err){
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            res.status(200).send(`Role with id ${deleteId} was deleted`)
        })
    })
    .put('/:id', (req, res) =>{
        const {name, description} = req.body;
        const putId = req.params.id;
        connection.query(sqlScript.updateRoleInfo, [name, description, putId], (err, result) => {
            if(err || !result.affectedRows){
                return res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            res.status(200).send(result)
        })
    })

module.exports = router; 
```
### Файл контролера для таблиці access
```js
const { Router } = require('express');
const express = require('express');
const connection = require('./connection');

const router = new express.Router();

const sqlScript = {
    getAllAccess: 'SELECT * FROM access',
    getAccessByID: `SELECT * FROM access WHERE id = ?`,
    createAccess: `INSERT INTO access(id, task_id, role_id, user_id) VALUES (?, ?, ?, ?)`,
    updateAccessInfo: `UPDATE access SET task_id = ?, role_id = ?, user_id = ? WHERE id = ?`,
    deleteAccess: `DELETE FROM access WHERE id = ?`
};

router.get('/', (req, res) => {
    connection.query(sqlScript.getAllAccess, (err, resuslt) => {
        if (err) {
            return res.status(500).json({
                message: 'Something went wrong'
            });
        }
        res.status(200).send(resuslt)
    })
})
    .get('/:id', (req, res) => {
        const accId = req.params.id;
        connection.query(sqlScript.getAccessByID, accId, (err, [result])=> {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong, no such id'
                });
            }
            if(!result){
                return res.status(404).json({
                    message: 'no access request with this id'
                });
            }
            res.status(200).send(result)
        });
    })
    .post('/:id', (req, res) => {
        const {task_id, role_id, user_id} = req.body;
        const poId = req.params.id;
        if(!(task_id && role_id && user_id)) {
            res.status(404).json({
                message: 'All fields must be filled'
            });
            return;
        }
        connection.query(sqlScript.createAccess, [poId, task_id, role_id, user_id], (err) => {
            if(err){
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            res.status(200).send(`Access with id ${poId} was added`)

        })

    })
    .put('/:id', (req, res) =>{
        const {task_id, role_id, user_id} = req.body;
        const paId = req.params.id;
        connection.query(sqlScript.updateAccessInfo, [task_id, role_id, user_id, paId], (err, result) => {
            if(err || !result.affectedRows){
                return res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            res.status(200).send(result)
        })
    })
    .delete('/:id', (req, res) => {
        const daId = req.params.id;
        connection.query(sqlScript.deleteAccess, daId, (err) =>{
            if(err){
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            res.status(200).send(`Access with id ${daId} was deleted`)
        })
    })

module.exports = router;
```
