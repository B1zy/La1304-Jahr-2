# Projekt-Dokumentation

Kamil und Shahir

| Datum       | Version | Zusammenfassung                                              |
| ----------- | ------- | ------------------------------------------------------------ |
| 28/02/2024  | 0.0.1   | Projektstart: Grundlegende Planung und Konzeptentwicklung.   |
| 06/03/2024  | 0.0.2   | Erste Implementierung der Grundstruktur des Projekts.         |
| 13/03/2024  | 0.0.3   | Hinzufügen von grundlegenden Funktionen für Dateikomprimierung.   |
| 20/03/2024  | 0.0.4   | Implementierung weiterer Funktionen und Bugfixing.            |
| 27/03/2024  | 0.0.5   | Fertigstellung der Hauptfunktionen und Beginn der Tests.      |
| 03/04/2024  | 1.0.0   | Abschluss des Projekts und Endabnahme.                        |

## 1 Informieren

### 1.1 Ihr Projekt

Dies ist ein Projekt zur Entwicklung einer Webanwendung, die es Benutzern ermöglicht, Dateien zu komprimieren.

Ziel dieses Projekts ist es, eine benutzerfreundliche und effiziente Anwendung zu entwickeln, die Benutzern hilft, ihre Dateien einfach und schnell zu komprimieren. Wir hoffen, dabei unsere Fähigkeiten in der Webentwicklung zu verbessern und praktische Erfahrungen zu sammeln.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                                             |
| ---- | --------------- | ---- | -------------------------------------------------------- |
| 1    | Muss            | Funktionalität | Als Benutzer möchte ich Dateien hochladen können, um sie zu komprimieren. |
| 2    | Muss            | Funktionalität | Als Benutzer möchte ich den Komprimierungsprozess starten können, um die Datei zu komprimieren. |
| 3    | Muss            | Funktionalität | Als Benutzer möchte ich die komprimierte Datei herunterladen können, um sie auf meinem Gerät zu speichern. |
| 4    | Soll            | Funktionalität | Als Benutzer möchte ich eine Vorschau der Dateigröße vor und nach der Komprimierung sehen. |
| 5    | Kann            | Funktionalität | Als Benutzer möchte ich verschiedene Komprimierungsoptionen auswählen können, um die gewünschte Komprimierungsrate zu erreichen. |

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Die Webanwendung ist geladen. | Eine Datei wird hochgeladen. | Die Datei wird erfolgreich hochgeladen. |
| 2.1  | Eine Datei ist hochgeladen. | Der Benutzer startet die Komprimierung. | Die Datei wird komprimiert. |
| 3.1  | Eine Datei ist komprimiert. | Der Benutzer lädt die Datei herunter. | Die komprimierte Datei wird heruntergeladen. |
| 4.1  | Eine Datei ist hochgeladen. | Der Benutzer sieht die Vorschau. | Die Dateigrößen vor und nach der Komprimierung werden angezeigt. |
| 5.1  | Die Webanwendung ist geladen. | Der Benutzer wählt Komprimierungsoptionen aus. | Die Komprimierung erfolgt entsprechend den ausgewählten Optionen. |


## 2 Planen

| AP-№ | Frist      | Zuständig | Beschreibung                              | geplante Zeit |
| ---- | ---------- | --------- | ----------------------------------------- | ------------- |
| 1.A  | 06/03/2024 | Kamil     | Implementierung der Upload-Funktion       | 45 min        |
| 1.B  | 06/03/2024 | Shahir    | Implementierung der Komprimierungsfunktion| 45 min        |
| 1.C  | 13/03/2024 | Kamil     | Implementierung der Download-Funktion     | 45 min        |
| 1.D  | 13/03/2024 | Shahir    | Implementierung der Vorschaufunktion      | 45 min        |
| 1.E  | 20/03/2024 | Beide     | Implementierung der Komprimierungsoptionen| 45 min        |
| 1.F  | 20/03/2024 | Beide     | Testen und Bugfixing                      | 45 min        |
| ...  |            |           |                                           |               |

Total: 

## 5 Kontrollieren

| TC-№ | Datum       | Resultat | Tester |
| ---- | ----------- | -------- | ------ |
| 1.1  | 06/03/2024  | Erfolg   | Kamil  |
| 2.1  | 13/03/2024  | Erfolg   | Shahir |
| 3.1  | 20/03/2024  | Erfolg   | Kamil  |
| 4.1  | 27/03/2024  | Erfolg   | Shahir |
| 5.1  | 03/04/2024  | Erfolg   | Beide  |

Fazit: Alle Testfälle wurden erfolgreich bestanden, die Anwendung funktioniert wie erwartet.
