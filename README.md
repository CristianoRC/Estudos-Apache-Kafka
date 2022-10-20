# Estudos Apache Kafka

<img src="https://blog.geekhunter.com.br/wp-content/uploads/2020/09/apache-kafka.png" width="150px"></img>

## Conceito Geral

O apache Kafka é um sistema de mensageria fundado por funcionários do Liknedin, com um foco de conseguir aguendar uma demanda de grande escala de forma distribuída.

Um dos conceitos mais diferenetes para os outros sistemas de mensageria é que ele armazena os dados em disco de uma forma eficiente, não precisando manter tudo em memória e permitindo manter esses dados por um determinado intervalo, e ate mesmo processar novamente.

## Estrutura

### Broker

É um servidor único de Apache Kafka

### Cluster

É um conjuto de sercidores(brokers)

### Apache Zookeeper

Orquestrador do nosso Cluster, ele organiza quem é o nó principal, qual a saúde dos seus brokers.

### Tópico

Agrupa todas as mensagens do meus tipo, ele é usado para enviar e receber as mensagens.

### Partição

Subdivisão de um tópico, conceito base usado para conseguir aguentar uma maior carga

### Organização

<img src="https://luby.com.br/wp-content/uploads/2021/05/o-que-e-apache-kafka.png" width="700px"></img>
