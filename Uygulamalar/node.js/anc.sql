CREATE DATABASE  IF NOT EXISTS `anouncment` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `anouncment`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: anouncment
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `anc`
--

DROP TABLE IF EXISTS `anc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anc` (
  `noticeid` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `exp` mediumtext,
  `isactive` int DEFAULT '0',
  `userid` int DEFAULT NULL,
  PRIMARY KEY (`noticeid`),
  KEY `fkuser` (`userid`),
  CONSTRAINT `fkuser` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anc`
--

LOCK TABLES `anc` WRITE;
/*!40000 ALTER TABLE `anc` DISABLE KEYS */;
INSERT INTO `anc` VALUES (8,'aaaa','<p>&nbsp;</p><p>bbbbb</p><p>&nbsp;</p>',1,NULL),(11,'www','<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>dddd</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>',1,NULL),(12,'aaaabbb','<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>ffff</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>',1,NULL),(13,'regergr','<p>grgwr</p>',1,NULL),(14,'tttttt','<p>fdsfds</p><p>nkjjnjnj</p><p>klnjnjknj</p>',1,NULL),(15,'sdffa','<p>afasf</p>',1,NULL),(16,'ccc','<p>ccccc</p>',0,NULL);
/*!40000 ALTER TABLE `anc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userkategori`
--

DROP TABLE IF EXISTS `userkategori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userkategori` (
  `categoryid` int NOT NULL AUTO_INCREMENT,
  `categoryname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userkategori`
--

LOCK TABLES `userkategori` WRITE;
/*!40000 ALTER TABLE `userkategori` DISABLE KEYS */;
INSERT INTO `userkategori` VALUES (1,'Admin'),(2,'Moderator'),(3,'User');
/*!40000 ALTER TABLE `userkategori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `categoryid` int DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `userid_UNIQUE` (`userid`),
  KEY `fkcategory` (`categoryid`),
  CONSTRAINT `fkcategory` FOREIGN KEY (`categoryid`) REFERENCES `userkategori` (`categoryid`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'Umay','Karacı',2,'ukaraci@gmail.com','$2b$10$Mk2XsCNc7fUWv9741eLEtuQAIDzOmU7qKzErwhV.dAmhRDV0jkJty'),(4,'Ülkü','Karacı',2,'ulkaraci@gmail.com','$2b$10$LmBaIV8X7UomcgCMaCA5uOG2CsaXLqbWx5AA9B2urlLF2kK1A2ftm'),(8,'sad','da',1,'akaraci1@gmail.com','$2b$10$vMtD4nwzvOgEPzL3PnhswOYmjfeWr8s4qP43B64S1kj3mooU7Psve'),(9,'Abdulkadir','Karacı',1,'akaraci@gmail.com','$2b$10$lrhM1lcAAU0puOPAbfEUyuTdX3shTg7Oww1jcMUy/Gjd49udpP5Z2');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-13 15:52:55
