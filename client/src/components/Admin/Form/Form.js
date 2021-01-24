import React from 'react'

export default function Form(props) {
    return (
        <>
              <div className="content__form">
                        <form>
                            <fieldset className="content__fieldset">
                              <p className="content__title">Добавить нового пользователя</p>
                              <p><label htmlFor="name">Имя: </label><input type="text" id="name"/></p>
                              <p><label htmlFor="email">E-mail: </label><input type="email" id="email"/></p>
                              <p><label htmlFor="password">Password: </label><input type="password" id="password"/></p>
                              <p><label htmlFor="radio">Admin </label><input type="radio" id="radio"/></p>
                            </fieldset>
                          <p><input type="submit" value="Добавить"/></p>
                          </form>
                    </div>
        </>
    )
}
