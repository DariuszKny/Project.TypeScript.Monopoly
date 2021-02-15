### LIVE https://lotr-monopoly.netlify.app/

# Coders Camp 2020 | Projekt Zespołowy | Typescript

* [Zespół projektowy](#zespół-projektowy)
* [Lord of The Rings Monopoly](#Lord of The Rings Monopoly)
    + [Demo](#demo)
    + [Cel projektu](#cel-projektu)
    + [Działanie aplikacji](#działanie-aplikacji)
        - [Ekran startowy](#ekran-startowy)
        - [Menu Główne](#menu-główne)
            * [Ilośc i nazwy graczy](#Players)
            * [Czas gry](#Time)
            * [Wybór bohaterów](#Heroes)
        - [Rozgrywka - Monopoly](#Rozgrywka-Monopoly)
    + [Zmiany wprowadzone w wymaganiach](#zmiany-wprowadzone-w-wymaganiach)
    + [Zrealizowane dodatkowe zadania](#zrealizowane-dodatkowe-zadania)
* [Development aplikacji](#development-aplikacji)
    + [Wykorzystywane technologie](#wykorzystywane-technologie)
    + [Uruchomienie projektu](#uruchomienie-projektu)
    + [Uruchomienie testów](#uruchomienie-testów)
    + [Organizacja pracy](#organizacja-pracy)

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp](https://coderscamp.pl/). Aplikację wykonali:

**Mentor**: Maja Jelenik

**Uczestnicy**:

- [Dariusz Knysak](https://github.com/DariuszKny) #Tech-Lead
- [Marlena Kruszewska](https://github.com/marlexxa) #Product-Owner
- [Adam Spinek](https://github.com/Arvanes)  #Development-Manager

## Lord of The Rings Monopoly

### Demo

Wersja demonstracyjna aplikacji jest dostępna [TUTAJ](https://lotr-monopoly.netlify.app/).

### Cel projektu

Celem projektu było napisanie aplikacji wykorzystującej dotychczas nabytą wiedzę z następujących technologi: html, css,
typescript. Zespół projektowy zdecydował się na aplikację - grę Monopoly związaną z tematyką uniwersum Władcy
Pierścieni. Gra jest w formacie gry planszowej, w której gracze poruszając się pionkami mogą kupować miasta do swoich
kolekcji, rozbudowywać ję i pobierać opłaty gdy ich przeciwnik stanie na nich. Gra oparta jest na grze Monopoly, wieć
znajdziemy w niej dużo funkcji orginalnej wersji ale również nowe , zaimplementowane przez autorów.

Aplikacja została wykonana wg dostarczonych przez organizatorów CodersCamp wymagań. Szablon projektu dostępny
jest [TUTAJ](https://github.com/CodersCamp2020/CodersCamp2020.Project.TypeScript.Chess).

### Działanie aplikacji

#### Ekran startowy

Po uruchomieniu aplikacji wyświetlony zostaje przysik LandingPage aplikacji.

#### Ustawienia gry

Następnie przechodzimy do menu ustawień gry i wybieramy kolejno:

- [Ilośc i nazwy graczy](#Players)
- [Czas gry](#Time)
- [Wybór bohaterów](#Heroes)

##### Players

Każdy z graczy wpisuje swoje imie - do zagrania wymaganę są przynajmniej 2 osoby

##### Time

Graczę wybierają jak długą chą aby rozgrywka trwała

##### Heroes

Każdy z graczy może wybrac sowjego ulubionego bohatera ze śwata Władcy Pierścieni [Aragorn, Gandalf, Saruman, Sauron], a
wybór danego bohatera może wpływać na efekty niektórych kart w grze!

## Rozgrywka Monopoly

- [Opis Gry](#Players)
- [Karty](#Time)
- [Wydarzenia](#Time)


## Opis

Rozgrywka polega na przemieszczani się graczy na planszy po przez wyrzucanie kostki. Następnie wykonywane są różne wydarzenia
rozpatrywane efekty kart, gracz może kupić karte jeśli jest taka możliwość , albo zapłacić czynsz innemu graczowi,
który tą karte posiada. Gra polega na wykupowaniu kart , łączenia ich i rozbudowywania aby generowały coraz większy czynsz.
Gra kończy się gdy kończy się czas albo zostanie jeden aktywny gracz. W grze znajdziemy karty które możemy kupić:
karty miast, artefaktów i hobbitów, a także karty wydarzeń , które mają pozytywny lub negatywny wpływ na nasz wynik

## Karty

### Karty Miast

21 unikatowych kart miast podzielone na 7 prowincji, Gracz który ją posiada może pobierać czynsz od innych graczy, a
posiadając wszystkie miasta z danej prowincji, może zwiększyć czynsz przez budowanie wież

### Karty Artefaktów

4 karty artefaktów najbardziej znanych broni ze świata Władcy pierścieni, im jeden gracz posiada ich więcej tym większy
czynsz generuje każda z nich

### Karty Hobbitów

4 karty hobbitów - Frodo, Sam, Merry, Pippin tak jak w LOTR tak i w grze mogą znaczącą zwiększyć szanse gracza na
zwycięstwo - posiadając każdą z nich gracz zmniejsza płacony czynsz o 10%

## Wydarzenia

### Los

4 karty losu po 2 dobre i 2 złe w zależnośći jakiego bohatera wybrałeś , taki efekt będzie miało na Ciebie nadchodzące
Wwydarzenie

### Pierścień

Pierścień robi z Ciebie prawdziwego władce śródziemia - dostajesz nagrodę i możesz wysłać swojego przeciwnika do więzienia

### Przejście startu

Za każdorazowe przejśćie startu gracz otrzymuje nagrodę!

### Więzienie

Jeśli gracz 3 razy wyrzuci dublet albo stanie na polu "go to jail" będzie musiał przeczekać 2 kolejki w więzieniu

### Kupowanie miast i artefaktów

W grze możliwość kupienia miast jest tylko wtedy gdy dany gracz stanie swojm pionkiem na polu danej karty

### Kupowanie wież

W grze możliwość ulepszania miast  jest tylko wtedy gdy dany gracz stanie swojm pionkiem na miasta które chcę ulepszyć

## Development aplikacji

### Wykorzystywane technologie

W trakcie developmentu wykorzystujemy:

- Typescript
- CSS
- HTML
- Jest.js
- Parcel
- Babel

### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm run start:dev`

Aplikacja będzie dostępna pod adresem [localhost:8765/index.html](http://localhost:8765/index.html)

Kod produkcyjny aplikacji znajduje się w katalogu `src`.

### Uruchomienie testów

Uruchom testy, wykonując komendę: `npm run test`. Testy z raportem pokrycia uruchomisz za pomocą: `npm run test:cov`.

Kod testów umieszczamy w katalogu `test`.

### Organizacja pracy

Praca zespołu była organizowana przy użyciu narzędzia Trello. Zadania zostały podzielone na listy i karty, do których
przydzielani byli poszczególni członkowie zespołu. Główne kanały komunikacji zespołu to Discord oraz Google Meet.