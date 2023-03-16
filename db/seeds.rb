shows = [
  { title: "Breaking Bad", genre: "Crime Drama", year: 2008, network: "AMC", image: "https://www.themoviedb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", seasons: 5 },
  { title: "Game of Thrones", genre: "Fantasy Drama", year: 2011, network: "HBO", image: "https://i.insider.com/56cdecd62e526554008b9413?width=1000&format=jpeg&auto=webp", seasons: 8 },
  { title: "The Sopranos", genre: "Crime Drama", year: 1999, network: "HBO", image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71yz+cOKE8L.jpg", seasons: 6 },
  { title: "Stranger Things", genre: "Science Fiction Horror", year: 2016, network: "Netflix", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F10%2Fstranger-things-poster-2000.jpg&q=60", seasons: 4 },
  { title: "The Wire", genre: "Crime Drama", year: 2002, network: "HBO", image: "https://cdnb.artstation.com/p/assets/images/images/044/503/983/large/mario-barrachina-cartel-final-rgb.jpg?1640194915", seasons: 5 },
  { title: "The Crown", genre: "Historical Drama", year: 2016, network: "Netflix", image: "https://resizing.flixster.com/a0EDSpHg37jPpOD2D1f7O18gnhA=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjc3NTM4NC53ZWJw", seasons: 5 },
  { title: "Mad Men", genre: "Period Drama", year: 2007, network: "AMC", image: "https://www.lawandmoore.co.uk/wp-content/uploads/2017/09/mad-men-black-frame-1080.jpg", seasons: 7 },
  { title: "The Office (US)", genre: "Mockumentary Sitcom", year: 2005, network: "NBC", image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/615MPacH9qL.jpg", seasons: 9 },
  { title: "Friends", genre: "Sitcom", year: 1994, network: "NBC", image: "https://www.themoviedb.org/t/p/original/f496cm9enuEsZkSPzCwnTESEK5s.jpg", seasons: 10 },
  { title: "The Big Bang Theory", genre: "Sitcom", year: 2007, network: "CBS", image: "https://www.themoviedb.org/t/p/original/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg", seasons: 12 },
  { title: "Chernobyl", genre: "Historical Drama", year: 2019, network: "HBO", image: "https://i.pinimg.com/originals/9a/23/83/9a2383b8f04594a392ff5244e7b0ce28.jpg", seasons: 1 },
]

shows.each do |show|
    Blog.create!(show)
end