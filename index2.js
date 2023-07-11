function decodeWeather(weatherCode, decode) {
    let weatherDescription;
  
    switch (weatherCode) {
      case 'SQ':
        weatherDescription = decode('SQ', 'шквал');
        break;
      case 'PO':
        weatherDescription = decode('PO', 'пыльный вихрь');
        break;
      case 'FC':
        weatherDescription = decode('FC', 'торнадо');
        break;
      case 'BR':
        weatherDescription = decode('BR', 'дымка (видимость от 1 до 9 км)');
        break;
      case 'HZ':
        weatherDescription = decode('HZ', 'мгла (видимость менее 10 км)');
        break;
      case 'FU':
        weatherDescription = decode('FU', 'дым (видимость менее 10 км)');
        break;
      case 'DS':
        weatherDescription = decode('DS', 'пыльная буря (видимость менее 10 км)');
        break;
      case 'SS':
        weatherDescription = decode('SS', 'песчаная буря (видимость менее 10 км)');
        break;
      default:
        weatherDescription = 'Неизвестная погода';
        break;
    }
  
    return weatherDescription;
  }
  
  // Функция для расшифровки погоды по коду
  function decode(code, description) {
    return description;
  }
  
  