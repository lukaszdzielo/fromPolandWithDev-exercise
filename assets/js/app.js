const updateUrlParams = (name, value) => {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", newUrl);
};
