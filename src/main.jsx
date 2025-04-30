<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomeView />} />
    <Route path="login" element={<LoginView />} />
    <Route path="register" element={<RegisterView />} />
    <Route path="movies" element={<MoviesView genreList={genreList} />}>
      <Route index element={<GenreView genreId={defaultGenre} />} />
      <Route path="genre/:genre_id" element={<GenreView />} />
      <Route path="details/:id" element={<DetailView />} />
    </Route>
    <Route path="*" element={<ErrorView />} />
  </Routes>
</BrowserRouter>
