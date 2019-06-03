//
//  isGuest.js
//  simple-chat-frontend
//
//  Created by Yukihira Nanako on 04/06/2019.
//  Copyright © 2019 Yukihira Nanako. All rights reserved.
//


export default function({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect('/')
  }
}
