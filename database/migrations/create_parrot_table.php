<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParrotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parrot', function (Blueprint $table) {
            $table->id();
            $table->foreign('id_person')
                    ->references('id')
                    ->on('person')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
            $table->string('parrot_name');
            $table->bigInteger('parrot_age');
            $table->date('birthdate');
            $table->foreign('id_parrot_gender')
                    ->references('id')
                    ->on('parrot_gender')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
            $table->foreign('id_parrot_species')
                    ->references('id')
                    ->on('parrot_species')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
            $table->foreign('id_parrot_subspecies')
                    ->references('id')
                    ->on('parrot_subspecies')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
            $table->foreign('id_parrot_legislation')
                    ->references('id')
                    ->on('parrot_legislation')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
            $table->unsignedBigInteger('id_parrot_temper');
            $table->foreign('id_parrot_temper')
                        ->references('id')
                        ->on('parrot_temper')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');
            $table->unsignedBigInteger('id_parrot');
            $table->foreign('id_parrot')
                    ->references('id')
                    ->on('parrot')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
            $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parrot');
    }
}
