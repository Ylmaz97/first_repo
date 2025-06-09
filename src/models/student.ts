import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
    ad: string;
    soyad: string;
    email: string;
    cinsiyet: "Erkek" | "Kadın";
    dogumTarihi: Date;
    telefonNumarasi: string;
    adres: string;
    bursDurumu: string;
    eskiSube?: string;
    sube: string;
    ogrenciNo: string;
    kayitTarihi: Date;
    veliAd: string;
    veliTelefonNumarasi: string;
    ucretTipi: string;
    taksitBilgisi: string;
    saglikDurumu: string;
    acilDurumKisi: string;
    acilDurumTelefon: string; 
}

const StudentSchema: Schema = new Schema<IStudent>({
    ad: { type: String, required: true },
    soyad: { type: String, required: true },
    email: { type: String, required: true },
    cinsiyet: { type: String, enum: ["Erkek", "Kadın"], required: true},
    dogumTarihi: { type: Date, required: true },
    telefonNumarasi: { type: String, required: true },
    adres: { type: String, required: true },
    bursDurumu: { type: String, required: true },
    eskiSube: { type: String },
    sube: { type: String, required: true },
    ogrenciNo: { type: String, required: true },
    kayitTarihi: { type: Date, required: true },
    veliAd: { type: String, required: true },
    veliTelefonNumarasi: { type: String, required: true },
    ucretTipi: { type: String, required: true },
    taksitBilgisi: { type: String, required: true },
    saglikDurumu: { type: String, required: true },
    acilDurumKisi: { type: String, required: true },
    acilDurumTelefon: { type: String, required: true },
},
{
    timestamps: true,
}
);

export default mongoose.model<IStudent>("Student", StudentSchema);