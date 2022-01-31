/* Create schema*/
CREATE DATABASE `demo`;

USE `demo`;

CREATE TABLE `customers` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `amount` DECIMAL(15,2) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `orders` (s
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `customer_id` INT UNSIGNED NOT NULL,
    `product_id` INT UNSIGNED NOT NULL,
    `quantity` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    KEY `FK_Customer` (`customer_id`),
    KEY `FK_Product` (`product_id`),
    CONSTRAINT `FK_Customer` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `FK_Product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Load test data */
INSERT INTO customers (`first_name`, `last_name`) VALUES 
    ('Jane', 'Brown'), ('Ryan', 'Hall'), ('Mary', 'Stark');

INSERT INTO products (`name`, `amount`) VALUES
    ('T-shirt', 19.99), ('Hat', 9.99);

INSERT INTO orders (customer_id, product_id, quantity) VALUES
    (1, 1, 1), (2, 1, 3), (3, 2, 2);
