# Prometheus

Prometheus: es una solución de monitoreo flexible que está en desarrollo desde 2012. El software almacena todos sus datos en una base de datos de tipo Time Series (TSDB) y ofrece un modelo de datos multidimensional y un poderoso lenguaje de consulta para generar informes de los recursos monitoreados.

 Prometheus: un sistema de recolección métrica de aplicaciones y servicios para el almacenamiento en un banco de datos de serie temporal resultando muy eficiente.

 Prometheus follows a pull-based architecture where the (Prometheus) server periodically fetches metrics from the targets that it is configured to monitor. The targets can be various types of applications, services, or servers, and they expose their metrics using a supported protocol, such as HTTP, SNMP, or JMX. Prometheus supports various metric types, such as counters, gauges, histograms, and summaries, and can perform complex aggregations and calculations on them.

Prometheus server stores the collected metrics in a time-series database where a unique combination of metric name, labels, and a timestamp identifies each time-series. The metric name represents the type of metric, such as HTTP requests, CPU usage, or memory usage. The labels provide additional metadata that can be used to differentiate between instances of the same metric, such as server hostname, service name, or version. The timestamp represents the time when the metric was collected.

PromQL Queries
After configuring Prometheus to scrape your targets, you can start querying the collected metrics using PromQL. PromQL is a flexible and powerful query language that allows you to perform various types of aggregations, filtering, and calculations on the collected metrics.

To get started with PromQL, you can use the Prometheus expression browser, which provides a web-based interface to explore and test PromQL queries. The expression browser allows you to select the metric name, labels, time range, and aggregation functions and displays the query result as a graph or table.

Alerting
Prometheus supports built-in alerting capabilities that allow you to configure and trigger alerts based on predefined rules and thresholds. To create an alert, you need to define a set of rules in the Prometheus alerting rules file, which specifies the metric name, labels, and the conditions that trigger the alert.

Conclusion
Prometheus is a powerful and flexible monitoring system that can help you keep track of the health and performance of your applications, servers, and infrastructure components. In this article, we covered the essential concepts and features of Prometheus monitoring, including the architecture, setup and configuration, PromQL queries, alerting, and Grafana integration.

With Prometheus, you can collect, store, and query metrics from various sources, and use the results to gain insights into the behavior and trends of your systems. You can also configure alerts and dashboards that help you detect and respond to issues before they escalate into critical problems.

Whether you are a developer, operator, or site reliability engineer, Prometheus can provide you with the visibility and control that you need to ensure the reliability and availability of your systems. 

 - [How to Setup Prometheus Monitoring On Kubernetes Cluster](https://devopscube.com/setup-prometheus-monitoring-on-kubernetes/)
 - [Practical Introduction to Prometheus Monitoring in 2023](https://www.statuspal.io/blog/2023-2-23-practical-introduction-to-prometheus-monitoring-in-2023)