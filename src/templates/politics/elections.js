const parse = require('../_parsers/parse');

let templates = {
  //https://en.wikipedia.org/wiki/Template:Election_box
  'election box begin': (tmpl, r) => {
    let data = parse(tmpl);
    r.templates.push(data);
    return '';
  },
  'election box candidate': (tmpl, r) => {
    let data = parse(tmpl);
    r.templates.push(data);
    return '';
  },
  'election box hold with party link': (tmpl, r) => {
    let data = parse(tmpl);
    r.templates.push(data);
    return '';
  },
  'election box gain with party link': (tmpl, r) => {
    let data = parse(tmpl);
    r.templates.push(data);
    return '';
  },
  'election box turnout': (tmpl, r) => {
    let data = parse(tmpl);
    r.templates.push(data);
    return '';
  }
};
//aliases
templates['election box begin no change'] = templates['election box begin'];
templates['election box begin no party'] = templates['election box begin'];
templates['election box begin no party no change'] = templates['election box begin'];
templates['election box inline begin'] = templates['election box begin'];
templates['election box inline begin no change'] = templates['election box begin'];

templates['election box candidate for alliance'] = templates['election box candidate'];
templates['election box candidate minor party'] = templates['election box candidate'];
templates['election box candidate no party link no change'] = templates['election box candidate'];
templates['election box candidate with party link'] = templates['election box candidate'];
templates['election box candidate with party link coalition 1918'] = templates['election box candidate'];
templates['election box candidate with party link no change'] = templates['election box candidate'];
templates['election box inline candidate'] = templates['election box candidate'];
templates['election box inline candidate no change'] = templates['election box candidate'];
templates['election box inline candidate with party link'] = templates['election box candidate'];
templates['election box inline candidate with party link no change'] = templates['election box candidate'];
templates['election box inline incumbent'] = templates['election box candidate'];
module.exports = templates;
