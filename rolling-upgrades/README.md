# Steps for rolling upgrade

Release the v1 deployment and wait for it to come up

```bash
kubectl apply -f 'v1/deployment.yaml'
```

Open a separate terminal and run this curl loop to simulate real user traffic

```bash
while true; do curl http://10.128.8.210; echo ""; done
```

Release the v2 deployment

```bash
kubectl apply -f 'v2/deployment.yaml'
# or
kubectl set image deployment/node-hostname node-hostname=quay.io/allied-electronics/node-hostname:rolling-upgradev2
```

Watch the curl loop to see the gradual switch to v2 with zero downtime

Afterwards clean up your mess :)

```bash
kubectl delete -f 'v2/deployment.yaml'
```