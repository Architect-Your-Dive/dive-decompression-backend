
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('repetitive_group_designation').del()
    .then(function () {
      // Inserts seed entries
      return knex('repetitive_group_designation').insert([
        {repetitive_group_id: 1, no_d_id: 1, min_bottom: 0, max_bottom: 57, rgd: 'A'},
        {repetitive_group_id: 2, no_d_id: 1, min_bottom: 58, max_bottom: 101, rgd: 'B'},
        {repetitive_group_id: 3, no_d_id: 1, min_bottom: 102, max_bottom: 158, rgd: 'C'},
        {repetitive_group_id: 4, no_d_id: 1, min_bottom: 159, max_bottom: 245, rgd: 'D'},
        {repetitive_group_id: 5, no_d_id: 1, min_bottom: 246, max_bottom: 426, rgd: 'E'},
        {repetitive_group_id: 6, no_d_id: 1, min_bottom: 427, max_bottom: 'Infinity', rgd: 'F'},
        {repetitive_group_id: 7, no_d_id: 2, min_bottom: 0, max_bottom: 36, rgd: 'A'},
        {repetitive_group_id: 8, no_d_id: 2, min_bottom: 37, max_bottom: 60, rgd: 'B'},
        {repetitive_group_id: 9, no_d_id: 2, min_bottom: 61, max_bottom: 88, rgd: 'C'},
        {repetitive_group_id: 10, no_d_id: 2, min_bottom: 89, max_bottom: 121, rgd: 'D'},
        {repetitive_group_id: 11, no_d_id: 2, min_bottom: 122, max_bottom: 163, rgd: 'E'},
        {repetitive_group_id: 12, no_d_id: 2, min_bottom: 164, max_bottom: 217, rgd: 'F'},
        {repetitive_group_id: 13, no_d_id: 2, min_bottom: 218, max_bottom: 297, rgd: 'G'},
        {repetitive_group_id: 14, no_d_id: 2, min_bottom: 298, max_bottom: 449, rgd: 'H'},
        {repetitive_group_id: 15, no_d_id: 2, min_bottom: 450, max_bottom: 'Infinity', rgd: 'I'},
        {repetitive_group_id: 16, no_d_id: 3, min_bottom: 0, max_bottom: 26, rgd: 'A'},
        {repetitive_group_id: 17, no_d_id: 3, min_bottom: 27, max_bottom: 43, rgd: 'B'},
        {repetitive_group_id: 18, no_d_id: 3, min_bottom: 44, max_bottom: 61, rgd: 'C'},
        {repetitive_group_id: 19, no_d_id: 3, min_bottom: 62, max_bottom: 82, rgd: 'D'},
        {repetitive_group_id: 20, no_d_id: 3, min_bottom: 62, max_bottom: 106, rgd: 'E'},
        {repetitive_group_id: 21, no_d_id: 3, min_bottom: 107, max_bottom: 133, rgd: 'F'},
        {repetitive_group_id: 22, no_d_id: 3, min_bottom: 134, max_bottom: 165, rgd: 'G'},
        {repetitive_group_id: 23, no_d_id: 3, min_bottom: 166, max_bottom: 205, rgd: 'H'},
        {repetitive_group_id: 24, no_d_id: 3, min_bottom: 206, max_bottom: 256, rgd: 'I'},
        {repetitive_group_id: 25, no_d_id: 3, min_bottom: 257, max_bottom: 330, rgd: 'J'},
        {repetitive_group_id: 26, no_d_id: 3, min_bottom: 331, max_bottom: 461, rgd: 'K'},
        {repetitive_group_id: 27, no_d_id: 3, min_bottom: 462, max_bottom: 'Infinity', rgd: 'L'},
        {repetitive_group_id: 28, no_d_id: 4, min_bottom: 0, max_bottom: 20, rgd: 'A'},
        {repetitive_group_id: 29, no_d_id: 4, min_bottom: 21, max_bottom: 33, rgd: 'B'},
        {repetitive_group_id: 30, no_d_id: 4, min_bottom: 34, max_bottom: 47, rgd: 'C'},
        {repetitive_group_id: 31, no_d_id: 4, min_bottom: 48, max_bottom: 62, rgd: 'D'},
        {repetitive_group_id: 32, no_d_id: 4, min_bottom: 63, max_bottom: 78, rgd: 'E'},
        {repetitive_group_id: 33, no_d_id: 4, min_bottom: 79, max_bottom: 97, rgd: 'F'},
        {repetitive_group_id: 34, no_d_id: 4, min_bottom: 98, max_bottom: 117, rgd: 'G'},
        {repetitive_group_id: 35, no_d_id: 4, min_bottom: 118, max_bottom: 140, rgd: 'H'},
        {repetitive_group_id: 36, no_d_id: 4, min_bottom: 141, max_bottom: 166, rgd: 'I'},
        {repetitive_group_id: 37, no_d_id: 4, min_bottom: 167, max_bottom: 198, rgd: 'J'},
        {repetitive_group_id: 38, no_d_id: 4, min_bottom: 199, max_bottom: 236, rgd: 'K'},
        {repetitive_group_id: 39, no_d_id: 4, min_bottom: 237, max_bottom: 285, rgd: 'L'},
        {repetitive_group_id: 40, no_d_id: 4, min_bottom: 286, max_bottom: 354, rgd: 'M'},
        {repetitive_group_id: 41, no_d_id: 4, min_bottom: 355, max_bottom: 469, rgd: 'N'},
        {repetitive_group_id: 42, no_d_id: 4, min_bottom: 470, max_bottom: 992, rgd: 'O'},
        {repetitive_group_id: 43, no_d_id: 4, min_bottom: 993, max_bottom: 1102, rgd: 'Z'},
        {repetitive_group_id: 44, no_d_id: 5, min_bottom: 0, max_bottom: 17, rgd: 'A'},
        {repetitive_group_id: 45, no_d_id: 5, min_bottom: 18, max_bottom: 27, rgd: 'B'},
        {repetitive_group_id: 46, no_d_id: 5, min_bottom: 28, max_bottom: 38, rgd: 'C'},
        {repetitive_group_id: 47, no_d_id: 5, min_bottom: 39, max_bottom: 50, rgd: 'D'},
        {repetitive_group_id: 48, no_d_id: 5, min_bottom: 51, max_bottom: 62, rgd: 'E'},
        {repetitive_group_id: 49, no_d_id: 5, min_bottom: 63, max_bottom: 76, rgd: 'F'},
        {repetitive_group_id: 50, no_d_id: 5, min_bottom: 77, max_bottom: 91, rgd: 'G'},
        {repetitive_group_id: 51, no_d_id: 5, min_bottom: 92, max_bottom: 107, rgd: 'H'},
        {repetitive_group_id: 52, no_d_id: 5, min_bottom: 108, max_bottom: 125, rgd: 'I'},
        {repetitive_group_id: 53, no_d_id: 5, min_bottom: 126, max_bottom: 145, rgd: 'J'},
        {repetitive_group_id: 54, no_d_id: 5, min_bottom: 146, max_bottom: 167, rgd: 'K'},
        {repetitive_group_id: 55, no_d_id: 5, min_bottom: 168, max_bottom: 193, rgd: 'L'},
        {repetitive_group_id: 56, no_d_id: 5, min_bottom: 194, max_bottom: 223, rgd: 'M'},
        {repetitive_group_id: 57, no_d_id: 5, min_bottom: 224, max_bottom: 260, rgd: 'N'},
        {repetitive_group_id: 58, no_d_id: 5, min_bottom: 261, max_bottom: 307, rgd: 'O'},
        {repetitive_group_id: 59, no_d_id: 5, min_bottom: 308, max_bottom: 371, rgd: 'Z'},
        {repetitive_group_id: 60, no_d_id: 6, min_bottom: 0, max_bottom: 14, rgd: 'A'},
        {repetitive_group_id: 61, no_d_id: 6, min_bottom: 18, max_bottom: 23, rgd: 'B'},
        {repetitive_group_id: 62, no_d_id: 6, min_bottom: 28, max_bottom: 32, rgd: 'C'},
        {repetitive_group_id: 63, no_d_id: 6, min_bottom: 39, max_bottom: 42, rgd: 'D'},
        {repetitive_group_id: 64, no_d_id: 6, min_bottom: 51, max_bottom: 52, rgd: 'E'},
        {repetitive_group_id: 65, no_d_id: 6, min_bottom: 63, max_bottom: 63, rgd: 'F'},
        {repetitive_group_id: 66, no_d_id: 6, min_bottom: 77, max_bottom: 74, rgd: 'G'},
        {repetitive_group_id: 67, no_d_id: 6, min_bottom: 92, max_bottom: 87, rgd: 'H'},
        {repetitive_group_id: 68, no_d_id: 6, min_bottom: 108, max_bottom: 100, rgd: 'I'},
        {repetitive_group_id: 69, no_d_id: 6, min_bottom: 126, max_bottom: 115, rgd: 'J'},
        {repetitive_group_id: 70, no_d_id: 6, min_bottom: 146, max_bottom: 131, rgd: 'K'},
        {repetitive_group_id: 71, no_d_id: 6, min_bottom: 168, max_bottom: 148, rgd: 'L'},
        {repetitive_group_id: 72, no_d_id: 6, min_bottom: 194, max_bottom: 168, rgd: 'M'},
        {repetitive_group_id: 73, no_d_id: 6, min_bottom: 224, max_bottom: 190, rgd: 'N'},
        {repetitive_group_id: 74, no_d_id: 6, min_bottom: 261, max_bottom: 215, rgd: 'O'},
        {repetitive_group_id: 75, no_d_id: 6, min_bottom: 308, max_bottom: 232, rgd: 'Z'},
        {repetitive_group_id: 76, no_d_id: 7, min_bottom: 0, max_bottom: 12, rgd: 'A'},
        {repetitive_group_id: 77, no_d_id: 7, min_bottom: 13, max_bottom: 20, rgd: 'B'},
        {repetitive_group_id: 78, no_d_id: 7, min_bottom: 21, max_bottom: 27, rgd: 'C'},
        {repetitive_group_id: 79, no_d_id: 7, min_bottom: 28, max_bottom: 36, rgd: 'D'},
        {repetitive_group_id: 80, no_d_id: 7, min_bottom: 37, max_bottom: 44, rgd: 'E'},
        {repetitive_group_id: 81, no_d_id: 7, min_bottom: 45, max_bottom: 53, rgd: 'F'},
        {repetitive_group_id: 82, no_d_id: 7, min_bottom: 54, max_bottom: 63, rgd: 'G'},
        {repetitive_group_id: 83, no_d_id: 7, min_bottom: 64, max_bottom: 73, rgd: 'H'},
        {repetitive_group_id: 84, no_d_id: 7, min_bottom: 74, max_bottom: 84, rgd: 'I'},
        {repetitive_group_id: 85, no_d_id: 7, min_bottom: 85, max_bottom: 95, rgd: 'J'},
        {repetitive_group_id: 86, no_d_id: 7, min_bottom: 96, max_bottom: 108, rgd: 'K'},
        {repetitive_group_id: 87, no_d_id: 7, min_bottom: 109, max_bottom: 121, rgd: 'L'},
        {repetitive_group_id: 88, no_d_id: 7, min_bottom: 122, max_bottom: 135, rgd: 'M'},
        {repetitive_group_id: 89, no_d_id: 7, min_bottom: 136, max_bottom: 151, rgd: 'N'},
        {repetitive_group_id: 90, no_d_id: 7, min_bottom: 152, max_bottom: 163, rgd: 'O'},
        {repetitive_group_id: 91, no_d_id: 8, min_bottom: 0, max_bottom: 11, rgd: 'A'},
        {repetitive_group_id: 92, no_d_id: 8, min_bottom: 12, max_bottom: 17, rgd: 'B'},
        {repetitive_group_id: 93, no_d_id: 8, min_bottom: 18, max_bottom: 24, rgd: 'C'},
        {repetitive_group_id: 94, no_d_id: 8, min_bottom: 25, max_bottom: 31, rgd: 'D'},
        {repetitive_group_id: 95, no_d_id: 8, min_bottom: 32, max_bottom: 39, rgd: 'E'},
        {repetitive_group_id: 96, no_d_id: 8, min_bottom: 40, max_bottom: 46, rgd: 'F'},
        {repetitive_group_id: 97, no_d_id: 8, min_bottom: 47, max_bottom: 55, rgd: 'G'},
        {repetitive_group_id: 98, no_d_id: 8, min_bottom: 56, max_bottom: 63, rgd: 'H'},
        {repetitive_group_id: 99, no_d_id: 8, min_bottom: 64, max_bottom: 72, rgd: 'I'},
        {repetitive_group_id: 100, no_d_id: 8, min_bottom: 73, max_bottom: 82, rgd: 'J'},
        {repetitive_group_id: 101, no_d_id: 8, min_bottom: 83, max_bottom: 92, rgd: 'K'},
        {repetitive_group_id: 102, no_d_id: 8, min_bottom: 93, max_bottom: 102, rgd: 'L'},
        {repetitive_group_id: 103, no_d_id: 8, min_bottom: 103, max_bottom: 114, rgd: 'M'},
        {repetitive_group_id: 104, no_d_id: 8, min_bottom: 115, max_bottom: 125, rgd: 'N'},
        {repetitive_group_id: 105, no_d_id: 9, min_bottom: 0, max_bottom: 9, rgd: 'A'},
        {repetitive_group_id: 106, no_d_id: 9, min_bottom: 10, max_bottom: 15, rgd: 'B'},
        {repetitive_group_id: 107, no_d_id: 9, min_bottom: 16, max_bottom: 21, rgd: 'C'},
        {repetitive_group_id: 108, no_d_id: 9, min_bottom: 22, max_bottom: 28, rgd: 'D'},
        {repetitive_group_id: 109, no_d_id: 9, min_bottom: 29, max_bottom: 34, rgd: 'E'},
        {repetitive_group_id: 110, no_d_id: 9, min_bottom: 35, max_bottom: 41, rgd: 'F'},
        {repetitive_group_id: 111, no_d_id: 9, min_bottom: 42, max_bottom: 48, rgd: 'G'},
        {repetitive_group_id: 112, no_d_id: 9, min_bottom: 49, max_bottom: 56, rgd: 'H'},
        {repetitive_group_id: 113, no_d_id: 9, min_bottom: 57, max_bottom: 63, rgd: 'I'},
        {repetitive_group_id: 114, no_d_id: 9, min_bottom: 64, max_bottom: 71, rgd: 'J'},
        {repetitive_group_id: 115, no_d_id: 9, min_bottom: 72, max_bottom: 80, rgd: 'K'},
        {repetitive_group_id: 116, no_d_id: 9, min_bottom: 81, max_bottom: 89, rgd: 'L'},
        {repetitive_group_id: 117, no_d_id: 9, min_bottom: 90, max_bottom: 92, rgd: 'M'},
        {repetitive_group_id: 118, no_d_id: 10, min_bottom: 0, max_bottom: 8, rgd: 'A'},
        {repetitive_group_id: 119, no_d_id: 10, min_bottom: 9, max_bottom: 14, rgd: 'B'},
        {repetitive_group_id: 120, no_d_id: 10, min_bottom: 15, max_bottom: 19, rgd: 'C'},
        {repetitive_group_id: 121, no_d_id: 10, min_bottom: 20, max_bottom: 25, rgd: 'D'},
        {repetitive_group_id: 122, no_d_id: 10, min_bottom: 26, max_bottom: 31, rgd: 'E'},
        {repetitive_group_id: 123, no_d_id: 10, min_bottom: 32, max_bottom: 37, rgd: 'F'},
        {repetitive_group_id: 124, no_d_id: 10, min_bottom: 38, max_bottom: 43, rgd: 'G'},
        {repetitive_group_id: 125, no_d_id: 10, min_bottom: 44, max_bottom: 50, rgd: 'H'},
        {repetitive_group_id: 126, no_d_id: 10, min_bottom: 51, max_bottom: 56, rgd: 'I'},
        {repetitive_group_id: 127, no_d_id: 10, min_bottom: 57, max_bottom: 63, rgd: 'J'},
        {repetitive_group_id: 128, no_d_id: 10, min_bottom: 64, max_bottom: 71, rgd: 'K'},
        {repetitive_group_id: 129, no_d_id: 10, min_bottom: 72, max_bottom: 74, rgd: 'L'},
        {repetitive_group_id: 130, no_d_id: 11, min_bottom: 0, max_bottom: 7, rgd: 'A'},
        {repetitive_group_id: 131, no_d_id: 11, min_bottom: 8, max_bottom: 12, rgd: 'B'},
        {repetitive_group_id: 132, no_d_id: 11, min_bottom: 13, max_bottom: 17, rgd: 'C'},
        {repetitive_group_id: 133, no_d_id: 11, min_bottom: 18, max_bottom: 22, rgd: 'D'},
        {repetitive_group_id: 134, no_d_id: 11, min_bottom: 23, max_bottom: 28, rgd: 'E'},
        {repetitive_group_id: 135, no_d_id: 11, min_bottom: 29, max_bottom: 33, rgd: 'F'},
        {repetitive_group_id: 136, no_d_id: 11, min_bottom: 34, max_bottom: 39, rgd: 'G'},
        {repetitive_group_id: 137, no_d_id: 11, min_bottom: 40, max_bottom: 45, rgd: 'H'},
        {repetitive_group_id: 138, no_d_id: 11, min_bottom: 46, max_bottom: 51, rgd: 'I'},
        {repetitive_group_id: 139, no_d_id: 11, min_bottom: 52, max_bottom: 57, rgd: 'J'},
        {repetitive_group_id: 140, no_d_id: 11, min_bottom: 58, max_bottom: 63, rgd: 'K'},
        {repetitive_group_id: 141, no_d_id: 12, min_bottom: 0, max_bottom: 6, rgd: 'A'},
        {repetitive_group_id: 142, no_d_id: 12, min_bottom: 7, max_bottom: 10, rgd: 'B'},
        {repetitive_group_id: 143, no_d_id: 12, min_bottom: 11, max_bottom: 14, rgd: 'C'},
        {repetitive_group_id: 144, no_d_id: 12, min_bottom: 15, max_bottom: 19, rgd: 'D'},
        {repetitive_group_id: 145, no_d_id: 12, min_bottom: 20, max_bottom: 23, rgd: 'E'},
        {repetitive_group_id: 146, no_d_id: 12, min_bottom: 24, max_bottom: 28, rgd: 'F'},
        {repetitive_group_id: 147, no_d_id: 12, min_bottom: 29, max_bottom: 32, rgd: 'G'},
        {repetitive_group_id: 148, no_d_id: 12, min_bottom: 33, max_bottom: 37, rgd: 'H'},
        {repetitive_group_id: 149, no_d_id: 12, min_bottom: 38, max_bottom: 42, rgd: 'I'},
        {repetitive_group_id: 150, no_d_id: 12, min_bottom: 43, max_bottom: 47, rgd: 'J'},
        {repetitive_group_id: 151, no_d_id: 12, min_bottom: 48, max_bottom: 48, rgd: 'K'},
        {repetitive_group_id: 152, no_d_id: 13, min_bottom: 0, max_bottom: 5, rgd: 'A'},
        {repetitive_group_id: 153, no_d_id: 13, min_bottom: 6, max_bottom: 9, rgd: 'B'},
        {repetitive_group_id: 154, no_d_id: 13, min_bottom: 10, max_bottom: 12, rgd: 'C'},
        {repetitive_group_id: 155, no_d_id: 13, min_bottom: 13, max_bottom: 16, rgd: 'D'},
        {repetitive_group_id: 156, no_d_id: 13, min_bottom: 17, max_bottom: 20, rgd: 'E'},
        {repetitive_group_id: 157, no_d_id: 13, min_bottom: 21, max_bottom: 24, rgd: 'F'},
        {repetitive_group_id: 158, no_d_id: 13, min_bottom: 25, max_bottom: 28, rgd: 'G'},
        {repetitive_group_id: 159, no_d_id: 13, min_bottom: 29, max_bottom: 32, rgd: 'H'},
        {repetitive_group_id: 160, no_d_id: 13, min_bottom: 33, max_bottom: 36, rgd: 'I'},
        {repetitive_group_id: 161, no_d_id: 13, min_bottom: 37, max_bottom: 39, rgd: 'J'},
        {repetitive_group_id: 162, no_d_id: 14, min_bottom: 0, max_bottom: 4, rgd: 'A'},
        {repetitive_group_id: 163, no_d_id: 14, min_bottom: 5, max_bottom: 7, rgd: 'B'},
        {repetitive_group_id: 164, no_d_id: 14, min_bottom: 8, max_bottom: 11, rgd: 'C'},
        {repetitive_group_id: 165, no_d_id: 14, min_bottom: 12, max_bottom: 14, rgd: 'D'},
        {repetitive_group_id: 166, no_d_id: 14, min_bottom: 15, max_bottom: 17, rgd: 'E'},
        {repetitive_group_id: 167, no_d_id: 14, min_bottom: 18, max_bottom: 21, rgd: 'F'},
        {repetitive_group_id: 168, no_d_id: 14, min_bottom: 22, max_bottom: 24, rgd: 'G'},
        {repetitive_group_id: 169, no_d_id: 14, min_bottom: 25, max_bottom: 28, rgd: 'H'},
        {repetitive_group_id: 170, no_d_id: 14, min_bottom: 29, max_bottom: 31, rgd: 'I'},
        {repetitive_group_id: 171, no_d_id: 14, min_bottom: 32, max_bottom: 33, rgd: 'J'},
        {repetitive_group_id: 172, no_d_id: 15, min_bottom: 0, max_bottom: 4, rgd: 'A'},
        {repetitive_group_id: 173, no_d_id: 15, min_bottom: 5, max_bottom: 6, rgd: 'B'},
        {repetitive_group_id: 174, no_d_id: 15, min_bottom: 7, max_bottom: 9, rgd: 'C'},
        {repetitive_group_id: 175, no_d_id: 15, min_bottom: 10, max_bottom: 12, rgd: 'D'},
        {repetitive_group_id: 176, no_d_id: 15, min_bottom: 13, max_bottom: 15, rgd: 'E'},
        {repetitive_group_id: 177, no_d_id: 15, min_bottom: 16, max_bottom: 18, rgd: 'F'},
        {repetitive_group_id: 178, no_d_id: 15, min_bottom: 19, max_bottom: 21, rgd: 'G'},
        {repetitive_group_id: 179, no_d_id: 15, min_bottom: 22, max_bottom: 25, rgd: 'H'},
        {repetitive_group_id: 180, no_d_id: 16, min_bottom: 0, max_bottom: 3, rgd: 'A'},
        {repetitive_group_id: 181, no_d_id: 16, min_bottom: 4, max_bottom: 6, rgd: 'B'},
        {repetitive_group_id: 182, no_d_id: 16, min_bottom: 7, max_bottom: 8, rgd: 'C'},
        {repetitive_group_id: 183, no_d_id: 16, min_bottom: 9, max_bottom: 11, rgd: 'D'},
        {repetitive_group_id: 184, no_d_id: 16, min_bottom: 12, max_bottom: 14, rgd: 'E'},
        {repetitive_group_id: 185, no_d_id: 16, min_bottom: 15, max_bottom: 16, rgd: 'F'},
        {repetitive_group_id: 186, no_d_id: 16, min_bottom: 17, max_bottom: 19, rgd: 'G'},
        {repetitive_group_id: 187, no_d_id: 16, min_bottom: 20, max_bottom: 20, rgd: 'H'},
        {repetitive_group_id: 188, no_d_id: 17, min_bottom: 0, max_bottom: 3, rgd: 'A'},
        {repetitive_group_id: 189, no_d_id: 17, min_bottom: 4, max_bottom: 5, rgd: 'B'},
        {repetitive_group_id: 190, no_d_id: 17, min_bottom: 6, max_bottom: 7, rgd: 'C'},
        {repetitive_group_id: 191, no_d_id: 17, min_bottom: 8, max_bottom: 10, rgd: 'D'},
        {repetitive_group_id: 192, no_d_id: 17, min_bottom: 11, max_bottom: 12, rgd: 'E'},
        {repetitive_group_id: 193, no_d_id: 17, min_bottom: 13, max_bottom: 15, rgd: 'F'},
        {repetitive_group_id: 194, no_d_id: 18, min_bottom: 0, max_bottom: 2, rgd: 'A'},
        {repetitive_group_id: 195, no_d_id: 18, min_bottom: 3, max_bottom: 4, rgd: 'B'},
        {repetitive_group_id: 196, no_d_id: 18, min_bottom: 5, max_bottom: 6, rgd: 'C'},
        {repetitive_group_id: 197, no_d_id: 18, min_bottom: 7, max_bottom: 9, rgd: 'D'},
        {repetitive_group_id: 198, no_d_id: 18, min_bottom: 10, max_bottom: 11, rgd: 'E'},
        {repetitive_group_id: 199, no_d_id: 18, min_bottom: 11, max_bottom: 12, rgd: 'F'},
        {repetitive_group_id: 200, no_d_id: 19, min_bottom: 0, max_bottom: 2, rgd: 'A'},
        {repetitive_group_id: 201, no_d_id: 19, min_bottom: 3, max_bottom: 4, rgd: 'B'},
        {repetitive_group_id: 202, no_d_id: 19, min_bottom: 5, max_bottom: 6, rgd: 'C'},
        {repetitive_group_id: 203, no_d_id: 19, min_bottom: 7, max_bottom: 8, rgd: 'D'},
        {repetitive_group_id: 204, no_d_id: 19, min_bottom: 9, max_bottom: 10, rgd: 'E'},
        {repetitive_group_id: 206, no_d_id: 20, min_bottom: 0, max_bottom: 3, rgd: 'B'},
        {repetitive_group_id: 207, no_d_id: 20, min_bottom: 4, max_bottom: 5, rgd: 'C'},
        {repetitive_group_id: 208, no_d_id: 20, min_bottom: 6, max_bottom: 7, rgd: 'D'},
        {repetitive_group_id: 209, no_d_id: 20, min_bottom: 8, max_bottom: 8, rgd: 'E'},
        {repetitive_group_id: 210, no_d_id: 21, min_bottom: 0, max_bottom: 3, rgd: 'B'},
        {repetitive_group_id: 211, no_d_id: 21, min_bottom: 4, max_bottom: 5, rgd: 'C'},
        {repetitive_group_id: 212, no_d_id: 21, min_bottom: 6, max_bottom: 6, rgd: 'D'},
        {repetitive_group_id: 213, no_d_id: 21, min_bottom: 7, max_bottom: 7, rgd: 'E'},
        {repetitive_group_id: 214, no_d_id: 22, min_bottom: 0, max_bottom: 4, rgd: 'C'},
        {repetitive_group_id: 215, no_d_id: 22, min_bottom: 5, max_bottom: 6, rgd: 'D'},
        {repetitive_group_id: 216, no_d_id: 23, min_bottom: 0, max_bottom: 4, rgd: 'C'},
        {repetitive_group_id: 217, no_d_id: 23, min_bottom: 5, max_bottom: 5, rgd: 'D'},
        {repetitive_group_id: 218, no_d_id: 23, min_bottom: 6, max_bottom: 6, rgd: 'E'},
        {repetitive_group_id: 219, no_d_id: 24, min_bottom: 0, max_bottom: 3, rgd: 'C'},
        {repetitive_group_id: 220, no_d_id: 24, min_bottom: 4, max_bottom: 5, rgd: 'D'},
      ]);
    });
};
