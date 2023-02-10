/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : yang

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 10/02/2023 10:43:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `role_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `role_key`(`role_key`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, 'user', '用户');
INSERT INTO `sys_role` VALUES (2, 'admin', '管理员');

-- ----------------------------
-- Table structure for sys_route
-- ----------------------------
DROP TABLE IF EXISTS `sys_route`;
CREATE TABLE `sys_route`  (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '路由ID',
  `route_name` varchar(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '路由名称',
  `parent_id` int(20) NULL DEFAULT NULL COMMENT '父路由ID',
  `order_num` int(4) NULL DEFAULT NULL COMMENT '显示顺序',
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '路由地址',
  `component` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '组件路径',
  `is_visible` tinyint(1) NULL DEFAULT NULL COMMENT '菜单状态（0隐藏 1显示）',
  `is_status` tinyint(1) NULL DEFAULT NULL COMMENT '菜单状态（0停用 1正常）',
  `roles` varchar(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '角色列表',
  `icon` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '图标',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_route
-- ----------------------------
INSERT INTO `sys_route` VALUES (1, '系统管理', 0, 1, 'SysRoute', '', 1, 1, '1,2', 'Document', NULL);
INSERT INTO `sys_route` VALUES (2, '用户管理', 0, 2, 'SysUser', '', 1, 1, '1,2', 'Document', NULL);
INSERT INTO `sys_route` VALUES (3, '路由管理', 1, 1, 'SysRoute1', 'SysRoute', 1, 1, '1,2', 'Document', NULL);
INSERT INTO `sys_route` VALUES (4, '用户管理1', 2, 1, 'SysUser1', 'SysUser', 1, 1, '1,2', 'Document', NULL);
INSERT INTO `sys_route` VALUES (5, '权限管理', 0, 3, 'SysRole', 'SysRole', 1, 1, '1,2', 'Document', NULL);

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户账号',
  `user_name` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户姓名',
  `user_password` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `user_role` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户角色,admin/user',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 'admin', '管理员', 'admin', '2');
INSERT INTO `sys_user` VALUES (2, 'user', 'user', 'user', '1');
INSERT INTO `sys_user` VALUES (4, 'admin1', '管理员1', 'admin', '2');

SET FOREIGN_KEY_CHECKS = 1;
