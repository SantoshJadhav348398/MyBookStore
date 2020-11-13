/*
 * *****************************************               #
 * File : Users.ts                                         #
 * FileCreated : Friday, 13th November 2020, 6:33:18 pm    #
 * Description :                                           #
 * ----------------------                                  #
 * Author : Santosh                                        #
 * Project : my-book-store-app                             #
 * Last Modified: Friday, 13th November 2020 6:33:18 pm    #
 * Modified By: Santosh (you@you.you>)                     #
 *                                                         #
 * ----------------------                                  #
 * Copyright (c) 2020 Your Company                         #
 * *****************************************               #
 */

export class Users {
    constructor() { }

    Id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    isAdmin: number;
    language: string;
    books: Array<number>;
    mobileNumber: number;
    emailId: string;
}
