//this is for future edits where we might want to change the paths in one place

export const MainPaths = {
  bookings: "bookings",
  events: "events",
  upcoming_events: "upcoming-events",
  replays: "replays",
  watch: "watch",
  my_purchases: "my-purchases",
  my_profile: "my-profile",
  terms_and_conditions: "terms-and-conditions",
  privacy_policy: "privacy-policy",
  movies: "movies",
  featured_movies: "featured-movies",
  new_releases: "new-releases"
};

export const MAIN_CLIENT_ROUTE = {
  EVENTS:  "/" + MainPaths.events,
  EVENT_DETAIL: (id: string | number) =>
      "/" + MainPaths.events + "/" + id,
  WATCH: (id: string) => "/" + MainPaths.events + "/" + id + "/" + MainPaths.watch,
  MY_PURCHASES:  "/" + MainPaths.my_purchases,
  MY_TICKET_PURCHASES: "/"  + MainPaths.my_purchases + "/" + "tickets", 
  MY_REPLAY_PURCHASES: "/"  + MainPaths.my_purchases + "/" + "replays", 
  UPCOMING_EVENTS: "/" + MainPaths.upcoming_events,
  REPLAYS: "/" + MainPaths.replays,
  MY_PROFILE: "/" + MainPaths.my_profile,
  TERMS_AND_CONDITIONS: "/" + MainPaths.terms_and_conditions,
  PRIVACY_POLICY: "/" + MainPaths.privacy_policy,
  MOVIES: "/" + MainPaths.movies,
  MOVIE_DETAIL: (id: string | number) =>
      "/" + MainPaths.movies + "/" + id,
  FEATURED_MOVIES: "/" + MainPaths.featured_movies,
  NEW_RELEASES: "/" + MainPaths.new_releases,
};
