## GraphQL - Eine alternative zu REST

**Was ist GraphQL?**

- Eine Query Language für deine API 🔍
- 2015 von Facebook veröffentlicht :tada:
- Deklarativ Daten abfragen, indem der Client genau angibt welche Daten er braucht 📝
- Ein Endpunkt anstatt meherer Endpunkte mit festen Datenstrukturen

**GraphQL als Alternative zu REST API?**

- Ja und Nein 🤷‍
- REST ist immer noch ein beliebter und einfacher Ansatz, um Daten von einem Server verfügbar zu machen 👍
- Aber: starke Veränderung der Anforderungen vor allem für mobile Anwendungen 📱
- Zunehmende mobile Nutzung erfordert schnelles und effizientes Laden von Daten 🐎
- GraphQL holt sich nur die Daten, die wirklich gebraucht werden &rarr; kein Over- und Underfetching 🧘

**Live Demo**

- [ ] Den GraphQL Server kennenlernen und ein einfaches GraphQL-Schema definieren
- [ ] Datenbankschicht mit [Prisma](https://www.prisma.io/) hinzufügen
- [ ] Resolver-Funktionen für Einfüge-Operation schreiben
- [ ] Frontend dranbasteln

In dem Verzeichnis `graphql-live-demo` befindet sich das Basic Setup für diese Session. In `graphql-final-example` liegt das lauffertige Beispiel. Zum Starten des GraphQL Servers und des Frontends müssen die folgenden Befehle ausgeführt werden.

`git clone https://github.com/sonjahohlfeld/devcamp2019-graphql.git`

`cd devcamp2019/graphql-final-demo`

`yarn install`

**Das Frontend starten**

`yarn start`

Unter der Adresse `http://localhost:3000` läuft das Beispiel-Frontend. Da die Datenbank noch nicht hinzugefügt wurde, erscheint zunächst eine error-Meldung.

**Die Datenbank hinzufügen und das Schema generieren**

`docker-compose up -d`

`cd server`

`prisma deploy`

`prisma generate`

**Den GraphQL Server starten**

`node src/index.js`

Unter `http://localhost:4000` ist der Playground des GraphQL Servers erreichbar. Über den Playground kann man nun neue Nutzer hinzufügen. Diese werden dann im Interface angezeigt.
