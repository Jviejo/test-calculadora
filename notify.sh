npm test >salida.txt 2>&1 ; \
curl -X POST test.dev.ai.kfs.es/api/result \
  -F "errores=@salida.txt" \
  -F "data={\"githubUrl\":\"$(git config --get remote.origin.url)\"}"