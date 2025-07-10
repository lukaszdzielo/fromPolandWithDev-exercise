const updateUrlParams = (name, value) => {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", newUrl);
};

const scrollTo = (el) => {
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const formattedPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
};
