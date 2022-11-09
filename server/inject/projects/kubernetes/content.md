# Kubernetes Automation

The Kubernetes Automation Project is a DevOps framework I created for the automated bootstrap and maintenance of Kubernetes clusters. It is an ever-evolving pattern based on GitOps principles and declarative cloud resource definitions, where a GitHub repository serves as the source of truth for both the infrastructure and application deployments. At the current state of writing, the repository contains four significant pieces of functionality:

- A collection of Terraform templates, acting as the description of cloud resources for a platform known as [Symbiosis](https://symbiosis.host/), including all definitions for creating a Kubernetes cluster from scratch, where Terraform Cloud is used as an external state management tool.
- A set of Helm charts for (what I deem) essential applications for any Kubernetes installation, including Prometheus, Loki and Grafana, for basic monitoring of cluster resources; Ingress NGINX for the setup of ingress rules; cert-manager for TLS configurations; ExternalDNS for automated sync of DNS records with exposed services, among others.
- A release of Argo CD for the purposes of implementing GitOps harmonisation with the previously mentioned applications, meaning changes in the Git repo are automatically reflected on the cluster resources.
- A CI/CD pipeline (GitHub Actions) that applies the same synchronisation mechanism to the Terraform templates too.

## 💫 Future Plans

Although I currently use the repository to sustain my own infrastructure, the idea for the Kubernetes Automation Project is to universalise it enough to release it as a self-contained open-source solution for any DevOps engineer to easily setup and automate their Kubernetes deployments not just at the application level, but at the infrastructure plane too.

Any help is appreciated, and contributions are most welcomed!

## 🌐 Relevant Links

The repository for the Kubernetes Automation Project can be found [here](https://github.com/sergiorivera50/infrastructure).
