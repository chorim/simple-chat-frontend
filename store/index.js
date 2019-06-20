//
//  index.js
//  simple-chat-frontend
//
//  Created by Yukihira Nanako on 04/06/2019.
//  Copyright © 2019 Yukihira Nanako. All rights reserved.
//

export const getters = {

  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  myInfo(state) {
    return state.auth.user
  },

  getToken(state) {
    return state
  }

}

