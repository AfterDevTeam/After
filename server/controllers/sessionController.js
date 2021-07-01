const { ContactsOutlined } = require('@material-ui/icons');
const db = require('../models/afterModels.js');
const path = require('path');
const sessionController = {};

sessionController.isLoggedIn = async (req, res, next)=>{
  const cookieid = res.locals.userInfo.userId

  try{
    const text = 'SELECT * FROM session WHERE cookieid = $1'
    const values = [cookieid];
    res.locals.loggedIn = await db.query(text, values)

    if(res.locals.loggedIn.rows[0] !== undefined){
      res.locals.loggedIn = true;
      next();
    }else{
      res.locals.loggedIn = false;
      next();
    }
  }catch(error){
    return next(error);
  }

}

sessionController.startSession = async (req, res, next)=>{
  const cookieid = res.locals.userInfo.userId

  try{
    const text = 'INSERT INTO session (cookieid) VALUES ($1)'
    const values = [cookieid]
    res.locals.cookies = await db.query(text, values);
    next();
  } catch (error) {
    return next(error);
  }
}

sessionController.logOut = async (req, res, next)=>{
  const cookieid = req.cookies.SSID
  try{
    const text = 'DELETE FROM session WHERE (cookieid) = ($1)'
    const values = [cookieid]
    await db.query(text, values);
    next();
  } catch (error) {
    return next(error);
  }
}


module.exports = sessionController;