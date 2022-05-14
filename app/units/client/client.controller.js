const asyncHandler = require('express-async-handler');
const { isDev } = require('../../config/env');

/**
 * @desc dashboard view
 * @route GET - /
 * @access Private
 * */

exports.dashboard = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/dashboard', {
      success: true,
      title: 'tracker',
      development: isDev
    });
});

/**
 * @desc start shift view
 * @route GET - /add
 * @access Private
 * */

 exports.start = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/start', {
      success: true,
      title: 'start shift',
      development: isDev
    });
});


/**
 * @desc add items view
 * @route GET - /add
 * @access Private
 * */

 exports.add = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/add', {
      success: true,
      title: 'add items',
      development: isDev
    });
});

/**
 * @desc active view
 * @route GET - /active
 * @access Private
 * */

 exports.active = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/active', {
      success: true,
      title: 'active shift',
      development: isDev
    });
});

/**
 * @desc detail shift view
 * @route GET - /:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/detail', {
      success: true,
      title: 'update',
      development: isDev
    });
});

/**
 * @desc update shift view
 * @route GET - /:id/update
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/update', {
      success: true,
      title: 'update',
      development: isDev
    });
});