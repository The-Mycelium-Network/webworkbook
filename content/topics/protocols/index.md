---
title: What are protocols?
keywords: internet protocols, types of internet protocols, internet protocols explained
description: A collection of informational pieces that explain internet protocols.
menu:
  main:
    parent: topics
    name: Protocols
---

## What are protocols exactly?

Internet Protocols, or Network Protocols, are rules and guidelines for sending data between computers connected to the Internet.

They work as a “universal language” between computers, being responsible for collecting the data transmitted over the network and breaking it up into small pieces (“packets”), each carrying source and destination information.

The Internet protocol suite is commonly known as the TCP/IP model and contains four abstraction layers, in which all related protocols are classified:

1. **Physical**: Cables, Network Interface Cards
2. **Data Link**: Ethernet, Switches
3. **Network**: IP, Routers
4. **Transport**: TCP, UDP
5. **Application**: HTTP, DNS, FTP, SMTP, DHCP, IMAP, POP3

In the following sections, we will cover many of the most common protocols, from Internet Protocol (IP) to Post Office Protocol 3 (POP3).

**References:**

- [GeeksforGeeks: Types of Internet Protocols](https://www.geeksforgeeks.org/types-of-internet-protocols/)
- [WikiBooks: Network Technologies - Common Protocols](https://en.wikibooks.org/wiki/Network_Plus_Certification/Technologies/Common_Protocols)
- [MDN Web Docs Glossary: Protocol definition](https://developer.mozilla.org/en-US/docs/Glossary/Protocol)
- Wikipedia related entries
  - [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite)
  - [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)
  - [TCP/IP](https://pt.wikipedia.org/wiki/TCP/IP)

**See also:**

- Articles:
  - [Syed Sadat Nazrul: Intro To Computer Networking And Internet Protocols](https://medium.com/@sadatnazrul/intro-to-computer-networking-and-internet-protocols-8f03710ca409)
  - [Ige Kehinde: How the Internet Works](https://kennygrace.hashnode.dev/how-the-internet-works-ckgm70i6y0a5gnzs1baql91sf)
  - [Nyior Clement Jr.: How the Internet Works](https://dev.to/nyior/the-why-what-and-how-of-the-internet-39d5)
  - [Avast: What is TCP/IP and How Does it Work?](https://www.avast.com/c-what-is-tcp-ip)
- Videos:
  - [Fireship: Computer Networking in 100 Seconds](https://www.youtube.com/watch?v=keeqnciDVOo)
  - [Kenan Casey: 1.1 - Introduction | FHU - Computer Networks](https://www.youtube.com/watch?v=5D67Qy1tPLY&list=PLLFIgriuZPAcCkmSTfcq7oaHcVy3rzEtc)
  - [Computer Networks: Crash Course Computer Science #28](https://www.youtube.com/watch?v=3QhU9jd03a0)
  - [CertBros: TCP/IP Model Explained](https://www.youtube.com/watch?v=OTwp3xtd4dg)
  - [NetworkChuck: what is TCP/IP and OSI?](https://www.youtube.com/watch?v=CRdL1PcherM&t=377s)

### IP (Internet Protocol)

The Internet Protocol ensures that each device connected to the internet has a unique IP address, which serves as an exclusive identifier and is sent over in the packet headers.

The first version of IP to be widely deployed was Internet Protocol Version 4 (IPv4), which remains the dominant protocol of the Internet. Its successor is Internet Protocol Version 6 (IPv6), which is slowly replacing IPv4, among other reasons, to help solve the IP address exhaustion problem.

IPv4 uses four 1 byte decimal numbers, separated by dots (i.e. 192.158.1.38), while IPv6 uses hexadecimal numbers separated by colons (i.e. 2001:db8::8a2e:370:7334).

**References:**

- MDN Web Docs Glossary: Definitions of Web-related terms
  - [IPv4](https://developer.mozilla.org/en-US/docs/Glossary/IPv4)
  - [IPv6](https://developer.mozilla.org/en-US/docs/Glossary/IPv6)
- Wikipedia related entries
  - [IP address](https://en.wikipedia.org/wiki/IP_address)
  - [IPv4](https://en.wikipedia.org/wiki/IPv4)
  - [IPv6](https://en.wikipedia.org/wiki/IPv6)
  - [TCP/IP](https://pt.wikipedia.org/wiki/TCP/IP)

### TCP (Transmission Control Protocol)

The Transmission Control Protocol specifies how data should be broken into packets and how those will travel over the network, guaranteeing it will be delivered to the destination in the same order as they were sent.

In other words, it takes the data from the application layer, splits into smaller units and pass them to the network layer, encapsulated with its own headers. TCP is highly reliable and applies the 3-way handshake principle, setting up a connection even before sending any data.

**References:**

- MDN Web Docs Glossary: Definitions of Web-related terms
  - [TCP](https://developer.mozilla.org/en-US/docs/Glossary/TCP)
  - [Packet](https://developer.mozilla.org/en-US/docs/Glossary/Packet)
- Wikipedia related entries
  - [TCP](https://pt.wikipedia.org/wiki/Protocolo_de_controle_de_transmiss%C3%A3o)

### SMTP (Simple Mail Transfer Protocol)

Simple Mail Transfer Protocol is a protocol used for electronic mail transmission over the internet, specifically for sending messages based on e-mail addresses. You will mostly find SMTP being used in combination with POP3 and IMAP. They are the most common email protocols in use but, while SMTP is a push protocol — i. e., deliver emails, through the internet, to a server that can be outside of your network —, the other two are used for retrieving the messages from the server on the receiver's side.

SMTP servers handle the sending, receiving, and relaying of emails that will later be downloaded via a receiving protocol. A good metaphor for SMTP servers is real-life post offices. When you send a letter, your local post office processes your correspondence and decides which post office to forward the letter to. After reaching the recipient's post office, the letter will be ready to be retrieved by your local mailman and delivered to your address.

**References:**

* [MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/SMTP)
* [Wikipedia](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
* [GeeksforGeeks](https://www.geeksforgeeks.org/simple-mail-transfer-protocol-smtp/)

**See also:**

* [Postmark: Everything you need to know about SMTP](https://postmarkapp.com/guides/everything-you-need-to-know-about-smtp)
* Videos:
  * [Eye on Tech: What is SMTP (Simple Mail Transfer Protocol)?](https://www.youtube.com/watch?v=AoqvWgazf50)
  * [TECHNOPHILE: What Is SMTP ? How it Works !](https://www.youtube.com/watch?v=O-Xho7gEWj0)

### POP3

POP3 stands for Post Office Protocol 3 - it is used to retrieve mail from a remote server over a network and save it on a local device. Once an e-mail has been retrieved, it is usually deleted from the server, freeing up space. Many providers, however, give an option to keep the original copies intact. All data and attachments are saved on your local device, making it possible to access the messages while offline. Most mail servers use POP3 because of its simplicity and also due to it being well-supported.

**References:**

* [Techtarget](https://www.techtarget.com/whatis/definition/POP3-Post-Office-Protocol-3)
* [Hostinger](https://www.hostinger.com/tutorials/email/pop3-imap-smtp-protocols-explained-ports)

### IMAP (Internet Message Access Protocol)

This is one of a few methods used to retrieve e-mails. This method makes it possible for the user to access messages from any device and e-mails will also be synchronized across all devices that are being used. IMAP stores e-mails on an external server allowing remote access. The same goes for outgoing messages. Messages are only downloaded once you click on them and attachments are not automatically downloaded either, making IMAP fast, efficient and versatile.

**References:**

* [WhatIsMyIPAddress: What is a IMAP?](https://whatismyipaddress.com/imap)
* [JavaTpoint: IMAP Protocol](https://www.javatpoint.com/imap-protocol)
* [GeeksforGeeks: Internet Message Access Protocol (IMAP)](https://www.geeksforgeeks.org/internet-message-access-protocol-imap/)

### UDP

UDP stands for User Datagram Protocol. UDP is specifically chosen for time-sensitive applications like online gaming, video playback, and Domain Name System (DNS) lookups. UDP uses a [connectionless communication](https://en.wikipedia.org/wiki/Connectionless_communication) model, which speeds up communication between client and server. Unlike Transmission Control Protocol(TCP), the order of packets (called datagrams) is not guaranteed, nor are there any checks to ensure packets are delivered. Because a formal connection is not made, UDP can leave one open to *[DDoS attacks](https://www.fortinet.com/resources/cyberglossary/ddos-attack)* through UDP [flood attacks](https://www.cloudflare.com/learning/ddos/udp-flood-ddos-attack/).

**References:**

* [MDN-UDP](https://developer.mozilla.org/en-US/docs/Glossary/UDP)
* [Cloudflare-UDP](https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/)

### FTP (File Transfer Protocol)

File Transfer Protocol is used to allow computers to transfer files from one system to another using the internet. FTP works by opening a connection between 2 parties, which is made via two distinct communication channels: the control channel handles FTP commands and responses; while the data channel is where the sharing happens once the server has granted you access.

The FTP is insecure by current standards and it's considered a legacy protocol, the main issue being the fact that it does not encrypt the data sent, allowing data interception. There are protocols more appropriate to safely transfer data, such as:

- FTPS (FTP Secure), which adds a security layer on top of FTP using cryptographic protocols like SSL or TLS;
- SFTP (SSH File Transfer Protocol), which runs over the SSH Protocol and provides encrypted data communication.

**References:**

- [MDN Web Docs Glossary: FTP](https://developer.mozilla.org/en-US/docs/Glossary/FTP)

**See also:**

- [Hostinger Tutorials: What is FTP - FTP Explained for Beginners](https://www.hostinger.com/tutorials/what-is-ftp)
- Videos:
  - [CertBros: FTP Explained | File Transfer Protocol | Cisco CCNA 200-301](https://www.youtube.com/watch?v=L9aZpg0ip70)

### FTPS (File Transfer Protocol Secure)

FTP Secure is used to securely transfer data between users, companies or clients. It's an extension of the File Transfer Protocol (FTP) which adds support for a security layer. FTPS uses cryptographic protocols like SSL (Secure Sockets Layer) or TLS (Transport Layer Security), although the former is now deprecated due to security vulnerabilities.

In a nutshell, the data gets encrypted before it's sent, preventing it from being intercepted and read by third parties. FTP make use of client certification and server identities when transferring the data from point A to point B, and various security measures and encryption strategies are used to connect with foreign servers and verify authenticity before sending any data.

**References:**

- [Precisely glossary: FTPS](https://www.precisely.com/glossary/ftps)
- [Wikipedia: FTPS](https://en.wikipedia.org/wiki/FTPS)

### SFTP (SSH File Transfer Protocol)

SFTP functions pretty much the same as FTPS protocol, both being protocols used to transfer files safely through an encrypted connection. The difference is the encryption type and the authentication process used. While FTPS just adds a security layer around the legacy FTP protocol, SFTP is an extension of the SSH protocol, which allows remote machines to verify each other before connecting and transferring data. 

SFTP is quickly taking the place of FTP and FTPS. The reason for this is that SFTP is more secure, more reliable and easier to configure. This means that there are not many reasons to use any other protocol in its place. SFTP is protected against [man-in-the-middle-attacks](https://www.ssh.com/academy/attack/man-in-the-middle) and even [password sniffing](https://www.ssh.com/academy/attack/password-sniffing).

**References:**

* [SFTP-SSH Academy](https://www.ssh.com/academy/ssh/protocol)
* [GeeksforGeeks: Difference between FTPS and SFTP](https://www.geeksforgeeks.org/difference-between-ftps-and-sftp/)
* [SmartFile: The Difference Between SFTP & FTPS and Why It Matters](https://www.smartfile.com/blog/difference-between-sftp-ftps/)

### DNS **Domain Name System**

A standard protocol that works like a phonebook - it manages the mapping between names (websites) and numbers (IP addresses). This means that you don't need to remember complicated IP addresses, because DNS translates your domain name (URL) to the corresponding address. There are 3 types of DNS servers, namely; primary, secondary and caching servers. 

The primary server is used for all administrative tasks.
The secondary is the backup server.
The caching server only performs cached-query services.

**Refrances**

* [How DNS Works](https://howdns.works/ep1/)

* [NS1](https://ns1.com/resources/what-is-dns)

* [Microsoft](https://learn.microsoft.com/en-us/windows/win32/dns/dns-servers)

### SSL **Secure Sockets Layer** 
A networking protocol that keeps your internet connection secure and ensures that data being transfered remains private. It scrambles the data making it impossible to read to anyone trying to intercept it.
SSL uses cryptographic keys to encrypt information; a public key encrypts the data and a private key decrypts it.

* [TechTarget](https://www.techtarget.com/searchsecurity/definition/Secure-Sockets-Layer-SSL)

* [CloudFlare](https://www.cloudflare.com/learning/ssl/what-is-ssl/)

* [CsOonLine](https://www.csoonline.com/article/3246212/what-is-ssl-how-ssl-certificates-enable-encrypted-communication.html)
 