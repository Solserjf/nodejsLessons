Питання до Lesson 3#
1) У лекції Lesson#3 на 48хв. із файлу user.router.ts перекидається(вирізається) вміст get-запитів/post- запитів у файл user.controller.ts. У файлі user.router.ts ці запити були у вигляді стрілкової функції, а у файлі user.controller.ts. вони вже не є стрілковими функціями, чому так?

2) public getById(userId:string):Promise<IUser>{//чому тут Promise<IUser>??
 return User.findById(userId)//це у нас  файл user.repository.ts
public getById(userId: string): Promise<IUserDTO> {
    return userRepository.getById(userId)//це у нас файл user.service.ts
}//а тут чому Promise<IUserDTO>??

 а тут чому Promise<IUserDTO>? це ж один і той самий метод, але в різних файлах він має різні проміси, чому так?