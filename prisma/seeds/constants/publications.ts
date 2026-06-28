import type { Prisma } from "../../../src/generated/prisma/client";

import { Locale, SkillKey, AcademicDegree } from "../../../src/generated/prisma/client";
import { PublicationSlug } from "../slugs/publicationSlug";

export const publications: Prisma.PublicationCreateInput[] = [
	{
		slug: PublicationSlug.UsingGestureRecognitionforAGVControlPreliminaryResearch,
		publishDate: new Date('2023-03-14'),
		url: 'https://www.mdpi.com/1424-8220/23/6/3109',

		authors: {
			create: [
				{ person: { create: { name: "Oskar", surname: "Szkurłat", academicDegree: AcademicDegree.MasterOfScienceInEngineering } } },
				{ person: { create: { name: "Radosław", surname: "Masłowski", academicDegree: AcademicDegree.MasterOfScienceInEngineering } } },
				{ person: { create: { name: "Mateusz", surname: "Szwedka", academicDegree: AcademicDegree.MasterOfScienceInEngineering } } },
				{ person: { create: { name: "Wojciech", surname: "Ptasiński", academicDegree: AcademicDegree.MasterOfScienceInEngineering } } },
				{ person: { create: { name: "Łukasz", surname: "Woźniak", academicDegree: AcademicDegree.MasterOfScienceInEngineering } } },
				{ person: { create: { name: "Marek", surname: "Kciuk", academicDegree: AcademicDegree.DoctorInEngineering } } },
				{ person: { create: { name: "Roman", surname: "Wyżgolik", academicDegree: AcademicDegree.DoctorInEngineering } } },
				{ person: { create: { name: "Sebastian", surname: "Budzan", academicDegree: AcademicDegree.HabilitatedDoctorInEngineering } } },
			]
		},

		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.AGV } } },
				{ skill: { connect: { key: SkillKey.Python } } },
				{ skill: { connect: { key: SkillKey.AI } } },
				{ skill: { connect: { key: SkillKey.LabView } } },
				{ skill: { connect: { key: SkillKey.CommunicationTCPIP } } },
				{ skill: { connect: { key: SkillKey.Documentation } } },
			]
		},

		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Zastosowanie rozpoznawania gestów do kontroli AGV: Wstępne badania',
					publisher: 'MDPI',
					keywords: ['rozpoznawanie gestów', 'sieci neuronowe', 'autonomiczne pojazdy AGV', 'HMI'],
					description: 'W artykule przedstawiono badania dotyczące rozpoznawania gestów dłoni 2D (2D Hand Gesture Recognition, HGR), które może znaleźć zastosowanie w sterowaniu autonomicznym pojazdem transportowym (Automated Guided Vehicle, AGV). W rzeczywistych warunkach pracy należy uwzględnić między innymi złożone tło, zmienne warunki oświetleniowe oraz różne odległości operatora od pojazdu AGV. Z tego względu w artykule opisano bazę obrazów 2D utworzoną na potrzeby przeprowadzonych badań. Przetestowano klasyczne algorytmy oraz zmodyfikowane przez autorów modele ResNet50 i MobileNetV2, częściowo douczone z wykorzystaniem metody uczenia transferowego (transfer learning), a także zaproponowano prostą i skuteczną konwolucyjną sieć neuronową (Convolutional Neural Network, CNN). W ramach badań wykorzystano zamknięte środowisko inżynierskie do szybkiego prototypowania algorytmów wizyjnych – Adaptive Vision Studio (AVS), obecnie funkcjonujące pod nazwą Zebra Aurora Vision, oraz otwarte środowisko programistyczne Python. Ponadto krótko omówiono wyniki wstępnych prac nad rozpoznawaniem gestów dłoni 3D, które wydaje się bardzo obiecującym kierunkiem dalszych badań. Uzyskane wyniki wskazują, że z punktu widzenia implementacji metod rozpoznawania gestów w pojazdach AGV lepsze rezultaty można uzyskać dla obrazów RGB niż dla obrazów w skali szarości. Wykorzystanie obrazowania 3D oraz map głębi może dodatkowo przyczynić się do poprawy skuteczności rozpoznawania gestów.',
				},
				{
					locale: Locale.en,
					title: 'Using Gesture Recognition for AGV Control: Preliminary Research',
					publisher: 'MDPI',
					keywords: ['gesture recognition', 'neural networks', 'automatic guided vehicle', 'HMI'],
					description: 'The paper presents our investigation of the 2D Hand Gesture Recognition (HGR) which may be suitable for the control of the Automated Guided Vehicle (AGV). In real conditions, we deal with, among others, a complex background, changing lighting conditions, and different distances of the operator from the AGV. For this reason, in the article, we describe the database of 2D images created during the research. We tested classic algorithms and modified them by us ResNet50 and MobileNetV2 which were retrained partially using the transfer learning approach, as well as proposed a simple and effective Convolutional Neural Network (CNN). As part of our work, we used a closed engineering environment for rapid prototyping of vision algorithms, i.e., Adaptive Vision Studio (AVS), currently Zebra Aurora Vision, as well as an open Python programming environment. In addition, we shortly discuss the results of preliminary work on 3D HGR, which seems to be very promising for future work. The results show that, in our case, from the point of view of implementing the gesture recognition methods in AGVs, better results may be expected for RGB images than grayscale ones. Also using 3D imaging and a depth map may give better results.',
				},
			]
		}
	},

	{
		slug: PublicationSlug.DevelopmentOfMeasuringStationUtilizingOpticalImageCorrelationSystemAndHydraulicLoadControlSystem,
		publishDate: new Date('2019-11-20'),
		url: 'https://delibra.bg.polsl.pl/dlibra/show-content/publication/edition/62711?ID=62711',

		authors: {
			create: [
				{ person: { create: { name: "Oskar", surname: "Szkurłat", academicDegree: AcademicDegree.MasterOfScienceInEngineering } } },
				{ person: { create: { name: "Bartłomiej", surname: "Klama", academicDegree: AcademicDegree.MasterOfScienceInEngineering } } },
				{ person: { create: { name: "Jarosław", surname: "Domin", academicDegree: AcademicDegree.DoctorInEngineering } } },
			]
		},

		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.LabView } } },
				{ skill: { connect: { key: SkillKey.Documentation } } },
			]
		},

		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Opracowanie stanowiska badawczego wykorzystującego optyczny system korelacji obrazu oraz hydrauliczny układ sterowania obciążeniem',
					publisher: 'Wydział Organizacji i Zarządzania Politechniki Śląskiej, Gliwice, Polska',
					keywords: ['automatyczne stanowisko badawcze, agregat hydrauliczny', 'jednostka sterująca cRIO', 'LabVIEW', 'cyfrowa korelacja obrazu', 'DIC', 'dwuprzęsłowa belka żelbetowa'],
					description: 'Opracowano stanowisko badawcze umożliwiające realizację dowolnej ścieżki obciążenia konstrukcji z jednoczesnym sterowaniem oraz rejestracją przemieszczeń i odkształceń wyznaczanych w sposób bezkontaktowy z wykorzystaniem agregatu hydraulicznego firmy ZWICK-ROELL oraz optycznego systemu pomiarowego ARMIS 6M. W ramach prac zaprojektowano nowy układ sterowania, zsynchronizowano współpracę poszczególnych komponentów, opracowano oprogramowanie w środowisku LabVIEW oraz przeprowadzono eksperymenty badawcze na statycznie niewyznaczalnych belkach żelbetowych. Zakres prac obejmował modernizację układu elektrycznego oraz sterująco-pomiarowego, opracowanie dedykowanego interfejsu użytkownika, a także zaprojektowanie i wykonanie dwuprzęsłowych belek przeznaczonych do badań stanowiskowych. Główna modyfikacja istniejącego agregatu hydraulicznego polegała na usunięciu przestarzałych elementów sterowania opartych na stycznikach i przekaźnikach. Ponadto zaprojektowano i wykonano dedykowany układ sterująco-pomiarowy, którego jednostką centralną został sterownik czasu rzeczywistego NI cRIO-9022, wyposażony w dwa moduły analogowe oraz dwa moduły cyfrowe. Sterowanie realizowano poprzez regulację analogowego zaworu proporcjonalnego doprowadzającego ciśnienie do siłownika hydraulicznego. Układ został dodatkowo wyposażony w czujnik ciśnienia zamontowany na wyjściu agregatu hydraulicznego. Zmodernizowany system sterująco-pomiarowy, wykorzystujący sterownik czasu rzeczywistego oraz moduły analogowe i cyfrowe, umożliwił płynną regulację zaworu proporcjonalnego, a tym samym ciągłe sterowanie ciśnieniem hydraulicznym w zależności od odpowiedzi konstrukcji na obciążenie. W porównaniu z ręcznie sterowanym agregatem hydraulicznym wdrożono pośrednie sterowanie przemieszczeniem wybranego obszaru konstrukcji poprzez wymuszanie przemieszczenia tłoczyska siłownika oraz bezkontaktową rejestrację przemieszczeń przęsła zgodnie z wcześniej zdefiniowanym scenariuszem badawczym.',
				},
				{
					locale: Locale.en,
					title: 'Development of a measuring station utilizing an optical image correlation system and a hydraulic load control system',
					publisher: 'Faculty of Organization and Management, Silesian University of Technology, Gliwice, Poland',
					keywords: ['automatic test stand, hydraulic aggregate', 'CRIO control unit', 'LabView', 'digital image correlation', 'DIC', 'double span reinforced concrete beam'],
					description: "The development of a research station enabling the implementation of any loading path for a structure with control and recording of displacements or deformations obtained in a non-contact manner using a hydraulic pump unit from ZWICK-ROELL and the ARMIS 6M optical system. A new control unit was designed, components were synchronized, software in LABVIEW was developed, and test experiments were conducted on statically indeterminate reinforced concrete beams. The scope of work included: modernization of the electrical and control-measurement system, development of a dedicated user interface, and the design and construction of two-span beams for testing the station. The main modification of the existing hydraulic pump unit involved removing the old-generation components based on contactors and relays. Additionally, a dedicated control-measurement system was designed and built, with the central unit being the NI cRIO-9022 real-time controller, equipped with two analog modules and two digital modules. Control was performed by adjusting the analog proportional valve, which supplied pressure to the hydraulic actuator. The system was additionally equipped with a pressure sensor at the output of the hydraulic unit. The modified control-measurement system, equipped with the real-time controller and digital and analog modules, enabled smooth control of the proportional valve, and consequently smooth regulation of the hydraulic pressure based on the structural response. Compared to the manually controlled hydraulic unit, the displacement control of a specific area of the structure was implemented indirectly by causing the displacement of the actuator's piston and recording the displacement of the span non-contactedly according to a strictly defined scenario.",
				},
			]
		}
	},
];