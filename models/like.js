'use strict'
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    'Like',
    {
      UserId: DataTypes.INTEGER,
      TweetId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE
    },
    {}
  )
  Like.associate = function(models) {
    Like.belongsTo(models.User)
    Like.belongsTo(models.Tweet)
  }
  return Like
}
