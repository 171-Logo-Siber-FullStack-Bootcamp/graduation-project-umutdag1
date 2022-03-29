const Joi = require('joi');

const createValidation = Joi.object({
    first_name: Joi.string().required(),
        // .messages({
        //     'any.required': 'Adınızı giriniz.',
        //     'string.base': 'Adınızın türü hatalı.',
        //     'string.empty': 'Ad boş bırakılamaz.'
        // }),
    last_name: Joi.string().required(),
        // .messages({
        //     'any.required': 'Soyadınızı giriniz.',
        //     'string.base': 'Soyadınızın türü hatalı.',
        //     'string.empty': 'Soyad boş bırakılamaz.'
        // }),
    email: Joi.string().required()
        .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),
        // .messages({
        //     'any.required': 'Emailinizi giriniz.',
        //     'string.base': 'Emailinizin türü hatalı.',
        //     'string.email': 'Emailinizi tekrar giriniz.',
        //     'string.empty': 'Email boş bırakılamaz.'
        // }),
    password: Joi.string().required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        // .messages({
        //     'any.required': 'Şifrenizi giriniz.',
        //     'string.base': 'Şifrenizin türü hatalı.',
        //     'string.pattern.base': 'Şifrenizi tekrar giriniz.',
        //     'string.empty': 'Şifre boş bırakılamaz.'
        // }),
    password_conf: Joi.ref('password'),
    birth_date: Joi.date().iso().required()
        .min('1-1-1974')
        .max('12-31-2004'),
        // .messages({
        //     'any.required': 'Doğum Tarihinizi giriniz.',
        //     'date.format': 'Doğum Tarihinizin türü hatalı.',
        //     'date.less': 'Doğum Tarihiniz uygun değil.',
        //     'date.max': 'Doğum Tarihiniz uygun değil.'
        // }),
    gender: Joi.string().required(),
        // .messages({
        //     'any.required': 'Cinsiyetinizi giriniz.',
        //     'string.base': 'Cinsiyetinizin türü hatalı.',
        //     'string.empty': 'Cinsiyet boş bırakılamaz.'
        // }),
    address: Joi.string().required()
        // .messages({
        //     'any.required': 'Adresinizi giriniz.',
        //     'string.base': 'Adresinizin türü string olmalı.',
        //     'string.empty': 'Adres boş bırakılamaz.'
        // }),
})
    .with('password', 'password_conf');
    // .messages({
    //     'object.with': 'Şifre Tekrarınızı girmelisiniz',
    //     'any.only': 'Şifre Tekrarınız Şifre ile aynı olmalı.',
    //     'any.ref': 'Şifre Tekrarını giriniz.',
    // });

const loginValidation = Joi.object({
    email: Joi.string().required()
        .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),
        // .messages({
        //     'any.required': 'Emailinizi giriniz.',
        //     'string.base': 'Emailinizin türü hatalı.',
        //     'string.email': 'Emailinizi tekrar giriniz.',
        //     'string.empty': 'Email boş bırakılamaz.'
        // }),
    password: Joi.string().required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        // .messages({
        //     'any.required': 'Şifrenizi giriniz.',
        //     'string.base': 'Şifrenizin türü hatalı.',
        //     'string.pattern.base': 'Şifrenizi tekrar giriniz.',
        //     'string.empty': 'Şifre boş bırakılamaz.'
        // })
});

module.exports = {
    createValidation,
    loginValidation
};