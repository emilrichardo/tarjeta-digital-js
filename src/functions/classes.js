//clases
export class dataInvitation{
  constructor({ type, theme, dateInfo, places = [] }) {
    this.type = type;
    this.theme = theme;
    this.date_info = dateInfo;
    this.places = places;
  }
}

export class typeInvite {
  constructor({ title, slug = "event", id, category }) {
    this.title = title;
    this.slug = slug;
    this.id = id;
    this.category = category;
  }
}

export class people {
  constructor({ name, lastname, nickname, age, gender, hobby }) {
    this.name = name;
    this.lastname = lastname;
    this.nickname = nickname;
    this.age = age;
    this.gender = gender;
    this.hobby = hobby;
  }
}

export class date {
  constructor({ year, month, day, hour }) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
  }
}

//clase para lugares

export class places {
  constructor({title, points}){
    this.title = title;
    this.points = points;
  }
}
export class place {
  constructor({ name, adress, icon, type, hours, linkText, ubication }) {
    this.name = name;
    this.type = type;
    this.icon = icon;
    this.hours = hours;
    this.adress = adress;
    this.linkText = linkText;
    this.ubication = ubication;
  }
}



// Clase para objeto invitaado
export class invited {
  constructor({ id, nombres, personal, relacion, confirmacion }) {
    this.id = id;
    this.nombres = nombres;
    this.personal = personal;
    this.relacion = relacion;
    this.confirmacion = confirmacion;
  }
}

export class confirmAssistance{
  constructor({title,timeLimit, textYes, textNo, textSend, messageYes, messageNo}){
    this.title = title;
    this.timeLimit = timeLimit;
    this.textYes = textYes;
    this.textNo = textNo;
    this.textSend = textSend;
    this.messageYes  = messageYes;
    this.messageNo  = messageNo;
  }
}


//gifts

export class gifts{
  constructor({title , detail , icon , isRequired , data}){
    this.detail = detail;
    this.title = title;
    this.icon = icon;
    this.isRequired = isRequired;
    this.data = data
  }
}

export class bankAccount {
  constructor({bank, accountHolder, alias, accountNumber } ){
    this.bank = bank;
    this.accountHolder = accountHolder;
    this.alias = alias;
    this.accountNumber = accountNumber
  }
}
