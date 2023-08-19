export class Github {
  // istek atmak için gerekli olan bilgiler
  constructor() {
    this.client_id = "c6953840fd227eb99c1d";
    this.client_secret = "f135c4b36a2bd452eee37d983cc8b85ba0b6673e";
    this.per_page = 10;
    this.sort = "asc";
  }

  // API'dan kullanıcı bilgilerini alma
  async fetchUserData(username) {
    // paramatre olarak gelen kullanıcı ismine göre istek atma
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // kullanıcının projelerini alma
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&sort=${this.sort}&per_page=${this.per_page}`
    );

    // gelen cevabı json verisine çevirme
    const data = await profileRes.json();
    const repos = await repoRes.json();

    // fonksiyonun çağrıldığı yere bilgileri gönderme
    return { data, repos };
  }
}
