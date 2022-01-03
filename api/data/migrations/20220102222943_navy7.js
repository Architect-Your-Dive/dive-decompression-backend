
exports.up = async function(knex) {
    await knex.schema
        .createTable('no_decompression_limit', tbl => {
            tbl.increments('no_decompression_limit_id')
            tbl.integer('min_depth')
                .notNullable()
            tbl.integer('max_depth')
                .notNullable()
            tbl.string('no_stop_limit')
                .notNullable()
        })
        .createTable('repetitive_group_designation', tbl => {
            tbl.increments('repetitive_group_id')
            tbl.integer('no_d_id')
                .notNullable()
                .references('no_decompression_limit_id')
                .inTable('no_decompression_limit')
            tbl.integer('min_bottom')
                .notNullable()
            tbl.specificType('max_bottom', 'numeric')
            tbl.string('rgd')
                .notNullable()
        })
        .createTable('required_surface_interval', tbl => {
            tbl.increments('surface_int_id')
            tbl.string('rgd')
                .notNullable()
            tbl.integer('min_altitude')
                .notNullable()
            tbl.integer('max_altitude')
                .notNullable()
            tbl.integer('time_required')
                .notNullable()
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('required_surface_interval')
        .dropTableIfExists('repetitive_group_designation')
        .dropTableIfExists('no_decompression_limit')
};
