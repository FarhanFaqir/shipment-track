module.exports = (sequelize, DataTypes) => {
  const shipment = sequelize.define("shipment", {
    shipmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.ENUM('In Transit', 'Delivered'),
      allowNull: false,
    },
    estimatedDelivery: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    origin: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    destination: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

  });

  return shipment;
};
