# PROJECT EXGATE : LE RÉSEAU SOUVERAIN DISTRIBUÉ
**LIGHT PAPER**
*Version 1.0 - Synthèse Technique & Philosophique*

---

## 1. RÉSUMÉ (EXECUTIVE SUMMARY)

L’architecture Internet contemporaine souffre d’une centralisation structurelle, d’une surveillance omniprésente et de dépendances de confiance inhérentes envers les opérateurs intermédiaires.

**Exgate** propose une infrastructure de réseau distribuée qui élimine la nécessité de faire confiance aux fournisseurs d’accès Internet (FAI) et aux autorités centrales grâce à des **preuves cryptographiques** et à la **propriété physique du matériel**. Le système utilise une architecture de routage à double relais “oblivious” (inconscient) pour découpler mathématiquement l’identité de l’utilisateur de l’activité réseau, tout en mettant en œuvre une mise en cache centrée sur le contenu pour atteindre la résilience et réduire la latence.

En rétablissant la **souveraineté matérielle** via la "Exgate Box", l'utilisateur cesse d'être un simple client passif pour devenir un nœud actif d'une infrastructure distribuée.

---

## 2. INTRODUCTION & PHILOSOPHIE

L’architecture originale d’Internet mettait l’accent sur la décentralisation. Aujourd'hui, le contrôle est consolidé au sein des FAI, des fournisseurs de cloud et des appareils de surveillance. Les utilisateurs transmettent des métadonnées non chiffrées et s’appuient sur des autorités DNS centralisées.

**La vision Exgate** repose sur trois piliers fondamentaux :
1.  **Souveraineté Matérielle :** La garde physique des nœuds par les utilisateurs finaux établit une souveraineté sur le transit et le stockage des données. "Si vous ne possédez pas le hardware, vous ne possédez pas les données."
2.  **Séparation Cryptographique des Connaissances :** La vie privée est assurée par l'architecture même (Privacy by Design), empêchant toute entité unique d'observer à la fois l'identité et l'activité.
3.  **Civisme Numérique (Zéro Token) :** Le réseau fonctionne sur un principe de réciprocité et de réputation, sans spéculation financière.

---

## 3. L'ARCHITECTURE MATÉRIELLE : LA "EXGATE BOX"

Le cœur du système est un nœud matériel appartenant à l'utilisateur, agissant comme une passerelle sécurisée.

### 3.1 Rôle et Positionnement
*   **Mode Bridge :** La Exgate Box s'interpose entre le modem FAI et le réseau local, isolant le domicile.
*   **Rôles Multiples :** Chaque nœud peut agir comme Relais, Cache de contenu, Nœud de Sortie (optionnel) et Stockage distribué.

### 3.2 Spécifications Techniques Cibles
Pour assurer les opérations cryptographiques intensives et le routage haut débit :
*   **Processeur :** Architecture ARM64 haute performance (type Rockchip RK3588) avec accélération cryptographique matérielle.
*   **Mémoire :** 8 Go de RAM LPDDR4x minimum pour gérer les tables de routage et le cache en mémoire.
*   **Stockage :** 2 à 4 To en SSD NVMe pour la mise en cache (Hot Data) et le stockage distribué.
*   **Connectivité :** Double port Ethernet 2.5 GbE (WAN/LAN).
*   **Sécurité :** Module TPM 2.0 / Secure Enclave pour l'attestation du matériel ("Proof of Hardware") et le stockage des clés privées.

---

## 4. ARCHITECTURE RÉSEAU : "EXGATE GRID"

### 4.1 Routage à Double Relais "Oblivious" (Inconscient)
Exgate implémente une architecture à double saut (2-Party Relay) inspirée des travaux IETF MASQUE, utilisant des tunnels imbriqués :
*   **Tunnel T2 (Externe) :** De l'Utilisateur (U) vers le Relais 1 (R1) via QUIC. R1 connait l'IP source mais ne voit que des paquets chiffrés.
*   **Tunnel T1 (Interne) :** De l'Utilisateur (U) vers le Relais 2/Sortie (R2) via WireGuard, encapsulé dans T2. R2 déchiffre le trafic final mais ne voit que l'IP de R1.

**Résultat :** P_correlation ≈ 10^-7. Aucune entité ne possède l'image complète de la transaction.

### 4.2 Pile Protocolaire & Sécurité
Exgate refuse le compromis sécurité/vitesse :
*   **WireGuard over QUIC (RFC 9221) :** Utilisation de datagrammes non fiables pour éviter le "TCP Meltdown" et assurer une latence minimale.
*   **Cryptographie :** ChaCha20-Poly1305 pour le chiffrement symétrique, Curve25519 pour l'échange de clés (ECDH), BLAKE2s pour le hachage.
*   **Forward Secrecy :** Rotation des clés toutes les 2 minutes.
*   **Résistance DPI :** Le trafic se fond dans le bruit de fond HTTP/3 standard, rendant le blocage difficile sans dommages collatéraux.

### 4.3 Mise en Cache Centrée sur le Contenu
Pour le contenu statique, Exgate fonctionne comme un CDN P2P :
*   **Adressage :** Contenu adressé par le hachage (SHA3-256) de ses données, indépendamment de son emplacement.
*   **Chiffrement :** Contenu chiffré (AES-256) au repos.
*   **Découverte :** Utilisation d'une **DHT Kademlia modifiée** (IDs 256-bit, k=20) pour localiser les contenus.
*   **Performance :** Latence de récupération de contenu caché estimée entre 1-10 ms (LAN/MAN).

---

## 5. ÉCOSYSTÈME ET SERVICES

### 5.1 Identité et Nommage (ExDNS)
*   **Identité SSI :** Clés Ed25519 auto-souveraines. Identifiants utilisateur en Base58. Perte de clé = Perte d'identité ("Game Over").
*   **ExDNS :** Système de nommage décentralisé stocké dans la DHT.
    *   Clé de recherche : K = SHA3-256(nom).
    *   Règle : "Premier arrivé, premier servi" basé sur l'horodatage.
    *   Maintenance : "Heartbeat" cryptographique tous les 180 jours. Expiration et retour au domaine public après 730 jours d'inactivité.

### 5.2 ExCloud : Stockage Distribué "Immortel"
Système de sauvegarde résilient face aux pannes locales :
*   **Erasure Coding :** Algorithme Reed-Solomon (typiquement k=10, n=20). Les fichiers sont découpés en éclats (shards).
*   **Disponibilité :** Il suffit de récupérer *k* éclats quelconques parmi les *n* dispersés pour reconstruire le fichier.
*   **Incitations :** La qualité de service (QoS) et la sélection des relais favorisent les nœuds qui contribuent au stockage (Réciprocité).

### 5.3 Smart Isolation & IoT
*   **Quarantaine Automatique :** Classification automatique des appareils IoT dans des VLANs isolés.
*   **Politique Stricte :** IoT vers Internet autorisé (Direct Access) ; IoT vers Réseau Local bloqué par défaut ; Utilisateur vers IoT autorisé avec authentification explicite.

---

## 6. GOUVERNANCE ET ÉCONOMIE

### 6.1 Modèle "Zéro Token"
Exgate rejette la tokenisation spéculative.
*   **Financement :** Vente du matériel (Estimé $250 - $600 selon config).
*   **Services Premium :** Accès optionnel à des nœuds de sortie commerciaux haute performance ($5 - $10/mois) pour le trafic hors cache.
*   **Sybil Resistance :** L'attaque Sybil est rendue économiquement prohibitive (> $150,000 pour 1000 nœuds) par l'exigence de "Preuve de Matériel" (Attestation TPM).

### 6.2 Gouvernance
*   **Open Source :** Code auditable et gouvernance communautaire.
*   **Déploiement :** Phases progressives, du Testnet (Seed nodes) vers le déploiement massif (100k+ nœuds).

---

## 7. TRAVAUX FUTURS ET CONCLUSION

Le développement futur se concentrera sur la cryptographie post-quantique (Kyber, Dilithium) pour sécuriser le réseau contre les menaces futures, ainsi que sur le développement de clients mobiles (Android/iOS) et d'un marché décentralisé pour les nœuds de sortie (via Lightning Network).

**Conclusion :** Exgate marque la transition d'un Internet basé sur la confiance centralisée vers un Internet basé sur la preuve cryptographique. En redonnant à l'utilisateur la propriété de l'infrastructure physique, nous garantissons mathématiquement la souveraineté, la confidentialité et la pérennité des données numériques.
