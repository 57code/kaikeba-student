-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: kaikeba
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pandect`
--

DROP TABLE IF EXISTS `pandect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pandect` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `clazz_id` int(11) DEFAULT NULL,
  `study_time` int(11) DEFAULT NULL,
  `training` varchar(45) DEFAULT NULL,
  `rank` smallint(3) DEFAULT NULL,
  `graduation_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='学习概况总览';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pandect`
--

LOCK TABLES `pandect` WRITE;
/*!40000 ALTER TABLE `pandect` DISABLE KEYS */;
INSERT INTO `pandect` VALUES (1,2,1,420,'0/0',0,'2018-12-10');
/*!40000 ALTER TABLE `pandect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stage`
--

DROP TABLE IF EXISTS `stage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `stage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `sub_title` varchar(45) DEFAULT NULL,
  `clazz_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COMMENT='阶段表，表示每个班的各个学习阶段';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stage`
--

LOCK TABLES `stage` WRITE;
/*!40000 ALTER TABLE `stage` DISABLE KEYS */;
INSERT INTO `stage` VALUES (1,'阶段1','HTML5详解（2018.8.23）','1-1 01课',1),(2,'阶段2','Canvas和本地存储（2018.8.25)','2-1 02课',1),(16,'阶段3','JS高级','3-1 03课',1),(17,'阶段4','数据结构与算法第一天（2018.9.2）','4-1 04课',1),(18,'阶段5','JS高级第一天','5-1 05课',1),(19,'阶段6','数据结构与算法第一天（2018.9.2）','6-1 06课',1),(20,'阶段6','数据结构与算法第二天（2018.9.2）','7-1 07课',1),(21,'阶段6','数据结构与算法第三天（2018.9.2）','8-1 08课',1),(22,'阶段6','数据结构与算法第四天（2018.9.2）','9-1 09课',1),(23,'阶段6','数据结构与算法第五天（2018.9.2）','9-1 09课',1),(24,'阶段6','数据结构与算法第六天（2018.9.2）','9-1 09课',1),(25,'阶段6','数据结构与算法第七天（2018.9.2）','9-1 09课',1),(26,'阶段6','数据结构与算法第八天（2018.9.2）','9-1 09课',1),(27,'阶段6','数据结构与算法第九天（2018.9.2）','9-1 09课',1),(28,'阶段10','数据结构与算法第九天（2018.9.2）','9-1 09课',1),(29,'阶段11','数据结构与算法第九天（2018.9.2）','9-1 09课',1),(30,'阶段12','数据结构与算法第九天（2018.9.2）','9-1 09课',1),(31,'阶段13','数据结构与算法第九天（2018.9.2）','9-1 09课',1),(32,'阶段14','数据结构与算法第九天（2018.9.2）','9-1 09课',1),(33,'阶段15','数据结构与算法第九天（2018.9.2）','9-1 09课',1),(34,'阶段16','数据结构与算法第九天（2018.9.2）','9-1 09课',1);
/*!40000 ALTER TABLE `stage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stage_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `state` tinyint(1) unsigned DEFAULT '0',
  `videos` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COMMENT='学习状态，它表示学员特定阶段的完成情况';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (4,13,2,0,NULL),(9,16,1,1,'2'),(10,16,2,1,'2'),(11,17,1,0,NULL),(12,17,2,0,NULL),(13,18,1,0,NULL),(14,18,2,0,NULL),(15,19,1,0,NULL),(16,19,2,0,NULL),(17,20,1,0,NULL),(18,20,2,0,NULL),(19,21,1,0,NULL),(20,21,2,0,NULL),(21,22,1,0,NULL),(22,22,2,0,NULL),(23,23,1,0,NULL),(24,23,2,0,NULL),(25,24,1,0,NULL),(26,24,2,0,NULL),(27,25,1,0,NULL),(28,25,2,0,NULL),(29,26,1,0,NULL),(30,26,2,0,NULL),(31,27,1,0,NULL),(32,27,2,0,NULL),(33,28,1,0,NULL),(34,28,2,0,NULL),(35,29,1,0,NULL),(36,29,2,0,NULL),(37,30,1,0,NULL),(38,30,2,0,NULL),(39,31,1,0,NULL),(40,31,2,0,NULL),(41,32,1,0,NULL),(42,32,2,0,NULL),(43,33,1,0,NULL),(44,33,2,0,NULL),(45,34,1,0,NULL),(46,34,2,0,NULL);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `sort` tinyint(1) DEFAULT NULL,
  `stage_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='视频课程，其关联阶段表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'HTML5详解',62,0,16),(7,'HTML详解',60,1,16),(8,'01 Canvas',58,0,2),(9,'02 本地存储',58,1,2),(10,'01 原型链',58,0,16),(11,'02 原型链2',58,1,16);
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-05 20:13:10
