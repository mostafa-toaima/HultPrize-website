export interface TeamData {
  id?: string;
  img: string;
  name: string;
  description?: string;
  whatsapp?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  profession: string;
  awards?: {
    global?: string;
    national: string;
  };
}

