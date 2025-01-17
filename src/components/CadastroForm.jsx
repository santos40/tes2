import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const CadastroForm = ({
  formData,
  handleInputChange,
  handleLinkInputChange,
  getLogoRootProps,
  getLogoInputProps,
  logotipo,
  getFotosRootProps,
  getFotosInputProps,
  fotos,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="nome">Nome</Label>
        <Input type="text" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="cidade">Cidade</Label>
        <Input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="profissao">Profissão</Label>
        <Input type="text" id="profissao" name="profissao" value={formData.profissao} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="whatsapp">WhatsApp</Label>
        <Input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="endereco">Endereço</Label>
        <Input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleInputChange} required />
      </div>
      <div>
        <Label>Logotipo</Label>
        <div {...getLogoRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
          <input {...getLogoInputProps()} />
          <p>Arraste e solte o logotipo aqui, ou clique para selecionar</p>
        </div>
        {logotipo && <p className="mt-2">{logotipo.name}</p>}
      </div>
      <div>
        <Label>Fotos (máximo 4)</Label>
        <div {...getFotosRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
          <input {...getFotosInputProps()} />
          <p>Arraste e solte até 4 fotos aqui, ou clique para selecionar</p>
        </div>
        {fotos.length > 0 && (
          <ul className="mt-2">
            {fotos.map((foto, index) => (
              <li key={index}>{foto.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <Label htmlFor="youtube">Canal do YouTube</Label>
        <Input type="url" id="youtube" name="youtube" value={formData.youtube} onChange={(e) => handleLinkInputChange('youtube', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="facebook">Facebook</Label>
        <Input type="url" id="facebook" name="facebook" value={formData.facebook} onChange={(e) => handleLinkInputChange('facebook', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="instagram">Instagram</Label>
        <Input type="url" id="instagram" name="instagram" value={formData.instagram} onChange={(e) => handleLinkInputChange('instagram', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="website">Website</Label>
        <Input type="url" id="website" name="website" value={formData.website} onChange={(e) => handleLinkInputChange('website', e.target.value)} />
      </div>
      <Button type="submit" className="w-full">Cadastrar</Button>
    </form>
  );
};