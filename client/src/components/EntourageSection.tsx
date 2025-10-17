import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="py-12 px-4 relative overflow-hidden bg-[#eee3ef]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-primary mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="heading-entourage"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          {/* Groom and Bride - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-groom">
              <h3 className="font-display italic text-sm text-primary mb-2">Groom</h3>
              <p className="text-black font-normal italic text-xs">Ralph Angelo S. Mabaquiao</p>
            </div>
            <div data-testid="section-bride">
              <h3 className="font-display italic text-sm text-primary mb-2">Bride</h3>
              <p className="text-black font-normal italic text-xs">Mary Evelyn Therese C. Dioso</p>
            </div>
          </div>

          {/* Parents Section - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-parents-groom">
              <h3 className="font-display italic text-sm text-primary mb-2">Parents of the Groom</h3>
              <p className="text-black font-normal italic text-xs">Lelan S. Mabaquiao</p>
              <p className="text-black font-normal italic text-xs">Pilar S. Mabaquiao</p>
            </div>
            <div data-testid="section-parents-bride">
              <h3 className="font-display italic text-sm text-primary mb-2">Parents of the Bride</h3>
              <p className="text-black font-normal italic text-xs">Rodolfo D. Dioso, Jr.</p>
              <p className="text-black font-normal italic text-xs">Maria Ann C. Dioso</p>
            </div>
          </div>

          {/* Principal Sponsors - 2 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-primary mb-4" data-testid="heading-principal-sponsors">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
              <p className="text-black font-normal italic text-xs">Mrs. Mary Rigel J. Santos</p>
              <p className="text-black font-normal italic text-xs">Mr. Roy Manansala</p>
              <p className="text-black font-normal italic text-xs">Mrs. Vicky O. Sandoy</p>
              <p className="text-black font-normal italic text-xs">Mr. Dennis M. Cazeñas</p>
              <p className="text-black font-normal italic text-xs">Ms. Imelda Concepcion M. Cazeñas</p>
              <p className="text-black font-normal italic text-xs">Mr. Raul M. Zamora</p>
              <p className="text-black font-normal italic text-xs">Mrs. Marilou H. Sandoy</p>
              <p className="text-black font-normal italic text-xs">Mr. Fredrick Koldop</p>
              <p className="text-black font-normal italic text-xs">Dra. Gilda Grace T. Tumot</p>
              <p className="text-black font-normal italic text-xs">Mr. Gerardo M. Cazeñas</p>
              <p className="text-black font-normal italic text-xs">Mrs. Juliana O. Cepe</p>
              <p className="text-black font-normal italic text-xs">Mr. Manolinio S. Sandoy</p>
              <p className="text-black font-normal italic text-xs">Mrs. Ma. Dana C. Fernandez</p>
              <p className="text-black font-normal italic text-xs">Mr. Erlan S. Mabaquiao</p>
              <p className="text-black font-normal italic text-xs">Ms. Maria Fe Painaga</p>
              <p className="text-black font-normal italic text-xs">Mr. Armin M. Cazeñas</p>
              <p className="text-black font-normal italic text-xs">Mrs. Maerile P. Rodenas</p>
              <p className="text-black font-normal italic text-xs">Mr. Lito Abrico</p>
              <p className="text-black font-normal italic text-xs">Mrs. Glenda B. Mabaquiao</p>
              <p className="text-black font-normal italic text-xs">Mr. Glen D. Fernando</p>
              <p className="text-black font-normal italic text-xs">Mrs. Ma. Roda Gracia P. Amahido</p>
              <p className="text-black font-normal italic text-xs">Mr. Joey Pon-an</p>
              <p className="text-black font-normal italic text-xs">Mrs. Erlin Herrera</p>
              <p className="text-black font-normal italic text-xs">Mr. Dante Victor Escorpion</p>
              <p className="text-black font-normal italic text-xs">Mrs. Ma. Corona C. Molvizar</p>
              <p className="text-black font-normal italic text-xs">Engr. Inocencio Dajao</p>
              <p className="text-black font-normal italic text-xs">Mrs. Rowena S. Cabrillos</p>
              <p className="text-black font-normal italic text-xs">Mr. Junel P. Kee</p>
              <p className="text-black font-normal italic text-xs">Mrs. Luchie E. Labnao</p>
              <p className="text-black font-normal italic text-xs">Mr. Rex Denila</p>
              <p className="text-black font-normal italic text-xs">Mrs. Jane O. Regacho</p>
              <p className="text-black font-normal italic text-xs">Engr. Noel S. Baguna</p>
              <p className="text-black font-normal italic text-xs">Mrs. Ma. Fe R. Blanco</p>
              <p className="text-black font-normal italic text-xs">Mr. Ernesto Pefianco Jr.</p>
              <p className="text-black font-normal italic text-xs">Ms. Fe Gencianeo</p>
              <p className="text-black font-normal italic text-xs">Mrs. Lilibeth J. Sta. Romana</p>
              <p className="text-black font-normal italic text-xs">Mrs. Rhodora Pon-an</p>
              <p className="text-black font-normal italic text-xs">Mrs. Mary Rose F. Umano</p>
              <p className="text-black font-normal italic text-xs">Mrs. Anna Lee C. Nones</p>
              <p className="text-black font-normal italic text-xs">Mrs. Agnes N. Lachica</p>
              <p className="text-black font-normal italic text-xs">Mrs. Alma M. Secaluya</p>
              <p className="text-black font-normal italic text-xs">Mrs. Catherine A. Arroyal</p>
              <p className="text-black font-normal italic text-xs">Mrs. Cely V. Fernandez</p>
              <p className="text-black font-normal italic text-xs">Mrs. Dalia Villanueva</p>
              <p className="text-black font-normal italic text-xs">Mrs. Eva G.Metal</p>
              <p className="text-black font-normal italic text-xs">Mrs. Lalaine F. Sobremisana</p>
              <p className="text-black font-normal italic text-xs">Mrs. Ma. Elma C. Sarabia</p>
              <p className="text-black font-normal italic text-xs">Mrs. Melanie Tangub</p>
              <p className="text-black font-normal italic text-xs">Mrs. Ramona S. Parcon</p>
              <p className="text-black font-normal italic text-xs">Mrs. Josefina G. De Jesus</p>
              <p className="text-black font-normal italic text-xs">Mrs. Rema C. Gentolea</p>
              <p className="text-black font-normal italic text-xs">Mrs. Rhea A. Bermejo</p>
              <p className="text-black font-normal italic text-xs">Mrs. Ma. Theresa A. Adolacion</p>
              <p className="text-black font-normal italic text-xs">Mrs. Pamela O. Estaris</p>
              <p className="text-black font-normal italic text-xs">Ms. Purificacion Emanel</p>
              <p className="text-black font-normal italic text-xs">Mrs. Sharon Rose D. Gallego</p>
            </div>
          </div>

          {/* Best Man and Maids of Honor - 3 COLUMNS */}
          <div className="grid grid-cols-3 gap-6">
            <div data-testid="section-best-man">
              <h4 className="font-normal italic text-xs text-primary mb-1">Best Man</h4>
              <p className="text-black font-normal italic text-xs">Mr. Lee Genesis S. Mabaquiao</p>
            </div>
            <div data-testid="section-maid-honor" className="col-span-2">
              <h4 className="font-normal italic text-xs text-primary mb-1">Maids of Honor</h4>
              <div className="grid grid-cols-2 gap-x-4">
                <p className="text-black font-normal italic text-xs">Ms. Laika E. Asejo</p>
                <p className="text-black font-normal italic text-xs">Ms. Yuvie Rose R. Horfilla</p>
              </div>
            </div>
          </div>

          {/* Secondary Sponsors - 3 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-primary mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            <div className="grid grid-cols-3 gap-6">
              <div data-testid="section-candle">
                <h4 className="font-normal italic text-xs text-primary mb-1">Candle</h4>
                <p className="text-black font-normal italic text-xs">Ms. Nicole Annette C. Carluto</p>
                <p className="text-black font-normal italic text-xs">Ar. Leomel A. Amaller</p>
              </div>
              <div data-testid="section-veil">
                <h4 className="font-normal italic text-xs text-primary mb-1">Veil</h4>
                <p className="text-black font-normal italic text-xs">Ms. Erika Jane C. Molvizar</p>
                <p className="text-black font-normal italic text-xs">Ar. Niel Arby John C. Lut</p>
              </div>
              <div data-testid="section-cord">
                <h4 className="font-normal italic text-xs text-primary mb-1">Cord</h4>
                <p className="text-black font-normal italic text-xs">Engr. Jane Marie H. Sandoy</p>
                <p className="text-black font-normal italic text-xs">Ar. Ruel P. Gabon</p>
              </div>
            </div>
          </div>

          {/* Bridesmaids and Groomsmen - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-groomsmen">
              <h4 className="font-display italic text-sm text-primary mb-2">Groomsmen</h4>
              <p className="text-black font-normal italic text-xs">Gibie T. Tumot</p>
              <p className="text-black font-normal italic text-xs">Paul Patrick O. Estaris</p>
              <p className="text-black font-normal italic text-xs">John Patrick C. Añasco</p>
              <p className="text-black font-normal italic text-xs">Harvey B. Mabaquiao</p>
              <p className="text-black font-normal italic text-xs">Jed T. Mabaquiao</p>
              <p className="text-black font-normal italic text-xs">Rob Lanrei C. Mabaquiao</p>
              <p className="text-black font-normal italic text-xs">Roque N. Sandoy III</p>
            </div>
            <div data-testid="section-bridesmaids">
              <h4 className="font-display italic text-sm text-primary mb-2">Bridesmaids</h4>
              <p className="text-black font-normal italic text-xs">Erich Grace M. Zamora</p>
              <p className="text-black font-normal italic text-xs">Cindy Joy S. Portugalete</p>
              <p className="text-black font-normal italic text-xs">Stella Mariz S. Sandoy</p>
              <p className="text-black font-normal italic text-xs">Mary Joy H. Sandoy</p>
              <p className="text-black font-normal italic text-xs">Geraldine L. Brotonel</p>
              <p className="text-black font-normal italic text-xs">Andre Gail C. Añasco</p>
              <p className="text-black font-normal italic text-xs">Sofia Noami A. del Pilar</p>
            </div>
          </div>

          {/* Bearers - 3 COLUMNS always */}
          <div className="grid grid-cols-3 gap-6">
            <div data-testid="section-ring-bearer">
              <h4 className="font-normal italic text-xs text-primary mb-1">Ring Bearer</h4>
              <p className="text-black font-normal italic text-xs">Kye Xavier A. Dioso</p>
            </div>
            <div data-testid="section-coin-bearer">
              <h4 className="font-normal italic text-xs text-primary mb-1">Coin Bearer</h4>
              <p className="text-black font-normal italic text-xs">Kurth C. Empestan</p>
            </div>
            <div data-testid="section-bible-bearer">
              <h4 className="font-normal italic text-xs text-primary mb-1">Bible Bearer</h4>
              <p className="text-black font-normal italic text-xs">Matthew Abraham C. Dioso</p>
            </div>
          </div>

          {/* Flower Girls - 2 COLUMNS always */}
          <div data-testid="section-flower-girls">
            <h4 className="font-display italic text-sm text-primary mb-2">Flower Girls</h4>
            <div className="grid grid-cols-2 gap-x-8">
              <p className="text-black font-normal italic text-xs">Rica Brielle P. Janeo</p>
              <p className="text-black font-normal italic text-xs">Athena Wintle R. Cazeñas</p>
              <p className="text-black font-normal italic text-xs">Sofia Cassandra O. Amara</p>
              <p className="text-black font-normal italic text-xs">Theresa Claire M. Armendares</p>
              <p className="text-black font-normal italic text-xs">Ashera Cianne M. Blanco</p>
              <p className="text-black font-normal italic text-xs">Raijelle M. Sandoy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
