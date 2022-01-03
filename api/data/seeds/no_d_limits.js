
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('no_decompression_limit').del()
    .then(function () {
      // Inserts seed entries
      return knex('no_decompression_limit').insert([
        {no_decompression_limit_id: 1, min_depth: 0, max_depth: 10, no_stop_limit: 'unlimited'},
        {no_decompression_limit_id: 2, min_depth: 11, max_depth: 15, no_stop_limit: 'unlimited'},
        {no_decompression_limit_id: 3, min_depth: 16, max_depth: 20, no_stop_limit: 'unlimited'},
        {no_decompression_limit_id: 4, min_depth: 21, max_depth: 25, no_stop_limit: '1102'},
        {no_decompression_limit_id: 5, min_depth: 26, max_depth: 30, no_stop_limit: '371'},
        {no_decompression_limit_id: 6, min_depth: 31, max_depth: 35, no_stop_limit: '232'},
        {no_decompression_limit_id: 7, min_depth: 36, max_depth: 40, no_stop_limit: '163'},
        {no_decompression_limit_id: 8, min_depth: 41, max_depth: 45, no_stop_limit: '125'},
        {no_decompression_limit_id: 9, min_depth: 46, max_depth: 50, no_stop_limit: '92'},
        {no_decompression_limit_id: 10, min_depth: 51, max_depth: 55, no_stop_limit: '74'},
        {no_decompression_limit_id: 11, min_depth: 56, max_depth: 60, no_stop_limit: '63'},
        {no_decompression_limit_id: 12, min_depth: 61, max_depth: 70, no_stop_limit: '48'},
        {no_decompression_limit_id: 13, min_depth: 71, max_depth: 80, no_stop_limit: '39'},
        {no_decompression_limit_id: 14, min_depth: 81, max_depth: 90, no_stop_limit: '33'},
        {no_decompression_limit_id: 15, min_depth: 91, max_depth: 100, no_stop_limit: '25'},
        {no_decompression_limit_id: 16, min_depth: 101, max_depth: 110, no_stop_limit: '20'},
        {no_decompression_limit_id: 17, min_depth: 111, max_depth: 120, no_stop_limit: '15'},
        {no_decompression_limit_id: 18, min_depth: 121, max_depth: 130, no_stop_limit: '12'},
        {no_decompression_limit_id: 19, min_depth: 131, max_depth: 140, no_stop_limit: '10'},
        {no_decompression_limit_id: 20, min_depth: 141, max_depth: 150, no_stop_limit: '8'},
        {no_decompression_limit_id: 21, min_depth: 151, max_depth: 160, no_stop_limit: '7'},
        {no_decompression_limit_id: 22, min_depth: 161, max_depth: 170, no_stop_limit: '6'},
        {no_decompression_limit_id: 23, min_depth: 171, max_depth: 180, no_stop_limit: '6'},
        {no_decompression_limit_id: 24, min_depth: 181, max_depth: 190, no_stop_limit: '5'},
      ]);
    });
};
