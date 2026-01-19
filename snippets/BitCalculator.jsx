export const BitCalculator = () => {
  const [decimalValue, setDecimalValue] = useState(0);
  const [selectedBits, setSelectedBits] = useState(new Set());
  const BIT_DATA = [
    { bit: 0, value: 1, name: 'ДСФМУ', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
    { bit: 1, value: 2, name: 'РНБО', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
    { bit: 2, value: 4, name: 'ООН', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
    { bit: 3, value: 8, name: 'Європейский союз', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
    { bit: 4, value: 16, name: 'Велика Британія', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
    { bit: 5, value: 32, name: 'США', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
    { bit: 6, value: 64, name: 'Канада', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
    { bit: 7, value: 128, name: 'Інші іноземні санкційні списки', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
    { bit: 8, value: 256, name: 'Нотаріуси', block: 'notarius', register: 'Нотаріуси' },
    { bit: 9, value: 512, name: 'Національні Політично значущі особи', block: 'pep', register: 'Реєстр політично значущих осіб' },
    { bit: 10, value: 1024, name: 'Політично значущі особи міжнарожний організацій', block: 'pep', register: 'Реєстр політично значущих осіб' },
    { bit: 11, value: 2048, name: 'Іноземні Політично значущі особи', block: 'pep', register: 'Реєстр політично значущих осіб' },
    { bit: 12, value: 4096, name: 'Близькі та пов\'язані до публічних осіб', block: 'pep', register: 'Реєстр політично значущих осіб' },
    { bit: 13, value: 8192, name: 'Зрадники і окупанти', block: 'zrada/okupant', register: 'Реєстр зрадників/ Реєстр окупантів' },
    { bit: 14, value: 16384, name: 'Податкові нерезиденти', block: 'nonrezedent', register: 'Реєстр нерезедентів' },
    { bit: 15, value: 32768, name: 'Втрачені/загублені національні та закордонні паспорта', block: 'lostdoc', register: 'Реєстр втрачених документів' },
    { bit: 16, value: 65536, name: 'Виконавчі провадження', block: 'executive', register: 'Виконавчі провадження' },
    { bit: 17, value: 131072, name: 'Боржники', block: 'taxdebtor/debtor', register: 'Реєстр боржників' },
    { bit: 18, value: 262144, name: 'резерв', block: '', register: '' },
    { bit: 19, value: 524288, name: 'Банкрути', block: 'bankrupt', register: 'Реєстр банкрутів' },
    { bit: 20, value: 1048576, name: 'Причетність до юридичної особи', block: 'edr', register: 'Реєстр юридичних осіб та ФОП' },
    { bit: 21, value: 2097152, name: 'резерв', block: '', register: '' },
    { bit: 22, value: 4194304, name: 'Інформація з ЄДР по юридичній особі', block: 'edrfullinfo', register: 'Реєстр юридичних осіб та ФОП' },
    { bit: 23, value: 8388608, name: 'ЄДР зміни (ОПФ/назва)', block: 'edrchanges', register: 'Реєстр юридичних осіб та ФОП' },
    { bit: 24, value: 16777216, name: 'ЄДР зміни (адреса)', block: 'edrchanges', register: 'Реєстр юридичних осіб та ФОП' },
    { bit: 25, value: 33554432, name: 'ЄДР зміни (керівник)', block: 'edrchanges', register: 'Реєстр юридичних осіб та ФОП' },
    { bit: 26, value: 67108864, name: 'ЄДР зміни (КВЕД)', block: 'edrchanges', register: 'Реєстр юридичних осіб та ФОП' },
    { bit: 27, value: 134217728, name: 'ЄДР зміни (статус)', block: 'edrchanges', register: 'Реєстр юридичних осіб та ФОП' },
    { bit: 28, value: 268435456, name: 'ЄДР зміни (КБВ)', block: 'edrchanges', register: 'Реєстр юридичних осіб та ФОП' },
    { bit: 29, value: 536870912, name: 'ЄДР зміни (власник)', block: 'edrchanges', register: 'Реєстр юридичних осіб та ФОП' },
    { bit: 30, value: 1073741824, name: 'Судові справи', block: 'justice', register: 'Реєстр судових справ' },
    { bit: 31, value: 2147483648, name: 'Ліцензії', block: 'license', register: 'Реєстр ліцензій' },
    { bit: 32, value: 4294967296, name: 'резерв', block: '', register: '' },
    { bit: 33, value: 8589934592, name: 'Особи в розшуку', block: 'wanted', register: 'Реєстр розшуку' },
    { bit: 34, value: 17179869184, name: 'резерв', block: '', register: '' },
    { bit: 35, value: 34359738368, name: 'Корупційні правопорушення', block: 'corrupt', register: 'Реєстр корупціонерів' },
    { bit: 36, value: 68719476736, name: 'резерв', block: '', register: '' },
    { bit: 37, value: 137438953472, name: 'Застереження', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
    { bit: 38, value: 274877906944, name: 'Пов\'язані з санкційними особами', block: 'psanctions', register: 'Реєстр Санкцій і застереження' },
  ];
  // Обновляем выбранные биты при изменении десятичного числа
  const handleDecimalChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setDecimalValue(value);
    
    const bits = new Set();
    BIT_DATA.forEach(bit => {
      if ((value & bit.value) === bit.value) {
        bits.add(bit.bit);
      }
    });
    setSelectedBits(bits);
  };

  // Обновляем десятичное число при выборе бита
  const handleBitChange = (bit) => {
    const newSelectedBits = new Set(selectedBits);
    if (newSelectedBits.has(bit)) {
      newSelectedBits.delete(bit);
    } else {
      newSelectedBits.add(bit);
    }
    setSelectedBits(newSelectedBits);

    // Вычисляем десятичное значение
    let value = 0;
    newSelectedBits.forEach(b => {
      const bitData = BIT_DATA.find(item => item.bit === b);
      if (bitData) {
        value += bitData.value;
      }
    });
    setDecimalValue(value);
  };

  return (
    <div className="bit-calculator .dark">
      <h1>Калькулятор Бітів - listdata</h1>
      
      <div className="calculator-container">
        {/* Input для десяткового числа */}
        <div className="input-section">
          <label htmlFor="decimal-input">Десяткове число:</label>
          <input
            id="decimal-input"
            type="number"
            value={decimalValue}
            onChange={handleDecimalChange}
            placeholder="Введіть число"
          />
          <p className="decimal-display">Значення: {decimalValue}</p>
        </div>

        {/* Таблиця бітів */}
        <div className="table-section">
          <h2>Вибір бітів та реєстрів</h2>
          <table className="bits-table">
            <thead>
              <tr>
                <th className="checkbox-col">✓</th>
                <th>Біт</th>
                <th>Значення</th>
                <th>Опис</th>
                <th>Блоки</th>
                <th>Реєстри</th>
              </tr>
            </thead>
            <tbody>
              {BIT_DATA.map(bit => (
                <tr
                  key={bit.bit}
                  className={`bit-row ${selectedBits.has(bit.bit) ? 'selected' : 'unselected'}`}
                >
                  <td className="checkbox-cell">
                    <input
                      type="checkbox"
                      id={`bit-${bit.bit}`}
                      checked={selectedBits.has(bit.bit)}
                      onChange={() => handleBitChange(bit.bit)}
                    />
                  </td>
                  <td className="bit-col">{bit.bit}</td>
                  <td className="value-col">{bit.value}</td>
                  <td className="description-col">{bit.name}</td>
                  <td className="block-col">{bit.block ? <code>{bit.block}</code> : '—'}</td>
                  <td className="register-col">{bit.register || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Резюме обраних бітів */}
        {selectedBits.size > 0 && (
          <div className="summary-section">
            <h2>Обрані Реєстри ({selectedBits.size})</h2>
            <div className="summary-content">
              <div className="summary-value">
                <span>Десяткове значення:</span>
                <strong>{decimalValue}</strong>
              </div>
              <div className="summary-list">
                {Array.from(selectedBits)
                  .sort((a, b) => a - b)
                  .map(bitIndex => {
                    const bit = BIT_DATA.find(b => b.bit === bitIndex);
                    return (
                      <div key={bitIndex} className="summary-item">
                        <span className="summary-bit">Біт {bitIndex}</span>
                        <span className="summary-name">{bit.name}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
