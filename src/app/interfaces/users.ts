export interface Users {
  /*
        public int Id { get; set; }
        public string? Name { get; set; } = string.Empty;
        public string? Email { get; set; }
        public int? Phone { get; set; }
        public string? Org { get; set; }
        public string? Position { get; set; }
        public string? Role { get; set; }
        public byte[]? PwSalt { get; set; }
        public byte[]? PwHash { get; set; }

        public string? RefreshToken { get; set; } = string.Empty;
        public DateTime? TokenCreated { get; set; }
        public DateTime? TokenExpires { get; set; }
        */
  id: number;
  name: string;
  email: string;
  phone: number;
  org: string;
  position: string;
  role: string;
  pwsalt: [];
  pwhash: [];
}
