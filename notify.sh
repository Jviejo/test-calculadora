npm test >salida.txt 2>&1 ; \
curl -X POST https://millions-inner-james-comp.trycloudflare.com/api/result \
  -F "errores=@salida.txt" \
  -F "data={\"githubUrl\":\"$(git config --get remote.origin.url)\"}"