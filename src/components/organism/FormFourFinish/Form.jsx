import { motion } from "framer-motion";
import TimePicker from "react-time-picker";
import { useState } from "react";

const Form = ({ formData, setFormData, page, setPage, x, setX }) => {
 
    const [horas, setHoras] = useState({
    hour1:"00:00",
    hour2: "00:00",
    hour3: "00:00",
    hour4: "00:00",
    hour5: "00:00",
    hour6: "00:00",
    hour7: "00:00",
});

const handleHoraChange = (tarea, newTime) => {
    setHoras({ ...horas, [tarea]: newTime });
  };
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">PLANEACION</div>
      <label> Logra clasificar el paso a paso para desarrollar la tarea?</label>
      <label>Lunes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Martes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Miercoles</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Jueves</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Viernes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción"
        value={formData.descriptionOne}
        onChange={(e) =>
          setFormData({ ...formData, descriptionOne: e.target.value })
        }
      />
    <label>Hora de inicio:</label>
      <TimePicker onChange={(newTime) =>  handleHoraChange("hour1", newTime)}
        value={horas.hour1} />
      
      
      <label> Antes de iniciar la tarea alista el material que va utilizar?</label>
      <label>Lunes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Martes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Miercoles</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Jueves</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Viernes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción"
        value={formData.descriptionTwo}
        onChange={(e) =>
          setFormData({ ...formData, descriptionTwo: e.target.value })
        }
      />
    <label>Hora de inicio:</label>
      <TimePicker onChange={(newTime) =>  handleHoraChange("hour2", newTime)}
        value={horas.hour2}/>
      
      <label> Termina la tarea que inicio?</label>
      <label>Lunes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Martes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Miercoles</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Jueves</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Viernes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción"
        value={formData.descriptionThree}
        onChange={(e) =>
          setFormData({ ...formData, descriptionThree: e.target.value })
        }
      />
    <label>Hora de inicio:</label>
      <TimePicker onChange={(newTime) => handleHoraChange("hour3", newTime)}
        value={horas.hour3} />
     
      <label> El tiempo de ejecución es adecuado para la tarea?</label>
      <label>Lunes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Martes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Miercoles</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Jueves</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Viernes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción"
        value={formData. descriptionFour}
        onChange={(e) =>
          setFormData({ ...formData, descriptionFour: e.target.value })
        }
      />
    <label>Hora de inicio:</label>
      <TimePicker onChange={(newTime) =>  handleHoraChange("hour4", newTime)}
        value={horas.hour4} />

      <label> Se distrae mientras ejecuta la tarea?</label>
      <label>Lunes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Martes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Miercoles</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Jueves</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Viernes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción"
        value={formData.descriptionFive}
        onChange={(e) =>
          setFormData({ ...formData,descriptionFive: e.target.value })
        }
      />
    <label>Hora de inicio:</label>
      <TimePicker onChange={(newTime) =>  handleHoraChange("hour5", newTime)}
        value={horas.hour5} />

      <label> Requiere refuerzo en la ejecución de una instrucción?</label>
      <label>Lunes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Martes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Miercoles</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Jueves</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Viernes</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción"
        value={formData.descriptionSix}
        onChange={(e) =>
          setFormData({ ...formData,descriptionSix: e.target.value })
        }
      />
    <label>Hora de inicio:</label>
      <TimePicker onChange={(newTime) =>  handleHoraChange("hour3", newTime)}
        value={horas.hour5} />
      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        Next
      </button>
      <br />
    </motion.div>
  );
};

export default Form;
