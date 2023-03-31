  const getRates = useCallback(async () => {
    const request = await fetch("/api/rates");
    request.json().then((data) => {
      console.log(data);
    })
  }, []);
