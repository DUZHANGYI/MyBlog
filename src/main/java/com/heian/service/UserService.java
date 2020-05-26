package com.heian.service;

import com.heian.po.User;


public interface UserService {

    User checkUser(String username, String password);
}
