import { div, list, paragraph } from '../helpers/portableText.dsl';
import { content, image } from '../helpers/portableText.dsl';
import { text, bold } from '../helpers/portableText.dsl';

import type { InputJsonValue } from '../../../src/generated/prisma/runtime/client';

import { ProjectSlug } from '../slugs/projectSlug';
import { Locale } from '../../../src/generated/prisma';

const projectContents = new Map<
  ProjectSlug,
  { [key in Locale]: InputJsonValue }
>();

export function getProjectContent(
  slug: ProjectSlug,
  locale: Locale
): InputJsonValue {
  return projectContents.get(slug)?.[locale] ?? [];
}

projectContents.set(ProjectSlug.ProductionSystemUtilizingAGV, {
  [Locale.pl]: content(
    paragraph(
      text(
        'Projektując i wdrażając zautomatyzowane fabryki lub linie produkcyjne, często konieczne jest ograniczenie pracy wykonywanej przez ludzi. Zadaniem wspomagającym, które ułatwia pracę stacjonarnych robotów montażowych, jest automatyczne dostarczanie komponentów z magazynu. Do tego celu wykorzystywane są roboty lub pojazdy transportowe. Jednym z przykładów takich urządzeń są wózki AGV (Automated Guided Vehicle). Ich głównym zadaniem jest transport części między wyznaczonymi punktami zwanymi stacjami. W zależności od warunków pracy struktury transportowej składającej się z wózków AGV stosowane są różne rozwiązania komunikacyjne między kontrolerami przetwarzającymi funkcje logiczne i ruchowe.'
      )
    ),

    paragraph(
      text(
        'Projekt obejmował opracowanie systemu współpracujących ze sobą sterowników PLC (Programmable Logic Controllers), mającego na celu realizację zadania automatycznego wywoływania wózków AGV ze stanowisk operatorskich. Każda stacja była wyposażona w czytnik kodów kreskowych umożliwiający realizację zamówienia części i wydawanie poleceń przez operatora. Program został zaprojektowany w taki sposób, aby analizować zeskanowany kod kreskowy i umożliwiać realizację zamówienia. Polecenia te są przesyłane jako sygnały zewnętrzne odbierane przez sterownik PLC nadzorujący wózek AGV za pomocą komunikacji bezprzewodowej w strukturze sieci Wi-Fi z wykorzystaniem protokołu ModBus TCP.'
      )
    ),

    paragraph(
      text(
        'Podczas testów użyto pojazdu AGV „Jammnik”, opracowanego w ramach projektu demonstracyjnego i szkoleniowego.'
      )
    ),

    image(
      '/images/jammnik.jpg',
      'Automatyczny Wózek Sterowany (AGV)',
      800,
      450
    ),

    paragraph(
      text(
        'Oprogramowanie stacji odczytuje kody kreskowe przy użyciu czytnika i analizuje je, wyświetlając wynik na panelu HMI. Pozwala to na rozpoznanie polecenia i pokazanie informacji na panelu HMI. Wizualizacja została zaprojektowana tak, aby operator mógł szybko odczytać kod produktu lub polecenia i zdecydować o jego wykonaniu lub anulowaniu. Każdy kod (ważny lub nieważny) jest wyświetlany przez 10 sekund wraz z rozpoznaną nazwą polecenia.'
      )
    ),

    paragraph(
      text(
        'W tym czasie operator może potwierdzić wykonanie kodu przyciskiem na panelu HMI, co powoduje wysłanie sygnału zewnętrznego do sterownika AGV wraz z identyfikatorem wiadomości. Jeśli stacja wykryje nieznany, lecz potwierdzony kod, wyświetlany jest komunikat z prośbą o jego zdefiniowanie.'
      )
    ),

    paragraph(
      text(
        'Komunikacja między sterownikiem PLC stacji a sterownikiem PLC AGV odbywa się przy użyciu protokołu ModBus TCP wykorzystującego komunikację TCP/IP przez interfejsy PROFINET sterowników.'
      )
    ),

    image(
      '/images/jammnik-agv-hmi.jpg',
      'Panel Human-Machine Interface (HMI)',
      800,
      623
    ),

    div(bold('Stacja nr 1:')),

    ...list([
      'PLC SIMATIC S7-1200, CPU 1212C AC/DC/RLY 6ES7 212-1BE40-0XB0 V4.0',
      'Komputer osobisty z oprogramowaniem: TIA v14',
      'Czytnik kodów kreskowych Datalogic QuickScan Lite: model QW2100',
      'Router bezprzewodowy TP-LINK TL-WR941ND',
    ]),

    div(bold('Stacja nr 2:')),

    ...list([
      'PLC SIMATIC S7-1200, CPU 1214C DC/DC/DC 6ES7 214-1AG40-0XB0 V4.2',
      'Moduł CM1241 RS232 241-1AH30-0XB0',
      'Komputer osobisty z oprogramowaniem: TIA v14',
      'Czytnik kodów kreskowych Datalogic QuickScan Lite: model QW2100',
      'Router bezprzewodowy TP-LINK TL-WR840N',
    ]),

    div(bold('Pojazd AGV:')),

    ...list([
      'PLC SIMATIC S7-1200, CPU 1212C DC/DC/DC 6ES7 212-1AE40-0XB0 V4.1',
      'Mini Router bezprzewodowy ASUS WL-330N3G',
      'Moduł Wejść Cyfrowych SM1221 DI 16x24VDC',
      'Moduł Wyjść Cyfrowych SM1222 DQ 16x24VDC',
    ])
  ),

  [Locale.en]: content(
    paragraph(
      text(
        'When designing and implementing automated factories or production lines, it is often necessary to reduce the amount of work performed by humans. One auxiliary task that facilitates the work of stationary assembly robots is the automatic delivery of components from the warehouse. For this purpose robots or transport vehicles are used. One example of such devices are AGV (Automated Guided Vehicle) carts.'
      )
    ),

    paragraph(
      text(
        'Their main purpose is to transport parts between designated points called stations. Depending on the working conditions of the transport structure consisting of AGV vehicles, various communication solutions are used between controllers responsible for logical and motion control.'
      )
    ),

    paragraph(
      text(
        'The project included the development of a system of cooperating PLC controllers enabling automatic AGV calls from operator stations. Each station was equipped with a barcode reader allowing the operator to order specific parts.'
      )
    ),

    image('images/jammnik.jpg', 'Automated Guided Vehicle (AGV)', 800, 450),

    paragraph(
      text(
        'The station software reads barcodes using a scanner and analyzes them, displaying the result on the HMI panel. This allows the operator to verify whether the scanned command should be executed or cancelled.'
      )
    ),

    paragraph(
      text(
        'Each scanned code is displayed for 10 seconds together with the recognized command name. During this time the operator may confirm the execution of the command, which results in sending a signal to the AGV controller.'
      )
    ),

    paragraph(
      text(
        'Communication between PLC controllers is implemented using the ModBus TCP protocol operating over TCP/IP through PROFINET interfaces.'
      )
    ),

    image(
      'images/jammnik-agv-hmi.jpg',
      'Human-Machine Interface (HMI) Panel',
      800,
      623
    ),

    div(bold('Station No. 1:')),

    ...list([
      'PLC SIMATIC S7-1200 CPU 1212C AC/DC/RLY',
      'Personal computer with TIA Portal v14',
      'Barcode reader Datalogic QuickScan Lite QW2100',
      'Wireless router TP-LINK TL-WR941ND',
    ]),

    div(bold('Station No. 2:')),

    ...list([
      'PLC SIMATIC S7-1200 CPU 1214C DC/DC/DC',
      'CM1241 RS232 module',
      'Personal computer with TIA Portal v14',
      'Barcode reader Datalogic QuickScan Lite QW2100',
      'Wireless router TP-LINK TL-WR840N',
    ]),

    div(bold('AGV Vehicle:')),

    ...list([
      'PLC SIMATIC S7-1200 CPU 1212C DC/DC/DC',
      'Wireless mini router ASUS WL-330N3G',
      'Digital input module SM1221 DI 16x24VDC',
      'Digital output module SM1222 DQ 16x24VDC',
    ])
  ),
});
