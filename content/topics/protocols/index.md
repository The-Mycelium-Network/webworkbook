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

* [GeeksforGeeks: Types of Internet Protocols](https://www.geeksforgeeks.org/types-of-internet-protocols/)
* [WikiBooks: Network Technologies - Common Protocols](https://en.wikibooks.org/wiki/Network_Plus_Certification/Technologies/Common_Protocols)
* [MDN Web Docs Glossary: Protocol definition](https://developer.mozilla.org/en-US/docs/Glossary/Protocol)
* Wikipedia related entries
  * [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite)
  * [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)
  * [TCP/IP](https://pt.wikipedia.org/wiki/TCP/IP)

**See also:**

* Articles:
  * [Syed Sadat Nazrul: Intro To Computer Networking And Internet Protocols](https://medium.com/@sadatnazrul/intro-to-computer-networking-and-internet-protocols-8f03710ca409)
  * [Ige Kehinde: How the Internet Works](https://kennygrace.hashnode.dev/how-the-internet-works-ckgm70i6y0a5gnzs1baql91sf)
  * [Nyior Clement Jr.: How the Internet Works](https://dev.to/nyior/the-why-what-and-how-of-the-internet-39d5)
  * [Avast: What is TCP/IP and How Does it Work?](https://www.avast.com/c-what-is-tcp-ip)
* Videos:
  * [Fireship: Computer Networking in 100 Seconds](https://www.youtube.com/watch?v=keeqnciDVOo)
  * [Kenan Casey: 1.1 - Introduction | FHU - Computer Networks](https://www.youtube.com/watch?v=5D67Qy1tPLY&list=PLLFIgriuZPAcCkmSTfcq7oaHcVy3rzEtc)
  * [Computer Networks: Crash Course Computer Science #28](https://www.youtube.com/watch?v=3QhU9jd03a0)
  * [CertBros: TCP/IP Model Explained](https://www.youtube.com/watch?v=OTwp3xtd4dg)
  * [NetworkChuck: what is TCP/IP and OSI?](https://www.youtube.com/watch?v=CRdL1PcherM&t=377s)

### IP (Internet Protocol)

The Internet Protocol ensures that each device connected to the internet has a unique IP address, which serves as an exclusive identifier and is sent over in the packet headers.

The first version of IP to be widely deployed was Internet Protocol Version 4 (IPv4), which remains the dominant protocol of the Internet. Its successor is Internet Protocol Version 6 (IPv6), which is slowly replacing IPv4, among other reasons, to help solve the IP address exhaustion problem.

IPv4 uses four 1 byte decimal numbers, separated by dots (i.e. 192.158.1.38), while IPv6 uses hexadecimal numbers separated by colons (i.e. 2001:db8::8a2e:370:7334).

**References:**

* MDN Web Docs Glossary: Definitions of Web-related terms
  * [IPv4](https://developer.mozilla.org/en-US/docs/Glossary/IPv4)
  * [IPv6](https://developer.mozilla.org/en-US/docs/Glossary/IPv6)
* Wikipedia related entries
  * [IP address](https://en.wikipedia.org/wiki/IP_address)
  * [IPv4](https://en.wikipedia.org/wiki/IPv4)
  * [IPv6](https://en.wikipedia.org/wiki/IPv6)
  * [TCP/IP](https://pt.wikipedia.org/wiki/TCP/IP)

### TCP (Transmission Control Protocol)

The Transmission Control Protocol specifies how data should be broken into packets and how those will travel over the network, guaranteeing it will be delivered to the destination in the same order as they were sent.

In other words, it takes the data from the application layer, splits into smaller units and pass them to the network layer, encapsulated with its own headers. TCP is highly reliable and applies the 3-way handshake principle, setting up a connection even before sending any data.

**References:**

* MDN Web Docs Glossary: Definitions of Web-related terms
  * [TCP](https://developer.mozilla.org/en-US/docs/Glossary/TCP)
  * [Packet](https://developer.mozilla.org/en-US/docs/Glossary/Packet)
* Wikipedia related entries
  * [TCP](https://pt.wikipedia.org/wiki/Protocolo_de_controle_de_transmiss%C3%A3o)

### SMTP

> SMTP stands for Simple Mail Transfer Protocol - This is an email protocol used for sending emails from one email account to another via the internet. SMTP server handles the sending, receiving, and relaying of email. You can think of servers as your real-life post offices. When you send a letter from city A to city B, it first reaches a local post office in city A; here, it gets processed and sent to the post office in city B, which is in charge of delivering it to its final destination. The same happens with SMTP servers—though instead of taking days, the process takes a few minutes at most.

**See also:**

* [Postmark: Everything you need to know about SMTP](https://postmarkapp.com/guides/everything-you-need-to-know-about-smtp)

### UDP

UDP stands for User Datagram Protocol. UDP is specifically chosen for time-sensitive applications like online gaming, video playback, and Domain Name System (DNS) lookups. UDP uses a [connectionless communication](https://en.wikipedia.org/wiki/Connectionless_communication) model, which speeds up communication between client and server. Unlike Transmission Control Protocol(TCP), the order of packets (called datagrams) is not guaranteed, nor are there any checks to ensure packets are delivered. Because a formal connection is not made, UDP can leave one open to *[DDoS attacks](https://www.fortinet.com/resources/cyberglossary/ddos-attack)* through UDP [flood attacks](https://www.cloudflare.com/learning/ddos/udp-flood-ddos-attack/).

**References:**

* [MDN-UDP](https://developer.mozilla.org/en-US/docs/Glossary/UDP)
* [Cloudflare-UDP](https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/)

### POP3

POP3 stands for: the post office protocol - it is used to retrieve mail from a remote server over a network and saving it on a local device. Once an e-mail has been retrieved, it is usually deleted from the server, freeing up space. Many providers however, give an option to keep the original copies intact. All data and attachments are saved on your local device making it possible to access the messages while offline. Most mail servers use POP3, because of it's simplicity and also due to it being well-supported.

**References:**

* [Techtarget](https://www.techtarget.com/whatis/definition/POP3-Post-Office-Protocol-3)

* [Hostinger](https://www.hostinger.com/tutorials/email/pop3-imap-smtp-protocols-explained-ports)
